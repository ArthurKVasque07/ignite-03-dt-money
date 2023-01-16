import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'

export function App() {

  return (
   <ThemeProvider theme={defaultTheme}>
    <h1>oi</h1>
   </ThemeProvider>
  )
}
