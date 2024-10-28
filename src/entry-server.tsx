import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App'

interface Props {
    data: any;
}

export function render({data}: Props) {
  const html = renderToString(
    <StrictMode>
      <App data={data} />
    </StrictMode>,
  )
  return { html }
}
