import { SpinnerProvider } from '../context/spinnerContext'
import Amigurumi from './amigurumi'
import Progress from './progress'

export default function App() {
  return (
    <SpinnerProvider>
      <Progress />
      <Amigurumi />
    </SpinnerProvider>
  )
}
