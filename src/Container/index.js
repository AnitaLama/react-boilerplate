import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import TestActions from "../Redux/TestRedux";
import Loader from "./Loader";
import { Button, Icon } from "antd";
import history from "../history";
import TestForm from "../Component/Form";

class MainContainer extends Component {
  onHandleButton = () => {
    this.props.onTestRequest();
  };
  goForward = () => {
    history.push("/TestPage");
  };
  goBackward = () => {
    history.push("/");
  };
  handleSubmit = values => {
    console.log(values);
  };
  render() {
    console.log(this.props);
    if (this.props.test.loading) {
      return <Loader />;
      // return null;
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>HELLO</p>
          <Button type="primary" onClick={this.onHandleButton}>
            OK
          </Button>
          <div>
            <Button type="primary" onClick={this.goBackward}>
              <Icon type="left" />
              Go back
            </Button>
            <Button type="primary" onClick={this.goForward}>
              Go forward
              <Icon type="right" />
            </Button>
          </div>
          <TestForm onSubmit={this.handleSubmit} />
        </header>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  test: state.test
});
const mapDispatchToProps = dispatch => ({
  onTestRequest: () => dispatch(TestActions.onTestRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainContainer);
