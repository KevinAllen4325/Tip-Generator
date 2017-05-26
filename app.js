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

// clearBtn.addEventListener('click', function () {
// 		clear();
// });

function submitCost(){
	base = parseFloat(base.value);
	tax = parseFloat(tax.value / 100);
	tip = parseFloat(tip.value / 100);
	subTotal = (base * tax) + base;
	tip = (subTotal * tip)
	total = subTotal + tip;
	subTXT.innerHTML = "$" + subTotal;
	tipTXT.innerHTML = "$" + tip.toFixed(2);
	totalTXT.innerHTML = "$" + total.toFixed(2);
}

// function clear(){
// 	inputs.value= ""

// 	subTXT.innerHTML = "";
// 	tipTXT.innerHTML = "";
// 	totalTXT.innerHTML = "";
// }