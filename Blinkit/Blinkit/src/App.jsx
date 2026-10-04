import { useCallback, useState } from 'react'
import Header from './components/Header'
import CategoryStrip from './components/CategoryStrip'
import HeroBanner from './components/HeroBanner'
import ProductSection from './components/ProductSection'
import Footer from './components/Footer'
import { sections } from './data'
import './App.css'

export default function App() {
  const [cart, setCart] = useState({})

  const addItem = useCallback((id) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }, [])

  const removeItem = useCallback((id) => {
    setCart((prev) => {
      const next = { ...prev }
      const qty = (next[id] || 0) - 1
      if (qty <= 0) delete next[id]
      else next[id] = qty
      return next
    })
  }, [])

  const cartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0)

  return (
    <div className="app">
      <Header cartCount={cartCount} />

      <main className="app__main">
        <CategoryStrip />
        <HeroBanner />

        {sections.map((section) => (
          <ProductSection
            key={section.id}
            title={section.title}
            products={section.products}
            cart={cart}
            onAdd={addItem}
            onRemove={removeItem}
          />
        ))}
      </main>

      <Footer />
    </div>
  )
}