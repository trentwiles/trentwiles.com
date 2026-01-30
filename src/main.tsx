import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import NotFound from './pages/NotFound'
import Tools from './pages/Tools'
import RailroadLookup from './pages/RailroadLookup'
import MetroMaps from './pages/MetroMaps'
import PhoneNumbers from './pages/PhoneNumbers'
import CommuterRidership from './pages/CommuterRidership'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/reporting-mark-lookup" element={<RailroadLookup />} />
        <Route path="/tools/metro-maps" element={<MetroMaps />} />
        <Route path="/tools/phone-numbers" element={<PhoneNumbers />} />
        <Route path="/tools/mbta-commuter-rail-ridership-2018-2024" element={<CommuterRidership />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
