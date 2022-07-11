"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = (app) => {
    app.use((req, res, next) => {
        console.log(`METHOD: ${req.method} URL: ${req.url}`);
        next();
    });
    return;
};
