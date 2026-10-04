import './ProductCard.css'

export default function ProductCard({ product, qty, onAdd, onRemove }) {
  const { id, name, weight, price, mrp, emoji, bg } = product
  const discount = mrp > price ? Math.round(((mrp - price) / mrp) * 100) : 0

  return (
    <article className="card">
      <div className="card__media" style={{ background: bg }}>
        {discount > 0 && <span className="card__discount">{discount}% OFF</span>}

        <span className="card__emoji" role="img" aria-label={name}>
          {emoji}
        </span>

        <span className="card__time">
          <span aria-hidden="true">⚡</span> 11 MINS
        </span>
      </div>

      <div className="card__body">
        <h3 className="card__name" title={name}>
          {name}
        </h3>
        <p className="card__weight">{weight}</p>

        <div className="card__row">
          <div className="card__pricing">
            <span className="card__price">₹{price}</span>
            {mrp > price && <span className="card__mrp">₹{mrp}</span>}
          </div>

          {qty === 0 ? (
            <button className="add" type="button" onClick={() => onAdd(id)}>
              ADD
            </button>
          ) : (
            <div className="stepper">
              <button
                type="button"
                aria-label={`Remove one ${name}`}
                onClick={() => onRemove(id)}
              >
                −
              </button>
              <span aria-live="polite">{qty}</span>
              <button
                type="button"
                aria-label={`Add one more ${name}`}
                onClick={() => onAdd(id)}
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}