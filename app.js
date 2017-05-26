$(document).ready(function () {
	$('div.hidden').fadeIn(800).removeClass('hidden');
});
var base = document.getElementById('baseM');
var tax = document.getElementById('taxP');
var tip = document.getElementById('tips');
var subTXT = document.getElementById('subtotal');
var tipTXT = document.getElementById('tip');
var totalTXT = document.getElementById('total');
var submitBtn = document.querySelector('button[type="button"]');
var clearBtn = document.querySelector('button[type="reset"]');
var inputs = document.querySelectorAll('input');
submitBtn.addEventListener('click', function () {
	validateForm();
	submitCost();
});
clearBtn.addEventListener('click', function () {
	clearCost();
})

function submitCost() {
	var baseNum = parseFloat(base.value || 0);
	var taxNum = parseFloat(tax.value / 100);
	var tipNum = parseFloat(tip.value / 100);
	var subTotal = (baseNum * taxNum) + baseNum;
	var tipTotal = (subTotal * tipNum);
	var total = subTotal + tipTotal;

	subTXT.innerHTML = "$" + subTotal.toFixed(2);
	tipTXT.innerHTML = "$" + tipTotal.toFixed(2);
	totalTXT.innerHTML = "$" + total.toFixed(2);
}

function clearCost() {
	subTXT.innerHTML = "$0.00";
	tipTXT.innerHTML = "$0.00";
	totalTXT.innerHTML = "$0.00";
}

function validateForm() {
	var x = document.forms["myForm"]["meal"].value;
	var y = document.forms["myForm"]["tax"].value;
	var z = document.forms["myForm"]["tip"].value;
	if (x == "") {
		alert("Base price must be filled out");
		return false;
	} else if (y == "") {
		alert("Tax must be filled out");
		return false
	} else if (z == "") {
		alert("Tip must be filled out");
		return false
	}
}