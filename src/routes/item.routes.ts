import {Express} from 'express'
import { getItemById, searchItems } from '../controllers/item.controller'
import config from 'config'

function itemRoutes(app:Express){
  app.get(`${config.get('basePath')}/items`,searchItems)
  app.get(`${config.get('basePath')}/items/:id`,getItemById)
}

export default itemRoutes