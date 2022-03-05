// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Mejorpostor is ERC20("Cartman Coin", "CTMC") {
    address public currentOwner;
    uint256 balance;
    address public previousOwner;

    constructor() {
        currentOwner = msg.sender;
        previousOwner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == currentOwner, "You aren't the currrent owner");
        _;
    }

    function sendMoney() public payable {
        balance += msg.value;
    }

    function getBalanceContract() public view returns (uint256) {
        return address(this).balance;
    }

    function getBalance() public view returns (uint256) {
        return balance;
    }

    function postulate() public payable {
        require(msg.value > balance, "Not enought funds");
        uint256 amount = balance;
        balance = msg.value;
        payable(previousOwner).transfer(amount);
        previousOwner = currentOwner;
        currentOwner = msg.sender;
        _mint(previousOwner, 1);
    }
}
