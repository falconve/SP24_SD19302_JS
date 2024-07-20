function thongTinSv() {
  let ten = prompt("Nhập tên...");
  let diem = prompt("Nhập điểm ....");
  let obj = {
    hoTen: ten,
    diem: diem,
    hienThi: function () {
      if (this.diem >= 5) {
        return (this.hocLuc = "tốt");
      } else {
        return (this.hocLuc = "chưa tốt");
      }
    },
  };

  document.write(`<h3>Họ và tên: ${obj.hoTen} </h3>`);
  document.write(`<h3>Điểm TB: ${obj.diem} </h3>`);
  document.write(`<h3>Học lực: ${obj.hienThi()} </h3>`);
}
