// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

// Import the openzepplin contracts
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract FalconNFT is  ERC721 {

    constructor() ERC721("Falcon","F_NFT"){
        _mint(msg.sender,1);
    }

}