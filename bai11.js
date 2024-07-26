// CSS BẰNG JS
// fontFamily: đổi font
// b1: truy xuất vào thẻ h1 với id the-h1
let theH1 = document.querySelector("#the-h1");
// b2: CSS cho thẻ h1
// LƯU Ý: ĐỂ CSS TRONG JS luôn luôn dùng .sytle
// CÚ PHÁP: thẻ-cần-css.style.thuộc-tính-css
// text-decoration => textDecoration
// font-family => fontFamily
// font-size => fontSize
theH1.style.fontFamily = "Arial";

// BT:
// - thêm gạch chân: underline
// - đổi cỡ chữ thành 60px

// thêm gạch chân
theH1.style.textDecoration = "underline";
// đổi cỡ chữ
theH1.style.fontSize = "60px";

// ẩn hiện thẻ h1
function anTheH1() {
  let theH1 = document.querySelector("#the-h1");
  if (theH1.style.display == "none") {
    theH1.style.display = "block";
  } else {
    theH1.style.display = "none";
  }
}

// Cách 1
// function doiMauChu() {
//   let red = document.querySelector("#red");
//   let green = document.querySelector("#green");
//   let yellow = document.querySelector("#yellow");
//   let pink = document.querySelector("#pink");

//   red.style.color = "red";
//   green.style.color = "green";
//   yellow.style.color = "yellow";
//   pink.style.color = "pink";
// }

// Cách 2
function doiMauChu() {
  let theP = document.querySelectorAll("p"); // kết quả là mảng

  for (let i = 0; i < theP.length; i++) {
    // Để lấy tên id của 1 thẻ thì sử dụng .id
    theP[i].style.color = theP[i].id; // orange
  }
}

// Sử dụng JS để thêm class vào thẻ
// .classList.add
function mauNen() {
  let divMauNen = document.querySelector("#maunen");
  // thêm class có tên là bg vào div có id là maunen
  divMauNen.classList.add("bg");
}

function xoaMauNen() {
  let divMauNen = document.querySelector("#maunen");
  // xoá class có tên là bg của div có id là maunen
  divMauNen.classList.remove("bg");
}

function xoaVaThem() {
  let divMauNen = document.querySelector("#maunen");
  // Sử dụng toggle để vừa thêm và vừa xoá class
  divMauNen.classList.toggle("bg");
}

function doiDuongDan() {
  let theA = document.querySelector("#theA");
  // Đổi text từ Google -> Facebook
  theA.textContent = "Facebook";
  // Đổi href="https://google.com" -> href="https://facebook.com"
  // Hàm setAttribute nhận 2 tham số:
  // - tham số 1: là attribute của thẻ
  // - tham số 2: là giá trị của attribute
  theA.setAttribute("href", "https://facebook.com");
}

// Lấy thuộc tính của thẻ sử dụng: getAttribute
let theA = document.querySelector("#theA");
// Hàm getAttribute nhận 1 tham số:
// - tham số này là tên thuộc tính của thẻ (VD: href)
console.log(theA.getAttribute("href"));
