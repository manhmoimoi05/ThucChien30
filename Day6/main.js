// khởi tạo các biến gán bằng các phần tử tương ứng
const cardKey = document.querySelector("h3.key")
const cardLocation = document.querySelector("h3.location")
const cardWhich = document.querySelector("h3.which")
const cardCode = document.querySelector("h3.code")
const whichMain = document.querySelector(".main__content h2")
const container = document.querySelector(".container")
const alertBox = document.querySelector(".alert")

// để thực hiện yêu cầu bài toán : khi nhấn vào một phím trên bàn phím sẽ hiện ra vị trí .. của phím đó
// chúng ta phải dựa trên đối số event được truyền vào

// dưới đây cấu trúc cơ bản của 1 hàm xử lí sự kiện
// document là phần tử được thêm sự kiện
// addEventListener : cú pháp 
// "keydown" : tên của sự kiện
// function(event){} : hàm xử lí sự kiện  nhận đối số event chứa thông tin chi tiết về sự kiện 
document.addEventListener("keydown" , function(event){
    // đối số event là 1 đối tượng 
    // đối tượng này cung cấp các thuộc tính và phương thức của sự kiện
    // đối tượng event sẽ cung cấp các thuộc tính khác nhau dựa trên loại sự kiện khác nhau
    // mỗi loại sự kiện sẽ có 1 bộ thuộc tính riêng biệt nếu bạn dùng thuộc tính khác trong 1 sự kiện khác sẽ trả về undefined

    // thêm class giúp ẩn đi button và xóa class giúp hiện lại khối container
    alertBox.classList.add("hide")
    container.classList.remove("hide")
   
    // gán các biến =  các thuộc tính riêng biệt của sự kiện "keydown"
    // event.key trả về tên của phím đó trên bàn phím
    cardKey.innerText = event.key
    cardLocation.innerText = event.location
    cardWhich.innerText = event.which
    // event.code trả về mã phím đó trên bàn phím
    cardCode.innerText = event.code
    
    whichMain.innerText = event.which
})