// khởi tạo biến gán = nút bấm .btn
const btn = document.querySelector(".btn");
// khởi tạo biến gán = khối .container chứa tất cả có phần tử có trong html trên
const thongBao = document.querySelector(".container");
// khởi tạo biến gán với class tương ứng
const closedA = document.querySelector(".close");
const space = document.querySelector(".space");
const dauX = document.querySelector(".fa-solid")

// nút bấm thêm sự kiện khi click sẽ thêm class .active vào thẻ có class .container
// giúp hiển thị phần thông báo đã được ẩn 
btn.addEventListener("click", function () {
  thongBao.classList.add("active");
});

// tạo 1 hàm giúp xóa bỏ class .active khỏi thẻ .container
// giúp ẩn lại phần thông báo trên
function closed() {
  thongBao.classList.remove("active");
}
// 3 biến có thể xóa được lớp .active khỏi lớp .container
// click vào nền 
space.addEventListener("click", closed);
// click nút close có trong thông báo
closedA.addEventListener("click", closed);
// click biểu tượng dấu x có trong thông báo
dauX.addEventListener("click" , closed)
