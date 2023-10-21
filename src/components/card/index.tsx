import Clear from '@/components/reactIcons/ClearIcon'

export default function Card({
  id,
  query,
  onClearStorage,
  getAmigurumi,
}: {
    id: string
    query: string
    onClearStorage: (arg: string) => void
    getAmigurumi: (arg: string) => void
}) {
  return (
    <a
      key={id}
      role="button"
      href={`/${query}/${id}`}
      onClick={() => getAmigurumi(id)}
      className='flex justify-between rounded-xl px-4 py-2 border border-gray-300 gap-5 h-24'
    >
      <picture className="w-20">
        <img alt="img-search" src="/default.png" className="w-full" />
      </picture>
      <div className="w-[90%] flex flex-col justify-between">
        <div className="flex justify-between items-center mb-2">
          <p className="text-gray-300 text-sm">Patrón:</p>
          <Clear onClick={() => onClearStorage(id)} />
        </div>
        <p className="text-gray-300 text-lg capitalize truncate mb-3">{query}</p>
      </div>
    </a>
  )
}
