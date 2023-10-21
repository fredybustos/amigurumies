import useStorage from "@/components/amigurumis/useStorage"
import type { AmigurumiProps } from "@/utils/index"

export default function Amigurumi({ uid }:{ uid: string }) {
  const { storage } = useStorage()

  const currentResult = storage.find(item => item.id === uid) || {} as AmigurumiProps

  const output = currentResult?.text?.split('\n') || []

  return (
    <div className="mt-10">
      <h2 className="text-gray-300 text-3xl capitalize mb-10">{currentResult?.query}</h2>
      {output.length > 0 && output.map((item, index) => (
        <p key={index} className="text-gray-300 mb-1">{item}</p>
      ))}
    </div>
  )
}
