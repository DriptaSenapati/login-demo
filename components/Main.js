import React from 'react';
import { useSession } from "next-auth/react"

const Main = () => {
  const { data: session } = useSession();

  return (
    <div>
      {
        session ? `Hi There, ${session.user.name}` : 'Hi There'
      }
    </div>
  )
}

export default Main