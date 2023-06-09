import Task from '../models/task.js';

import { ErrorHandler } from '../middlewares/error.js';

export const newTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    await Task.create({ title, description, user: req.user });
    return res.status(201).json({
      success: true,
      message: 'Task added successfully',
    });
  } catch (error) {
    next(error);
  }
};

export const getAllTasks = async (req, res, next) => {
  try {
    const userId = req.user._id;
    const tasks = await Task.find({ user: userId });
    return res.status(200).json({
      success: true,
      tasks,
    });
  } catch (error) {
    next(error);
  }
};

export const updateTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      const error = new ErrorHandler('Task not found', 404);
      return errorMiddleware(error, req, res, next);
    }
    task.isCompleted = !task.isCompleted;
    await task.save();
    return res.status(200).json({
      success: true,
      message: 'Task Updated successfully',
    });
  } catch (error) {
    next(error);
  }
};
export const deleteTask = async (req, res, next) => {
  try {
    const task = await Task.findById(req.params.id);
    if (!task) {
      const error = new ErrorHandler('Task not found', 404);
      return errorMiddleware(error, req, res, next);
    }
    await task.deleteOne();
    return res.status(200).json({
      success: true,
      message: 'Task Deleted successfully',
    });
  } catch (error) {
    next(error);
  }
};
