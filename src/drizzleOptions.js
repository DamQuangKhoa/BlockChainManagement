import ComplexStorage from "./../build/contracts/ComplexStorage.json";
import SimpleStorage from "./../build/contracts/SimpleStorage.json";
import TutorialToken from "./../build/contracts/TutorialToken.json";
import DeveloperFactory from "./../build/contracts/DeveloperFactory.json";

const drizzleOptions = {
  web3: {
    block: 0,
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:8545"
    }
  },
  contracts: [ComplexStorage, SimpleStorage, TutorialToken, DeveloperFactory],
  events: {
    SimpleStorage: ["StorageSet"]
  },
  polls: {
    accounts: 1500
  }
};

export default drizzleOptions;
