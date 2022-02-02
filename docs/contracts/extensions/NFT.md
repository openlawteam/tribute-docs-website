---
id: nft-extension
title: NFT
---

An [IERC721Receiver](https://docs.openzeppelin.com/contracts/3.x/api/token/erc721#IERC721Receiver) contract safely manages the collection of standard NFTs (ERC721) collected by the DAO.

The extension adds to the DAO the capability of managing and curating a collection of standard NFTs. Applicants can join the DAO offering NFTs as tributes, and if their proposal is approved their tributes get stored in the guild NFT collection - which supports tokens in ERC721 standard.

In order to join the DAO using a NFT as tribute, the DAO must have the **[TributeNFT Adapter](/docs/contracts/adapters/onboarding/tribute-nft-adapter)** pre-configured with the correct access flags.

## Access Flags

- `COLLECT_NFT`: Allows the caller adapter to transfer the NFT to the GUILD collection.
- `WITHDRAW_NFT`: Allows the caller to remove the NFT from the GUILD collection and return it to a new owner.
- `INTERNAL_TRANSFER`: Allows the caller to update the internal ownership of the NFT within the GUILD collection.

## Storage

#### public initialized

Internally tracks deployment under eip-1167 proxy pattern.

#### public dao

Keeps track of each DAO instance the current contract belongs to.

#### private \_nfts

Tracks all the Token IDs that belong to an NFT address stored in the GUILD collection.

#### private \_ownership

Tracks the internal owner of record of an NFT that has been transferred to the extension.

#### private \_nftAddresses

Tracks all the NFTs addresses collected and stored in the GUILD collection.

## Functions

### initialize

```solidity
/**
  * @notice Initializes the extension with the DAO address that it belongs to.
  * @param _dao The address of the DAO that owns the extension.
  * @param creator The owner of the DAO and Extension that is also a member of the DAO.
  */
function initialize(DaoRegistry _dao, address creator) external
```

### collect

```solitidy
/**
  * @notice Collects the NFT from the owner and moves it to the NFT extension.
  * @notice It must be have been allowed to move this token by either {approve} or {setApprovalForAll}.
  * @notice The caller must have the ACL Flag: COLLECT_NFT
  * @dev Reverts if the NFT is not in ERC721 standard.
  * @param nftAddr The NFT contract address.
  * @param nftTokenId The NFT token id.
  */
function collect(
    address nftAddr,
    uint256 nftTokenId
) external
```

### withdrawNFT

```solidity
/**
  * @notice Ttransfers the NFT token from the extension address to the new owner.
  * @notice It also updates the internal state to keep track of the all the NFTs collected by the extension.
  * @notice The caller must have the ACL Flag: WITHDRAW_NFT
  * @dev Reverts if the NFT is not in ERC721 standard.
  * @param newOwner The address of the new owner.
  * @param nftAddr The NFT address that must be in ERC721 standard.
  * @param nftTokenId The NFT token id.
  */
function withdrawNFT(
    address newOwner,
    address nftAddr,
    uint256 nftTokenId
) public hasExtensionAccess(this, AclFlag.WITHDRAW_NFT)
```

### internalTransfer

```solidity
/**
  * @notice Updates internally the ownership of the NFT.
  * @notice The caller must have the ACL Flag: INTERNAL_TRANSFER
  * @dev Reverts if the NFT is not already internally owned in the extension.
  * @param nftAddr The NFT address.
  * @param nftTokenId The NFT token id.
  * @param newOwner The address of the new owner.
  */
function transferFrom(
    address escrowAddr,
    address nftAddr,
    address newOwner
) public hasExtensionAccess(this, AclFlag.INTERNAL_TRANSFER)
```

### getNFTId

```solidity
/**
  * @notice Gets ID generated from an NFT address and token id (used internally to map ownership).
  * @param nftAddress The NFT address.
  * @param tokenId The NFT token id.
  */
function getNFTId(address nftAddress, uint256 tokenId)
    public
    pure
    returns (bytes32)
```

### nbNFTs

```solidity
/**
  * @notice Returns the total amount of token ids collected for an NFT address.
  */
function nbNFTs(address tokenAddr) public view returns (uint256)
```

### getNFT

```solidity
/**
  * @notice Returns token id associated with an NFT address stored in the GUILD collection at the specified index.
  * @param tokenAddr The NFT address.
  * @param index The index to get the token id if it exists.
  */
function getNFT(address tokenAddr, uint256 index)
    public
    view
    returns (uint256)
```

### nbNFTAddresses

```solidity
/**
  * @notice Returns the total amount of NFT addresses collected.
  */
function nbNFTAddresses() external view returns (uint256)
```

### getNFTAddress

```solidity
/**
  * @notice Returns NFT address stored in the GUILD collection at the specified index.
  * @param index The index to get the NFT address if it exists.
  */
function getNFTAddress(uint256 index) external view returns (address)
```

### getNFTOwner

```solidity
/**
  * @notice Returns owner of NFT that has been transferred to the extension.
  * @param nftAddress The NFT address.
  * @param tokenId The NFT token id.
  */
function getNFTOwner(address nftAddress, uint256 tokenId)
    public
    view
    returns (address)
```

### onERC721Received

```solidity
/**
  * @notice Required function from IERC721 standard to be able to receive assets to this contract address.
  */
function onERC721Received(
    address,
    address,
    uint256,
    bytes calldata
) external pure override returns (bytes4)
```

### \_saveNft

```solidity
/**
  * @notice Helper function to update the extension states for an NFT collected by the extension.
  * @param nftAddr The NFT address.
  * @param nftTokenId The token id.
  * @param owner The address of the owner.
  */
function _saveNft(
    address nftAddr,
    uint256 nftTokenId,
    address owner
) private
```

## Events

### CollectedNFT

When a NFT is collected/stored into the NFT collection.

- `event CollectedNFT(address nftAddr, uint256 nftTokenId);`

### WithdrawnNFT

When a NFT is transferred from the extension to another owner.

- `event WithdrawnNFT(address nftAddr, uint256 nftTokenId, address toAddress);`

### TransferredNFT

When a NFT is transferred from the escrow adapter to the NFT collection in the extension.

- `event TransferredNFT( address nftAddr, uint256 nftTokenId, address oldOwner, address newOwner );`
