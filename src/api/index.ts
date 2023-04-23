import axios from 'axios'
import { CreateCompletionResponse } from 'openai'
import { openAIConfig, API_URL } from '../config'

export const SearhAmigu = async (query: string) => {
  const { data } = await axios.post<CreateCompletionResponse>(
    `${API_URL}/completions`,
    {
      prompt: query,
      ...openAIConfig
    }
  )
  return data
}
