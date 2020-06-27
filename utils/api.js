const axios = require("axios");


var config = {
  headers: {'Authorization': process.env.API_KEY}
}



const api = {
  getUser(username) {
    return axios
      .get(`https://api.github.com/users/${username}`, config) 
      .then (response => response)
      .catch(err => {
        console.log("Uh oh", err);
        process.exit(1);
      })

  }
};


module.exports = api;
