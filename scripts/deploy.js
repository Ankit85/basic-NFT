// Import ethers from Hardhat package


async function main() {
  /*
A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
so nftContract here is a factory for instances of our GameItem contract.
*/
  const nftContract = await hre.ethers.getContractFactory("FalconNFT");

  // here we deploy the contract
  const deployedNFTContract = await nftContract.deploy();

  // print the address of the deployed contract
  await deployedNFTContract.deployed();
  console.log("NFT Contract Address:", deployedNFTContract.address);
}


main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });