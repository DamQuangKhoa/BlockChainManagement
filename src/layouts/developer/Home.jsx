import React, { Component } from "react";
import {
  AccountData,
  ContractData,
  ContractForm
} from "drizzle-react-components";
import logo from "../../logo.png";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [1, 2, 3]
    };
  }
  componentDidMount() {
    // console.log(this.props.web3.web3Instance);
  }
  createData = () => {};
  render() {
    const { data } = this.state;
    // {console.log(this.props.SimpleStorage.events);
    // }
    return (
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h2>Active Account</h2>
            <AccountData accountIndex="0" units="ether" precision="3" />

            <br />
            <br />
          </div>
          <div className="pure-u-1-1">
            <h2>Developer</h2>
            <p>
              This shows a simple ContractData component with no arguments,
              along with a form to set its value.
            </p>
            <p>
              <strong>List Developer</strong>:{" "}
              {data.map((v, i) => {
                return (
                  <ContractData
                    contract="DeveloperFactory"
                    method="developers"
                    methodArgs={[i]}
                  />
                );
              })}
            </p>
            <ContractForm
              contract="DeveloperFactory"
              method="createRandomDeveloper"
            />
            <br />
            <br />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
