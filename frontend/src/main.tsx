import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout.tsx'
import Register from './pages/Register.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { AppContextProvider, useAppContext } from './contexts/AppContext.tsx'
import SignIn from './pages/SignIn.tsx'
import AddHotel from './pages/AddHotel.tsx'
import MyHotels from './pages/MyHotels.tsx'
import EditHotel from './pages/EditHotel.tsx'
import { SearchContextProvider } from './contexts/SearchContext.tsx'
import Search from './pages/Search.tsx'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0
    }
  }
});

const ProtectedRoute = ({ element }: { element: JSX.Element }) => {
  const { isLoggedIn } = useAppContext();
  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />
  }
  return element;
}


const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: "<div>Home page</div>"
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/sign-in",
        element: <SignIn />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "/add-hotel",
        element: <ProtectedRoute element={<AddHotel />} />
      },
      {
        path: "/my-hotels",
        element: <ProtectedRoute element={<MyHotels />} />
      },
      {
        path: "/edit-hotel/:hotelId",
        element: <ProtectedRoute element={<EditHotel />} />
      }
    ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <SearchContextProvider>
          <RouterProvider router={router} />
        </SearchContextProvider>
      </AppContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
