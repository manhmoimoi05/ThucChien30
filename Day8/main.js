// khởi tạo biến userName gán bằng thẻ input có id là user_Name
const userName = document.querySelector("#user_Name");
// các phần tử sau tương tự gán bằng các thẻ input có trong file
const email = document.querySelector("#my_email");
const password = document.querySelector("#my_password");
const confirmPassword = document.querySelector("#confirm_password");
// gọi phần tử form là phần tử cha chứa các thẻ input phần tử này gửi thông tin về backend
const loginSubmit = document.querySelector("form");

// xử lí validate form
// khởi tạo hàm hiển thị lỗi 2 đối số truyền vào - thẻ input - tin nhắn lỗi
function showError(input, message) {
  // gọi ra phần tử cha của thẻ input gặp lỗi
  let inputParent = input.parentElement;
  // thêm phần tử cha của thẻ input đó class error lúc này sẽ có thêm hiệu ứng của class error
  inputParent.classList.add("error");
  // ptu cha của ptu input truyền vào hàm gọi ra thẻ small có trong khối cha này
  let errorText = inputParent.querySelector("small");
  // thay đổi đoạn text hiện thị = tin nhắn tùy thuộc vào lỗi gì sẽ hiện thị nó lên màn hình
  errorText.innerText = message;
}

// khởi tạo hàm khi form không xảy ra lỗi
// truyền vào đối số là ptu input không có lỗi
function showSuccess(input) {
  // lấy phần tử cha của ptu input này
  let inputParent = input.parentElement;
  // xóa class error khỏi ptu cha
  inputParent.classList.remove("error");
  // lấy thẻ small của ptu không lỗi
  let errorText = inputParent.querySelector("small");
  // gán nó = chuỗi rỗng -> kh hiển thị lên màn hình
  errorText.innerText = ``;
}

// hàm khi nhập lỗi để trống
// lỗi này xảy ra với cả 4 ptu input nên đối số truyền vào 1 mảng
function errorIsEmpty(arrInput) {
  // khởi tạo biến check gán mặc định = false
  let checkErrorEmpty = false;
  // duyệt mảng đó
  for (let index = 0; index < arrInput.length; index++) {
    // mỗi phần tử sẽ được duyệt vào giá trí được nhập vào ô input sẽ được kiểm tra
    // giá trị nhập vào được xóa bỏ khoảng trống đầu cuối bằng hàm trim()
    arrInput[index].value.trim();
    if (!arrInput[index].value) {
      // kiểm tra giá trị nhập vào của ptu input ở vị trí index này có không phải là 1 chuỗi không
      // đúng -> chuỗi giá trị là rộng , NaN ...
      // lúc này gọi hàm hiện thị lỗi truyền vào ptu input lỗi và đoạn tin nhắn
      showError(arrInput[index], "khum duoc de trong");
      // biến check lỗi sẽ true
      checkErrorEmpty = true;
    } else {
      // sai -> chuỗi trả là 1 chuỗi kí tự hợp lệ
      // gọi hàm hiện thị thành công truyền vào ptu input kh lỗi
      showSuccess(arrInput[index]);
    }
  }
  // trả về false nếu hàm kh lỗi
  // trả về true nếu hàm lỗi
  return checkErrorEmpty;
}
// kiểm tra độ dài của chuỗi nhập vào input
// hàm có đối số ptu input muốn kiểm tra - min số kí tự tối thiểu - max số kí tự tối đa
function errorIsLength(input, min, max) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `khum nho hon ${min} ki tu`);
    // nếu kh đủ số kí tự của min -> hàm trả về true
    return true;
  }
  if (input.value.length > max) {
    showError(input, `khum lon hon ${max} ki tu`);
    // nếu vượt quá số kí tự của max -> hàm trả về true
    return true;
  }
  // nếu kh vướng cả 2 điều kiện trên trả về false
  showSuccess(input);
  return false;
}

// hàm kiểm tra nhập lại mật khẩu có giống với mật khẩu hay không
// truyền vào 2 đối số mà mật khẩu và nhập lại mật khẩu
function errorNotSamePassword(pass, confirmPass) {
  pass.value = pass.value.trim();
  confirmPass.value = confirmPass.value.trim();
  // kiểm tra xem mật khẩu có giống với confirmPassword hay kh
  if (pass.value === confirmPass.value) {
    // nếu đúng gọi hàm thành công 
    showSuccess(confirmPass);
    // hàm trả về false
    return false;
  } else {
    // nếu sai
    // gọi hàm lỗi truyền vào confirmPassword và đoạn tin nhắn 
    showError(confirmPass, "mat khau khong giong tren");
    // hàm trả về true
    return true;
  }
}

// hàm kiểm tra email có hợp lệ hay kh = regex
function errorValidEmail(input) {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  input.value = input.value.trim();
  let emailIsError = !regex.test(input.value);
  if (!emilIsError) {
    showSuccess(input);
  } else {
    showError(input, "email invalid");
  }
}
// gọi sự kiện của thẻ form -> thẻ chứa các thẻ input và button
// nêu button click sẽ tạo ra sự kiện submit gửi giá trị vừa nhập đi nơi khác
loginSubmit.addEventListener("submit", function (event) {
  // ngăn chặn hành vi mặc định của thẻ form bằng phương thức preventDefault() của đối tượng object
  event.preventDefault();

  // khởi tạo biến gán bằng các hàm
  // lúc này các hàm sẽ trả về tru hoặc false
  let emptyIsError = errorIsEmpty([userName, email, password, confirmPassword]);
  let lengthIsError1 = errorIsLength(userName, 3, 10);
  let lengthIsError2 = errorIsLength(password, 3, 10);
  let samePassIsError = errorNotSamePassword(password, confirmPassword);
  let emailInvalidError = errorValidEmail(email);

  // nếu chỉ 1 trong tất cả các giá trị này trả về true -> thì form sẽ lỗi và kh làm gì cả
  // lỗi sẽ được hiện thị dựa vào hàm showError() -> dựa trên các hàm tìm lỗi trên
  if (
    emptyIsError ||
    lengthIsError1 ||
    lengthIsError2 ||
    samePassIsError ||
    emailInvalidError
  ) {
    //do nothing...
  } 
  // nếu tất cả các giá trị đều false -> form kh có lỗi 
  // form kh có lỗi sẽ thực hiên tiếp các công việc tiếp theo khi có 1 form hoàn chỉnh
  else {
    //gọi API , logic , call ...
  }
});
