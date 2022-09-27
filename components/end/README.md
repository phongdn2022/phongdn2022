# lý thuyết
1. có 2 loại component :
-class component 
-functional component 

2. props :là một object được truyền từ component cha sang component con và được trả về react dom hoặc các componnet khác nhau
state: là một object .State có tác dụng lưu trữ dữ liệu của một component và chỉ được sử dụng trong nội bộ một component mà thôi.
so sánh props và state :
khác nhau:props được truyền từ  componnet cha sang componnet con dữ liệu của props không thay đổi dc trong component con props chỉ dc đọc
state:có thể thây đổi giá trị trong  componnent
giống nhau :cả 2 đều là object để lưa trữ thông tin,nếu cả 2 thây đổi giá trị thì component con sẽ re render lại 

4. HTTP request là thông tin được gửi từ client lên server, để yêu cầu server tìm hoặc xử lý một số thông tin, dữ liệu mà client muốn. HTTP request có thể là một file text dưới dạng XML hoặc Json mà cả hai đều có thể hiểu được.
các phương thức http request :get,post ,delete,put,patch,head
5.framwork: Là một tập hợp các Library đã được đóng gói để hỗ trợ phát triển ứng dụng dựa trên framework đó. Đồng thời, Framework cung cấp các nguyên tắc, cấu trúc của ứng dụng mà chúng ta phải tuân thủ theo nó.
library:Là một tập hợp các chức năng (functions), các lớp (class) được viết sẳn để có thể tái sử dụng. Mỗi function hoặc class phục vụ cho một công việc cụ thể nào đó.
Framework và Library đều cung cấp các tính năng (functions) được viết sẵn để chúng ta có thể tái sử dụng.
– Framework lớn hơn và phức tạp hơn Library.
– Sử dụng Framework bạn phải thay đổi cấu trúc code của dự án (project’s structure) theo các quy tắc của framework đó để có thể sử dụng được các functions mà framework đó cung cấp.
– Chúng ta có thể sử dụng các functions của Library một cách trực tiếp mà không cần thay đổi cấu trúc code của dự án.
– Framework có thể hiểu là một khung chương trình, người dùng bổ sung code và tuân theo quy tắc để tạo ra ứng dụng. Còn Library chỉ cung cấp các chức năng tiện ích hay các class để sử dụng trong quá trình xây dựng ứng dụng.
– Framework hoạt động chủ động. Nghĩa là nó có thể đưa ra các quyết định gọi hoặc bị gọi bởi các Library hay ứng dụng nào đó.
– Library hoạt động bị động. Nghĩa là nó chỉ được gọi khi nào chúng ta cần dùng nó.
redux là một library