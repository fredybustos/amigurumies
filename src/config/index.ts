import axios from 'axios'
import { CreateCompletionRequest } from 'openai'

export const OPENAI_API_KEY = import.meta.env.VITE_OPENAI_API_KEY
export const API_URL = import.meta.env.VITE_API_URL

axios.defaults.headers.common['Authorization'] = `Bearer ${OPENAI_API_KEY}`

export const openAIConfig: CreateCompletionRequest = {
  n: 1,
  stop: null,
  temperature: 0.5,
  max_tokens: 2048,
  presence_penalty: 0.5,
  frequency_penalty: 0.5,
  model: 'text-davinci-003'
}
