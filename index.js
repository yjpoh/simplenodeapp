const http = require('http');

const server = http.createServer((req, res) => {
	    if (req.url === '/') {
		            res.end('<h1>Hello, World</h1>');
		        }
});
// coment
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
