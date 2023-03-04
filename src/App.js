import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './components/User';
import Repos from './components/Repos';
import Form from './components/Form';

import { useState, useEffect } from 'react';
import { fetchData } from './services/fetchData';


function App() {
  const [userData, setUserData] = useState(null);
  const [userError, setUserError] = useState(null);
  const [reposData, setReposData] = useState(null);
  const [reposError, setReposError] = useState(null);
  const [user, setUser] = useState("");

  const handleUserChange = event => {
    setUser(event.target.value);
  };

  /* 
  useEffect(() => {
    fetchData("https://api.github.com/users/${user}", setUserData, setUserError);
  }, []);

  useEffect(() => {
    fetchDataRepos("https://api.github.com/users/${user}/repos", setReposData, setReposError);
  }, []);

  if(userError){
    return <div> {userError}</div>;
  }

  if(!userData){
     alert("Molimo upišite nešto u polje!");
  }
  */

  const handleFetchData = (event) => {
    if (!user) {
      alert("Molimo upišite nešto u polje!");
    } 
    else {
      fetchData(user, setUserData, setUserError, setReposData, setReposError);
    }
  };

  const handleResetBtn = () => {
      setUserData(null);
      setReposData(null);
      setUser(null);
  };


  return (
    <div>
    {!userData ? (
      <Form onUserChange={handleUserChange} getUserData={handleFetchData} />) : ("")}

    {userError ? <div>{userError}</div> : userData ? <User data={userData} /> : "" }

    {reposError ? <div>{reposError}</div> : reposData ? <Repos data={reposData} resetBtn={handleResetBtn} /> : ""}
    </div>
  );
    
}
export default App;
