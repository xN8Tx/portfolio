import { useContext, useEffect, useState } from "react";

import { Link, Paragraph } from "@/ui/kit";
import { LanguageContext } from "@/models";

import "./index.scss";

const timeOptions: Intl.DateTimeFormatOptions = {
  timeZone: "Asia/Novosibirsk",
  hour: "2-digit",
  minute: "2-digit",
};

const Footer = () => {
  const { languageData } = useContext(LanguageContext);
  const { contactData } = languageData;

  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], timeOptions),
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], timeOptions));
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="footer" data-scroll-section>
      <div className="footer__row">
        <div className="footer__row_item">
          <div className="footer__time">
            <Paragraph>{time}</Paragraph>
          </div>
          <nav className="footer__nav">
            {contactData.map((link, index) => (
              <Link key={index} href={link.href}>
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="footer__row_item">
          <Paragraph size="small">
            Icons by
            <Link
              target="_blank"
              size="small"
              href="https://iconscout.com/contributors/thaophan210"
            >
              Thao Phan
            </Link>{" "}
            on{" "}
            <Link target="_blank" size="small" href="https://iconscout.com">
              IconScout
            </Link>
          </Paragraph>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
