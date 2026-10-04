import './HeroBanner.css'

export default function HeroBanner() {
  return (
    <div className="banners">
      <article className="banner banner--green">
        <div className="banner__text">
          <p className="banner__kicker">Super Saver</p>
          <h3 className="banner__title">Flat ₹150 OFF</h3>
          <p className="banner__sub">On your first 3 orders above ₹499</p>
        </div>
        <span className="banner__emoji" aria-hidden="true">
          🛍️
        </span>
      </article>

      <article className="banner banner--yellow">
        <div className="banner__text">
          <p className="banner__kicker">Fresh Picks</p>
          <h3 className="banner__title">Fruits & Veggies</h3>
          <p className="banner__sub">Up to 40% off on daily essentials</p>
        </div>
        <span className="banner__emoji" aria-hidden="true">
          🥦
        </span>
      </article>
    </div>
  )
}