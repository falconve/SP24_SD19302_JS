// [CẤU TRÚC ĐIỀU KIỆN]
// - IF .. ELSE
//      1. NHẮC LẠI GIÁ TRỊ TRUTHY / FALSY
//      2. TOÁN TỬ SO SÁNH
//      3. TOÁN TỬ LOGIC
// - SWITCH .. CASE
// - TOÁN TỬ BẬC 3
// - VÒNG LẶP
//      1. FOR .. OF
//      2. WHILE

// [TOÁN TỬ SO SÁNH]
// >, <, >=, <=, ==, ===, !==
// KQ trả về: true/false
let a = 3;
let b = 4;

console.log(a < b);

// Falsy là các giá trị sau:
// false, 0, -0, 0n, "", null, undefined, NaN, document.all

if (a < b) {
  console.log("a lớn hơn b");
} else {
  console.log("a nhỏ hơn b");
}

// só sánh ==: so sánh về dữ liệu
// so sánh ===: so sánh cả về dữ liệu và kiểu dữ liệu

let num1 = 3;
let num2 = 4;

// So sánh không bằng (so sánh khác)
console.log(num1 !== num2); // true

let str1 = "a";
let str2 = "b";

// So sánh bằng
console.log(str1 === str2); // false

// [TOÁN TỬ LOGIC]: &&, ||, !
let myVar1 = true;
let myVar2 = false;

if (myVar1 && myVar2) {
  console.log("true");
} else {
  console.log("false"); // false
}

if (myVar1 || myVar2) {
  console.log("true");
} else {
  console.log("false"); // false
}

if (!myVar1 || myVar2) {
  console.log("true"); // true
} else {
  console.log("false");
}

if (myVar1 && !myVar2) {
  console.log("true"); // true
} else {
  console.log("false");
}

// BT:
// Sử dụng if .. else
// Cho người dùng nhập vào điểm 3 môn toán, văn, anh
// Nếu điểm tb của 3 môn toán văn anh
// Điểm > 8 thì là GIỎI
// Điểm 6 - 8 thì là KHÁ
// Điểm < 6 thì là TRUNG BÌNH

// let diemToan = +prompt("Nhập điểm toán: ");
// let diemVan = +prompt("Nhập điểm văn: ");
// let diemAnh = +prompt("Nhập điểm anh: ");

// // Dữ liệu sau khi lấy từ prompt sẽ là kiểu chuỗi (string)
// // Nếu muốn tính toán phải ép kiểu bằng cách sử dụng dấu +
// // trước prompt hoặc trước tên biến

// let diemTB = (diemToan + diemVan + diemAnh) / 3;

// if (diemTB > 8) {
//   console.log("GIỎI");
// } else if (diemTB >= 6 && diemTB <= 8) {
//   console.log("KHÁ");
// } else {
//   console.log("TRUNG BÌNH");
// }

// [SWITCH .. CASE]
// - Trong các case phải có break
// - Nên sử dụng default trong swtich .. case

let status = "1123";

switch (status) {
  case "play":
    console.log("Bạn đang chơi game...");
    break;
  case "setting":
    console.log("Bạn đang cài đặt game...");
    break;
  case "quit":
    console.log("Bạn đã thoát game...");
    break;
  default:
    console.log("Bạn không chọn gì cả ...");
    break;
}

// TOÁN TỬ BẬC 3 (TOÁN TỬ 3 NGÔI):
// Cấu trúc: điều kiện kiểm tra ? true : false
// - Cách viết gọn của if .. else
// - Toán tử 3 ngôi chỉ sử dụng khi logic code ngắn
let age = 18;

// if (age >= 18) {
//   console.log("Bạn đã đủ tuổi đi NVQS");
// } else {
//   console.log("Bạn chưa đủ tuổi");
// }

console.log(age >= 18 ? "Bạn đã đủ tuổi đi NVQS" : "Bạn chưa đủ tuổi");

// [VÒNG LẶP]
// [FOR LOOP]
// let arrList = ["Tuan Anh", 20, true];
// for (let i = 0; i < arrList.length; i++) {
//   console.log(arrList[1]);
// }

// [FOR .. OF]
// CẤU TRÚC:
//
// for (let item of arrList) {
//   console.log(item);
// }

// [VÒNG LẶP WHILE]
// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// BT 1:
// Sử dụng vào lặp while để in ra các số chẵn từ 1 - 20
// B1: sử dụng vào lặp while để in ra các số từ 1 - 20
// B2: trong vào lặp while sử dụng if .. else kết hợp với phép chia
// để tìm ra sỗ chẵn

let number = 1;
while (number < 20) {
  if (number % 2 == 0) {
    console.log(number);
  }
  number++;
}

// BT 2:
// Sử dụng vào lặp while để tính tổng các số lẻ từ 1 - 15
let number2 = 1;
let sum = 0;

while (number2 <= 15) {
  if (number2 % 2 !== 0) {
    sum = sum + number2;
  }
  number2++;
}
console.log(sum);
