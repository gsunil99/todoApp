import User from '../models/user.js';
import bcrypt from 'bcrypt';
import { sendCookie } from '../utils/features.js';
import ErrorHandler from '../middlewares/error.js';

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if (!user) return next(new ErrorHandler('Invalid Email Id', 400));
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return next(new ErrorHandler('Invalid Password', 400));
    sendCookie(user, res, `welcome!!!, ${user.name}`, 200);
  } catch (error) {
    next(error);
  }
};
export const logout = async (req, res) => {
  return res
    .status(200)
    .cookie('token', '', {
      expires: new Date(Date.now()),
      sameSite: process.env.NODE_ENV === 'DEVELOPMENT' ? 'lax' : 'none',
      secure: process.env.NODE_ENV === 'DEVELOPMENT' ? false : true,
    })
    .json({
      success: true,
      user: req.user,
    });
};

export const createUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) return next(new ErrorHandler('Email already Exist', 404));
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    sendCookie(createdUser, res, 'Registered successfully', 201);
  } catch (error) {
    next(error);
  }
};

export const getMyProfile = async (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user,
  });
};
