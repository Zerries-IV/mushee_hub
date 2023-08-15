const TestMushee = artifacts.require("TestMushee");
// const Faucet = artifacts.require("Faucet");

module.exports = async function (deployer) {
  await deployer.deploy(TestMushee);
    // await deployer.deploy(Faucet, '0x3255106D0f9cDEF1204054EC51884E924C28dF4b');
};

