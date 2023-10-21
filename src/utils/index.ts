export type AmigurumiProps = {
  insert: Date
  id: string
  query: string
  text: string
}

export const addStorage = (key: string, value: AmigurumiProps) => {
  const storage =
    (getStorage(key) as [] as Array<AmigurumiProps>) ||
    ([] as Array<AmigurumiProps>)

  const filteredStorage = storage.filter(item => item.id !== value.id)
  const newStorage = [...filteredStorage, { ...value }]

  localStorage.setItem(key, JSON.stringify(newStorage))
}

export const getStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    const storage = localStorage.getItem(key) || null
    const parseStorage = storage
      ? JSON.parse(storage)
      : ([] as Array<AmigurumiProps>)
  
    return parseStorage as Array<AmigurumiProps>
  }
  return [] as Array<AmigurumiProps>
}

export const clearStorage = (key: string, storage: Array<AmigurumiProps>) => {
  localStorage.setItem(key, JSON.stringify(storage))
}
