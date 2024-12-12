import express from "express";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";
import prisma from "../prisma";

const router = express.Router()
const jwt_secret = process.env.JWT_SECRET

// authRoutes
// register
router.post('/register', async (req, res) => {
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
})
// login user
router.post('/login', async (req, res) => {
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
})

export default router;