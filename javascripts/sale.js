const products = [
  {
    id: 1,
    name: "オリジナルブレンド200g",
    price: 500,
  },
  {
    id: 2,
    name: "オリジナルブレンド500g",
    price: 900,
  },
  {
    id: 3,
    name: "スペシャルブレンド200g",
    price: 700,
  },
  {
    id: 4,
    name: "オリジナルブレンド200g",
    price: 1200,
  }
]
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const menuId = priceElement.value;
  const product = products.find(item => item.id == menuId);
  const number = numberElement.value;

  let purchase = {
    menuName:product.name,
    price: product.price,
    number: parseInt(number),
  };

  let newPurchase = true; //--1

  purchases.forEach((item) => {  //--2
    if(item.price === purchase.price) {
      newPurchase = false;
    }
  })

  if(purchases.length < 1 || newPurchase) { //--3
    purchases.push(purchase);
  } else {
    for(let i = 0; i < purchases.length; i++) {
      if(purchases[i].price === purchase.price) {
        purchases[i].number += purchase.number;
      }
    }
  }

  window.alert(`${display()}\n小計${subtotal()}円`);
  priceElement.value = "";
  numberElement.value = "";
}


function display() {
  let string = "";
  for(let i=0; i<purchases.length; i++){
    string += `${purchases[i].menuName} ${purchases[i].price}円が${purchases[i].number}点\n`;
  }
  return string;
}

function subtotal() {
  let sum = 0;
    for(let i=0; i<purchases.length; i++){
    sum += purchases[i].price * purchases[i].number;
  }
  return sum;
}

function calc() {
  const sum = subtotal();
  const postage = calcPostageFromPurchase(sum);
  window.alert(`${display()} 小計は${sum}円、送料は${postage}円です。合計は${sum + postage}円です`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
}

function calcPostageFromPurchase(sum) {
  if (sum == 0 || sum >= 3000) {
    return 0;
  } else if (sum < 2000){
   return 500;
  } else {
   return 250;
  }
}