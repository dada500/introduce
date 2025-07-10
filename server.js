const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif'
};

const server = http.createServer((req, res) => {
  console.log(`요청: ${req.url}`);
  
  // 기본 페이지 설정
  let filePath = '.' + req.url;
  if (filePath === './') {
    filePath = './index.html';
  }

  // 파일 확장자 확인
  const extname = path.extname(filePath);
  let contentType = MIME_TYPES[extname] || 'text/plain';

  // 파일 읽기
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // 페이지를 찾을 수 없음
        fs.readFile('./404.html', (err, content) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(content, 'utf-8');
        });
      } else {
        // 서버 오류
        res.writeHead(500);
        res.end(`서버 오류: ${err.code}`);
      }
    } else {
      // 성공
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

server.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log('로컬에서 접속: http://localhost:8080');
  console.log('네트워크에서 접속하려면 명령 프롬프트에서 ipconfig를 실행하여 IP 주소를 확인하세요.');
  console.log('예: http://192.168.0.xxx:8080');
}); 