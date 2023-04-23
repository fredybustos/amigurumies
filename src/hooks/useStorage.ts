import { getStorage, clearStorage, AmigurumiProps } from '../utils'

export default function useStorage() {
  const storage = getStorage('amigurumis')

  const onClearStorage = (id: string) => {
    const filteredStorage = storage.filter(item => item.id !== id)
    clearStorage('amigurumis', filteredStorage)
  }

  const sortByDate = () => {
    const sorted = storage.sort((a, b) => {
      return new Date(b.insert).getTime() - new Date(a.insert).getTime()
    })
    return sorted
  }

  return {
    onClearStorage,
    storage: sortByDate() || ([] as unknown as AmigurumiProps)
  }
}
