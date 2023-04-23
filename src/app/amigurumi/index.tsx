import { useState } from 'react'
import useSearch from '../../hooks/useSearch'
import Clear from '../icons/Clear'
import Close from '../icons/Close'
import Eye from '../icons/Eye'
import './styles.css'

export default function Amigurumi() {
  const {
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
  } = useSearch()

  const [height, setHeight] = useState('100px')

  const handleResize = () => {
    if (height === '100px') {
      return setHeight(`auto`)
    }
    setHeight('100px')
  }

  const output = outputAI.split('\n')

  return (
    <div className="amigurumi-container">
      <figure className="amigurumi-image">
        <img src="/logo2.png" alt="Amigurumi" />
      </figure>
      <div className="amigurumi-search">
        <input
          autoFocus
          type="text"
          value={value}
          placeholder="Buscar..."
          onChange={onChange}
          onKeyDown={onKeyDown}
        />
        <Close
          color="#fff"
          onClick={onClearValue}
          style={{
            right: '10px',
            position: 'absolute',
            backgroundColor: 'transparent'
          }}
        />
      </div>
      <div className="amigurumi-actions">
        <Eye onClick={handleResize} />
      </div>
      <div className="amigurumi-recent" style={{ height }}>
        {storage.map(({ id, query }) => (
          <div
            key={id}
            role="button"
            className={
              selectedStorage.query === query
                ? 'amigurumi-recent-item amigurumi-selected'
                : 'amigurumi-recent-item'
            }
            onClick={() => getAmigurumi(id)}
          >
            <figure>
              <img alt="img-search" src="/default.png" />
            </figure>
            <div className="amigurumi-recent-desc">
              <div className="amigurumi-recent-delete">
                <p>Patrón:</p>
                <Clear onClick={() => onClearStorage(id)} />
              </div>
              <p>{query}</p>
            </div>
          </div>
        ))}
      </div>
      {isLoading ? (
        <p>Searching...</p>
      ) : (
        <>
          {output.length > 1 && (
            <div className="amigurumi-content">
              <h3 className="amigurumi-recent-sub">
                {selectedStorage.query || value}
              </h3>
              {output.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  )
}
