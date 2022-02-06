const main = async () => {
    const nftContractFactory = await hre.ethers.getContractFactory('MyNFT');
    const nftContract = await nftContractFactory.deploy();
    await nftContract.deployed();
    console.log("Contract deployed to:", nftContract.address);
    let param = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 375 375" style="enable-background:new 0 0 375 375" xml:space="preserve"><style>.st1{fill-rule:evenodd;clip-rule:evenodd}</style><g class="stick-person"><defs><path id="SVGID_1_" d="M121.9 123h131.2v195.8H121.9z"/></defs><clipPath id="SVGID_00000083071382484072793570000014903046463196525706_"><use xlink:href="#SVGID_1_" style="overflow:visible"/></clipPath><path class="st1" d="M171.3 123.6 121.9 175l10.3 10.3 39.2-41.6.5 70L138 318s22 .6 22.5-.4c.2-.5 24.5-96.6 25.5-98l27.4 98h21.1l-33.8-103.4.5-70.5 40.2 40.7 11.8-9.8-50.9-50.9-31-.1z" style="clip-path:url(#SVGID_00000083071382484072793570000014903046463196525706_)"/><g><defs><path id="SVGID_00000072995254797605960400000007781732642102793128_" d="M151 56.2h71V119h-71z"/></defs><clipPath id="SVGID_00000069399393737768954180000003360181775912101774_"><use xlink:href="#SVGID_00000072995254797605960400000007781732642102793128_" style="overflow:visible"/></clipPath><path class="st1" d="M186.5 56.5c-46 1-45.6 61.2-1.5 61.7 47.6 0 49-61.2 1.5-61.7z" style="clip-path:url(#SVGID_00000069399393737768954180000003360181775912101774_)"/></g></g></svg>';
    let txn = await nftContract.makeNFT(param);
    await txn.wait()
    console.log("Minted NFT #1")

  };
  
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