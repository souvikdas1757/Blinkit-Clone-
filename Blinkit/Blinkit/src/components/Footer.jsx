import './Footer.css'

const columns = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'Team', 'Blog', 'Press'],
  },
  {
    title: 'For Consumers',
    links: ['Terms of Use', 'Privacy Policy', 'Refund Policy', 'FAQs'],
  },
  {
    title: 'For Partners',
    links: ['Partner With Us', 'Ride With Us', 'Franchise'],
  },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <span aria-hidden="true">⚡</span> blinkit
          </span>
          <p className="footer__tagline">
            India&apos;s last-minute app. Groceries and essentials delivered in minutes.
          </p>
        </div>

        {columns.map((col) => (
          <div className="footer__col" key={col.title}>
            <h4 className="footer__heading">{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="/" className="footer__link">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} Blinkit Clone — built for learning purposes.</p>
      </div>
    </footer>
  )
}