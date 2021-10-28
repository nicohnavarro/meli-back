interface ListItems {
  author:Author,
  categories:String[],
  items:Item[]
}

type Author={
  name:String,
  lastname:String
}