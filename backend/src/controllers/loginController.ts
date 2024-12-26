import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import prisma from "../prisma";
import express from "express"
import User from '../models/User';
const jwt_secret = process.env.JWT_SECRET
const userClient = prisma.user

export const login = async (req: express.Request, res: express.Response) => {
  // login user
  const { email, password } = req.body
  try {
    const user: User = await userClient.findUnique(
      {
        where: {
          email
        }
      });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" })
    }
    const isPasswordValid = await bcrypt.compare(password, (user).password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" })
    }
    const token = jwt.sign({ userId: (user).id }, jwt_secret, { expiresIn: '2h' });
    const userData = user;
    res.status(200).json({
      user: {
        user_name: userData.user_name, email: userData.email, created_at: userData.createdAt
      }, token
    })
  } catch (error) {
    res.status(500).json({ error: 'Login Failed' })
  }
}
