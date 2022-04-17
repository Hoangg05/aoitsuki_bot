import { NextFunction, Request, Response } from "express";

function Post(req: Request, res: Response, next: NextFunction) {
	res.send("Hello World!");
}

function Get(req: Request, res: Response, next: NextFunction) {
	res.send("Hello World!");
}

module.exports = {
	Post,
	Get
};
