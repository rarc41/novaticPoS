import { Request, Response } from 'express';
import BaseResponse from '../models/response';
import User from '../models/User';
import Controller from './controller';

class UserController extends Controller {
  public getUsers = () => async (req: Request, res: Response) => {
    let response: BaseResponse;
    try {
      const users = await User.find();
      if (users.length > 0) response = this.successResponse(users);
      else response = this.notFoundResponse();
    } catch (error) {
      console.log(error);
      response = this.failResponse(error);
    }
    res.status(response.getCode()).json(response.toJSON());
  };

  public createUser = () => async (req: Request, res: Response) => {
    let response: BaseResponse;
    try {
      if (!req.body.id) response = this.badResponse('Identificador');
      else if (!req.body.user) response = this.badResponse('Usuario');
      else if (!req.body.role) response = this.badResponse('Rol');
      else if (!req.body.state) response = this.badResponse('Estado');
      else {
        const user = await User.findOne({ id: req.body.id });
        if (user) response = this.customResponse(400, 'El ID del usuario ya está registrado', null);
        else {
          const newUser = new User(req.body);
          await newUser.save();
          response = this.createSuccessResponse(newUser);
        }
      }
    } catch (error) {
      console.log(error);
      response = this.failResponse(error);
    }
    res.status(response.getCode()).json(response.toJSON());
  };

  public updateUser = () => async (req: Request, res: Response) => {
    let response: BaseResponse;
    try {
      await User.findOneAndUpdate({ id: req.params.userId }, req.body);
      const user = await User.findOne({ id: req.params.userId });
      response = this.updateSuccessResponse(user);
    } catch (error) {
      console.log(error);
      response = this.failResponse(error);
    }
    res.status(response.getCode()).json(response.toJSON());
  };
}
export default new UserController();
