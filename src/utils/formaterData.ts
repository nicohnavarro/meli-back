import config from 'config'
import { CategoryPath } from './types';
const author: Author = config.get('author');

export const resultsToListItem = (results: any[], categoryPath: CategoryPath[]): ListItems => {
  const categories: String[] = categoryPath.map(e => e.name);
  const items: Item[] = results.map(item => formatItem(item));
  const listItem: ListItems = {
    author,
    categories,
    items
  }
  return listItem;
}

export const formatItem = (item: any, isOne?: Boolean, description?: String, categoryPath?: CategoryPath[]): Item => {
  let itemGenerated: Item = {
    id: item.id,
    title: item.title,
    price: formatPrice(item.price, item.currency_id),
    condition: item.condition,
    free_shipping: item.free_shipping,
    picture: item.thumbnail
  }
  if (isOne) {
    const sold_quantity = item.sold_quantity;
    const categories: String[] | undefined = categoryPath?.map(e => e.name);
    itemGenerated = { ...itemGenerated, author, description, sold_quantity, categories }
  }
  return itemGenerated;
}

const formatPrice = (amount: Number, currency: String): Price => {
  console.log()
  let arrayAmount = amount.toString().split(".");
  const price: Price = {
    currency: currency,
    amount: +arrayAmount[0],
    decimals: arrayAmount[1] ? 0 : +arrayAmount[1]
  }
  return price;
};

