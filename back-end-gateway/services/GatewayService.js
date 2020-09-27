const Gateway = require("../model/Gateway");

class GatewayService {
  async store(req, res) {
    const data = await Gateway.create(req.body);

    return res.json(data);
  }
  async index(req) {
    console.log(req);
    const data = await Gateway.findOne({ url : req});
    return data.route;
  }
}

module.exports = new GatewayService();