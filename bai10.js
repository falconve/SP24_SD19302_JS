// innerHTML
// textContent
// value
// createElement
// appendChild

// .innerHTML: dùng để tạo ra thẻ html
let theDiv = document.querySelector(".img");
// theDiv.innerHTML =
//   '<img src="https://media-cdn-v2.laodong.vn/storage/newsportal/2023/8/26/1233821/Giai-Nhi-1--Nang-Tre.jpg" />';

// .textContent: dùng để lấy văn bản (text) của thẻ hoặc
// là thay đổi văn bản(text) của thẻ
let pText = document.querySelector("#text");
pText.textContent = "Đoạn văn bản mới";

let pText1 = document.querySelector("#text1");
pText1.textContent = "Văn bản này cũ rồi";

// .value: dùng để lấy giá trị và gán lại giá trị cho thẻ input
let divThongTin = document.querySelector(".thong-tin input");
divThongTin.value;

// createElement
// tạo ra thẻ <p>
let newP = document.createElement("p");
// // đưa thẻ <p> vào trong thẻ body
// document.body.appendChild(newP);
// đưa thẻ <p> vào trong div có id là hoa
let divHoa = document.querySelector("#hoa");
divHoa.appendChild(newP);
// tạo ra đoạn text
let textP = document.createTextNode("hoa phượng");
// đưa đoạn text vào trong thẻ <p>
newP.appendChild(textP);

// LƯU Ý:
// - Để lấy giá trị của input thì dùng .value
// - Còn lại dùng .textContent

// VD: lấy thông tin họ và tên của người dùng khi nhập vào input
// BT: lấy tất dữ liệu của các trường input (viết nhiều hàm)
function layThongTinHoTen() {
  let divThongTin = document.querySelector(".thong-tin input.input-1");
  let valueHoTen = divThongTin.value;
  console.log(valueHoTen);
}

function layThongTinDiaChi() {
  let divThongTin = document.querySelector(".thong-tin input.input-2");
  let valueDiaChi = divThongTin.value;
  console.log(valueDiaChi);
}

function layThongTinSDT() {
  let divThongTin = document.querySelector(".thong-tin input.input-3");
  let valueSDT = divThongTin.value;
  console.log(valueSDT);
}

// VD: viết 1 hàm để lấy hết thông tin
// từ ô input người dùng nhập vào qua sự kiện onclick
function layThongTin() {
  let divThongTin = document.querySelectorAll(".thong-tin input");
  let objThongTin = {
    hoTen: "",
    diaChi: "",
    sdt: "",
  };
  for (let i = 0; i < divThongTin.length; i++) {
    let divThongTinValue = divThongTin[i].value;
  }

  console.log(objThongTin);
}
