const Mejorpostor = artifacts.require("Mejorpostor");

module.exports = function(_deployer) {
  _deployer.deploy(Mejorpostor);
};