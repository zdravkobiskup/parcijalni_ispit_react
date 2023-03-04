export function fetchData(user, setUserData, setUserError, setReposData, setReposError) {
    
    fetch(`https://api.github.com/users/${user}`)
      .then((response) => response.json())
      .then((data) => setUserData(data))
      .catch((error) => setUserError(error.toString()));
  
    fetch(`https://api.github.com/users/${user}/repos`)
      .then((response) => response.json())
      .then((data) => setReposData(data))
      .catch((error) => setReposError(error.toString()));
  }