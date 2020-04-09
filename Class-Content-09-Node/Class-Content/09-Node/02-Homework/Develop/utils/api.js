
const axios = require("axios");


const api = {
  getUser(username) {
    return axios
      .get(`https://api.github.com/users/${username}`)
      .catch(err => {
        console.log("Uh oh", err);
        process.exit(1);
      })

  }

  //TUTOR SOLUTION
  // console.log(username);



  //GitHub API;
  // https://api.github.com/users/joeyrodrigues92/events/public


  //  axios.get(`https://api.github.com/users/${ username }/events/public`)
  //  .then(function (response) {
  //    // handle success
  //    console.log(response);
  //  })
  //  .catch(function (error) {
  //    // handle error
  //    console.log(error);
  //  })

};


module.exports = api;
