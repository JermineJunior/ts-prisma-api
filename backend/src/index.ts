import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import router from './routes/auth';
import { authMiddleware } from './middlewares/authMiddleware';
import productRouter from './routes/product';

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.use('/api/auth', router)
app.use('/api/products', productRouter)
app.get('/test', authMiddleware, (req, res) => {
  const id = (req as any).userId;
  res.status(200).json({ message: `access for user with id ${id} is granted` })
})

app.listen(port, () => console.log(`app is running on port ${port}`))
