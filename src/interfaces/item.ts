interface Item{
  author?:Author,
  id:string,
  title:string,
  price:Price,
  picture:string,
  condition:string,
  free_shipping:Boolean,
  sold_quantity?:number,
  description?:string,
  categories?:string[]
}

type Price ={
  currency:string,
  amount:number,
  decimals:number
}