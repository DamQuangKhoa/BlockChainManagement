import Demo from "./Demo";
import { drizzleConnect } from "drizzle-react";
import Home from "../../component/App/Home";

// May still need this even with data function to refresh component on updates for this contract.
const mapStateToProps = state => {
  return {};
};

const HomeContainer = drizzleConnect(Home, mapStateToProps);

export default HomeContainer;
