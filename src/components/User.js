import pt from "prop-types";
function User(props) {
    const { data } = props;
    
  
    return (
        <div className="user">
            <img src={data.avatar_url} className="logo" alt="logo" width="200" />
            <h1>{data.name}</h1>
            <br />
            <ol className="list">
                <li><b>LOCATION:</b> {data.location} </li><br />
                <li><b>BIO:</b> {data.bio} </li>
            </ol>
        </div>
        
    );

}

User.propTypes = {
    data: pt.object
};

export default User;