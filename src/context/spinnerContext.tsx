import React, { createContext, useContext, useState } from 'react'

type ContextValues = {
  isLoading: boolean
  onOpenLoader: () => void
  onCloseLoader: () => void
}

export const SpinnerContext = createContext<ContextValues>({} as ContextValues)

export const SpinnerProvider = ({
  children
}: {
  children: React.ReactNode
}) => {
  const [isLoading, setIsLoading] = useState(false)

  const onOpenLoader = () => setIsLoading(true)
  const onCloseLoader = () => setIsLoading(false)

  return (
    <SpinnerContext.Provider
      value={{
        onOpenLoader,
        onCloseLoader,
        isLoading
      }}
    >
      {children}
    </SpinnerContext.Provider>
  )
}

export const useSpinner = () => {
  return useContext(SpinnerContext)
}
