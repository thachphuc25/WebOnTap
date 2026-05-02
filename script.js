const questions = [
  {
    question:
      "Câu 1. Với các phiên bản của hệ điều hành mã nguồn mở như Linux, bạn hãy chỉ ra khuyết điểm chính mà các phiên bản của linux đều gặp phải?",
    answers: [
      {
        text: "Không có tổ chức nào chịu trách nhiệm về kỹ thuật phát triển Linux",
        correct: false,
      },
      { text: "Users không quen sữ dụng Linux", correct: false },
      {
        text: "Khả năng tương thích với phần cứng mới còn hạn chế",
        correct: true,
      },
      {
        text: "Mã nguồn mở nên ai cũng có thể phát triển thêm",
        correct: false,
      },
    ],
  },
  {
    question:
      "Câu 2. Hãy chọn phát biểu đúng trong các phát biểu dưới đây về hệ điều hành Linux?",
    answers: [
      { text: "Linux là hệ điều hành đa nhiệm", correct: true },
      { text: "Linux là hệ điều hành đơn nhiệm", correct: false },
      { text: "Linux chỉ thích hợp làm hệ điều hành nhúng", correct: false },
      {
        text: "Linux không thích hợp cho người dùng cuối (end user)",
        correct: false,
      },
    ],
  },
  {
    question:
      "Câu 3. Linux cung cấp một số chương trình xử lý văn bản cho users sữ dụng. Chương trình xử lý văn bản nào sau đây Linux không hỗ trợ?",
    answers: [
      { text: "vi", correct: false },
      { text: "nroff", correct: false },
      { text: "emacs", correct: false },
      { text: "notepad", correct: true },
    ],
  },
  {
    question:
      "Câu 4. Giả sử bạn đang mở cửa sổ Shell , lệnh gì sau đây dùng để xem ngày giờ hiện tại của hệ thống ?",
    answers: [
      { text: "info", correct: false },
      { text: "time", correct: false },
      { text: "datetime", correct: false },
      { text: "date", correct: true },
    ],
  },
  {
    question:
      "Câu 5. Khi mở cửa sổ lệnh (command-line), ta thấy dấu nhắc lệnh xuất hiện và chờ user nhập lệnh để thực thi. Toàn bộ dấu nhắc lệnh trong cửa sổ command-line có bao nhiêu thành phần ?",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
      { text: "5", correct: false },
    ],
  },
  {
    question:
      "Câu 6. Bạn đang remote access từ một máy tính Windows vào server Linux để làm việc. bạn muốn thoát khỏi phiên làm việc này, lệnh nào sau đây bạn cần thực hiện?",
    answers: [
      { text: "exit", correct: false },
      { text: "quit", correct: false },
      { text: "break", correct: false },
      { text: "logout", correct: true },
    ],
  },
  {
    question:
      "Câu 7. Trong linux, cửa sổ command-line dùng để thực thi các lệnh của user. Cú pháp đầy đủ của một lệnh gồm bao nhiêu thành phần?",
    answers: [
      { text: "1", correct: false },
      { text: "2", correct: false },
      { text: "3", correct: true },
      { text: "4", correct: false },
    ],
  },
  {
    question:
      "Câu 8. Khi gõ lệnh liệt kê các tập tin và thư mục trong cửa sổ shell của Linux, ta có thể sử dụng các ký tự đại diện. Ký tự nào sau đây đại diện cho 1 ký tự",
    answers: [
      { text: "*", correct: false },
      { text: "?", correct: true },
      { text: "~", correct: false },
      { text: "!", correct: false },
    ],
  },
  {
    question:
      "Câu 9. Nhân viên tamlv là quản trị hệ thống mạng công ty. Tài khoản tamlv là tài khoản thường giống như các nhân viên khác trong công ty. Nhân viên tamlv remote access vào Linux server với tài khoản tamlv để cấu hình hệ thống. Để hoàn thành công việc , user tamlv cần làm gì sau đây?",
    answers: [
      { text: "sử dụng tài khoản tamlv để cấu hình hệ thống", correct: false },
      { text: "chuyển qua tài khoản root để cấu hình hệ thống", correct: true },
      {
        text: "kết hợp cả 2 tài khoản cùng lúc để dễ làm việc",
        correct: false,
      },
      {
        text: "Khi remote vào server với tài khoản nào thì dùng chính tài khoản đó để cấu hình",
        correct: false,
      },
    ],
  },
  {
    question:
      "Câu 10. Bạn đang sử dụng ứng dụng vi để soạn thảo văn bản. Bạn muốn thoát khỏi vi và không muốn lưu nội dung đã soạn thảo vào file. Nhóm lệnh nào bạn cần thực hiện",
    answers: [
      { text: "Nhấn phím I và gõ lệnh :q để thoát", correct: false },
      { text: "Nhấn phím ESC và gõ lệnh :wq để thoát", correct: false },
      { text: "Gõ lệnh :q để thoát", correct: false },
      { text: "Nhấn phím ESC và gõ lệnh :q để thoát", correct: true },
    ],
  },
  {
    question:
      "Câu 11. Giả sử bạn dùng lệnh vi để soạn thảo văn bản. Sau khi soạn thảo văn bản xong, bạn muốn lưu file với tên file là vanban.txt. Cú pháp nào bạn cần sử dụng?",
    answers: [
      { text: "Nhấn phím I và gõ lệnh :wq để lưu", correct: false },
      { text: "Nhấn phím ESC và gõ lệnh :wq để lưu", correct: false },
      { text: "Nhấn phím ESC và gõ lệnh :wq vanban.txt để lưu", correct: true },
      { text: "Nhấn phím I và gõ lệnh :wq vanban.txt để lưu", correct: false },
    ],
  },
  {
    question:
      "Câu 12. Bạn đang sử dụng cửa sổ Shell và dùng lệnh vi để soạn thảo văn bản. Trong khi đang soạn thảo, bạn muốn thực hiện vài lệnh cần thiết khác. Giải pháp nào sau đây là thuận tiện nhất?",
    answers: [
      { text: "Lưu và đóng file tạm thời rồi quay lại", correct: false },
      { text: "Mở cửa sổ Shell khác để thực hiện lệnh", correct: true },
      { text: "Vẫn có thể thực hiện lệnh ngay", correct: false },
      { text: "Phải kết thúc soạn thảo mới làm được", correct: false },
    ],
  },
  {
    question:
      "Câu 13. Người quản trị thường dùng máy tính cá nhân kết nối vào máy chủ Linux để làm việc. Công cụ nào sau đây đáp ứng được nhu cầu trên?",
    answers: [
      { text: "Putty", correct: true },
      { text: "Remote", correct: false },
      { text: "Yum", correct: false },
      { text: "Tfip", correct: false },
    ],
  },
  {
    question:
      "Câu 14. Hệ điều hành Linux có nhiều thành phần. Phần cốt lõi của hệ điều hành Linux gọi là gì?",
    answers: [
      { text: "OS", correct: false },
      { text: "Core OS", correct: false },
      { text: "Kernel", correct: true },
      { text: "Modules", correct: false },
    ],
  },
  {
    question:
      "Câu 15. Khi bạn sử dụng Linux ở chế độ command-line, câu nào sau đây không phải là tên của ứng dụng command-line bạn sử dụng?",
    answers: [
      { text: "Terminal", correct: false },
      { text: "Console", correct: false },
      { text: "Shell", correct: false },
      { text: "Text", correct: true },
    ],
    question:
      "Câu 16. Hãy chọn phát biểu sai về dấu nhắc lệnh của Linux trong số các câu sau đây?",
    answers: [
      { text: "Dấu nhắc lệnh mặc định cho normal users là $", correct: false },
      { text: "Dấu nhắc lệnh mặc định là %", correct: true },
      { text: "Dấu nhắc lệnh mặc định cho root users là #", correct: false },
      { text: "Có thể thay đổi dấu nhắc lệnh theo ý của user", correct: false },
    ],
  },
  {
    question:
      "Câu 17. Bạn đang sử dụng cửa sổ Shell với user đang login. Bạn muốn thoát khỏi cửa sổ Shell, lệnh nào sau đây bạn cần thực hiện?",
    answers: [
      { text: "exit", correct: true },
      { text: "quit", correct: false },
      { text: "break", correct: false },
      { text: "logout", correct: false },
    ],
  },
  {
    question:
      "Câu 18. Khi cài Linux với giao diện GUI, có một số loại GUI để lựa chọn. Câu nào sau đây có các loại GUI bạn có thể chọn?",
    answers: [
      { text: "GNOME và IDE", correct: false },
      { text: "KDE và IDE", correct: false },
      { text: "Desktop và GUI", correct: false },
      { text: "GNOME và KDE", correct: true },
    ],
  },
  {
    question:
      "Câu 19. Một phân vùng của đĩa cứng sau khi được tạo ra phải liên kết với 1 thư mục mới được sử dụng. Lệnh liên kết đó là lệnh gì?",
    answers: [
      { text: "map", correct: false },
      { text: "mount", correct: true },
      { text: "mout", correct: false },
      { text: "connect", correct: false },
    ],
  },
  {
    question:
      "Câu 20. Một phân vùng của đĩa cứng được mount đến 1 thư mục là /data. Ta cần xóa bỏ việc mount này. Lệnh nào sau đây thích hợp?",
    answers: [
      { text: "unmount", correct: false },
      { text: "mount off", correct: false },
      { text: "umount", correct: true },
      { text: "Disconnect", correct: false },
    ],
  },
  {
    question:
      "Câu 21. Bạn muốn biết PID của tiến trình hiện hành của cửa sổ Shell đang mở. Bạn cần thực hiện lệnh gì?",
    answers: [
      { text: "echo $$", correct: true },
      { text: "echo PID", correct: false },
      { text: "echo $", correct: false },
      { text: "echo PPID", correct: false },
    ],
  },
  {
    question:
      "Câu 22. Giả sử bạn là quản trị hệ thống Linux, bạn muốn tạo nhiều groups để phục vụ công việc quản lý hệ thống. Cú pháp lệnh tạo group bạn cần thực thi là gì?",
    answers: [
      { text: "# groupadd [groupnames]", correct: true },
      { text: "# group -add [groupnames]", correct: false },
      { text: "# groupadd -U [groupnames]", correct: false },
      { text: "# group -G [groupnames]", correct: false },
    ],
  },
  {
    question:
      "Câu 23. Khi cài Linux với giao diện GUI, trước tiên bạn cần biết Linux có 2 loại GUI nào để chọn lựa cho phù hợp?",
    answers: [
      { text: "KDE và IDE", correct: false },
      { text: "GNOME và IDE", correct: false },
      { text: "GNOME và KDE", correct: true },
      { text: "Desktop và GUI", correct: false },
    ],
  },
  {
    question:
      "Câu 24. Ngay sau khi việc cài Linux hoàn tất, restart và login vào Linux lần đầu tiên, bạn mở Shell và sử dụng lệnh gì để xem username hiện đang logon?",
    answers: [
      { text: "who am i", correct: true },
      { text: "username", correct: false },
      { text: "hostname", correct: false },
      { text: "ID", correct: false },
    ],
  },
  {
    question:
      "Câu 25. Trong cửa sổ shell của Linux, khi liệt kê các tập tin và thư mục con trong một thư mục, ta có thể nhìn thấy tập tin ẩn và tập tin bình thường. Tập tin ẩn khác tập tin không ẩn ở điểm nào?",
    answers: [
      { text: "Màu sắc bị mờ", correct: false },
      { text: "Có dấu chấm ‘.’ trước tên tập tin", correct: true },
      { text: "Có dấu '$' trước tên tập tin", correct: false },
      { text: "Không thể thấy tập tin ẩn", correct: false },
    ],
  },
  {
    question:
      "Câu 26. Trong cửa sổ shell của Linux, khi liệt kê các tập tin và thư mục con trong một thư mục, ta có thể thấy tên thư mục con và tên tập tin. Dấu hiệu nào dùng để nhận biết tên nào là thư mục?",
    answers: [
      { text: "Dấu chấm ở đầu dòng", correct: false },
      { text: "Ký tự d ở đầu dòng", correct: true },
      { text: "Tên thư mục có màu xanh", correct: false },
      { text: "Có từ 'directory' trên dòng", correct: false },
    ],
  },
  {
    question:
      "Câu 27. Bạn sử dụng tài khoản root để login vào máy tính. Bạn tạo 1 tập tin trong 1 thư mục. Giả sử trước đó bạn không thay đổi quyền mặc định. Như vậy quyền mặc định của tập tin đó là gì?",
    answers: [
      { text: "rw-r-r", correct: false },
      { text: "rw-rw-r-", correct: false },
      { text: "rw-rw-rw-", correct: false },
      { text: "rw-r--r--", correct: true },
    ],
  },
  {
    question:
      "Câu 28. Hệ điều hành Linux có một giá trị đặc biệt là umask. Bạn cho biết giá trị umask này có ý nghĩa gì trong hệ thống?",
    answers: [
      { text: "Xác định quyền của file, thư mục", correct: false },
      { text: "Cấp quyền cho file, thư mục", correct: false },
      { text: "Xác định quyền mặc định của file, thư mục", correct: true },
      { text: "Thay đổi quyền của file, thư mục", correct: false },
    ],
  },
  {
    question:
      "Câu 29. Sau khi cài và sử dụng Linux một thời gian, bạn muốn thay đổi địa chỉ IP lâu dài của network-card trong máy tính. Bạn cần thay đổi nội dung trong tập tin nào?",
    answers: [
      { text: "Phụ thuộc vào từng máy", correct: false },
      { text: "ifcfg-etho", correct: false },
      { text: "ifcfg-ens33", correct: true },
      { text: "ifcfg-lo0", correct: false },
    ],
  },
  {
    question:
      "Câu 30. Khi thực hiện các thao tác liên quan tới đĩa cứng: thêm, xóa phân vùng... Bạn thấy các ký hiệu như sda, sdb... Bạn biết đây là loại đĩa nào?",
    answers: [
      { text: "IDE", correct: false },
      { text: "CDROM", correct: false },
      { text: "SCSI", correct: true },
      { text: "NTFS", correct: false },
    ],
  },
  {
    question:
      "Câu 31: Mỗi tiến trình trong Linux có một giá trị gọi là PID. Giá trị PID này là một số nguyên và được đánh số bắt đầu từ bao nhiêu?",
    answers: [
      { text: "0", correct: false },
      { text: "1", correct: true },
      { text: "10", correct: false },
      { text: "1000", correct: false },
    ],
  },
  {
    question:
      "Câu 32: Bạn mới thêm vào máy Linux một đĩa cứng SCSI thứ 3. Đĩa cứng này chưa được sử dụng. Bạn muốn partition nó. Bạn dùng lệnh nào sau đây?",
    answers: [
      { text: "fdisk /dev/sdc 1", correct: false },
      { text: "fdisk /dev/sdc", correct: true },
      { text: "fdisk sdc", correct: false },
      { text: "fdisk /dev/sdb", correct: false },
    ],
  },
  {
    question:
      "Câu 33: Linux có giao diện đa cửa sổ; Có phần dành cho servers, có phần dành cho clients. Phần dành cho servers có tên gọi là gì?",
    answers: [
      { text: "Server GUI", correct: false },
      { text: "Multiple windows", correct: false },
      { text: "Multiple users", correct: false },
      { text: "X server", correct: true },
    ],
  },
  {
    question:
      "Câu 34: Hệ thống giao diện của Linux có thể dùng cho servers, có thể dùng cho clients. Phần dùng cho Clients gọi là gì?",
    answers: [
      { text: "Desktop", correct: false },
      { text: "X window manager", correct: true },
      { text: "Client windows", correct: false },
      { text: "GUI", correct: false },
    ],
  },
  {
    question:
      "Câu 35: Thành phần hoặc chức năng nào sau đây không dành cho nhãn (kemel) của hệ điều hành Linux?",
    answers: [
      { text: "Lưu trữ dữ liệu", correct: true },
      { text: "Quản lý tất cả hoạt động của hệ điều hành", correct: false },
      { text: "Bao gồm nhiều module", correct: false },
      { text: "Tương tác với phần cứng", correct: false },
    ],
  },
  {
    question:
      "Câu 36: Khi sử dụng cửa số Shell trong Linux; Để biết tên Shell đang sử dụng, bạn sử dụng lệnh gì?",
    answers: [
      { text: "sysinfo", correct: false },
      { text: "shell -$", correct: false },
      { text: "info -name", correct: false },
      { text: "echo $0", correct: true },
    ],
  },
  {
    question:
      "Câu 37: Khi user account của nhân viên thường được tạo, mặc định có một thư mục trùng tên user account cùng được tạo. Khi đó, mặc định user root có quyền gi trên thư mục đỏ?",
    answers: [
      { text: "Không có quyền", correct: false },
      { text: "Có quyền read", correct: false },
      { text: "Có quyền xem nội dung trong thư mục", correct: false },
      { text: "Có toàn quyền", correct: true },
    ],
  },
  {
    question:
      "Câu 38: Trong các câu lệnh chuyển thư mục sau đây, câu lệnh nào sử dụng đường dẫn tuyệt đối?",
    answers: [
      { text: "#cd …/./baitap", correct: false },
      { text: "# cd docs", correct: false },
      { text: "#cd ../data", correct: false },
      { text: "#cd /data/test", correct: true },
    ],
  },
  {
    question:
      "Câu 40: Trong Linux, đề cấp quyền cho users và groups trên một tập tin, bạn sử dụng lệnh gì trong số các lệnh sau đây?",
    answers: [
      { text: "# chmod", correct: true },
      { text: "# grand", correct: false },
      { text: "# permission", correct: false },
      { text: "# lets", correct: false },
    ],
  },
  {
    question:
      "Câu 41: Linux quản lý các partitions của các đĩa cứng dưới dạng các tập tin và chúng được lưu trong một thư mục. Bạn hãy cho biết đó là thư mục gì?",
    answers: [
      { text: "/etc", correct: false },
      { text: "/dev", correct: true },
      { text: "/root", correct: false },
      { text: "/hdd", correct: false },
    ],
  },
  {
    question:
      "Câu 42; Phát biểu nào sau đây đóng khi giải thích về processes (tiến trinh)?",
    answers: [
      {
        text: "Process là tiến trình được load vào bộ nhớ để thực thi",
        correct: true,
      },
      { text: "Process là chương trình đã cài vào máy tính", correct: false },
      {
        text: "Process là chương trình đang nằm trên đĩa cứng",
        correct: false,
      },
      {
        text: "Process các chương trình thực thì từ khi máy tính start cho đến shutdown",
        correct: false,
      },
    ],
  },
  {
    question:
      "Câu 43: Có nhiễu loại tiến trình trong hệ thống. Trong đỏ có loại tiền trình gọi là zombie. Bạn hãy cho biết tiến trình zombie là loai tien tinh gi?",
    answers: [
      {
        text: "Là loại tiến trình đã kết thúc hay đã bị killed nhưng vẫn còn nhìn thấy trong hệ thống",
        correct: true,
      },
      { text: "Lá loại tiến trình tự động phát sinh", correct: false },
      { text: "Là loại tiến trình tự động kết thúc", correct: false },
      { text: "Là loại tiến trình không có PID", correct: false },
    ],
  },
  {
    question:
      "Câu 44: Mỗi tiến trình đều có một định danh đề phần biệt tiến trình náy với tiền trình khác. Hãy chọn câu đúng về giá trị định danh này?",
    answers: [
      { text: "Là số nguyên lớn hơn 0 và duy nhất", correct: true },
      { text: "Là số nguyên bất ký nhưng duy nhất", correct: false },
      { text: "Lá số nguyên có giá trị từ 1 đến 108", correct: false },
      { text: "Là số nguyên có giá trị từ 1 đến 1000", correct: false },
    ],
  },
  {
    question:
      "Câu 45: Trong hệ thống có rất nhiều tiến trình. Để xem thông tin của các tiền trình trong hệ thống, bạn thực thì lệnh gì sau đây?",
    answers: [
      { text: "# ps -aux", correct: true },
      { text: "# list -all ps", correct: false },
      { text: "#ps -PID", correct: false },
      { text: "# show -e PID", correct: false },
    ],
  },
  {
    question:
      "Câu 46: Giả sử bạn muốn thực thi lệnh top và muốn lệnh này thực thi dưới dạng tiến trình hậu cảnh, bạn cần phải ra lệnh gi?",
    answers: [
      { text: "# top&", correct: true },
      { text: "#10ps", correct: false },
      { text: "# top#l", correct: false },
      { text: "# top-bg", correct: false },
    ],
  },
  {
    question:
      "Câu 47: Già sử user account ptom không có password. Bạn muốn tạo password cho user ptom này. Bạn cần thực hiện lệnh gi?",
    answers: [
      { text: "passwd ptom", correct: true },
      { text: "password ptom", correct: false },
      { text: "passwd -pass ptom", correct: false },
      { text: "change -pass ptom", correct: false },
    ],
  },
  {
    question:
      "Câu 48: Trong tập tin /etc/group chứa thông tin về các groups trong hệ thống. Mỗi dòng là thông tin của một group. Mỗi dòng thông tin có bao nhiêu phần (cách nhau bởi dầu : ) ?",
    answers: [
      { text: "2", correct: false },
      { text: "3", correct: false },
      { text: "4", correct: true },
      { text: "7", correct: false },
    ],
  },
  {
    question:
      "Câu 49: Giả sử bạn là quản trị hệ thống Linux. Bạn biết lệnh yum có một tập tin tương ứng mà co thể điều chỉnh. Tập tin tương ứng với lệnh yum này có tên là gì và nằm trong thư mục nào?",
    answers: [
      { text: "/etc/yum", correct: false },
      { text: "/etc/yum.conf", correct: true },
      { text: "/yum.conf", correct: false },
      { text: "/sys/yum.conf", correct: false },
    ],
  },
  {
    question:
      "Câu 50: Lệnh liệt kê: ls có một số tùy chọn (options). Với tùy chọn thích hợp có thể cho ta thấy tập tin ẩn trong thư mục. Trong các lệnh liệt kê sau đây, lệnh nào hiển thị tập tin ẩn?",
    answers: [
      { text: "#ls -l [thư-mục]", correct: false },
      { text: "# ls -la [thư-mục]", correct: true },
      { text: "# ls -ld [thư-mục]", correct: false },
      { text: "# ls [thư-mục]", correct: false },
    ],
  },
  {
    question:
      "Câu 51 : Có 2 loại đường dẫn đến tập tin và thư mục trong Linux là đường dẫn tuyệt đối và đường dẫn tương. Bạn muốn biết đường dẫn tuyệt đối của một tệp tin hoặc thư mục, bạn cần thực hiện lệnh nào sau đây?",
    answers: [
      { text: "pwd", correct: true },
      { text: "path", correct: false },
      { text: "pwd [thư-mục]", correct: false },
      { text: "syspath [thu-muc]", correct: false },
    ],
  },
  {
    question:
      "Câu 52: Đường dẫn tuyệt đối là loại đường dẫn từ thư mục gốc đến một thư mục hoặc một tập tin. Trong các câu dưới đây, cầu nào đúng về đường dẫn tuyệt đối?",
    answers: [
      {
        text: "Đường dẫn tuyệt đối bắt đầu từ thư mục làm việc",
        correct: false,
      },
      { text: "Đường dẫn tuyệt đối bắt đầu từ ổ đĩa", correct: false },
      { text: "Đường dẫn tuyệt đối bắt đầu từ thư mục gốc (/)", correct: true },
      { text: "Đường dẫn tuyệt đối bắt đầu từ thư mục /home", correct: false },
    ],
  },
  {
    question:
      "Câu 53: Giá sử user david đã có password nhưng password này rất dễ bị đoán ra. Bạn là người quản trị và bạn muốn đổi password cua user david Bạn cần thực hiện lệnh gì sau đây?",
    answers: [
      { text: "# change passwd david", correct: false },
      { text: "# sudo passwd david", correct: true },
      { text: "# sudo password david", correct: false },
      { text: "# sudo david", correct: false },
    ],
  },
  {
    question:
      "Câu 54: Trong Linux, khi làm việc với quyền trên tập tin và thư mục, ta có thể sử dụng các giá trị số thay cho các ký tự r, w, x khi phân quyền Những dây số nào có thể dùng để cấp quyền?",
    answers: [
      { text: "1,2,4, 8, 16, 32", correct: false },
      { text: "1,2,4", correct: true },
      { text: "0. 1.2,4", correct: false },
      { text: "0, 1.2,3.4, 5, 6, 7", correct: false },
    ],
  },
  {
    question:
      "Câu 55: Bạn được giao quản lý 1 máy chủ Linux lưu trữ dữ liệu trong công ty. Bạn muốn kiểm tra thông tin về các đĩa cứng trong máy. Bạn cần thực hiện lệnh gì sau đây?",
    answers: [
      { text: "# fdisk -1", correct: true },
      { text: "# fdisk", correct: false },
      { text: "# show HDD", correct: false },
      { text: "# HDD -info", correct: false },
    ],
  },
  {
    question:
      "Câu 56: Trong Linux, tập tin/etc/passwd chứa thông tin về user accounts. Mỗi dòng trong tập tin là thông tin của một user. Thông tin của user trên mỗi dòng có bao nhiêu phần (được phân cách bởi dầu :) ?",
    answers: [
      { text: "5", correct: false },
      { text: "6", correct: false },
      { text: "7", correct: true },
      { text: "8", correct: false },
    ],
  },
  {
    question:
      "Câu 57. Linux có nhiều bản phân phối và có các gói phần mềm dùng cho mỗi bản phân phối. Với các bản phân phối RedHat, CentOs, Fedora, gói phần mềm thích hợp nhất để sử dụng là gì?",
    answers: [
      { text: ".rpm", correct: true },
      { text: ".deb", correct: false },
      { text: ".taz", correct: false },
      { text: ".gz", correct: false },
    ],
  },
  {
    question:
      "Câu 58: Linux có nhiên bản phân phối và có các gói phần mềm dùng cho mỗi băn phân phối. Với bản phân phối: Debian, gói phần niềm thích hợp nhất dùng cho Debian là gì?",
    answers: [
      { text: "rpm", correct: false },
      { text: "taz", correct: false },
      { text: ".gz", correct: false },
      { text: ".deb", correct: true },
    ],
  },
  {
    question:
      "Câu 59: Để cài đặt gói phần mềm nằm trên internet (online), bạn thường sử dụng lệnh gi? Hãy chọn câu phù hợp nhất?",
    answers: [
      { text: "rpm", correct: false },
      { text: "yum", correct: true },
      { text: "deb", correct: false },
      { text: "ge", correct: false },
    ],
  },
  {
    question:
      "Câu 60: Giả sử bạn là quản trị hệ thống Linx. Một nhân viên có user  account là abc bị quên password và không thể login vào hệ thống. Bạn cần reset lại password của user này. Lệnh gì bạn cần thực thi?",
    answers: [
      { text: "# reset abc", correct: false },
      { text: "# reset -pass abc", correct: false },
      { text: "# passwd -reset abc", correct: false },
      { text: "# passwd abc", correct: true },
    ],
  },
  {
    question:
      "Câu 61: Bạn vừa găn thêm một đìa cứng IDE thứ 2 vào máy Linux và tiền hành phân vùng đĩa cứng này, bạn cần sử dụng lệnh nào sau đây:",
    answers: [
      { text: "a. fdisk /dev/hdb", correct: true },
      { text: "b. fdisk /dev/hdb1", correct: false },
      { text: "c. fdisk /dev/sdb", correct: false },
      { text: "d. fdisk /dev/sdb1", correct: false },
    ],
  },
  {
    question:
      "Câu 62: Bạn vừa mount một partition với một thư mục. Bạn muốn việc mount này có hiệu quả ngay sau khi khởi động lại máy. Bạn cần làm gì?",
    answers: [
      { text: "a. Khởi động lại máy", correct: false },
      { text: "b, Sửa trong file /etc/fstab rồi khởi động máy", correct: true },
      {
        text: "c. Sau khi mount, làm tiếp lệnh: #service filesystem restart",
        correct: false,
      },
      {
        text: "d. Đợi một thời gian thi hệ thống sẽ có hiệu lực",
        correct: false,
      },
    ],
  },
  {
    question:
      "Câu 63: Để thêm một số users vào các groups bằng cách sửa trực tiếp trong file cầu hình. Bạn cần mở file nào để tiến hành sửa đổi?",
    answers: [
      { text: "a. lero/groups", correct: false },
      { text: "b./home group", correct: false },
      { text: "c. /etc/group", correct: true },
      { text: "d. /etc/groups/group", correct: false },
    ],
  },
  {
    question:
      "Câu 64: Câu lệnh usermod có nhiều options, mỗi option có ý nghĩa riêng. Option -G của lệnh usermod có ý nghĩa gì?",
    answers: [
      { text: "a. Tạo primary group cho user", correct: false },
      { text: "b. Đưa user vào primary group", correct: false },
      { text: "c. Thay đổi comment của users", correct: false },
      { text: "d. Đưa user vào group khác primary group", correct: true },
    ],
  },
  {
    question:
      "Câu 65: Lệnh xóa user account có nhiều options. Nếu bạn dùng lệnh xóa user account mà không sử dụng option nào thì lệnh sẽ làm gì?",
    answers: [
      {
        text: "a. Chi xóa user account, home folder cua user vẫn còn",
        correct: true,
      },
      { text: "b. Xóa tất cả thông tin có liên quan đến user", correct: false },
      { text: "c. Xóa user và xóa luôn home folder cua user", correct: false },
      { text: "d. Xóa user và xóa luôn các group của user đó", correct: false },
    ],
  },
  {
    question:
      "Câu 66: Hãy cho biết giá trị umask mặc định của user root là bao nhiêu?",
    answers: [
      { text: "a. 022", correct: true },
      { text: "b. 002", correct: false },
      { text: "c. 644", correct: false },
      { text: "d. 755", correct: false },
    ],
  },
  {
    question:
      "Câu 67: Muốn thay đổi nội dung trong file /etc/fstab, bạn mở file và thấy có thông tin về UUID. Muốn biết UUID của các partitions. bạn cần sử dụng lệnh gì?",
    answers: [
      { text: "a. Is-partition", correct: false },
      { text: "b. find UUID", correct: false },
      { text: "c. cat", correct: false },
      { text: "d. bik", correct: true },
    ],
  },
  {
    question:
      "Câu 68: Tập tin chứa password của users có nhiều cột thông tin. Cột thứ mấy chứa password của users?",
    answers: [
      { text: "a. 0", correct: false },
      { text: "b. 1", correct: true },
      { text: "c. 2", correct: false },
      { text: "d. 4", correct: false },
    ],
  },
  {
    question:
      "Câu 69: Bạn muốn xem thông tin về password của các groups, bạn phải mở tập tin nào?",
    answers: [
      { text: "a. letc/shadow", correct: false },
      { text: "b. letc/gshadow", correct: true },
      { text: "c./etc/groups", correct: false },
      { text: "d. lete/group", correct: false },
    ],
  },
  {
    question:
      "Câu 70: Bạn muốn xem kích thước của thư mục /data/test, lệnh nào sau đây bạn cần thực hiện?",
    answers: [
      { text: "a. # du /data/test", correct: false },
      { text: "b.# show /data/test", correct: false },
      { text: "c. # du -sh /data/test", correct: true },
      { text: "d. # show -sh /data/test", correct: false },
    ],
  },
  {
    question:
      "Câu 71: Trong các lệnh liệt kê dưới đây, câu lệnh nào hiển  thị UID của tập tin và thư mục con?",
    answers: [
      { text: "a.# ls（thư-mục）", correct: false },
      { text: "b. # Is -la [thư-mục]", correct: false },
      { text: "c. # ls -n (thư-mục]", correct: true },
      { text: "d.# Is -UID [thư-mục ]", correct: false },
    ],
  },
  {
    question:
      "Câu 72: Bạn cần nén 2 tập tin trong thư mục hiện hành là a.txt và b.txt vào tập tin nén ab taz: Lệnh cần thực hiện là gì?",
    answers: [
      { text: "a. # tar -cf ab.taz a.txt b.txt", correct: true },
      { text: "b.# tar ab.tar a.txt b.txt", correct: false },
      { text: "c. # tar -cf a.txt b.txt ab.tar", correct: false },
      { text: "d. # tar -cf ab.tar a.txt, b.txt", correct: false },
    ],
  },
  {
    question:
      "Câu 73: Bạn muốn giải nén tập tin ab.taz vào trong thư mục hiện hành, bạn cần thực hiện lệnh gì sau đây?",
    answers: [
      { text: "a. #tar ab.tar", correct: false },
      { text: "b.# tar -xf ab.taz", correct: true },
      { text: "c. #tar -xf ab.taz a.txt b.txt", correct: false },
      { text: "d. # tar -xf a.txt b.txt", correct: false },
    ],
  },
  {
    question:
      "Câu 74: Bạn muốn xem thông tin về bộ nhớ máy tính (RAM), bạn cần thực hiện lệnh nào sau",
    answers: [
      { text: "a. # show /RAM", correct: false },
      { text: "b.# cat /memory", correct: false },
      { text: "c. # cat /meminfo", correct: false },
      { text: "d. # cat /proc/meminfo", correct: true },
    ],
  },
  {
    question:
      "Câu 75: Bạn biết quyền trên tập tin abc.txt là dãy số: 753. Điều này tương ứng với dày quyền nào trên abc.txt?",
    answers: [
      { text: "a. rwxr-x-wx", correct: true },
      { text: "b. -wxr-x-wx", correct: false },
      { text: "c. rwxrw--wx", correct: false },
      { text: "d. wxrwxrw-", correct: false },
    ],
  },
  {
    question:
      "Câu 76: bạn cấp quyền truy cập trên tập tin abc.txt .bạn muốn cho phép user owner có hoàn toàn quyền ,group chỉ có quyền write và các users khác chỉ có quyền thực thi . giả sử bạn chỉ được sử dụng các chữ số thay vì các ký tự lệnh nào sau đây đúng?",
    answers: [
      { text: "A. #chmod 721 abc.txt", correct: true },
      { text: "B. #chmod 246 abc.txt", correct: false },
      { text: "C. #chmod 127 abc.txt", correct: false },
      { text: "D. #chmod 642 abc.txt", correct: false },
    ],
  },
  {
    question:
      "Câu 77: bạn đã tạo tập tin script tên là btc.sh để thực thi tập tin này bạn cần sử dụng lệnh gì ?",
    answers: [
      { text: "A. #chmod +x btc.sh ; #./btc.sh", correct: true },
      { text: "B. # ./btc.sh", correct: false },
      { text: "C. #chmod btc.sh ; # ./btc.sh", correct: false },
      { text: "D. #chmod +x btc.sh", correct: false },
    ],
  },
  {
    question:
      "Câu 78: bạn là quản trị hệ thống nhân viên abc đã rời khỏi công ty bạn cần xóa tài khoản abc và cả group abc ra khỏi hệ thống bạn cần thực thi lệnh gì",
    answers: [
      { text: "A. #userdel abc", correct: false },
      { text: "B. #userdel -r abc", correct: true },
      { text: "C. #remove -user abc", correct: false },
      { text: "D. #remove abc", correct: false },
    ],
  },
  {
    question:
      "Câu 79: phát biểu nào sau đây đúng về user accounts trong Linux?",
    answers: [
      {
        text: "A. user account phải có password mới logon vào máy được",
        correct: false,
      },
      {
        text: "B. User account có thể logon vào máy mà không cần password",
        correct: false,
      },
      {
        text: "C. User account không có password vẫn có thể logon vào máy tính lần đầu tiên sau đó hệ thống buộc phải thay đổi mật khẩu cho lần logon kế tiếp",
        correct: true,
      },
      {
        text: "D. Nếu user account không có password hệ thống sẽ tự động tạo password cho user và password này trùng với username",
        correct: false,
      },
    ],
  },
  {
    question:
      "Câu 80: bạn muốn xem các tiến trình của một user nào đó bạn cần thực hiện lệnh gì?",
    answers: [
      { text: "A. #ps [username]", correct: false },
      { text: "B. #ps- PID [username]", correct: false },
      { text: "C. #ps -u [username]", correct: true },
      { text: "D. #ps- all [username]", correct: false },
    ],
  },
  // ... (còn lại giữ nguyên logic y chang)
];
let currentQuestionIndex = 0;
let wrongQuestions = [];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

let score = 0;
let totalAnswered = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  wrongQuestions = [];
  score = 0;
  totalAnswered = 0;

  questions.forEach((q) => {
    q.wrongCount = 0;
    q.answeredCorrectly = false;
  });

  restartBtn.classList.add("d-none"); // ẩn nút làm lại
  nextBtn.classList.add("d-none");

  showQuestion();
}

function showQuestion() {
  resetState();

  let question;

  // ưu tiên câu sai nhưng KHÔNG phá index
  if (wrongQuestions.length > 0) {
    question =
      wrongQuestions[Math.floor(Math.random() * wrongQuestions.length)];
  } else {
    question = questions[currentQuestionIndex];
  }

  questionEl.innerText = question.question;

  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn", "btn-outline-dark", "answer-btn");

    button.onclick = () => selectAnswer(button, answer.correct, question);

    answersEl.appendChild(button);
  });
}

function resetState() {
  nextBtn.classList.add("d-none");
  answersEl.innerHTML = "";
}

function selectAnswer(button, correct, question) {
  const buttons = answersEl.children;

  for (let btn of buttons) {
    btn.disabled = true;
  }

  totalAnswered++;

  if (correct) {
    button.classList.add("correct");

    // chỉ cộng điểm 1 lần duy nhất
    if (!question.answeredCorrectly) {
      score += 1;
      question.answeredCorrectly = true;
    }

    wrongQuestions = wrongQuestions.filter((q) => q !== question);
  } else {
    button.classList.add("wrong");

    // ❌ trừ 0.25 mỗi lần sai
    score -= 0.25;
    if (score < 0) score = 0;
    question.wrongCount = (question.wrongCount || 0) + 1;

    if (!wrongQuestions.includes(question)) {
      wrongQuestions.push(question);
    }
  }
  // highlight đáp án đúng
  for (let btn of buttons) {
    if (btn.innerText === question.answers.find((a) => a.correct).text) {
      btn.classList.add("correct");
    }
  }

  nextBtn.classList.remove("d-none");
}

// ✅ FIX CHUẨN: không còn lỗi logic
nextBtn.onclick = () => {
  // nếu còn câu sai → KHÔNG tăng index
  if (wrongQuestions.length > 0) {
    showQuestion();
    return;
  }

  // chỉ tăng khi làm câu mới
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length) {
    showResult();
  } else {
    showQuestion();
  }
};

// ✅ ĐƯA RA NGOÀI (QUAN TRỌNG)
function showResult() {
  questionEl.innerText = "Kết quả của bạn";

  const percent = Math.round((score / questions.length) * 100);

  answersEl.innerHTML = `
  <h5>Điểm: ${score.toFixed(2)}/${questions.length}</h5>
    <hr>
    <h6>Câu sai nhiều nhất:</h6>
    <ul id="wrongList"></ul>
  `;

  const sorted = [...questions]
    .filter((q) => q.wrongCount)
    .sort((a, b) => b.wrongCount - a.wrongCount)
    .slice(0, 5);

  const list = document.getElementById("wrongList");

  if (sorted.length === 0) {
    list.innerHTML = "<li>Không có câu sai</li>";
  } else {
    sorted.forEach((q) => {
      const li = document.createElement("li");
      li.innerText = `${q.question} (sai ${q.wrongCount} lần)`;
      list.appendChild(li);
    });
  }

  nextBtn.classList.add("d-none");
  restartBtn.classList.remove("d-none"); // chỉ xuất hiện ở đây
}

restartBtn.onclick = startQuiz;

startQuiz();
