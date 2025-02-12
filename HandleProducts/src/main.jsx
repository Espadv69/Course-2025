import { StrictMode } from 'react'
import { createRoot } from 'react-dom'

import WrappedApp from './App'

const root = createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <WrappedApp />
  </StrictMode>,
)
