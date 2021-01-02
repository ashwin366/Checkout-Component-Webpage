const btnInc = document.querySelectorAll(".btn--inc");
const btnDec = document.querySelectorAll(".btn--dec");
var countArray = document.querySelectorAll(".btn__quantity__text");
var itemPrice = document.querySelectorAll(".item-price");
var totalPrice = document.querySelector("#total-price");
var total = Number(totalPrice.textContent);

for (var i = 0; i < btnInc.length; i++) {

  let price = Number(itemPrice[i].textContent);
  let countItem = countArray[i];
  let count = Number(countArray[i].textContent);

  btnInc[i].addEventListener("click", function() {
    count++;
    countItem.innerHTML = count;
    total += price;
    totalPrice.innerHTML = round(total);
  });

  btnDec[i].addEventListener("click", function() {
    if (count > 0) {
      count--;
      countItem.innerText = count;
      total -= price;
      totalPrice.innerHTML = round(total);
    }

  });
}

function round(num){
  return (Math.round(num*100))/100;
}
