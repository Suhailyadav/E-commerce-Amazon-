import { cart } from "../cart.js";
import { getProduct } from "../products.js";
import { deliveryOptions, getDeliveryOption } from "../deliveryOptions.js";
// import { formatCurrency } from "../utils/money.js";


export function renderPaymentSummary() {
  let productPrice = 0;
  let ShippingPrice = 0;

  cart.forEach((cartItem) => {
    const product = getProduct(cartItem.productId);
    productPrice += product.price * cartItem.quantity;

    const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
    ShippingPrice += deliveryOption.price
  });

  const totalBeforeTax = productPrice + ShippingPrice;
  const tax = totalBeforeTax * 0.1;
  const total = totalBeforeTax + tax;

  const paymentSummaryHTML = 
  `
    <div class="payment-summary-title">
      Order Summary
    </div>

    <div class="payment-summary-row">
      <div>Items (3):</div>
      <div class="payment-summary-money">
      &#8377;${productPrice}</div>
    </div>

    <div class="payment-summary-row">
      <div>Shipping &amp; handling:</div>
      <div class="payment-summary-money">
      &#8377;${ShippingPrice}</div>
    </div>

    <div class="payment-summary-row subtotal-row">
      <div>Total before tax:</div>
      <div class="payment-summary-money">&#8377;${totalBeforeTax}</div>
    </div>

    <div class="payment-summary-row">
      <div>Estimated tax (10%):</div>
      <div class="payment-summary-money">&#8377;${tax}</div>
    </div>

    <div class="payment-summary-row total-row">
      <div>Order total:</div>
      <div class="payment-summary-money">&#8377;${total}</div>
    </div>

    <button class="place-order-button button-primary">
      Place your order
    </button>
  `; 

  document.querySelector('.js-payment-summary').innerHTML = paymentSummaryHTML;
};