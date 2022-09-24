//Bước 1: khai báo http module (chạy web)
const http = require("http");

//Bước 2: khai báo port của web server
/*
Note: muốn deploy lên hosting (Heroku)
thì cần phải set port với process.env.PORT
*/
const port = process.env.PORT || 3000;

//Bước 3: tạo web server, set header + code, thêm nội dung cho web
//request : client => server
//response : server => client
const app = http.createServer((request, response) => {
  response.statusCode = 200; // HTTP_OK
  response.setHeader("Content-Type", "text/html");
  response.end("Hello everybody. I had deployed NodeJS to Heroku succeed !");
});

//Bước 4: chạy web bằng cách listen port
//Note: "console.log" không bắt buộc
app.listen(port, () => {
  console.log("Server is listening at http://localhost:" + port);
});
