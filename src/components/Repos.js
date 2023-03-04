import { Component } from "react";
import pt from "prop-types";

class Repos extends Component {
  render() {
    const { data, resetBtn } = this.props;
    
    return (
      <div className="repos">
        <br />
        <h2><b>REPOSITORIES:</b></h2>
        <ul className="reposmap">
          {data.map((data) => {
            return <li key={data.id}>{data.name}</li>;
          })}
        </ul>
        <button className="buttonbtn" onClick={resetBtn}>Reset</button>
      </div>
    );
  }
}

Repos.propTypes = {
  data: pt.array,
  resetBtn: pt.func,
};

export default Repos;