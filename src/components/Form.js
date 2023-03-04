import { Component } from "react";
import pt from "prop-types";

class Form extends Component {
  render() {
    return (
      <div className="container">
        <form>
          <label htmlFor="user"><b>GitHub username:</b> </label> <br />
          <input type="text" placeholder="e.g. facebook" id="user" onChange={this.props.onUserChange}/>
          <br />
          <br />
          <button type="button" className="button" onClick={this.props.getUserData}>GO!</button>
        </form>
      </div>
    );
  }
}
Form.propTypes = {
    onUserChange: pt.func,
    getUserData: pt.func,
  };
  
  export default Form;
