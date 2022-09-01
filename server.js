import exp from 'constants';
import express from 'express';
import path from 'path';
import {logger} from './logger.js';
import router from './router/index.js';
import cors from 'cors';

const __dirname = path.resolve();
const PORT = process.env.PORT || 3200;

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.resolve(__dirname, 'views'));

app.use( express.json() );
app.use( express.urlencoded({extended:false}) );


app.use( router );
app.use( logger );
// app.use( express.static(path.resolve(__dirname, 'public')) );

app.get('/', (req, res) => {
    res.render('index', {
        title: 'home page',
        content: 'this is home page'
    });
});

app.get('/list', (req, res) => {
    res.render('list', {
        title: 'list page',
        content: 'this is list page'
    });
});


// app.get('/', (req, res) => {
//     const filePath = path.join(__dirname, 'public', 'index.html');
//     res.sendFile(filePath);
// });

// app.get('/list', (req, res) => {
//     const filePath = path.join(__dirname, 'public', 'list.html');
//     res.sendFile(filePath);
// });


app.listen(PORT);

export default app;



// import http from 'http';

// const server = http.createServer((req, res) => {
//     console.log(req.url);

//     // res.statusCode ='205';
//     // res.setHeader('content-type', 'text/html');

//     if (req.url === '/') {
//         res.statusCode ='205';
//         res.setHeader('content-type', 'text/html');
//         res.end('Home page');
//     } else if (req.url === '/test') {
//         res.end('Test page');
//     } else {
//         res.end('Hello!');
//     }
// });

// server.listen(3000);

// export default server;