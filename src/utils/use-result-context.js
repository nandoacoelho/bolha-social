import React, { createContext, useContext, useState } from 'react'
const noop = () => {}

const ResultsContext = createContext({
  isComparative: false,
  setIsComparative: noop
})

export const ResultsContextProvider = ({ children }) => {
  const [isComparative, setIsComparative] = useState(false)

  return (
    <ResultsContext.Provider value={{ isComparative, setIsComparative }}>
      {children}
    </ResultsContext.Provider>
  )
}

export const useResultsContext = () => {
  const context = useContext(ResultsContext)
  if (context === undefined) {
    throw new Error('useResultsContext must be used within a OrderFormProvider')
  }

  return context
}

export default { ResultsContextProvider, useResultsContext }
