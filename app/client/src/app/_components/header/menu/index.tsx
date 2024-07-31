import { useContext } from "react";

import { LanguageContext } from "@p";

import { Item } from "./item";
import { Theme } from "./theme";
import { Language } from "./language";
import { Link } from "@u";

type MenuProps = {
  isOpen: boolean;
};

const Menu = ({ isOpen }: MenuProps) => {
  const { languageData } = useContext(LanguageContext);

  const { anchors, contactData } = languageData;

  return (
    <div
      className="header__burger-menu"
      data-isopen={isOpen.toString()}
      style={{ height: `${window.innerHeight}px` }}
    >
      <div className="header__burger-menu__wrapper">
        <div className="header__burger-menu__navigation">
          {anchors.map((anchor) => (
            <Link size="large" href={anchor.href} key={anchor.href} data-anchor>
              {anchor.name}
            </Link>
          ))}
        </div>
        <div className="header__burger-menu__links">
          <div className="header__burger-menu__links_contact">
            {contactData.map((link) => (
              <Item
                key={link.name}
                icon={link.icon}
                href={link.href}
                name={link.name}
              />
            ))}
          </div>
          <div className="header__burger-menu__links_example">
            <Theme />
            <Language />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Menu };
