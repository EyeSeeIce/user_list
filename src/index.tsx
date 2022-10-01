import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'

// styles
import './assets/styles/global.scss'
import './assets/styles/varibles/variables.scss'
import './assets/styles/varibles/breackboints.scss'
import './assets/styles/mixins.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
      <div id="modals"></div>
    </Provider>
  </React.StrictMode>,
)
