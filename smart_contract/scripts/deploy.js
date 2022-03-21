const main = async () => {
  const TransactionsFactory = await hre.ethers.getContractFactory(
    "Transactions"
  );
  const transactionsContract = await TransactionsFactory.deploy();

  await transactionsContract.deployed();

  console.log("Transacrions deployed to:", transactionsContract.address);
};
const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (erorr) {
    console.error(erorr);
    process.exit(1);
  }
};

runMain();
