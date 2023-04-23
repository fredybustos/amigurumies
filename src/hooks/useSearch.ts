import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { SearhAmigu } from '../api'
import { useSpinner } from '../context/spinnerContext'
import { AmigurumiProps, addStorage } from '../utils'
import useStorage from './useStorage'
export default function useSearch() {
  const [isLoading, setIsLoading] = useState(false)
  const [outputAI, setOutputAI] = useState('')
  const [value, setValue] = useState('')
  const [selectedStorage, setSelectedStorage] = useState({} as AmigurumiProps)

  const { onOpenLoader, onCloseLoader } = useSpinner()
  const { storage, onClearStorage } = useStorage()

  const onSearch = (query: string) => {
    setIsLoading(true)
    const prompt = `Give me the patterns to create:\n\n"${query}"\n\n into crochet Japanes amigurumi tecnique, if it does not exist, create an exmaple, give me the patterns in Spanish.`

    SearhAmigu(prompt)
      .then(data => {
        const uuid = uuidv4()
        if (data && data.choices && data.choices.length > 0) {
          const { text } = data.choices[0]
          setOutputAI(text as string)
          const newStorage = {
            query,
            id: uuid,
            insert: new Date(),
            text: text as string
          }
          addStorage('amigurumis', newStorage)
          setSelectedStorage(newStorage)
        }
      })
      .catch(err => {
        console.log('>>>>>>>>>>>err', err)
      })
      .finally(() => {
        onCloseLoader()
        setIsLoading(false)
      })
  }

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }

  const onKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onSearch(value)
      onOpenLoader()
    }
  }

  const onClearValue = () => setValue('')

  const getAmigurumi = (id: string) => {
    const amigu = storage.filter(item => item.id === id)
    setOutputAI(amigu[0].text)
    setSelectedStorage(amigu[0])
  }

  return {
    onClearStorage,
    onClearValue,
    getAmigurumi,
    onKeyDown,
    onChange,
    value,
    storage,
    outputAI,
    isLoading,
    selectedStorage
  }
}
