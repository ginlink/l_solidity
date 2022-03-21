// SPDX-License-Identifier: Unlicense
import "hardhat/console.sol";

pragma solidity ^0.8.0;

contract Counter {
    uint256 private counter;

    event CounterInc(uint256 counter);

    function count() public {
        counter++;
        console.log("counter", counter);

        emit CounterInc(counter);
    }

    function getCounter() public view returns (uint256) {
        return counter;
    }
}
