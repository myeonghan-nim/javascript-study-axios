const axios = require('axios')

axios.get('http://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      console.log(response)
    })  // response 200
    .catch((error) => {
      console.log(error)
    })  // response !200