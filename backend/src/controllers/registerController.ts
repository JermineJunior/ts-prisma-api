import express from "express"
import bcrypt from 'bcrypt'
import prisma from "../prisma";


export const register = async (req: express.Request, res: express.Response) => {

  const { user_name, email, password } = req.body
  try {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = await prisma.user.create({
      data: {
        user_name: user_name,
        email: email,
        password: hashedPassword
      }
    });
    res.status(201).json({
      message: 'User Created', user: {
        id: user.id,
        user_name: user.user_name,
        email: user.email
      }
    })
  } catch (error) {
    res.status(400).json({ error: "User already exists or data is invalid" })
  }
}
