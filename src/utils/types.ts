export type CategoryData = {
  category_id: string,
  category_name: string
}

export type CategoryPath = {
  id:string,
  name:string,
}

export type QueryParams = {
  q: string,
  l?: string
}

export type Picture = {
  id: string,
  url: string,
  secure_url:string,
  size:string,
  max_size:string,
  quality:string
}