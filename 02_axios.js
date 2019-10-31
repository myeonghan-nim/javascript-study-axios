const axios = require('axios')

axios.get('http://jsonplaceholder.typicode.com/posts')
    .then((response) => {
      console.log(response)
    })  // normally worked
    .catch((error) => {
      console.log(error)
    })  // get error