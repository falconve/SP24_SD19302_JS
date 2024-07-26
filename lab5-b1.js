// GỢI Ý:
// b1: thêm sự kiện cho nút OK
// b2: viết hàm cho sự kiện
// b3: trong hàm xử lý những logic sau:
// - Lấy được giá trị người dùng nhập vào ô input
// - Lấy được giá tiền từ
// thuộc tính data-price của thẻ label có id là pro
// - tính tiền = giá trị ở ô input nhân với giá tiền của
// thuộc tính data-price
// - hiển thị số tiền vừa tính lên thẻ h3 có id là amount

function tinhTien() {
  // lấy ra giá trị người dùng nhập vào ô input
  let qty = document.querySelector("#qty").value;
  // lấy ra giá tiền từ thẻ label có attribute là data-price
  let price = document.querySelector("#pro").getAttribute("data-price");
  // tính tiền
  let total = qty * price;
  let amount = document.querySelector("#amount");
  // hiển thị số tiền lên thẻ h3 có id là amount
  amount.textContent = total;
}
