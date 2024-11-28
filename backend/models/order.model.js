const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  buyerName: { type: String, required: true },
  contactInfo: { type: String, required: true },
  address: { type: String, required: true },
  items: {type: Number, required: true}
 
  
});

const OrderModel = mongoose.model("Order", OrderSchema);
module.exports = OrderModel;
