import { Request, Response } from "express";
import express from "express";

import { appRoutes } from "./routes";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(express.json());

appRoutes(app);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: "API connected",
  });
});

app.use(errorMiddleware);

app.listen(3000);
