import { CloseIcon } from "@/components/reactIcons/CloseIcon"
import { SearchIcon } from "@/components/reactIcons/SearchIcon";
import useSearch from "./useAmigurumis"
import Loading from '@/components/loading'
import Card from "../card";

export default function Amigurumis() {
  const {
    isLoading,
    value,
    storage,
    onChange,
    onKeyDown,
    getAmigurumi,
    onClearValue,
    onClearStorage,
  } = useSearch()

  return (
    <section className="text-left m-auto max-w-screen-xl px-10 mt-10 pb-12">
      <div className="border border-zinc-300 rounded-full w-full mb-10 sticky top-6 bg-[#232323]">
        <input
          type="text"
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown}
          disabled={isLoading}
          className="rounded-full w-full py-3 px-5 bg-transparent text-gray-300"
          placeholder="Elefante, perro, llavero de una mariposa, etc..."
        />
        <div className="absolute right-6 top-[10px] cursor-pointer" onClick={onClearValue}>
          {value ? <CloseIcon /> : <SearchIcon />}
        </div>
      </div>
      {isLoading ? <Loading /> : null}
      {storage.length > 0 && (
        <>
          <h2 className="text-gray-300 text-3xl mb-12">Patrones</h2>
          <div
            className="mb-12 grid grid-flow-dense gap-6 grid-cols-[repeat(auto-fill,_minmax(_min(100%,_16rem),_1fr))] overflow-hidden"
          >
            {storage.map(({ id, query }) => (
              <Card
                id={id}
                query={query}
                onClearStorage={onClearStorage}
                getAmigurumi={getAmigurumi}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
