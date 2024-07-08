// [KIỂU DỮ LIỆU ARRAY (MẢNG)]
// - MẢNG LÀ GÌ ?
// - KHAI BÁO MẢNG
// - PHƯƠNG THỨC (METHOD) TRONG MẢNG (ARRAY)
// - VÒNG LẶP FOR ĐỂ TRUY XUẤT PHẦN TỬ TRONG MẢNG

let a = 1; // number
let b = "abc"; // string
// KHAI BÁO MẢNG SỬ DỤNG DẤU NGOẶC VUÔNG
let c = []; // KHAI BÁO MẢNG RỖNG

// KHAI BÁO MẢNG CÓ GIÁ TRỊ
let arrayList = [1, 1.5, "abc", [0, 1, 2]];
console.log(arrayList);

// TRUY XUẤT PHẦN TỬ TRONG MẢNG
console.log(arrayList[0]); // 1
console.log(arrayList[2]); // abc
console.log(arrayList[3]); // abc
// lấy ra vị trí cuối cùng
console.log(arrayList[arrayList.length - 1]);

// LẤY RA ĐỘ DÀI CỦA MẢNG
console.log(arrayList.length); // 4

// PHƯƠNG THỨC CỦA MẢNG
// THÊM PHẦN TỬ VÀO CUỐI MẢNG (push)
arrayList.push("Tuan Anh", 10, true);

// THÊM PHẦN TỬ VÀO ĐẦU MẢNG (unshift)
arrayList.unshift("124");
console.log(arrayList);

// XOÁ PHẦN TỬ CUỐI MẢNG (pop)
arrayList.pop();
console.log(arrayList);

// XOÁ PHẦN TỬ ĐẦU MẢNG (shift)
arrayList.shift();
console.log(arrayList);

let arrList1 = [1, 2, 3];
let arrList2 = [4, 5, 6];
// NỐI 2 MẢNG (concat)
let arrList3 = arrList1.concat(arrList2);
console.log(arrList3); // [1, 2, 3, 4, 5, 6]

// TÌM PHẦN TỬ TRONG MẢNG (indexOf)
// muốn tìm phần tử nào thì truyền vào
// giữa dấu ngoặc tròn

// Khi tìm được sẽ trả về vị trí trong mảng
console.log(arrList3.indexOf(3));
// Không tìm đc sẽ trả về -1
// (-1 tức là không có phần tử trong mảng)
console.log(arrList3.indexOf(7));

let arrList4 = ["Tuan Anh", 20, true, false];
console.log(arrList4.indexOf("Tuan Anh")); // 0
console.log(arrList4.indexOf(true)); // 2
console.log(arrList4.indexOf(false)); // -1

// VỪA XOÁ VỪA THÊM PHẦN TỬ MỚI (splice)
// .splice(Đối số thứ 1, Đối số thứ 2, Đối số thứ 3)
// - Đối số thứ 1: Vị trí trong mảng (bắt buộc phải có)
// - Đối số thứ 2: số lượng phần tử cần xoá (Nếu không muốn xoá thì truyền số 0)
// - Đối số thứ 3: phần tử muốn thêm
console.log(arrList4.splice(0, 1));
console.log(arrList4);
// BT: Sử dụng splice thêm
// 2 phần tử vào vị trí số 3 trong mảng
console.log(arrList4.splice(2, 1, 1, "string"));
console.log(arrList4);

// CHUYỂN CHUỖI THÀNH MẢNG (split)
let str1 = "Chuỗi 1";
let str2 = "Chuỗi 2";
let str3 = "Chuỗi 3";

// B1: nối thành 1 chuỗi
let str = `${str1}|${str2}|${str3}`;
console.log(str);

// B2: CHUYỂN CHUỖI THÀNH MẢNG
let strToArr = str.split("|");
console.log(strToArr);
// ["Chuỗi 1", "Chuỗi 2", "Chuỗi 3"]

// CHUYỂN MẢNG THÀNH CHUỖI (join)
let arrList5 = ["a", "b", "c", "d", "e", "f"];
console.log(arrList5.join(""));

// VÒNG LẶP FOR
// for (let i = 0; i < 10; i++) {
//   console.log(`hello world lần ${i}`);
// }

// DÙNG VÒNG LẶP TRONG MẢNG
for (let i = 0; i < arrList5.length; i++) {
  console.log(arrList5[i]);
}
