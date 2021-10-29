import express from 'express'
import config from 'config'
import logger from './utils/logger'
import responseTime from 'response-time';
import itemRoutes from './routes/item.routes';

const app = express()
app.use(express.json());



const port = config.get<number>('port')

app.listen(port, () => {
  logger.info(`Backend running on port ${port}`)
  itemRoutes(app);
})