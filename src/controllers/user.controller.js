import HttpStatus from 'http-status-codes';
import * as UserService from '../services/user.service';

// user registration
export const register = async (req, res, next) => {
  try {
    const data = await UserService.register(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User registered successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};


// user login
export const login = async (req, res, next) => {
  try {
    const data = await UserService.login(req.body);
    
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'User logined successfully'
    });
  } catch (error) {
    res.status(HttpStatus.BAD_REQUEST).json({
      code: HttpStatus.BAD_REQUEST,
      message: `${error}`
    });
  }
};


