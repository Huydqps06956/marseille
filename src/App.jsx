import { BrowserRouter, Routes, Route } from 'react-router-dom'
import routers from '@/routers/routers'
import { Suspense } from 'react'
import { SideBarProvider } from '@/contexts/SideBarProvider'
import Sidebar from '@components/Sidebar.jsx/Sidebar'
import { ToastProvider } from '@/contexts/ToastProvider'
import { StoreProvider } from '@/contexts/storeProvider'
function App() {
  return (
    <StoreProvider>
      <ToastProvider>
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
      </ToastProvider>
    </StoreProvider>
  )
}

export default App
