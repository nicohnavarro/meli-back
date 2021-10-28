import express from 'express'
import config from 'config'
import logger from './utils/logger'
import routes from './routes'

const app = express()
const port = config.get<number>('port')

app.listen(port, () => {
  logger.info(`Backend running on port ${port}`)

  routes(app)
})