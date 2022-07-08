import { useRouter } from 'next/router'

import React from 'react'

export default function UserIdPage() {
  // open instance of the router
  const router = useRouter()
  // pull the path from the router
  const { uid } = router.query

  return (
    <div>
      <h1>Hello user at id {uid}</h1>
    </div>
  )
}
