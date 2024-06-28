// [KIỂU DỮ LIỆU NUMBER(SỐ)]
// - CÁC PHÉP TOÁN (cộng, trừ, nhân, chia)
// - PHƯƠNG THỨC (METHOD) của Number
// [KIỂU DỮ LIỆU BOOLEAN (TRUE/FALSE)]
// - Các giá trị truthy / falsy
// [KIỂU DỮ LIỆU UNDEFINED VÀ NULL]

// // Khai báo số nguyên
// let x = 1; // Khai báo biến x có giá trị là 1 (Biến x là kiểu dữ liệu Number)
// let y = "1";
// // Khai báo số thực
// let z = 1.5;

// console.log(x);
// console.log(y);
// console.log(z);

// // [PHƯƠNG THỨC CỦA NUMBER]
// // [isNaN]: trước khi kiểm tra thì hàm sẽ ép kiểu sang kiểu số
// // 1. Nếu ép kiểu dc thì sẽ trả về false
// // 2. Nếu không ép đc kiểu thì sẽ trả về true
// let number1 = "7";
// let number2 = 8;
// let number3 = "abcd";

// console.log(isNaN(number1)); // false
// console.log(isNaN(number2)); // false
// console.log(isNaN(number3)); // true

// // [toFixed]: giữ lại số thập phân theo chỉ định và đổi dữ liệu
// // sang kiểu string
// let num = 5.56789;
// // Để ép lại kiểu sau khi dùng toFixed thì thêm dấu +
// let numString = num.toFixed(2);
// let numNumber = +num.toFixed(2);
// // Để kiểm tra kiểu dữ liệu của 1 biến sử dụng typeof
// console.log(typeof numString);
// console.log(typeof numNumber);

// // [CÁC PHÉP TÍNH TOÁN TRONG JS]
// console.log(5 + 6); // phép cộng
// console.log(5 - 6); // phép trừ
// console.log(5 * 6); // phép nhân
// console.log(6 / 4); // phép chia
// console.log(6 % 2); // phép chia lấy dư

// let num1 = +"1";
// let num2 = 1;
// console.log(num1 + num2);

// Hàm toán học trong JS
// Math.floor(): hàm làm tròn xuống
// console.log(Math.floor(3.9123));
// console.log(Math.floor(3.1));

// // Math.ceil(): hàm làm tròn lên
// console.log(Math.ceil(5.2));

// Math.round: hàm làm tròn về số gần nhất
// console.log(Math.round(3.4)); // làm tròn về 3
// console.log(Math.round(3.6)); // làm tròn lên 4

// // Math.random(): sinh ra các số ngẫu nhiên từ 0 cho tới nhỏ hơn 1
// console.log(Math.random());
// // BT: sử dụng hàm Math.random và 1 hàm làm tròn số để tạo
// // ra 1 số ngẫu nhiên 2 chữ số < 100
// console.log(Math.floor(Math.random() * 100));

// // Math.sqrt: tìm căn bậc 2 của 1 số
// console.log(Math.sqrt(4)); // 2

// // Math.pow: Hàm tính số mũ
// console.log(Math.pow(2, 3)); // 8

// // Math.abs: Hàm trị tuyệt đối
// console.log(Math.abs(-1)); // 1

// BT: tìm số lớn nhất trong 3 số a, b, c
let a = 99;
let b = 24;
let c = 5;
let maxNumber = a;

if (b > maxNumber) {
  maxNumber = b;
}

if (c > maxNumber) {
  maxNumber = c;
}

// logic có sử dụng if..else, so sánh, gán lại biến

//console.log(maxNumber); // 3

// Math.max(): Tìm ra số lớn nhất
console.log(Math.max(99, 24, 5)); //99
// Math.min(): Tìm ra số bé nhất
console.log(Math.min(99, 24, 5)); // 5

// [KIỂU DỮ LIỆU BOOLEAN]
console.log(true);
console.log(false);

// Giá trị Falsy: là 9 giá trị phía dưới còn lại là Truthy
// false, 0, -0, 0n, "", null, undefined, NaN, document.all.

if (true) {
  // thực hiện đoạn code trong này nếu điều kiện là true
} else {
  // thực hiện đoạn code trong này nếu điều kiện là false
}

// [KIỂU DỮ LIỆU UNDEFINED VÀ NULL]
// - Kiểu dữ liệu Undefined: là khi khai báo biến nhưng không
// gán trị thì sẽ là undefined
// - Kiểu dữ liệu null: là kiểu dữ liệu rỗng
let today = null; // kiểu dữ liệu null
let tomorrow; // kiểu dữ liệu undefined
