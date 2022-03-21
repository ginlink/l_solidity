import { ethers } from "ethers"

// const abi = ["function hello() public pure returns(string memory)"]
const abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "counter",
        type: "uint256",
      },
    ],
    name: "CounterInc",
    type: "event",
  },
  {
    inputs: [],
    name: "count",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
]

async function getCounter(counter: ethers.Contract) {
  return await counter.getCounter()
}

async function count(counter: ethers.Contract) {
  await counter.count()
}

async function getContract() {
  const address = process.env.CONTRACT_ADDRESS

  console.log("[address]:", address)

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const contract = new ethers.Contract(address, abi, provider.getSigner())

  const view = document.createElement("div")
  const button = document.createElement("button")

  view.innerText = await getCounter(contract)
  button.innerText = "count"
  button.onclick = () => {
    count(contract)
  }

  contract.on("CounterInc", async (counter) => {
    console.log("[counter111]:", counter)

    view.innerText = await getCounter(contract)
  })

  document.body.appendChild(view)
  document.body.appendChild(button)
}

getContract()
