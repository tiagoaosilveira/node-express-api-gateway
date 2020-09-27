const express = require('express')
const axios = require('axios');
const app = express()
const port = 3001

let routes = {
    "about" : "/about"
}

app.get('/*', function(req, res) {
    async function getUser() {
        try {
          const response = await axios.get(`http://localhost:3000${routes[req.params[0]]}`);
          console.log(response);
        } catch (error) {
          console.error(error);
        }
    }
    getUser();
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})