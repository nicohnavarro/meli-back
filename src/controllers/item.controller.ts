import { Request, Response } from 'express'
import { getCategoryPathById, getItem, getItemDescription, getSearchCategory, getSearchItems } from '../services/item.services';
import { formatItem, resultsToListItem } from '../utils/formaterData';
import logger from '../utils/logger';
import { QueryParams } from '../utils/types';

export async function searchItems(req: Request<{}, {}, {}, QueryParams>, res: Response) {
  try {
    const query = req.query.q
    const limit = req.query.l ? +req.query.l : 50
    const category = await getSearchCategory(query, limit);
    const categoryPath = await getCategoryPathById(category.category_id);
    const { data } = await getSearchItems(query, limit)
    if (!data)
      return res.sendStatus(404);
    const mappedItems = resultsToListItem(data.results, categoryPath.path_from_root);
    res.send(mappedItems); 
  }
  catch (e: any) {
    logger.error(e)
    return res.status(409).send(e.message)
  }
}

export async function getItemById(req: Request, res: Response) {
  try {
    const id: string = req.params.id;
    const item = await getItem(id);
    const itemDescription = await getItemDescription(id);
    const itemCategory = await getCategoryPathById(item.category_id)
    res.send(formatItem(item,true, itemDescription.plain_text,itemCategory.path_from_root))
  }
  catch (e: any) {
    logger.error(e)
    return res.status(409).send(e.message)
  }
}