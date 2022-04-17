require("dotenv").config();
import bodyParser from "body-parser";
import express, { Application, NextFunction, Request, Response } from "express";
import helmet from "helmet";

const app: Application = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	res.send("Hello World!");
});

app.get("/webhooks", (req: Request, res: Response) => {
	res.send("Hello World!");
});

app.listen(process.env.PORT || 1108, () => {
	console.log(
		`Server started on http://localhost:${process.env.PORT || 1108}`
	);
});
