import config from 'config'
import { CategoryPath, Picture } from './types';
const author: Author = config.get('author');

export const resultsToListItem = (results: any[], categoryPath: CategoryPath[]): ItemsList => {
  const categories: string[] = categoryPath.map(e => e.name);
  const items: Item[] = results.map(item => formatItem(item));
  const itemList: ItemsList = {
    author,
    categories,
    items
  }
  return itemList;
}

export const formatItem = (item: any, isOne?: Boolean, description?: string, categoryPath?: CategoryPath[]): Item => {
  let itemGenerated: Item = {
    id: item.id,
    title: item.title,
    price: formatPrice(item.price, item.currency_id),
    condition: item.condition,
    free_shipping: item.free_shipping,
    picture: isOne ? getHighImage(item.pictures as Picture[]) : item.thumbnail,
  }
  if (isOne) {
    const sold_quantity = item.sold_quantity;
    const categories: string[] | undefined = categoryPath?.map(e => e.name);
    itemGenerated = { ...itemGenerated, author, description, sold_quantity, categories }
  }
  return itemGenerated;
}

const formatPrice = (amount: number, currency: string): Price => {
  let arrayAmount = amount.toString().split(".");
  const price: Price = {
    currency: currency,
    amount: +arrayAmount[0],
    decimals: arrayAmount[1] ? 0 : +arrayAmount[1]
  }
  return price;
};


const getHighImage = (images: Picture[]) => {
  let niceImage = images.find(image => {
    let arraySize = image.size.split("x");
    return arraySize[0] > '500' && arraySize[1] > '500'
  });
  return (niceImage === undefined) ? images[0].secure_url : niceImage.secure_url;
};