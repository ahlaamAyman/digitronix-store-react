import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import GuestRoute from './routes/GuestRoute'
import MainLayout from './shared/components/layout/MainLayout'

import Home from './features/home/pages/Home'
import Shop from './features/products/shop/Shop'
import ProductDetails from './features/products/details/pages/ProductDetails'

import Login from './features/auth/pages/Login'
import Register from './features/auth/pages/Register'
import ForgotPassword from './features/auth/pages/ForgotPassword'
import ResetPassword from './features/auth/pages/ResetPassword'
import PasswordUpdated from './features/auth/pages/PasswordUpdated'
import Cart from './features/cart/pages/Cart'
import SelectAddress from './features/checkout/pages/SelectAddress'
import ReviewOrder from './features/checkout/pages/ReviewOrder'
import PaymentMethod from './features/checkout/pages/PaymentMethod'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout/address" element={<SelectAddress />} />
          <Route path="/checkout/review" element={<ReviewOrder />} />
          <Route path="/checkout/payment" element={<PaymentMethod />} />
        </Route>

        <Route element={<GuestRoute />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/password-updated" element={<PasswordUpdated />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App