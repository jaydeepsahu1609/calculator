var num1 = 0,
    add = 0,
    sub = 0,
    mul = 0,
    div = 0,
    result = 0;

function allClear() {
    document.getElementById('number').value = '';
    document.getElementById('result').value = '';
    num1 = add = sub = mul = div = 0;
    document.getElementById('plus').disabled = false;
    document.getElementById('minus').disabled = false;
    document.getElementById('into').disabled = false;
    document.getElementById('divide').disabled = false;
}

function backSpace() {
    var number = document.getElementById('number');
    var len = number.value.length;
    var value = '';
    for (let i = 0; i < len - 1; i++) {
        value = value + number.value[i];
    }
    number.value = value;
}

function addition() {
    clicked(0);
    add = 1;
    var num = document.getElementById('number');
    if (num1 == '') {
        num1 = num.value;
    }
    num.value = '';
    document.getElementById('result').value = num1;
}

function subtraction() {
    clicked(1);
    sub = 1;
    var num = document.getElementById('number');

    if (num1 == '') {
        num1 = num.value;
    }
    num.value = '';
    document.getElementById('result').value = num1;
}

function multiplication() {
    clicked(2);
    mul = 1;
    var num = document.getElementById('number');
    if (num1 == '') {
        num1 = num.value;
    }
    num.value = '';
    document.getElementById('result').value = num1;
}

function division() {
    clicked(3);
    div = 1;
    var num = document.getElementById('number');

    if (num1 == '') {
        num1 = num.value;
    }
    num.value = '';
    document.getElementById('result').value = num1;
}

function sqr() {
    var num = document.getElementById('number').value;
    if (num == '') {
        num = Number(result);
    }
    document.getElementById('result').value = num * num;
}

function calculate() {
    console.log('calculation called.')
    var num = document.getElementById('number');
    var num2 = num.value;
    if (add) {
        result = Number(num1) + Number(num2);
    } else if (sub) {
        result = Number(num1) - Number(num2);
    } else if (mul) {
        result = Number(num1) * Number(num2);
    } else if (div) {
        result = Number(num1) / Number(num2);
    }
    document.getElementById('result').value = result;
    num1 = result;
    num.value = '';
    add = sub = mul = div = 0;
}

function numPress(n) {
    var num = document.getElementById('number');
    num.value = num.value + n;
}

function clicked(n) {
    if (n == 0) {
        document.getElementById('plus').disabled = false;
        document.getElementById('minus').disabled = true;
        document.getElementById('into').disabled = true;
        document.getElementById('divide').disabled = true;
    } else if (n == 1) {
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = false;
        document.getElementById('into').disabled = true;
        document.getElementById('divide').disabled = true;
    } else if (n == 2) {
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('into').disabled = false;
        document.getElementById('divide').disabled = true;
    } else if (n == 3) {
        document.getElementById('plus').disabled = true;
        document.getElementById('minus').disabled = true;
        document.getElementById('into').disabled = true;
        document.getElementById('divide').disabled = false;
    }
}