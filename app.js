$(document).ready(function () {
	$('div.hidden').fadeIn(800).removeClass('hidden');
});

var baseSingle = document.getElementById('baseM');
var baseShare1 = document.getElementById('base1');
var baseShare2 = document.getElementById('base3');
var taxSingle = document.getElementById('taxP');
var taxShare1 = document.getElementById('tax1');
var taxShare2 = document.getElementById('tax3');
var tipSingle = document.getElementById('tips');
var tipShare1 = document.getElementById('tips1');
var tipShare2 = document.getElementById('tips2');
var subTXT = document.getElementById('subtotal');
var tipTXT = document.getElementById('tip');
var totalTXT = document.getElementById('total');
var subTXT1 = document.getElementById('subtotal1');
var tipTXT1 = document.getElementById('tip1');
var totalTXT1 = document.getElementById('total1');
var subTXT2 = document.getElementById('subtotal2');
var tipTXT2 = document.getElementById('tip3');
var totalTXT2 = document.getElementById('total2');
var submitBtn = document.querySelector('button[id="submit1"]');
var submitBtn2 = document.querySelector('button[id="submit2"]');
var clearBtn = document.querySelector('button[id="reset1"]');
var clearBtn2 = document.querySelector('button[id="reset2"]');
var share = document.querySelector('button[id="shareBtn"]');
var single = document.querySelector('button[id="singleBtn"]');
var shareCalc = document.querySelector('div[id="shareCalc"')
var singleCalc = document.querySelector('div[id="singleCalc"')
var error = document.querySelector('p.error');

var clear = [
	subTXT,
	tipTXT,
	totalTXT,
	subTXT1,
	tipTXT1,
	totalTXT1,
	subTXT2,
	tipTXT2,
	totalTXT2
]

submitBtn.addEventListener('click', function () {
	validateForm();
	submit(baseSingle, taxSingle, tipSingle, subTXT, tipTXT, totalTXT);
});

submitBtn2.addEventListener('click', function () {
	validateForm2();
	submit(baseShare1, taxShare1, tipShare1, subTXT1, tipTXT1, totalTXT1);
	submit(baseShare2, taxShare2, tipShare2, subTXT2, tipTXT2, totalTXT2);
});

clearBtn.addEventListener('click', function () {
	clearCost();
})

clearBtn2.addEventListener('click', function () {
	clearCost();
})

share.addEventListener('click', function () {
	singleCalc.className += 'hide1'
	shareCalc.classList.remove('hide1')
})

single.addEventListener('click', function () {
	shareCalc.className += 'hide1'
	singleCalc.classList.remove('hide1')
})

function submit(a, b, c, d, e, f) {
	var baseNum = parseFloat(a.value || 0);
	var taxNum = parseFloat(b.value / 100);
	var tipNum = parseFloat(c.value / 100);
	var subTotal = (baseNum * taxNum) + baseNum;
	var tipTotal = (subTotal * tipNum);
	var total = subTotal + tipTotal;
	d.innerHTML = "$" + subTotal.toFixed(2);
	e.innerHTML = "$" + tipTotal.toFixed(2);
	f.innerHTML = "$" + total.toFixed(2);
}

function clearCost() {
		for(var i = 0; i < clear.length; i++){
			clear[i].innerHTML = "$0.00"
		}
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

function validateForm2() {
	var a = document.forms["myForm2"]["meal1"].value;
	var b = document.forms["myForm2"]["tax1"].value;
	var c = document.forms["myForm2"]["tip1"].value;
	var x = document.forms["myForm2"]["meal2"].value;
	var y = document.forms["myForm2"]["tax2"].value;
	var z = document.forms["myForm2"]["tip2"].value;
	if (a == "") {
		error.innerHTML = "Base price must be filled out";
		return false;
	} else if (x == "") {
		alert("Base price must be filled out");
		return false
	} else if (b == "") {
		alert("Tax must be filled out");
		return false
	} else if (y == "") {
		alert("Tax must be filled out");
		return false
	} else if (c == "") {
		alert("Tip must be filled out");
		return false
	} else if (z == "") {
		alert("Tip must be filled out");
		return false
	}
}
