import { Navigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { useOutlet } from 'react-router-dom'

export default function HomeLayout(){
  const { user } = useAuth()
  const outlet = useOutlet()

  if(user) { 
    return <Navigate to="/form" />
  }
  
  return (
    <div>
      {outlet}
    </div>
  )
}