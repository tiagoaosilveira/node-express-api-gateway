const express = require('express')
const axios = require('axios');
const mongoose = require('mongoose');
const db = require("./database/config");
const GatewayService = require("./services/GatewayService");
const app = express()
const port = 3001

mongoose.connect(db.uri, { useNewUrlParser: true });


app.get('/*', function(req, res) {
    async function requestAndReturn() {
        try {
          const data = await GatewayService.index(req.params[0]);
          const response = await axios.get(`http://localhost:3000${data}`);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
    }
    requestAndReturn();
    
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})