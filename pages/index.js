import {useSession} from 'next-auth/react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {session, loading} = useSession()

  return (
    <div>
      {session ? `${session.user.name}, `: ''}
    </div>
  )
}
