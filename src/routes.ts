import {Express, Request, Response} from 'express'
import { searchItems } from './controllers/item.controller'

function routes(app:Express){
  app.get('/healthcheck',(req:Request,res:Response)=> res.status(200))
}


export default routes