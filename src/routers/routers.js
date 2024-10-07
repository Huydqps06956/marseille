import { lazy } from 'react'

const routers = [
  {
    path: '/',
    conponent: lazy(() => import('@components/HomePage/HomePage'))
  }
]

export default routers
