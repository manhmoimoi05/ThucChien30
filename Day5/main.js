const button = document.querySelector(".icon__search");
// thêm sự kiện khi click vào khối icon
button.addEventListener("click", function () {
  // tác động phần tử cha của khối icon là khối search thêm class active
  // dùng phương thức toggle khi có class này sẽ xóa còn chưa có sẽ thêm 
  this.parentElement.classList.toggle("active");
});
