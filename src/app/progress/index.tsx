import { useSpinner } from '../../context/spinnerContext'
import Spinner from '../spinner'
import './styles.css'

export default function Progress() {
  const { isLoading } = useSpinner()
  const showHideClassName = isLoading
    ? 'modal display-block'
    : 'modal display-none'

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <Spinner />
      </section>
    </div>
  )
}
