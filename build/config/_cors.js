"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app) => {
    app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
        res.setHeader('Access-Control-Allow-Method', 'POST,GET,DELETE,PATCH,OPTIONS,GET');
        res.setHeader('Access-Control-Allow-headers', 'X-Requested-With,Content-Type,Token');
        res.setHeader('Access-Control-Allow-credentials', 'true');
        next();
    });
    return;
};
