const axios = require('axios')

axios.get('http://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
