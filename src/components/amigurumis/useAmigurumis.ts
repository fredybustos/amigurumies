import { useState } from 'react'
import useStorage from './useStorage'
import type { AmigurumiProps } from '@/utils/index'
import { addStorage } from '@/utils/index'
import { v4 as uuidv4 } from 'uuid'

export default function useSearch() {
  const [isLoading, setIsLoading] = useState(false)
  const [outputAI, setOutputAI] = useState('')
  const [value, setValue] = useState('')
  const [selectedStorage, setSelectedStorage] = useState({} as AmigurumiProps)

  const { storage, onClearStorage } = useStorage()

  const onSearch = async (query: string) => {
    setIsLoading(true)

    const formData = new FormData()
    formData.set('prompt', query)

    fetch("/api/completions", {
      method: "POST",
      body: formData
    }).then(async (response) => {
      const uuid = uuidv4()
      const { data } = await response.json();
      setOutputAI(data.message)
      const newStorage = {
        query,
        id: uuid,
        insert: new Date(),
        text: data.message
      }
      addStorage('amigurumis', newStorage)
      setSelectedStorage(newStorage)
    }).catch((error) => {
      console.error(error)
    }).finally(() => {
      setIsLoading(false)
    })
  }
  

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(value)
    }
  }

  const getAmigurumi = (id: string) => {
    const amigu = storage.filter(item => item.id === id)
    setOutputAI(amigu[0].text)
    setSelectedStorage(amigu[0])
  }


  const onClearValue = () => setValue('')


  return {
    onClearStorage,
    onClearValue,
    getAmigurumi,
    onKeyDown,
    onChange,
    outputAI,
    storage,
    value,
    isLoading,
    selectedStorage,
  }
}
