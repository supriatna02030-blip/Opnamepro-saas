import { useState } from 'react'
import { supabase } from '../lib/supabase'
import toast from 'react-hot-toast'
import { motion } from 'framer-motion'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) toast.error(error.message)
    else toast.success('Login Berhasil')
  }

  const handleForgot = async () => {
    if(!email) return toast.error('Isi email dulu')
    await supabase.auth.resetPasswordForEmail(email)
    toast.success('Link reset dikirim ke email')
  }

  return (
    <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="flex items-center justify-center h-screen p-4">
      <div className="glass p-8 rounded-2xl w-full max-w-sm shadow-2xl">
        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">OpnamePro SaaS</h1>
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} className="w-full p-3 rounded-xl border dark:bg-gray-800"/>
          <input type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} className="w-full p-3 rounded-xl border dark:bg-gray-800"/>
          <motion.button whileTap={{scale:0.95}} className="w-full p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">Login</motion.button>
        </form>
        <button onClick={handleForgot} className="text-sm mt-4 text-blue-500 hover:underline">Lupa Password?</button>
      </div>
    </motion.div>
  )
}
