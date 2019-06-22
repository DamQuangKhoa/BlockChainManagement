import Base from "./Base";
import Login from "../../component/App/Login";
import { drizzleConnect } from "drizzle-react";

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {};
};

const BaseContainer = drizzleConnect(Login, mapStateToProps);

export default BaseContainer;
