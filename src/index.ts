import express,{Request,Response} from 'express'
import config from 'config'
import logger from './utils/logger'
import responseTime from 'response-time';
import itemRoutes from './routes/item.routes';
import cors from 'cors';
import { restResponseTimeHistogram, startMetricsServer } from "./utils/metrics";

const app = express()
app.use(express.json());

app.use(
  responseTime((req: Request, res: Response, time: number) => {
    if (req?.route?.path) {
      restResponseTimeHistogram.observe(
        {
          method: req.method,
          route: req.route.path,
          status_code: res.statusCode,
        },
        time * 1000
      );
    }
  })
);

app.enable('trust proxy')


const port = config.get<number>('port')
app.use(cors());  

app.listen(port, () => {
  logger.info(`Backend running on port ${port}`)
  itemRoutes(app);
  startMetricsServer();
})