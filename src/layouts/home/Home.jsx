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
          <div className="pure-u-1-1 header">
            <img src={logo} alt="drizzle-logo" />
            <h1>Drizzle Examples</h1>
            <p>
              Examples of how to get started with Drizzle in various situations.
            </p>

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
          <div className="pure-u-1-1">
            <h2>Active Account</h2>
            <AccountData accountIndex="0" units="ether" precision="3" />

            <br />
            <br />
          </div>

          <div className="pure-u-1-1">
            <h2>SimpleStorage</h2>
            <p>
              This shows a simple ContractData component with no arguments,
              along with a form to set its value.
            </p>
            <p>
              <strong>Stored Value</strong>:{" "}
              <ContractData contract="SimpleStorage" method="storedData" />
            </p>
            <ContractForm contract="SimpleStorage" method="set" />
            <br />
            <br />
          </div>

          <div className="pure-u-1-1">
            <h2>TutorialToken</h2>
            <p>
              Here we have a form with custom, friendly labels. Also note the
              token symbol will not display a loading indicator. We've
              suppressed it with the <code>hideIndicator</code> prop because we
              know this variable is constant.
            </p>
            <p>
              <strong>Total Supply</strong>:{" "}
              <ContractData
                contract="TutorialToken"
                method="totalSupply"
                methodArgs={[{ from: this.props.accounts[0] }]}
              />{" "}
              <ContractData
                contract="TutorialToken"
                method="symbol"
                hideIndicator
              />
            </p>
            <p>
              <strong>My Balance</strong>:{" "}
              <ContractData
                contract="TutorialToken"
                method="balanceOf"
                methodArgs={[this.props.accounts[0]]}
              />
            </p>
            <h3>Send Tokens</h3>
            <ContractForm
              contract="TutorialToken"
              method="transfer"
              labels={["To Address", "Amount to Send"]}
            />

            <br />
            <br />
          </div>
          <div className="pure-u-1-1">
            <h2>ComplexStorage</h2>
            <p>
              This shows a simple ContractData component with no arguments,
              along with a form to set its value.
            </p>
            <p>
              <strong>Stored Value</strong>:{" "}
              <ContractData contract="ComplexStorage" method="string4" />
            </p>
            <ContractForm contract="ComplexStorage" method="set" />
            <br />
            <br />
          </div>
          {/* <div className="pure-u-1-1">
            <h2>ComplexStorage</h2>
            <ContractForm
              contract="ComplexStorage"
              method="set"
              labels={["deviceBrand"]}
            />
            <ContractData contract="ComplexStorage" method="storeduint1" />
            <p>
              Finally this contract shows data types with additional
              considerations. Note in the code the strings below are converted
              from bytes to UTF-8 strings and the device data struct is iterated
              as a list.
            </p>
            <ContractForm
              contract="ComplexStorage"
              method="setDeviceData"
              labels={["deviceBrand", "deviceYear", "batteryWearLevel"]}
            />
            <p>
              <strong>String 1</strong>:{" "}
              <ContractData contract="ComplexStorage" method="arrayCount" />
            </p>
            <p>
              <strong>deviceDataArray</strong>:{" "}
              <ContractData contract="ComplexStorage" method="singleDD" />
            </p>
            <strong>Single Device Data</strong>:
            {data.map((item, i) => {
              return (
                <ContractData
                  contract="ComplexStorage"
                  method="deviceDataArray"
                  methodArgs={[i]}
                />
              );
            })}
            />
            <br />
            <br />
          </div>
        */}
        </div>
      </main>
    );
  }
}

export default Home;
