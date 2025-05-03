import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";

import createUserService from "../../services/users/createUser.services";

async function createUserController(request: Request, response: Response) {
  const { username, password } = request.body;

  const newUser = await createUserService({
    username,
    password,
  });

  return response.status(201).json({
    statusCode: 201,
    message: "Success",
    user: instanceToPlain(newUser),
  });
}

export default createUserController;
