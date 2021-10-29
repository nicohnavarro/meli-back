import { Request, Response } from 'express'
import { getSearchItems } from '../services/item.services';
import { resultsToListItem } from '../utils/formaterData';
import logger from '../utils/logger';

type QueryParams = {
  q: String,
  l?: String
}

export async function searchItems(req: Request<{}, {}, {}, QueryParams>, res: Response) {
  try {
    const query = req.query.q
    const limit = req.query.l ? +req.query.l : 50
    const items = await getSearchItems(query, limit)
    if (!items)
      return res.sendStatus(404);
    const mappedItems = resultsToListItem(items.data.results);
    res.send(mappedItems);
  }
  catch (e: any) {
    logger.error(e)
    return res.status(409).send(e.message)
  }
}