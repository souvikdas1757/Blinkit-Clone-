import { useState } from 'react'
import './Header.css'

export default function Header({ cartCount }) {
  const [query, setQuery] = useState('')

  return (
    <header className="header">
      <div className="header__inner">
        <a className="brand" href="/" aria-label="Blinkit home">
          <span className="brand__bolt">⚡</span>
          <span className="brand__name">blinkit</span>
        </a>

        <div className="header__divider" aria-hidden="true" />

        <button className="location" type="button">
          <span className="location__title">Delivery in 11 minutes</span>
          <span className="location__sub">
            Sector 21, Gurugram
            <span className="location__caret">▾</span>
          </span>
        </button>

        <form className="search" onSubmit={(e) => e.preventDefault()}>
          <span className="search__icon" aria-hidden="true">
            🔍
          </span>
          <input
            className="search__input"
            type="text"
            value={query}
            placeholder='Search "milk"'
            aria-label="Search for products"
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button
              className="search__clear"
              type="button"
              aria-label="Clear search"
              onClick={() => setQuery('')}
            >
              ✕
            </button>
          )}
        </form>

        <div className="header__actions">
          <button className="btn btn--ghost" type="button">
            Login
          </button>

          <button className="btn btn--cart" type="button">
            <span className="btn__icon" aria-hidden="true">
              🛒
            </span>
            <span className="btn__label">
              {cartCount > 0 ? `${cartCount} item${cartCount > 1 ? 's' : ''}` : 'My Cart'}
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}