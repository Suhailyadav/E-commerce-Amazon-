export const deliveryOptions = [{
  id: '100',
  deliveryDays: 7,
  price: 0
}, {
  id: '200',
  deliveryDays: 3,
  price: 499
}, {
  id: '300',
  deliveryDays: 1,
  price: 999
}];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

    deliveryOptions.forEach((option) => {
      if (option.id === deliveryOptionId) {
        deliveryOption = option;
      }
    });

    return deliveryOption
}