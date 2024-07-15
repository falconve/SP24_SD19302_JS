// Object (Đối tượng)
// Lập trình hướng đối tượng:
// - Sử dụng mô tả đối tượng ngoài đời thực
// (đồ vật, sự vật, ...)

// Trong object sẽ có:
// - Thuộc tính (đặc tính, đặc điểm)
// - Phương thức (hành động)

// Khai báo 1 object (dấu ngoặc {})
// let tên_object = {key: value}
let emptyObject = {}; // Khai báo 1 object rỗng

// Khai báo 1 object mô tả về 1 con chó
let dog = {
  // Thuộc tính
  name: "meo meo",
  age: 2,
  color: "hồng",
  // Phương thức
  sua: function () {
    return "Gâu gâu...";
  },
};

// Hiển thị object
console.log(dog);

// Truy xuất vào các key của object
// Lấy ra giá trị của key name trong object dog
// CÁCH 1
console.log(dog["name"]);
// CÁCH 2
console.log(dog.sua());

// BT khai báo 1 object mô tả bản thân
// - ít nhất 4 key
// - và 1 phương thức
// Hiển thị ra 2 key trong 1 key là phương thức

let aboutMe = {
  name: "Tuan Anh",
  age: 26,
  address: "Hai Phong",
  noi: function () {
    return "Hello world";
  },
};
// Hiển thị ra tên
console.log(`Tên tôi là: ${aboutMe.name}`);
// Gọi tới phương thức noi
console.log(`Tôi đang nói: ${aboutMe.noi()}`);

// Sử dụng vòng lặp để in tất cả các key trong object
// for .. in (object)
for (const key in aboutMe) {
  // In ra tất cả các key trong object
  console.log(key);
  // In ra tất cả giá trị của các key
  console.log(aboutMe[key]);
}

let dog1 = {
  // Thuộc tính
  name: "chó số 2",
  age: 3,
  color: "đen",
  // Phương thức
  sua: function () {
    return "Gâu gâu...";
  },
};

let dog2 = {
  // Thuộc tính
  name: "chó số 3",
  age: 1,
  color: "trắng",
  // Phương thức
  sua: function () {
    return "Gâu gâu...";
  },
};

// Sử dụng class: để tạo ra 1 khuôn mẫu chung
// (function đặc biệt kết hợp với từ khoá this)

function conCho(name, age, color) {
  this.name = name;
  this.age = age;
  this.color = color;
  this.sua = function () {
    return "Gâu gâu ...";
  };
}

let newDog1 = new conCho("Con chó số 1", 2, "đen");
let newDog2 = new conCho("Con chó số 2", 1, "hồng");
let newDog3 = new conCho("Con chó số 3", 3, "trắng");
let newDog4 = new conCho("Con chó số 4", 5, "cam");
let newDog5 = new conCho("Con chó số 5", 6, "vàng");

console.log(newDog1);

// BT: Tạo 1 button trong html có sự kiện onclick
// Khi ấn sẽ tạo ra 1 đối tượng hcn và hiển thị chiều dài, chiêu rộng
// qua alert
// Viết phương thức tính chu vi & diện tích

// Gợi ý:
function hcn(chieuDai, chieuRong) {
  let obj = {
    chieuDai: chieuDai,
    chieuRong: chieuRong,
    chuVi: function () {
      return (chieuDai + chieuRong) * 2;
    },
    dienTich: function () {
      return chieuDai * chieuRong;
    },
  };
  alert(`Chiều dài: ${obj.chieuDai}`);
  alert(`Chiều rộng: ${obj.chieuRong}`);
  alert(`Chu vi: ${obj.chuVi()}`);
  alert(`Diện tích: ${obj.dienTich()}`);
}
