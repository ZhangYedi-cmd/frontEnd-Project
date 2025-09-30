import { hydrateRoot } from 'react-dom/client'

import App from './src/app'

hydrateRoot(document.getElementById('root'), <App title="SSR DEMO" />)