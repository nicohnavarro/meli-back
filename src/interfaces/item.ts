interface Item{
  id:String,
  title:String,
  price:Price,
  picture:String,
  condition:String,
  free_shipping:Boolean,
  sold_quantity?:Number,
  description?:String
}

type Price ={
  currency:String,
  amount:Number,
  decimals:Number
}