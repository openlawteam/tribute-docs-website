---
id: lend-nft-adapter
title: ERC721/1155 Lending / Staking
---

The Lend NFT adapter allows potential and existing DAO members to stake any ERC-721 and ERC-1155 tokens to the DAO in exchange for any amount of DAO internal tokens (in this case it mints UNITS always). If the proposal passes, the requested internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one) and the ERC-721/1155 asset provided as tribute is transferred to the NFT extension. The tokens are then vested. If the new member takes the NFT back before the vesting period, the tokens are being burnt. The vesting works as follows, all the tokens are in the balance right away (used in voting power) but the member can only transfer the vested amount (ERC-20).

The Lend NFT adapter is similar to the TributeNFT in that both allow for joining the DAO (or increasing a stake in the DAO) through the exchange of contributed assets for DAO internal tokens. The key difference is that the NFT is merely lended, not given to the DAO.

## Workflow

A lending is made by a member first submitting a proposal specifying (1) the applicant who wishes to join the DAO (or increase his stake in the DAO), (2) the amount of internal tokens (UNITS) the applicant desires, and (3) the ERC-721/1155 address and token id of the NFT that will transfer to the DAO in exchange for those internal tokens.

The proposal submission does not actually transfer the ERC-721/1155 token from its owner. That occurs only after the proposal passes and is processed.

The proposal is also sponsored in the same transaction when it is submitted. When a DAO member sponsors the proposal, the voting period begins allowing members to vote for or against the proposal. Only a member can sponsor the proposal.

After the voting period is done along with its subsequent grace period, the proposal can be processed. Any account can process the proposal. In order to process the proposal, the applicant needs to send the NFT directly to the adapter. In addition, the applicant needs to encode a ProcessProposal struct and pass it as data in "safeTransferFrom".

Upon processing, if the vote has passed, the requested internal tokens are minted to the applicant (which effectively makes the applicant a member of the DAO if not already one). The tribute NFT is transferred from the adapter to the NFT extension. The vesting period starts right away.

Upon processing, if the vote has failed (i.e., more NO votes then YES votes or a tie), the NFT is simply sent back.

## Access Flags

### DaoRegistry

- `SUBMIT_PROPOSAL`
- `NEW_MEMBER`

### NFTExtension

- `COLLECT_NFT`
- `WITHDRAW_NFT`

### BankExtension

- `ADD_TO_BALANCE`

## Dependencies

### BankExtension

### NFTExtension

### ERC1155TokenExtension

- `WITHDRAW_NFT`

### DaoRegistry

### Voting

### IERC721

### IERC1155

## Storage

## Structs

### ProposalDetails

- `id`: The proposal id.
- `applicant`: The applicant address (who will receive the DAO internal tokens and become a member; this address may be different than the actual owner of the ERC-721 token being provided as tribute).
- `nftAddr`: The address of the ERC-721 token that will be transferred to the DAO in exchange for DAO internal tokens.
- `nftTokenId`: The NFT token identifier.
- `tributeAmount`: The amount of nftTokenId for ERC1155 tokens, if 0, it is an ERC721.
- `requestAmount`: The amount requested of DAO internal tokens (UNITS).
- `lendingPeriod` : what is the lending period for this proposal (vesting period)
- `sentBack`: was the NFT sent back already ?
- `lendingStart`: when did the lending started (for vesting)
- `previousOwner`: who owned the NFT previously

### ProcessProposal

This struct is used to pass as data when we send the NFT or ERC1155 token to the adapter

- `dao`the dao registry address
- `proposalId` the proposal Id

### proposals

All tribute NFT proposals handled by each DAO.

## Functions

### receive

```solidity
    /**
     * @notice default fallback function to prevent from sending ether to the contract.
     */
    receive() external payable
```

### configureDao

```solidity
    /**
     * @notice Configures the adapter for a particular DAO.
     * @notice Registers the DAO internal token UNITS with the DAO Bank.
     * @dev Only adapters registered to the DAO can execute the function call (or if the DAO is in creation mode).
     * @dev A DAO Bank extension must exist and be configured with proper access for this adapter.
     * @param dao The DAO address.
     */
    function configureDao(DaoRegistry dao) external onlyAdapter(dao)
```

### submitProposal

```solidity
   /**
     * @notice Creates and sponsors a tribute proposal to start the voting process.
     * @dev Applicant address must not be reserved.
     * @dev Only members of the DAO can sponsor a tribute proposal.
     * @param dao The DAO address.
     * @param proposalId The proposal id (managed by the client).
     * @param applicant The applicant address (who will receive the DAO internal tokens and become a member).
     * @param nftAddr The address of the ERC-721 or ERC 1155 token that will be transferred to the DAO in exchange for DAO internal tokens.
     * @param nftTokenId The NFT token id.
     * @param tributeAmount The amount of nftTokenId for ERC1155 tokens, if 0, it is an ERC721
     * @param requestAmount The amount requested of DAO internal tokens (UNITS).
     * @param data Additional information related to the tribute proposal.
     */
    function submitProposal(
        DaoRegistry dao,
        bytes32 proposalId,
        address applicant,
        address nftAddr,
        uint256 nftTokenId,
        uint256 tributeAmount,
        uint256 requestAmount,
        bytes memory data
    ) external reentrancyGuard(dao)
```

### onERC721Received

```solidity
function onERC721Received(
        address operator,
        address from,
        uint256 tokenId,
        bytes calldata data
    )
```

This function is called by the ERC-721 smart contract after an NFT has been transfered to the adapter. It is used to process the proposal.
in data, you need to pass the encoded version of the struct ProcessProposal

### onERC1155Received

```solidity
function onERC1155Received(
        address operator,
        address from,
        uint256 tokenId,
        uint256 value,
        bytes calldata data
    )
```

This function is called by the ERC-1155 smart contract after an NFT has been transfered to the adapter. It is used to process the proposal.
in data, you need to pass the encoded version of the struct ProcessProposal

## Events

- No events are emitted.
