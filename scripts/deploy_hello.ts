import _ from "@nomiclabs/hardhat-ethers"
import { Contract } from "ethers"
import { ethers } from "hardhat"

async function deploy() {
  const HW = await ethers.getContractFactory("HelloWorld")
  const hello = await HW.deploy()
  await hello.deployed()

  return hello
}

async function sayHello(hello: Contract) {
  console.log("[address]:", hello.address)
  console.log("[]:", await hello.hello())
}

deploy().then(sayHello)
