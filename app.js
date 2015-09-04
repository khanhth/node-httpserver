// Load thư viện http trong nodejs
var http = require('http');

// Định nghĩa cổng cho HTTP server
const PORT = 3000;

// Hàm request handler
function handleRequest(request, response){
    response.end('Hello!\nURL address: ' + request.url);
}

// Khởi tạo server
var server = http.createServer(handleRequest);

// Bắt đầu chạy server
server.listen(PORT, function (err) {
    // Hàm callback: được gọi khi server chạy
	if (!err) {
	    console.log("Server chạy trên cổng: http://localhost:%s", PORT);
	}
});