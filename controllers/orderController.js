


const Order = require('../models/Order');

const createOrder = async (req, res) => {
  const { orderItems, shippingAddress, paymentMethod, totalPrice } = req.body;
  const user = req.user._id; // Assurez-vous que l'utilisateur est extrait du jeton d'authentification

  const newOrder = new Order({ user, orderItems, shippingAddress, paymentMethod, totalPrice });

  try {
    const savedOrder = await newOrder.save();
    res.status(201).json(savedOrder);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

module.exports = { createOrder };
