import React, { useEffect, useState } from 'react';

import useText from '../../hooks/useText';

import './Footer.scss';

export default function Footer() {
  const { links } = useText();

  const timeOptions = { timeZone: 'Asia/Novosibirsk', hour: '2-digit', minute: '2-digit' };

  const [time, setTime] = useState(new Date().toLocaleTimeString([], timeOptions));

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], timeOptions));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer" data-scroll-section>
      <div className="footer__time">
        <p className="footer__text">{time}</p>
      </div>
      <nav className="footer__nav">
        <ul className="footer__nav">
          {links.map((link, index) => (
            <a key={index} href={link.href} className="footer__text link">
              {link.name}
            </a>
          ))}
        </ul>
      </nav>
    </footer>
  );
}
