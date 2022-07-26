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
            message: {
                USER: res.locals.user,
                TOKEN: res.locals.token
            }
        });
        res.locals.user = undefined;
        res.locals.token = undefined;
    }),
    logout: ((req, res) => {
        res.status(200).json({
            message: "Logout"
        });
    }),
    authenticate: ((req, res) => {
        res.status(200).json({
            message: {
                user: res.locals.user
            }
        });
        res.locals.user = undefined;
    })
};
