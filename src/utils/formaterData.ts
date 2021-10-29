import config from 'config'

export const resultsToListItem = (results: any[]): ListItems => {
  const categories: String[] = ['Mobile', 'Tv'];
  const author: Author = config.get('author');
  const items: Item[] = results.map(formatItem);
  const listItem: ListItems = {
    author,
    categories,
    items
  }
  return listItem;
}

const formatItem = (item: any, index: Number, listItems: Array<any>): Item => {
  const itemGenerated: Item = {
    id: item.id,
    title: item.title,
    price: formatPrice(item.price,item.currency_id),
    condition: item.condition,
    sold_quantity:item.sold_quantity,
    free_shipping:item.free_shipping,
    picture:item.thumbnail
  }
  return itemGenerated;
}

const formatPrice = (amount:Number, currency:String):Price => {
console.log()
  let arrayAmount = amount.toString().split(".");
  const price:Price ={
    currency: currency,
    amount: +arrayAmount[0],
    decimals: arrayAmount[1] ? 0 : +arrayAmount[1]
  }
  return price;
};