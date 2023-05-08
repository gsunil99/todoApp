import express from 'express';
import {
  createUser,
  login,
  logout,
  getMyProfile,
} from '../controllers/user.js';
import { isAuthenticated } from '../middlewares/auth.js';
const router = express.Router();

router.get('/me', isAuthenticated, getMyProfile);

router.post('/new', createUser);
router.post('/login', login);
router.post('/logout', isAuthenticated, logout);

export default router;
