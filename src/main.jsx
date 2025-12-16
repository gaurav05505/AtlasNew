import {BrowserRouter} from 'react-router-dom';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'remixicon/fonts/remixicon.css'
import CountryProvider from './context/CountryContex.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <CountryProvider>
            <App />
        </CountryProvider>  
    </BrowserRouter>
    
)
