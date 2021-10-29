import {Express} from 'express'
import { searchItems } from '../controllers/item.controller'
import config from 'config'

function itemRoutes(app:Express){
  app.get(`${config.get('basePath')}/items`,searchItems)
}

export default itemRoutes