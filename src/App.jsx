import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import RuangOpname from './pages/RuangOpname'
import ChangePassword from './pages/ChangePassword'

function App() {
  const [session, setSession] = useState(null)
  const [forceChange, setForceChange] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => setSession(session))
    supabase.auth.onAuthStateChange((_event, session) => setSession(session))
  }, [])

  if (forceChange) return <ChangePassword />

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <Routes>
          <Route path="/login" element={!session ? <Login /> : <Navigate to="/" />} />
          <Route path="/" element={session ? <Dashboard /> : <Navigate to="/login" />} />
          <Route path="/ruang/:id" element={session ? <RuangOpname /> : <Navigate to="/login" />} />
        </Routes>
        <footer className="text-center p-4 text-gray-500 text-sm">
          Dibuat dengan ❤️ oleh Ade Supriatna © 2026
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
