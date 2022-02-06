const { hexStripZeros } = require("ethers/lib/utils")
const { ethers } = require("hardhat")

module.exports = async ({
  getNamedAccounts,
  deployments,
  getChainId
}) => {
  const { deploy, log } = deployments
  const { deployer } = await getNamedAccounts()
  const chainID = await getChainId()
  let linkTokenAddress
  let vrfCoordinatorAddress

  if (chainID === 31337) {
    log('Local Network Detected. Depolying Mocks...')
    const LinkToken = await deploy('LinkToken', { from: deployer, log: true })
    linkTokenAddress = LinkToken.address
    const VRFCoordinatorMock = await deploy('VRFCoordinatorMock', {
      from: deployer,
      log: true,
      args: [LinkToken.address]
    })
    log('Mocks deployed!')
    vrfCoordinatorAddress = VRFCoordinatorMock.address
  } else {
    linkTokenAddress = networkConfig[chainId]['linkToken']
    vrfCoordinatorAddress = networkConfig[chainId]['vrfCoordinator']
  }
  const keyHash = networkConfig[chainId]['keyHash']
  const fee = networkConfig[chainId]['fee']
  let args = [vrfCoordinatorAddress, linkTokenAddress, keyHash, fee]
  log('--------------------------------------------------------')
  const RandomSVG = await deploy('RandomSVG', {
    from: deployer,
    args,
    log: true
  })
  log('Random number consumer deployed!')
  log(`Your network name is ${networkName} and contract address is ${RandomSVG.address} with arguments: ${args}`)

  // fund with Link
  const linkTokenContract = await ethers.getContractFactory('LinkToken')
  const accounts = await hre.ethers.getSigners()
  const signer = account[0]
  const linkToken = new ethers.Contract(linkTokenAddres, linkTokenContract.interface, signer)
  let fund_tx = await linkToken.transfer(RandomSVG.address, fundAmount)
  await fund_tx.wait(1)
  
  // call a random number
  const RandomNumberContract = await ethers.getContractFactory('RandomNumberConsumer')
  const randomNumber = new ethers.Contract(RandomNumberConsumer.address, RandomNumberContract.interface, signer)
  let creation_tx = await randomNumber.create({ gasLimit: 3000000 })
  let receipt = await creation_tx.wait(1)
  let tokenId = receipt.events[3].topics[2]
  log(`You've made your NFT! Token number ${tokenId.toString()}`)
  log(`Let's wait for the Chainlink node to respond....`)
  if (chainId != 31337) {
    await new Promise(r => setTimeout(r, 180000))
    log(`Now let's finish the mint...`)
    let finish_tx = await randomNumber.finishMint(tokenId, { gasLimit: 2000000 })
    await finish_tx.wait(1)
    log(`You can view the tokenURI here ${await randomNumber.tokenURI(tokenId)}`)
  } else {
    const VRFCoordinatorMock = await deployments.get('VRFCoordinatorMock')
    vrfCoordinator = await ethers.getContractAt('VRFCoordinatorMock', VRFCoordinatorMock.address, signer)
    let vrf_tx = await vrfCoordinator.callBackWithRandomness(receipt.logs[3].topics[1], 77777, randomNumber.address)
    await vrf_tx.wait(1)
    log(`Now let's finish the mint...`)
    let finish_tx = await randomNumber.finishMint(tokenId, { gasLimit: 2000000 })
    await finish_tx.wait(1)
  }
}
module.exports.tags = ['all', 'rsvg', 'svg']