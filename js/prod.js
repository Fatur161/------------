var cartNum = $("#cartVal");
var cartNumVal = cartNum.text();
if (cartNumVal > 0) {
  cartNum.removeClass("none");
} else {
  cartNum.addClass("none");
}
function clickCart() {
  cartNumVal++;
  cartNum.text(cartNumVal);
  if (cartNumVal > 0) {
    cartNum.removeClass("none");
  } else {
    cartNum.addClass("none");
  }
}

var wishNum = $("#wishl");
var wishNumVal = wishNum.text();
if (wishNumVal > 0) {
  wishNum.removeClass("none");
} else {
  wishNum.addClass("none");
}
function clickWish() {
  wishNumVal++;
  wishNum.text(wishNumVal);
  if (wishNumVal > 0) {
    wishNum.removeClass("none");
  } else {
    wishNum.addClass("none");
  }
}
