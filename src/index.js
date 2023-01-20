import express from 'express';
import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';

const privateKey = fs.readFileSync(path.resolve('src/ssl/server.key'));
const certificate = fs.readFileSync(path.resolve('src/ssl/server.cert'));

const credentials = { key: privateKey, cert: certificate };
const app = express();
const httpServer = http.createServer(app);
const httpsServer = https.createServer(credentials, app);

app.use(express.static('public'));

httpServer.listen(3000);
httpsServer.listen(4000);
