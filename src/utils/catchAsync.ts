import { Handler, NextFunction, Request, Response } from 'express'

const catchAsync =
  (fn: Handler) => (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err))
  }

export default catchAsync
