// VÒNG LẶP DO .. WHILE
// BREAK & CONTINUE
// HÀM
// - HÀM KHÔNG CÓ THAM SỐ
// - HÀM CÓ THAM SỐ
// - HÀM CÓ GIÁ TRỊ TRẢ VỀ

// VÒNG LẶP DO .. WHILE
// - Chạy đoạn code ở do 1 lần và sau đó mới đi kiểm tra điều kiện ở while
// let num1 = 1;
// do {
//   console.log(num1);
//   num1++;
// } while (num1 < 3);

// BREAK & CONTINUE
// BREAK: Dừng vòng lặp
// for (let i = 0; i < 5; i++) {
//   console.log(i);
//   if (i == 3) {
//     break;
//   }
// }

let dayOfWeek = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ Nhật",
];

// Break: Dừng vòng lặp
for (let i = 0; i < dayOfWeek.length; i++) {
  console.log(dayOfWeek[i]);
  if (dayOfWeek[i] == "Thứ 5") {
    break;
  }
}

// Continue: Bỏ qua một bước lặp

let numberList = [0, 1, 2, 3, 4, 5];

for (let i = 0; i < numberList.length; i++) {
  if (numberList[i] == 3) {
    continue;
  }
  console.log(numberList[i]);
}

// HÀM:
// - Hàm dùng để tái sử dụng lại 1 đoạn code nào đó
// - Để khai báo 1 hàm sử dụng từ khoá function tênHàm(){}

// Hàm không có tham số
function timSoChan() {
  let a = 6;
  if (a % 2 == 0) {
    console.log("Đây là số chẵn");
  }
}

// Chạy (Thực thi) hàm
timSoChan();

// Hàm có tham số
function timSole(soCanTim) {
  if (soCanTim % 2 !== 0) {
    console.log("Đây là số lẻ");
  }
}

// Hàm trả về
function timSoleTraVeKQ(soCanTim) {
  if (soCanTim % 2 !== 0) {
    //console.log(soCanTim);
    return soCanTim;
  }
}

// Khi gọi hàm và truyền giá trị vào trong hàm thì gọi là đối số
// Khi khai báo hàm và truyền giá trị trong hàm thì gọi là tham số
let num2 = timSoleTraVeKQ(7);
let ketQua = 5 + num2;
console.log(ketQua); // 12

// BT:
// Bài 1: Viết hàm tính tổng 2 số
// Bài 2: Viết hàm tính diện tích và chu vi HCN
// - Cho người dùng nhập vào chiều dài và chiều rộng qua prompt

// Bai 1
function tinhTong(soThu1, soThu2) {
  return soThu1 + soThu2;
}

console.log(tinhTong(5, 2));

// Bai 2
function hcn(chieuDai, chieuRong) {
  chieuDai = +prompt("Nhap chieu dai");
  chieuRong = +prompt("Nhap chieu rong");

  let dienTich = chieuDai * chieuRong;
  let chuVi = (chieuDai + chieuRong) * 2;
  return `Diện tích HCN là: ${dienTich} và Chu vi HCN là: ${chuVi}`;
}

//let ketQuaHCN = hcn();
console.log(hcn());
