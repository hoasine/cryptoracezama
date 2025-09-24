// ✅ Test FHE ABI và Contract Interaction
import { ethers } from "ethers";

// ✅ Standard ABI from compiled contract
const CRYPTO_RACE_ABI = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "DailyGmCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "GmTokensBought",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "result",
        type: "string",
      },
    ],
    name: "RaceCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "RacePurchased",
    type: "event",
  },
  {
    inputs: [],
    name: "DAILY_GM_RESET_HOUR",
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
  {
    inputs: [],
    name: "GM_TOKEN_RATE",
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
  {
    inputs: [],
    name: "SECONDS_PER_DAY",
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
  {
    inputs: [],
    name: "RACE_PRICE",
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
  {
    inputs: [
      {
        internalType: "externalEuint64",
        name: "encryptedAmount",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
    ],
    name: "buyGmTokens",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "externalEuint64",
        name: "encryptedAmount",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
    ],
    name: "buyRaces",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "canGmToday",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "externalEuint64",
        name: "encryptedGmValue",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "proof",
        type: "bytes",
      },
    ],
    name: "dailyGm",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emergencyWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getContractBalance",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getLastGmTime",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getTimeUntilNextGm",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserRewards",
    outputs: [
      {
        internalType: "euint64",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserRaces",
    outputs: [
      {
        internalType: "euint64",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "race",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRewards",
    outputs: [
      {
        internalType: "euint64",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "userRaces",
    outputs: [
      {
        internalType: "euint64",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

// ✅ Test function
export const testFheAbi = async () => {
  try {
    console.log("🔍 Testing FHE ABI...");

    // ✅ Test ABI parsing
    const contractInterface = new ethers.Interface(CRYPTO_RACE_ABI);
    console.log("✅ ABI parsed successfully");

    // ✅ Test function signatures
    const functions = contractInterface.fragments.filter((f) => f.type === "function");
    console.log("📋 Functions found:", functions.length);

    // ✅ Test specific functions
    const buyGmTokensFragment = contractInterface.getFunction("buyGmTokens");
    if (buyGmTokensFragment) {
      console.log("✅ buyGmTokens function:", {
        name: buyGmTokensFragment.name,
        inputs: buyGmTokensFragment.inputs.map((i) => ({ name: i.name, type: i.type })),
        outputs: buyGmTokensFragment.outputs.map((o) => ({ name: o.name, type: o.type })),
      });
    }

    const dailyGmFragment = contractInterface.getFunction("dailyGm");
    if (dailyGmFragment) {
      console.log("✅ dailyGm function:", {
        name: dailyGmFragment.name,
        inputs: dailyGmFragment.inputs.map((i) => ({ name: i.name, type: i.type })),
        outputs: dailyGmFragment.outputs.map((o) => ({ name: o.name, type: o.type })),
      });
    }

    const getUserRacesFragment = contractInterface.getFunction("getUserRaces");
    if (getUserRacesFragment) {
      console.log("✅ getUserRaces function:", {
        name: getUserRacesFragment.name,
        inputs: getUserRacesFragment.inputs.map((i) => ({ name: i.name, type: i.type })),
        outputs: getUserRacesFragment.outputs.map((o) => ({ name: o.name, type: o.type })),
      });
    }

    // ✅ Test events
    const events = contractInterface.fragments.filter((f) => f.type === "event");
    console.log("📋 Events found:", events.length);

    const raceCompletedEvent = contractInterface.getEvent("RaceCompleted");
    if (raceCompletedEvent) {
      console.log("✅ RaceCompleted event:", {
        name: raceCompletedEvent.name,
        inputs: raceCompletedEvent.inputs.map((i) => ({ name: i.name, type: i.type, indexed: i.indexed })),
      });
    }

    console.log("🎯 FHE ABI test completed successfully!");
    return true;
  } catch (error) {
    console.error("❌ FHE ABI test failed:", error);
    return false;
  }
};

// ✅ Export ABI for use in other files
export { CRYPTO_RACE_ABI };
