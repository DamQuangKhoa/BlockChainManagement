import Home from "./Home.jsx";
import { drizzleConnect } from "drizzle-react";

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    ComplexStorage: state.contracts.ComplexStorage,
    DeveloperFactory: state.contracts.DeveloperFactory,
    drizzleStatus: state.drizzleStatus,
    events: state
  };
};

const DeveloperContainer = drizzleConnect(Home, mapStateToProps);

export default DeveloperContainer;