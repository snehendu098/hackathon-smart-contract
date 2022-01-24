const main = async () => {
  const HodlBank = await hre.ethers.getContractFactory("HodlBank");
  const hodlBank = await HodlBank.deploy();

  await hodlBank.deployed();

  console.log("Greeter deployed to:", hodlBank.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

runMain();
