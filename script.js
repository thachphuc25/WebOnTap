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
  //  {
  //    question:
  //       "Câu 6. Bạn đang remote access từ một máy tính Windows vào server Linux để làm việc. bạn muốn thoát khỏi phiên làm việc này, lệnh nào sau đây bạn cần thực hiện?",
  //     answers: [
  //       { text: "exit", correct: false },
  //       { text: "quit", correct: false },
  //       { text: "break", correct: false },
  //       { text: "logout", correct: true },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 7. Trong linux, cửa sổ command-line dùng để thực thi các lệnh của user. Cú pháp đầy đủ của một lệnh gồm bao nhiêu thành phần?",
  //     answers: [
  //       { text: "1", correct: false },
  //       { text: "2", correct: false },
  //       { text: "3", correct: true },
  //       { text: "4", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 8. Khi gõ lệnh liệt kê các tập tin và thư mục trong cửa sổ shell của Linux, ta có thể sử dụng các ký tự đại diện. Ký tự nào sau đây đại diện cho 1 ký tự",
  //     answers: [
  //       { text: "*", correct: false },
  //       { text: "?", correct: true },
  //       { text: "~", correct: false },
  //       { text: "!", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 9. Nhân viên tamlv là quản trị hệ thống mạng công ty. Tài khoản tamlv là tài khoản thường giống như các nhân viên khác trong công ty. Nhân viên tamlv remote access vào Linux server với tài khoản tamlv để cấu hình hệ thống. Để hoàn thành công việc , user tamlv cần làm gì sau đây?",
  //     answers: [
  //       { text: "sử dụng tài khoản tamlv để cấu hình hệ thống", correct: false },
  //       { text: "chuyển qua tài khoản root để cấu hình hệ thống", correct: true },
  //       {
  //         text: "kết hợp cả 2 tài khoản cùng lúc để dễ làm việc",
  //         correct: false,
  //       },
  //       {
  //         text: "Khi remote vào server với tài khoản nào thì dùng chính tài khoản đó để cấu hình",
  //         correct: false,
  //       },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 10. Bạn đang sử dụng ứng dụng vi để soạn thảo văn bản. Bạn muốn thoát khỏi vi và không muốn lưu nội dung đã soạn thảo vào file. Nhóm lệnh nào bạn cần thực hiện",
  //     answers: [
  //       { text: "Nhấn phím I và gõ lệnh :q để thoát", correct: false },
  //       { text: "Nhấn phím ESC và gõ lệnh :wq để thoát", correct: false },
  //       { text: "Gõ lệnh :q để thoát", correct: false },
  //       { text: "Nhấn phím ESC và gõ lệnh :q để thoát", correct: true },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 11. Giả sử bạn dùng lệnh vi để soạn thảo văn bản. Sau khi soạn thảo văn bản xong, bạn muốn lưu file với tên file là vanban.txt. Cú pháp nào bạn cần sử dụng?",
  //     answers: [
  //       { text: "Nhấn phím I và gõ lệnh :wq để lưu", correct: false },
  //       { text: "Nhấn phím ESC và gõ lệnh :wq để lưu", correct: false },
  //       { text: "Nhấn phím ESC và gõ lệnh :wq vanban.txt để lưu", correct: true },
  //       { text: "Nhấn phím I và gõ lệnh :wq vanban.txt để lưu", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 12. Bạn đang sử dụng cửa sổ Shell và dùng lệnh vi để soạn thảo văn bản. Trong khi đang soạn thảo, bạn muốn thực hiện vài lệnh cần thiết khác. Giải pháp nào sau đây là thuận tiện nhất?",
  //     answers: [
  //       { text: "Lưu và đóng file tạm thời rồi quay lại", correct: false },
  //       { text: "Mở cửa sổ Shell khác để thực hiện lệnh", correct: true },
  //       { text: "Vẫn có thể thực hiện lệnh ngay", correct: false },
  //       { text: "Phải kết thúc soạn thảo mới làm được", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 13. Người quản trị thường dùng máy tính cá nhân kết nối vào máy chủ Linux để làm việc. Công cụ nào sau đây đáp ứng được nhu cầu trên?",
  //     answers: [
  //       { text: "Putty", correct: true },
  //       { text: "Remote", correct: false },
  //       { text: "Yum", correct: false },
  //       { text: "Tfip", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 14. Hệ điều hành Linux có nhiều thành phần. Phần cốt lõi của hệ điều hành Linux gọi là gì?",
  //     answers: [
  //       { text: "OS", correct: false },
  //       { text: "Core OS", correct: false },
  //       { text: "Kernel", correct: true },
  //       { text: "Modules", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 15. Khi bạn sử dụng Linux ở chế độ command-line, câu nào sau đây không phải là tên của ứng dụng command-line bạn sử dụng?",
  //     answers: [
  //       { text: "Terminal", correct: false },
  //       { text: "Console", correct: false },
  //       { text: "Shell", correct: false },
  //       { text: "Text", correct: true },
  //     ],
  //     question:
  //       "Câu 16. Hãy chọn phát biểu sai về dấu nhắc lệnh của Linux trong số các câu sau đây?",
  //     answers: [
  //       { text: "Dấu nhắc lệnh mặc định cho normal users là $", correct: false },
  //       { text: "Dấu nhắc lệnh mặc định là %", correct: true },
  //       { text: "Dấu nhắc lệnh mặc định cho root users là #", correct: false },
  //       { text: "Có thể thay đổi dấu nhắc lệnh theo ý của user", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 17. Bạn đang sử dụng cửa sổ Shell với user đang login. Bạn muốn thoát khỏi cửa sổ Shell, lệnh nào sau đây bạn cần thực hiện?",
  //     answers: [
  //       { text: "exit", correct: true },
  //       { text: "quit", correct: false },
  //       { text: "break", correct: false },
  //       { text: "logout", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 18. Khi cài Linux với giao diện GUI, có một số loại GUI để lựa chọn. Câu nào sau đây có các loại GUI bạn có thể chọn?",
  //     answers: [
  //       { text: "GNOME và IDE", correct: false },
  //       { text: "KDE và IDE", correct: false },
  //       { text: "Desktop và GUI", correct: false },
  //       { text: "GNOME và KDE", correct: true },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 19. Một phân vùng của đĩa cứng sau khi được tạo ra phải liên kết với 1 thư mục mới được sử dụng. Lệnh liên kết đó là lệnh gì?",
  //     answers: [
  //       { text: "map", correct: false },
  //       { text: "mount", correct: true },
  //       { text: "mout", correct: false },
  //       { text: "connect", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 20. Một phân vùng của đĩa cứng được mount đến 1 thư mục là /data. Ta cần xóa bỏ việc mount này. Lệnh nào sau đây thích hợp?",
  //     answers: [
  //       { text: "unmount", correct: false },
  //       { text: "mount off", correct: false },
  //       { text: "umount", correct: true },
  //       { text: "Disconnect", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 21. Bạn muốn biết PID của tiến trình hiện hành của cửa sổ Shell đang mở. Bạn cần thực hiện lệnh gì?",
  //     answers: [
  //       { text: "echo $$", correct: true },
  //       { text: "echo PID", correct: false },
  //       { text: "echo $", correct: false },
  //       { text: "echo PPID", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 22. Giả sử bạn là quản trị hệ thống Linux, bạn muốn tạo nhiều groups để phục vụ công việc quản lý hệ thống. Cú pháp lệnh tạo group bạn cần thực thi là gì?",
  //     answers: [
  //       { text: "# groupadd [groupnames]", correct: true },
  //       { text: "# group -add [groupnames]", correct: false },
  //       { text: "# groupadd -U [groupnames]", correct: false },
  //       { text: "# group -G [groupnames]", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 23. Khi cài Linux với giao diện GUI, trước tiên bạn cần biết Linux có 2 loại GUI nào để chọn lựa cho phù hợp?",
  //     answers: [
  //       { text: "KDE và IDE", correct: false },
  //       { text: "GNOME và IDE", correct: false },
  //       { text: "GNOME và KDE", correct: true },
  //       { text: "Desktop và GUI", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 24. Ngay sau khi việc cài Linux hoàn tất, restart và login vào Linux lần đầu tiên, bạn mở Shell và sử dụng lệnh gì để xem username hiện đang logon?",
  //     answers: [
  //       { text: "who am i", correct: true },
  //       { text: "username", correct: false },
  //       { text: "hostname", correct: false },
  //       { text: "ID", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 25. Trong cửa sổ shell của Linux, khi liệt kê các tập tin và thư mục con trong một thư mục, ta có thể nhìn thấy tập tin ẩn và tập tin bình thường. Tập tin ẩn khác tập tin không ẩn ở điểm nào?",
  //     answers: [
  //       { text: "Màu sắc bị mờ", correct: false },
  //       { text: "Có dấu chấm ‘.’ trước tên tập tin", correct: true },
  //       { text: "Có dấu '$' trước tên tập tin", correct: false },
  //       { text: "Không thể thấy tập tin ẩn", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 26. Trong cửa sổ shell của Linux, khi liệt kê các tập tin và thư mục con trong một thư mục, ta có thể thấy tên thư mục con và tên tập tin. Dấu hiệu nào dùng để nhận biết tên nào là thư mục?",
  //     answers: [
  //       { text: "Dấu chấm ở đầu dòng", correct: false },
  //       { text: "Ký tự d ở đầu dòng", correct: true },
  //       { text: "Tên thư mục có màu xanh", correct: false },
  //       { text: "Có từ 'directory' trên dòng", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 27. Bạn sử dụng tài khoản root để login vào máy tính. Bạn tạo 1 tập tin trong 1 thư mục. Giả sử trước đó bạn không thay đổi quyền mặc định. Như vậy quyền mặc định của tập tin đó là gì?",
  //     answers: [
  //       { text: "rw-r-r", correct: false },
  //       { text: "rw-rw-r-", correct: false },
  //       { text: "rw-rw-rw-", correct: false },
  //       { text: "rw-r--r--", correct: true },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 28. Hệ điều hành Linux có một giá trị đặc biệt là umask. Bạn cho biết giá trị umask này có ý nghĩa gì trong hệ thống?",
  //     answers: [
  //       { text: "Xác định quyền của file, thư mục", correct: false },
  //       { text: "Cấp quyền cho file, thư mục", correct: false },
  //       { text: "Xác định quyền mặc định của file, thư mục", correct: true },
  //       { text: "Thay đổi quyền của file, thư mục", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 29. Sau khi cài và sử dụng Linux một thời gian, bạn muốn thay đổi địa chỉ IP lâu dài của network-card trong máy tính. Bạn cần thay đổi nội dung trong tập tin nào?",
  //     answers: [
  //       { text: "Phụ thuộc vào từng máy", correct: false },
  //       { text: "ifcfg-etho", correct: false },
  //       { text: "ifcfg-ens33", correct: true },
  //       { text: "ifcfg-lo0", correct: false },
  //     ],
  //   },
  //   {
  //     question:
  //       "Câu 30. Khi thực hiện các thao tác liên quan tới đĩa cứng: thêm, xóa phân vùng... Bạn thấy các ký hiệu như sda, sdb... Bạn biết đây là loại đĩa nào?",
  //     answers: [
  //       { text: "IDE", correct: false },
  //       { text: "CDROM", correct: false },
  //       { text: "SCSI", correct: true },
  //       { text: "NTFS", correct: false },
  //     ],
  //   },

  // ... (còn lại giữ nguyên logic y chang)
];
let currentQuestionIndex = 0;
let wrongQuestions = [];

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");
const restartBtn = document.getElementById("restartBtn");

function startQuiz() {
  currentQuestionIndex = 0;
  wrongQuestions = [];
  score = 0;
  totalAnswered = 0;

  questions.forEach((q) => (q.wrongCount = 0));

  showQuestion();
}
function showQuestion() {
  resetState();

  let question;
  if (wrongQuestions.length > 0 && Math.random() < 0.5) {
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
let score = 0;
let totalAnswered = 0;
function selectAnswer(button, correct, question) {
  const buttons = answersEl.children;

  for (let btn of buttons) {
    btn.disabled = true;
  }

  totalAnswered++;

  if (correct) {
    button.classList.add("correct");

    // ✅ chỉ cộng điểm nếu chưa từng đúng
    if (!question.answeredCorrectly) {
      score++;
      question.answeredCorrectly = true;
    }

    // nếu câu này từng sai thì xóa khỏi danh sách sai
    wrongQuestions = wrongQuestions.filter((q) => q !== question);
  } else {
    button.classList.add("wrong");

    // tăng số lần sai
    question.wrongCount = (question.wrongCount || 0) + 1;

    // thêm vào danh sách sai nếu chưa có
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

nextBtn.onclick = () => {
  currentQuestionIndex++;

  if (currentQuestionIndex >= questions.length && wrongQuestions.length === 0) {
    showResult(); // ✅ thay đoạn "Hoàn thành!" bằng cái này
  } else {
    showQuestion();
  }
  function showResult() {
    questionEl.innerText = "Kết quả của bạn";

    const percent = Math.round((score / questions.length) * 100);

    answersEl.innerHTML = `
    <h5>Điểm: ${score}/${questions.length} (${percent}%)</h5>
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
    restartBtn.classList.remove("d-none");
  }
  questions.forEach((q) => {
    q.wrongCount = 0;
    q.answeredCorrectly = false;
  });
};

restartBtn.onclick = startQuiz;

startQuiz();
