const main = async () => {
  getNamedAccounts,
  deployments
}) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  let linkTokenAddress
  let vrfCoordinatorAddress


  linkTokenAddress = '0x326C977E6efc84E512bB9C30f76E30c160eD06FB'
  vrfCoordinatorAddress = '0x8C7382F9D8f56b33781fE506E897a4F1e2d17255'
 
  const keyHash = '0x6e75b569a01ef56d18cab6a8e71e6600d6ce853834d4a5748b720d06f878b3a4'
  const fee = '100000000000000'
  let args = [vrfCoordinatorAddress, linkTokenAddress, keyHash, fee]
  log('--------------------------------------------------------')
  const randomNumber = await deploy('RandomNumberConsumer', {
    from: deployer,
    args,
    log: true
  })
  log('Random number consumer deployed!')
  log(`Your network name is ${networkName} and contract address is ${randomNumber.address} with arguments: ${args}`)

  // fund with Link
  const linkTokenContract = await ethers.getContractFactory('LinkToken')
  const accounts = await hre.ethers.getSigners()
  const signer = accounts[0]
  const linkToken = new ethers.Contract(linkTokenAddress, linkTokenContract.interface, signer)
  let fund_tx = await linkToken.transfer(RandomNumberConsumer.address, fundAmount)
  await fund_tx.wait(1)
  
  // call a random number
  const RandomNumberContract = await ethers.getContractFactory('RandomNumberConsumer')
  const randomNumberConsumer = new ethers.Contract(RandomNumberConsumer.address, RandomNumberContract.interface, signer)
  let creation_tx = await randomNumberConsumer.create({ gasLimit: 3000000 })
  let receipt = await creation_tx.wait(1)
  let tokenId = receipt.events[3].topics[2]
  log(`You've made your NFT! Token number ${tokenId.toString()}`)
  log(`Let's wait for the Chainlink node to respond....`)

}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();