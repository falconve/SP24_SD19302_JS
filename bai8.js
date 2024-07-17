// TIMER
// - setTimeout
// - setInterval

// DOM (Document Object Model)

// setTimeout: Thực hiện 1 công việc sau 1 khoảng thời gian
// Cú pháp: setTimeout(tên_hàm, 2000)
// Lưu ý: setTimeout nhận 2 đối số:
// - Đối số 1: Hàm do mình tự định nghĩa
// - Đối số 2: thời gian tính theo mili giây (VD: 2000 = 2s)
// - Phải có clearTimeout

// VD:
// function sayHello() {
//   alert("Hello world!!!");
// }

// console.log("Sau 5 giây...");
// setTimeout(sayHello, 5000);

// // Huỷ hẹn giờ
// // Lưu ý: clearTimeout chỉ nhận 1 đối số
// clearTimeout(sayHello);

// setInterval: Thực hiện 1 công việc nào đó lặp đi lặp lại trong
// 1 khoảng thời gian
// Cú pháp: setInterval(tên_hàm, thời gian)
// Lưu ý: setInterval nhận vào 2 đối số
// - Đối số 1: hàm do mình tự định nghĩa
// - Đối số 2: thời gian tính theo mili giây (VD: 5000 = 5s)

// VD:
function sayGoodbye() {
  alert("Bye....");
}

let timer = setInterval(sayGoodbye, 3000);

// Muốn dừng setInterval thì sử dụng clearInterval
// clearInterval chỉ nhận vào 1 đối số
// Lưu ý:
// - clearInterval phải viết vào 1 hàm
// - Để thực thi clearInterval phải sử dụng sự kiện (onclick)
function stopTimer() {
  clearInterval(timer);
}

// DOM (Document Object Model):
// dùng để truy cập và thao tác lên HTML

// HTML DOM: dùng để thêm sửa xoá các thẻ và thuộc tính của
// các thẻ HTML

// Xác định đúng cấu trúc trong DOM thì mới truy xuất đúng
