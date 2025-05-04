import { Request, Response } from "express";

import deleteUserService from "../../services/users/deleteUser.services";

async function deleteUserController(request: Request, response: Response) {
  const userId = request.params.id;

  const deletedUser = await deleteUserService(userId);

  return response
    .status(204)
    .json({ statusCode: 204, message: "Success", user: deletedUser });
}

export default deleteUserController;
