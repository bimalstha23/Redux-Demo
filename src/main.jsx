import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './Redux/Store'
// import { store } from './ReduxToolkit/store'
// import NoneedRedux from './NoneedRedux';
// import ReduxwithoutRedux from './ReduxwithoutRedux';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    {/* <NoneedRedux /> */}
    {/* <ReduxwithoutRedux /> */}
  </React.StrictMode>
)
