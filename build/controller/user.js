"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    create: ((req, res) => {
        res.status(200).json({
            message: "Create"
        });
    }),
    login: ((req, res) => {
        res.status(200).json({
            message: "Login"
        });
    }),
    logout: ((req, res) => {
        res.status(200).json({
            message: "Logout"
        });
    })
};
