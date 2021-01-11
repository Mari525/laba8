function n1() {
	console.log("№1");
	var n = parseInt(prompt("Введите количество овечек:"));
	for (var i = 1; i <= n; i++) {
		console.log(n, "овечка");
	}
}

function n2() {
	console.log("№2");
	for (var i = 0; i <= 15; i++) {
		if (i % 2 == 0) {
			console.log(i, "четное");
		} else {
			console.log(i, "нечетное");
		}
	}
}

function n3() {
	console.log("№3");
	for (var i = 0; i < 8; i++) {
		if (i % 2 == 0) {
			console.log("# ".repeat(4));
		} else {
			console.log(" #".repeat(4));
		}
	}
}

function n4() {
	console.log("№4");
	var arr = prompt("Введите три числа через пробел:").split(" ");
	for (var i = 0; i < 3; i++) {
		for (var j = 0; j < 2 - i; j++) {
			if (parseInt(arr[j]) > parseInt(arr[j + 1])) {
				var k = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = k;
			}
		}
	}
	console.log(arr.toString());
}


function n5() {
	console.log("№5");
	var arr = prompt("Введите пять чисел через пробел:").split(" ");
	for (var i = 0; i < 5; i++) {
		arr[i] = parseInt(arr[i]);
	}
	max = arr[0];
	for (var i = 0; i < 5; i++) {
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	console.log("Наибольшее число:", max);
}