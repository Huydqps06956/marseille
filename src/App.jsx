import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routers from '@/routers/routers'
import { Suspense } from 'react'
import { SideBarProvider } from '@/contexts/SideBarProvider'
import Sidebar from '@components/Sidebar.jsx/Sidebar'
function App() {
  return (
    <SideBarProvider>
      <Sidebar />
      <BrowserRouter>
        <Suspense fallback={<div>...loading</div>}>
          <Routes>
            {routers.map((item, index) => {
              return (
                <Route
                  path={item.path}
                  element={<item.conponent />}
                  key={index}
                />
              )
            })}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </SideBarProvider>
  )
}

export default App
