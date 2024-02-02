import { Button } from '@nextui-org/react'
import { useOutletContext } from '@remix-run/react'
import { SupabaseClient } from '@supabase/supabase-js'
import { Database } from '~/types/supabase'

export default function Login() {
  const { supabase } = useOutletContext<{ supabase: SupabaseClient<Database> }>()

  const handleEmailLogin = async () => {
    await supabase.auth.signInWithPassword({
      email: 'jon@supabase.com',
      password: 'password',
    })
  }

  const handleGitHubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    })
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
  }

  return (
    <>
      <Button onClick={handleEmailLogin}>Email Login</Button>
      <Button onClick={handleGitHubLogin}>GitHub Login</Button>
      <Button onClick={handleLogout}>Logout</Button>
    </>
  )
}