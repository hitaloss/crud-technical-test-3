import { Request, Response } from "express";

import deleteUserService from "../../services/users/deleteUser.services";

async function deleteUserController(request: Request, response: Response) {
  const id = request.user.userId;

  const deletedUser = await deleteUserService(id);

  return response
    .status(204)
    .json({ statusCode: 204, message: "Success", user: deletedUser });
}

export default deleteUserController;
