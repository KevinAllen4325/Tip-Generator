$(document).ready(function () {
	$('div.hidden').fadeIn(800).removeClass('hidden');
});
var base = document.getElementById('baseM');
var tax = document.getElementById('taxP');
var tip = document.getElementById('tips');
var subTXT = document.getElementById('subtotal');
var tipTXT = document.getElementById('tip');
var totalTXT = document.getElementById('total');
var submitBtn = document.getElementById('submit');
var clearBtn = document.getElementById('reset');
var inputs = document.querySelectorAll('input');
var clicked = true;
submit.addEventListener('click', function () {
			submitCost()
			clicked = false;
});

function submitCost(){
	var baseNum = parseFloat(base.value);
	var taxNum = parseFloat(tax.value / 100);
	var tipNum = parseFloat(tip.value / 100);
	var subTotal = (baseNum * taxNum) + baseNum;
	var tipTotal = (subTotal * tipNum)
	var total = subTotal + tipTotal;
	subTXT.innerHTML = "$" + subTotal.toFixed(2);
	tipTXT.innerHTML = "$" + tipTotal.toFixed(2);
	totalTXT.innerHTML = "$" + total.toFixed(2);
}
