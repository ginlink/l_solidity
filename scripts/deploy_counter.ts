import _ from "@nomiclabs/hardhat-ethers"
import { Contract } from "ethers"
import { ethers } from "hardhat"

async function deploy() {
  const CT = await ethers.getContractFactory("Counter")
  const counter = await CT.deploy()
  await counter.deployed()

  return counter
}

async function count(counter: Contract) {
  console.log("[address]:", counter.address)
  console.log("[counter]:", await counter.count())
}

deploy().then(count)
