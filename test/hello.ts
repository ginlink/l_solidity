import _ from "@nomiclabs/hardhat-ethers"
import { expect } from "chai"
import { ethers } from "hardhat"

describe("Hello World", () => {
  it("should get the hello world", async () => {
    const HW = await ethers.getContractFactory("HelloWorld")
    const hello = await HW.deploy()

    expect(await hello.hello()).to.equal("Hello world!")
  })
})
