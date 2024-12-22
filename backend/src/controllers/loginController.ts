import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import prisma from "../prisma";
import express from "express"
const jwt_secret = process.env.JWT_SECRET

export const login = async (req: express.Request, res: express.Response) => {
  // login user
  const { email, password } = req.body
  try {
    const user = prisma.user.findUnique(
      {
        where: {
          email
        }
      });
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" })
    }
    const isPasswordValid = await bcrypt.compare(password, (await user).password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" })
    }
    const token = jwt.sign({ userId: (await user).id }, jwt_secret, { expiresIn: '2h' });
    res.status(200).json({ token })
  } catch (error) {
    res.status(500).json({ error: 'Login Failed' })
  }
}
