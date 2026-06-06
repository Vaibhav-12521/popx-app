import { Routes, Route } from 'react-router-dom'
import MobileFrame from './components/MobileFrame.jsx'
import Welcome from './pages/Welcome.jsx'
import Login from './pages/Login.jsx'
import CreateAccount from './pages/CreateAccount.jsx'
import AccountSettings from './pages/AccountSettings.jsx'

export default function App() {
  return (
    <MobileFrame>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<CreateAccount />} />
        <Route path="/account" element={<AccountSettings />} />
      </Routes>
    </MobileFrame>
  )
}
