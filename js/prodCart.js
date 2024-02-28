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
}
