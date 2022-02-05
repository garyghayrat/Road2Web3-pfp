// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";
import { Base64 } from "./Base64.sol";

contract MyNFT is ERC721URIStorage {
    
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string baseSvg = "<svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='xMinYMin meet' viewBox='0 0 350 350'><style>.base { fill: white; font-family: serif; font-size: 14px; }</style><rect width='100%' height='100%' fill='black' /><text x='50%' y='50%' class='base' dominant-baseline='middle' text-anchor='middle'>";
    
    string[] firstWords = ["Everything But The ", "5 Cheese ", "Dark Chocolate ", "Asian Inspired ", "Crispy, Crunchy ", "Gluten Free ", "Unexpectd ", "A Midsummer Night's ", "Pumpkin Spiced ", "Triple Ginger ", "Candy Cane ", "Double Fried ", "Ube Flavored ", "Chili & Lime Flavored "];
    string[] secondWords = ["Masala ", "Mochi ", "Almond Butter ", "Edamame ", "Whole Grain ", "Brussels Sprout ", "Basmati Rice ", "Caramel Filled ", "Bagel ", "Riced Cauliflower ", "Cold Pressed ", "Maple ", "Mexican Style ", "Mac & Cheese ", "Coconut Oil "];
    string[] thirdWords = ["Nuggets", "Burgers", "Gyoza", "Granola", "Spread", "Kombucha", "Bites", "Seasoning Blend", "Stir Fry", "Pizza Crust", "Salsa", "Hummus", "Bites", "Yogurt", "Winter Ale"];

    event NewNFTMinted(address sender, uint256 tokenId);

    constructor() ERC721 ("JasNFT", "JAS") {
        console.log("This is my NFT contract!");
    }

    function pickRandomFirstWord(uint256 tokenId) public view returns (string memory) {
        uint256 rand = random(string(abi.encodePacked("FIRST_WORD", Strings.toString(tokenId))));
        rand = rand % firstWords.length;
        return firstWords[rand];
    }

    function pickRandomSecondWord(uint256 tokenId) public view returns (string memory) {
        uint256 rand = random(string(abi.encodePacked("SECOND_WORD", Strings.toString(tokenId))));
        rand = rand % secondWords.length;
        return secondWords[rand];
    }

    function pickRandomThirdWord(uint256 tokenId) public view returns (string memory) {
        uint256 rand = random(string(abi.encodePacked("THIRD_WORD", Strings.toString(tokenId))));
        rand = rand % thirdWords.length;
        return thirdWords[rand];
    }

    function random(string memory input) internal pure returns (uint256) {
        return uint256(keccak256(abi.encodePacked(input)));
    }

    function makeNFT() public {

        uint256 newItemId = _tokenIds.current();

        require(newItemId <= 50, "Max amount of NFTs minted.");

        string memory first = pickRandomFirstWord(newItemId);
        string memory second = pickRandomSecondWord(newItemId);
        string memory third = pickRandomThirdWord(newItemId);
        string memory combinedWord = string(abi.encodePacked(first, second, third));

        string memory finalSvg = string(abi.encodePacked(baseSvg, combinedWord, "</text></svg>"));
        
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "',
                        combinedWord,
                        '", "description": "A collection of web3 Trader Joes Products.", "image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(finalSvg)),
                        '"}'
                    )
                )
            )
        );

        string memory finalTokenUri = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
        
        console.log("\n--------------------");
        console.log(finalSvg);
        console.log("--------------------\n");

        _safeMint(msg.sender, newItemId);

        _setTokenURI(newItemId, finalTokenUri);

        _tokenIds.increment();
        console.log("An NFT w ID %s has been minted to %s", newItemId, msg.sender);

        emit NewNFTMinted(msg.sender, newItemId);
    }

}