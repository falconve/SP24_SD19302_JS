// TRUY XUẤT TRONG DOM
// CHỌN VÀO CÁC THẺ (h1, p, span,....)
// Thêm hoặc xoá các thuộc tính (href, class, id, style, ...)

// ĐỂ CHỌN VÀO CÁC THẺ
// CHỌN THEO ID
// document.getElementById('tên id')
console.log(document.getElementById("the-h1"));
console.log(document.getElementById("the-h1"));
// CHỌN THEO CLASS
// document.getElementsByClass('tên class')
//console.log(document.getElementsByClassName("the-h2")[0]);

// BT lấy ra tất cả thẻ h2
let classH2 = document.getElementsByClassName("the-h2"); // [mảng gồm 2 phần tử]
// for (let i = 0; i < classH2.length; i++) {
//   console.log(classH2[i]);
// }

// CHỌN THEO TÊN THẺ
// document.getElementsTagName('tên thẻ')
console.log(document.getElementsByTagName("h2"));
// let theH2 = document.getElementsByTagName("h2") // []
// for(let i = 0; i < theH2.length; i++) {
//     console.log(theH2[i]);
// }

// VỪA CHỌN ĐƯỢC TÊN THẺ, CLASS, ID
// document.querySelector: lấy ra một
// Tên thẻ: document.querySelector('tên thẻ')
// Tên class: document.querySelector('.tên class')
// Tên id: document.querySelector('#tên id')
//console.log(document.querySelector("h3")); // Chỉ lấy ra 1 thẻ h3

// document.querySelectorAll: lấy ra tất cả
// Tên thẻ: document.querySelectorAll('tên thẻ')
// Tên class: document.querySelectorAll('.tên class')
// Tên id: document.querySelectorAll('#tên id')
console.log(document.querySelectorAll("h3")); // Chỉ lấy ra 1 thẻ h3
// BT: Lấy ra tất cả các thẻ h4 theo class
// sử dụng document.querySelectorAll

let theH4 = document.querySelectorAll(".the-h4");
for (let i = 0; i < theH4.length; i++) {
  console.log(theH4[i]);
}

//BT: lấy ra các thẻ li của class danh-sach-1
// KQ MONG MUỐN:
/* <li>1</li>
<li>2</li>
<li>3</li>
<li>4</li> */

let theDanhsach = document.querySelectorAll(".danh-sach-1 li");
for (let i = 0; i < theDanhsach.length; i++) {
  console.log(theDanhsach[i]);
}

// VD: lấy ra thẻ input với type = text
// Cách chọn với input khi không có class và id
console.log(document.querySelector('input[type="text"]'));

// BT: lấy ra thẻ a có chứa nội dung là Facebook
console.log(document.querySelector('a[href="http://facebook.com"]'));
