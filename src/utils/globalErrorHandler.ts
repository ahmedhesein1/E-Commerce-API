import { Request, Response, NextFunction } from "express";
import AppError from "./AppError"
export const globalErrorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = 500;
  let status = "error";
  if (err instanceof AppError) {
    statusCode = (err as AppError).statusCode;
    status = (err as AppError).status;
  }

  res.status(statusCode).json({
    success: false,
    status,
    message: err.message,
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
};
