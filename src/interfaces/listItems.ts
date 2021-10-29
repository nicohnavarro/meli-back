interface ItemsList {
  author:Author,
  categories:string[],
  items:Item[]
}

type Author={
  name:string,
  lastname:string
}