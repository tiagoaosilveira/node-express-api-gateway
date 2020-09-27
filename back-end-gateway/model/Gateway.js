const mongoose = require("mongoose");

const GatewaySchema = new mongoose.Schema(
  {
    url: {
      type: String,
      required: true
    },
    route: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Gateway", GatewaySchema);