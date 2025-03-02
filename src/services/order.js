
import http from "./http";

const getOrderById = (id) => {
  return http.get(`orders/${id}`);
}
const getAllOrders = () => {
  return http.get('orders/all');
}
const deleteOrder = (id) => {
  return http.delete(`orders/${id}`);
}
const updateOrderStatus = (data) => {
  return http.post('orders/order-status', data);
}
const updatePaymentStatus = (data) => {
  return http.post('orders/payment-status', data);
}
const resetOrderStatus = (data) => {
  return http.post('orders/reset-status', data);
}

const orderService = {
  getOrderById,
  getAllOrders,
  deleteOrder,
  updateOrderStatus,
  updatePaymentStatus,
  resetOrderStatus,
};

export default orderService;