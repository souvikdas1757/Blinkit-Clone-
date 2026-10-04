import ProductCard from './ProductCard'
import './ProductSection.css'

export default function ProductSection({ title, products, cart, onAdd, onRemove }) {
  return (
    <section className="section">
      <header className="section__head">
        <h2 className="section__title">{title}</h2>
        <button className="section__link" type="button">
          see all
        </button>
      </header>

      <div className="section__grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            qty={cart[product.id] || 0}
            onAdd={onAdd}
            onRemove={onRemove}
          />
        ))}
      </div>
    </section>
  )
}