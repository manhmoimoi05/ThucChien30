// khởi tạo biến gán vào phần tử tương ứng
const inputContent = document.querySelector("#input__text");
const inputSearch = document.querySelector(".input__search");
const buttonRemove = document.querySelector(".remove__all");

// tạo một mảng rỗng
let arrContent = [];

// tạo 1 hàm thêm phần tử khi có 1 phần tử mới được thêm vào mảng
function addElement() {
  // gán phần tử input__search thành 1 phần tử rỗng trên màn hình hiển thị
  inputSearch.innerHTML = ``;
  // duyệt mảng trên
  for (let index = 0; index < arrContent.length; index++) {
    // phần tử input__search cộng chuỗi sau đó in lên mà hình
    // chuỗi này là 1 khối - chứa 1 thẻ p chứa phần nội dung vừa nhập trên ô input
    // - chứa 1 thẻ i này là 1 icon được thêm 1 sự kiện click gọi đến hàm removeElement(trả về vị trí index)
    inputSearch.innerHTML += `<div class="pop__up">
          <p>${arrContent[index]}</p>
          <i onclick="removeElement(${index})" class="fa-solid fa-x"></i>
        </div>`;
  }
  // sau khi duyệt mảng xong tùy vào số phần tử do người dùng nhập vào trên ô input sẽ in ra bấy nhiêu khối trên
  // thêm lại phần tử con vào cuối mảng - phần tử input chứa ô nhập liệu đã bị xóa lúc bắt đầu hàm
  // sau đó khi duyệt xong mảng sẽ thêm lại ô input
  inputSearch.append(inputContent);
  // sau khi thêm 1 phần tử focus trở lại ô input
  inputContent.focus();
}

// hàm xóa tất cả
function removeAll() {
  // nút remove có sự kiện khi click
  buttonRemove.addEventListener("click", function () {
    // cho mảng rỗng lúc này tất cả phần tử trong mảng biến mất
    arrContent = [];
    // chạy lại phương thức này để in ra màn hình 1 mảng rỗng -> không có khối nào dc sinh ra và thêm lại ô input
    addElement();
  });
}
// hàm xóa 1 phần tử tại vị trí index
function removeElement(a) {
  // khi lắng nghe sự kiện click của icon ở vị trí index -> gọi hàm này
  // a là đối số truyền vào = vị trí index tương ứng khi duyệt mảng
  // dùng phương thức splice xóa 1 phần tử ở vị trí a  
  arrContent.splice(a, 1);
  // gọi lại phương thức này sau khi làm mới mảng chạy lại từ đầu với 1 phần tử ở vị trí index biến  mất
  addElement();
}
//thêm sự kiện keydown : sự kiện khi nhấn các nút trên bàn phím
// sự kiện này diễn ra trong thẻ input
// gọi hàm có đối số event
// đối số này cung cấp các thuộc tính và phương thức của sự kiện keydown
inputContent.addEventListener("keydown", function (event) {
  // kiểm tra khi ấn xuống là nút enter trên bàn phím
  // event.key trả về tên của các nút trên bàn phím
  if (event.key == "Enter") {
    // cách 2 :
    // lấy giá trị vừa nhập trên ô input
    let textInput = inputContent.value;
    // thêm vào mảng rỗng trên
    arrContent.push(textInput);
    // sau đó mảng chạy và thêm trên màn hình khối chứa nội dung vừa nhập
    addElement();
    // reset lại giá trị vừa nhập vẫn focus vào ô input
    inputContent.value = "";
  }

  // gọi hàm xóa tất cả
  // hàm này thực thi khi có sự kiện click vào button remove ALL
  removeAll();
});
// cách 1 :
// khi phím enter được nhấn vào ô input khởi tạo 1 khối div thêm class pop__up và thêm vào phần tử input__search
//  khởi tạo 1 thẻ div gán vào 1 biến
// let popUp = document.createElement("div");
// // thẻ này được thêm lớp .pop__up được định nghĩa sẵn
// popUp.classList.add("pop__up");
// // phần text của thẻ này được gán bằng biến đã lưu lại giá trị input vừa nhập
// popUp.innerText = textInput;
// // khối chứa thẻ input thêm phần tử con popUp vừa được định nghĩa lên đầu
// inputSearch.prepend(popUp);
// thẻ popUp thêm 1 sự kiện khi click vào chính nó sẽ xóa luôn thẻ đó
// popUp.addEventListener("click", function () {
//   popUp.remove();
// });

// khi phím enter được nhấn trên bàn phím vào ô input sẽ reset lại giá trị này
// reset lại giá trị vừa nhập vào thẻ input bằng cách gán nó bằng 1 chuỗi rỗng
