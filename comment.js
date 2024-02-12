// Create web server
const http = require('http');
const fs = require('fs');
const path = require('path');

// 1. Create a web server using the http module
const server = http.createServer((req, res) => {
  // 2. Create a route for the home page
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if (err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(content);
    });
  }
    // 3. Create a route for the about page
    else if (req.url === '/about') {
        fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
        }
    // 4. Create a route for the contact page
    else if (req.url === '/contact') {
        fs.readFile(path.join(__dirname, 'public', 'contact.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);
        });
        }
    // 5. Create a route for the 404 page
    else {
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
            if (err) throw err;
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end(content);
        });
    }
}
);
// 6. Start the web server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));