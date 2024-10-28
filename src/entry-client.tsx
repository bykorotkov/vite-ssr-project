import './index.css'
import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App'

const data = window.__SSR_DATA__
delete window.__SSR_DATA__

hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <StrictMode>
    <App data={data || []} />
  </StrictMode>,
)
