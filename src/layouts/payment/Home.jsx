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
            <h2>Blockchain Luan Van Token</h2>
            <p>
              Hệ thống xây dụng một đồng tiền riêng trong mạng quản lý của công
              ty, đồng tiền có thể dùng để <code>trả lương</code>
               hoặc để kêu gọi <code>vốn đầu tư </code> để phát triển công ty
            </p>
            <p>
              <strong>Tổng số Token trong hệ thống </strong>:{" "}
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
              <strong>Số Token của công ty </strong>:{" "}
              <ContractData
                contract="TutorialToken"
                method="balanceOf"
                methodArgs={[this.props.accounts[0]]}
              />
            </p>
            <h3>Trả lương bằng Tokens cho nhân viên </h3>
            <ContractForm
              contract="TutorialToken"
              method="transfer"
              labels={["Mã nhân viên ", "Số lượng cần chuyển "]}
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
