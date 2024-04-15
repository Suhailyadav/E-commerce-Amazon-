export function getProduct(productId) {
    let matchingProduct;

    products.forEach((product) => {
      if (product.id === productId) {
        matchingProduct = product;
      }
    });
    return matchingProduct;
}

export const products = [{
    id : "0",
    image: "main_images/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Socks - 6 Pairs",
    rating: {
        stars: 4.5,
        count: 87
    },
    price: 1090
}, {
    id : "1",
    image: "main_images/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
        stars: 4,
        count: 127
    },
    price: 2095
}, {
    id : "2",
    image: "main_images/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
        stars: 4.5,
        count: 56
    },
    price: 799
}, {
    id : "3",
    image: "main_images/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
        stars: 5,
        count: 2197
    },
    price: 1899
}, {
    id : "4",
    image: "main_images/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
        stars: 4,
        count: 37
    },
    price: 2067
}, {
    id : "5",
    image: "main_images/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking set",
    rating: {
        stars: 4.5,
        count: 175
    },
    price: 3499
}, {
    id : "6",
    image: "main_images/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
        stars: 4.5,
        count: 317
    },
    price: 2400
}, {
    id : "7",
    image: "main_images/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
        stars: 4.5,
        count: 144
    },
    price: 3599
}, {
    id : "8",
    image: "main_images/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
        stars: 4.5,
        count: 305
    },
    price: 2899
}];

// }], {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }, {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }, {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }, {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }, {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }, {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }, {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }, {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }, {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }, {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }, {
//     image : "main_images/athletic-cotton-socks-6-pairs.jpg",
//     itemName : "Black and Gray Athletic Socks - 6 Pairs",
//     ratings : {
//         stars : 4.5,
//         count : 87
//     },
//     price : 1090
// }]