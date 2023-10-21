export default function Loading() {
  return (
    <div className='flex space-x-2 justify-center items-center bg-transparent'>
      <div className='h-3 w-3 bg-[#4b8288] rounded-full animate-bounce [animation-delay:-0.3s]' />
      <div className='h-3 w-3 bg-[#4b8288] rounded-full animate-bounce [animation-delay:-0.13s]' />
      <div className='h-3 w-3 bg-[#4b8288] rounded-full animate-bounce' />
    </div>
  )
}
