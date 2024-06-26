// BIẾN
// KIỂU DỮ LIỆU STRING

// Để khai bao biến thì sử dụng var / let / const + tên biến
var fullName = "Le Bui Tuan Anh"; // biến fullName
//let age = 26; // biến age
const school = "FPOLY";

// [QUY TẮC ĐẶT TÊN BIẾN]
// Tên biến đặt theo quy tắc camelCase
// VD: fullName, lastName, myClass, myAddress

// Biến là danh sách học sinh, động vật, xe, ...
// VD: studentList, animalList, carList

// Với những biến không thay đổi giá trị trong suốt chương trình
// thì sẽ viết hoa toàn bộ
// VD: CMND, PI, DISCOUNT_PERCENT

// console.log(fullName);
// console.log(age);
// console.log(school);
console.log("Khai báo biến với var");
{
  var x = 1;
  {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}
console.log("Khai báo biến với let");
{
  let y = 1;
  {
    let y = 2;
    console.log(y);
  }
  //y = 2;
  console.log(y);
}
console.log("Khai báo biến với const");
// Những biến không muốn thay đổi giá trị thì dùng const
const CMND = 123;
console.log(CMND);
//CMND = 456; // Gán lại giá trị cho biến

// Chỉ sử dụng let và const trong JS
// BT: khai báo 3 biến: tên, địa chỉ, tuổi
// Hiển thị giá trị 3 biến theo 3 cách đã học
let name = "Tuấn Anh";

let address = "Hai Phong";

let age = 26;
// Hiển thị ra tên
// name = "Hùng"; // gán lại giá trị cho biến
// console.log(name);

// // Hiển thị ra địa chỉ
// alert(address);

// // Hiển thị ra tuổi
// document.write(age);

// [KIỂU DỮ LIỆU STRING]
// Dùng dấu + để nối chuỗi hoặc nối biến
// VD: dùng dấu + để nối chuỗi và biến lại với nhau
// console.log(
//   "Tên tôi là: " +
//     name +
//     " " +
//     "Tuổi của tôi là " +
//     age +
//     " " +
//     "Địa chỉ của tôi " +
//     address
// );

// // VD: dùng template string để nối chuỗi và biến
// console.log(
//   `Tên tôi là: ${name}, Tuổi của tôi là: ${age}, Địa chỉ của tôi ${address}`
// );

// let text1 = "Đây là 1 đoạn văn bản";
// // Để lấy ra độ dài của 1 chuỗi (string) dùng .length
// console.log(text.length); // KẾT QUẢ TRẢ VỀ LÀ SỐ
// // Để lấy ra chữ cái đầu tiên trong đoạn văn bản
// // Để lấy ra vị trí cuối cùng thì sử dụng .length - 1
// console.log(text1[text1.length - 1]);

//[PHƯƠNG THỨC(METHOD) CỦA CHUỖI(STRING)]
let myString = "Đây là 1 chuỗi ký tự";
console.log(myString.substring(0, 3));
console.log(myString.substring(4, 6));
// BT lấy ra chữ cuối cùng của biến myString
console.log(myString.substring(myString.length - 2));

// Phương thức concat(nối chuỗi)
let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

// Phương thức toUpperCase
// Dùng để viết hoa đoạn văn bản
let textLowercase = "đoạn văn bảng viết thường";
console.log(textLowercase.toUpperCase());

// Phương thức toLowerCase
// Dùng để viết thường đoạn văn bản
let textUppercase = "ĐOẠN VĂN BẢN VIẾT HOA";
console.log(textLowercase.toLowerCase());
