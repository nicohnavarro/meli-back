import express from 'express'
import config from 'config'
import logger from './utils/logger'
import responseTime from 'response-time';
import itemRoutes from './routes/item.routes';
import cors from 'cors';

const app = express()
app.use(express.json());
app.enable('trust proxy')

const port = config.get<number>('port')
app.use(cors());  

app.listen(port, () => {
  logger.info(`Backend running on port ${port}`)
  itemRoutes(app);
})