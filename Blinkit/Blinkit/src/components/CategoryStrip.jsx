import { categories } from '../data'
import './CategoryStrip.css'

export default function CategoryStrip() {
  return (
    <nav className="cats hide-scrollbar" aria-label="Product categories">
      <ul className="cats__list">
        {categories.map((cat) => (
          <li key={cat.id}>
            <button className="cat" type="button">
              <span className="cat__icon" style={{ background: cat.bg }} aria-hidden="true">
                {cat.emoji}
              </span>
              <span className="cat__name">{cat.name}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}