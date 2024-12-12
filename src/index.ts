import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'
import router from './routes/auth';

const app = express()
app.use(cors())
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.use('/api/auth', router)

app.listen(port, () => console.log(`app is running on port ${port}`))
