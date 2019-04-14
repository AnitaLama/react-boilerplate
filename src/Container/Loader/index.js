import React, { Component } from "react";
import "../../App.css";
import { connect } from "react-redux";
import TestActions from "../../Redux/TestRedux";
import { Button } from "antd";
import history from "../../history";

class MainContainer extends Component {
  onHandleButton = () => {
    this.props.onTestRequest();
  };
  goBack = () => {
    history.goBack();
  };

  render() {
    // if (this.props.loading) {
    //   console.log("loading");
    //   // return <Loader />;
    //   return null;
    // }
    if (this.props.test.loading) {
      return (
        <div className="App">
          <header className="App-header">
            <p>LOADING</p>
            <Button type="primary" onClick={this.onHandleButton}>
              STOP
            </Button>
          </header>
        </div>
      );
    }
    return (
      <div className="App">
        <header className="App-header">
          <p>NEW PAGE</p>
          <Button type="primary" onClick={this.onHandleButton}>
            OK
          </Button>
          <Button type="primary" onClick={this.goBack}>
            BACK
          </Button>
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
