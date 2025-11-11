// khởi tạo mảng lấy các phần tử là thẻ img có class .img__back thẻ cha
const imgs = document.querySelectorAll(".img__back img");
//khởi tạo biến gán bằng nút bấm next
const next = document.querySelector(".button__next button");
// khởi tạo biến gán bằng nút bấm prev
const prev = document.querySelector(".button__prev button");
// khởi tạo biến gán bằng biểu tượng dấu x
const out = document.querySelector(".button__out i");
// khởi tạo biến gán bằng khối chứa các sự kiện sẽ hiển thị
const show = document.querySelector(".img__show");
// khởi tạo biến ảnh của khối trêm
const showImg = document.querySelector(".show__out img");
// khởi tạo 1 biến chạy với giá trị ban đầu = 0
let BienChay = 0;
// duyệt vòng lặp for của các phần tử ảnh
for (let index = 0; index < imgs.length; index++) {
  // mỗi phần tử ảnh sẽ có sự kiện click
  imgs[index].addEventListener("click", function () {
    // dựa vào vị trí index của ảnh thay đổi thuộc tính src của ảnh hiển thị
    showImg.src = imgs[index].src;
    // thêm class active khi click vào ảnh 
    // khi click vào 1 ảnh sẽ lấy vị trí index ảnh đó thay đổi thuộc tính src của khối sẽ hiển thị
    show.classList.add("active");
    // gọi hàm thay đổi biến () gán nó vị trí index của ảnh đang diễn ra sự kiện
    ThayDoiBien(index);
  });
}
// định nghĩa hàm thay đổi biến dựa trên vị trí index được cung cấp
function ThayDoiBien(a) {
  // Biến chạy =  vị trí index của phần tử diễn ra sự kiện
  BienChay = a;
  // gọi đến hàm chay slide()
  ChaySlide();
}
// định nghĩa hàm chay slide() dựa trên biến chạy = vị trí index của phần tử diễn ra sự kiện
function ChaySlide() {
  // mặc định 2 nút next và prev sẽ bị disabled = true 
  // next disabled khi Biến chạy là phần tử cuối
  // prev disabled khi biến chạy là phần tử đầu
  next.disabled = BienChay === imgs.length - 1;
  prev.disabled = BienChay === 0;
  // thêm sự kiện cho nút next khi click
  next.addEventListener("click", function () {
    // biến chạy tăng lên 1 dựa vào đó thay đổi src ảnh tăng lên 1 khi click next
    BienChay++;
    // kiểm tra khi biến chạy khi tăng lên là ptu cuối
    if (BienChay === imgs.length - 1) {
      // nút next sẽ disabled
      next.disabled = true;
      // thay đổi src ảnh dựa trên biến chạy
      showImg.src = imgs[BienChay].src;
    } 
    // nếu biến chạy không là phần tử cuối
    else {
      // cả 2 nút next và prev đều hoạt động được
      next.disabled = false;
      prev.disabled = false;
      showImg.src = imgs[BienChay].src;
    }
  });
  // thêm sự kiện cho nút prev khi click
  prev.addEventListener("click", function () {
    // biến chạy giảm đi 1 
    BienChay--;
    // kiểm tra biến chạy sau khi giảm có là phần tử đầu tiên hay kh
    if (BienChay === 0) {
      // là phần tử đầu tiên nút prev sẽ disabled bị vô hiệu hóa
      prev.disabled = true;
      // thay đổi src ảnh khi biến chạy giảm
      showImg.src = imgs[BienChay].src;

    } 
    // biến chạy kh là phần tử đầu tiên
    else {
      // 2 nút prev và next hoạt động bình thường
      prev.disabled = false;
      next.disabled = false;
      showImg.src = imgs[BienChay].src;
    }
  });
}
// thêm sự kiện cho icon dấu X khi click
out.addEventListener("click", function () {
  // xóa class active khỏi class show__img 
  // đưa trang trở về trạng thái mặc định  
  show.classList.remove("active");
});
