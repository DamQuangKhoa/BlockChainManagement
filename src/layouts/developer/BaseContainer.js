import Base from "./Base";
import Login from "../../component/App/Login";
import { drizzleConnect } from "drizzle-react";
import PesonnelContainer from "../../container/PesonnelContainer/PesonnelContainer";

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {
    accounts: state.accounts,
    SimpleStorage: state.contracts.SimpleStorage,
    TutorialToken: state.contracts.TutorialToken,
    drizzleStatus: state.drizzleStatus,
    events: state
  };
};

const DeveloperContainer = drizzleConnect(PesonnelContainer, mapStateToProps);

export default DeveloperContainer;
