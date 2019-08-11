import React, { Component } from "react";
import {
  AccountData,
  ContractData,
  ContractForm
} from "drizzle-react-components";

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
            <h2>Review</h2>
            <p>Danh Sach thông tin lập trình viên đã lưu vào Blockchain</p>
            <p>
              <ContractData contract="ReviewFactory" method="test" />
              {/* <ContractData contract="ReviewFactory" method="test2" /> */}
              <strong>List Reviews</strong>:{" "}
              {data.map((v, i) => {
                return (
                  <ContractData
                    contract="ReviewFactory"
                    method="reviewsSecond"
                    methodArgs={[i]}
                  />
                );
              })}
            </p>
            <ContractForm contract="ReviewFactory" method="_testString" />

            <br />
            <br />
          </div>
        </div>
      </main>
    );
  }
}

export default Home;
