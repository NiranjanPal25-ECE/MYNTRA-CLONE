import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './routes/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import Bag from './routes/bag.jsx'
import Home from './routes/home.jsx'
import myntraStore from './store/index.js'
import {Provider} from 'react-redux'

const router = createBrowserRouter([
  {path : "/",
  element : <App/>,
  children : [
    {path : "/", element : <Home/>},
    {path : "/bag", element : <Bag/>}
  ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store= {myntraStore}>
    <RouterProvider router ={router}/>
    </Provider>
  </StrictMode>,
)
