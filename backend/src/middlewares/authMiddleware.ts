import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken'

const jwt_secret = process.env.JWT_SECRET;

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  try {
    const payload = jwt.verify(token, jwt_secret) as { userId: number };
    (req as any).userId = payload.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" })
  }
}