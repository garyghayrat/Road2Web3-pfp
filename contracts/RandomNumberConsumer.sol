// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@chainlink/contracts/src/v0.8/VRFConsumerBase.sol";

 
contract RandomNumberConsumer is ERC721URIStorage, VRFConsumerBase, Ownable {
  bytes32 public keyHash;
  uint256 public fee;
  uint256 public tokenCounter;
  mapping(bytes32 => address) public requestIdToSender;
  mapping(bytes32 => uint256) public requestIdToTokenId;
  mapping(uint256 => uint256) public tokenIdToRandomNumber;

  event requestedRandomSvg(bytes32 indexed requestId, uint256 indexed tokenId);
  event createdUnfinishedRandomSVG(uint256 indexed tokenId, uint256 randomNumber);

  constructor (address _VRFCoordinator, address _LinkToken, bytes32 _keyHash, uint256 _fee) 
      VRFConsumerBase(_VRFCoordinator, _LinkToken) 
      ERC721 ("JasNFT", "JAS") {
       fee = _fee;
       keyHash = _keyHash;
       tokenCounter = 0;
    }

    function withdraw() public payable onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }
    
    /** 
     *  2 request process. Part 1: 
     * Requests randomness: looking offchain to get a random number. Request
     * to offchain node. Chainlink will take this request to the VRF Coordinator Contract
     * which is an on chain contract
     * This will call the VRF. 
     * Requests randomness: looking offchain to get a random number. Request
     * to offchain node. Chainlink will take this request to the VRF Coordinator Contract
     * which is an on chain contract
     */
    function create() public returns (bytes32 requestId) {
      requestId = requestRandomness(keyHash, fee);
      requestIdToSender[requestId] = msg.sender;
      uint256 tokenId = tokenCounter;
      requestIdToTokenId[requestId] = tokenId;
      tokenCounter = tokenCounter + 1;
      emit requestedRandomSvg(requestId, tokenId);
    }
    
    /**
     * Part 2: Returns randomness function. 
     */
    function fulfillRandomness (bytes32 requestId, uint256 randomNumber) internal override {
      // generate random svg here
      address nftOwner = requestIdToSender[requestId];
      uint256 tokenId = requestIdToTokenId[requestId];
      _safeMint(nftOwner, tokenId);
      tokenIdToRandomNumber[tokenId] = randomNumber;
      emit createdUnfinishedRandomSVG(tokenId, randomNumber);
    }

    function finishMint (uint256 tokenId) public {

    }

    // function withdrawLink() external {} - Implement a withdraw function to avoid locking your LINK in the contract
}