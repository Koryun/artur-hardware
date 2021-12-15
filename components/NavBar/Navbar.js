import { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

import ModalButton from "../Modal/ModalButton";
import styles from "../NavBar/navbar.module.scss";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/projects",
  },
  {
    label: "Services",
    href: "/services",
  },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const { asPath } = useRouter();

  const openMenu = useCallback(() => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  return (
    <nav className={styles.navbar}>
      <Link href="/">
        <a className={styles.navlogo}>
          <img
            alt="Logo"
            className={styles.logo}
            src="/svg/Logo.svg"
            width="125"
            height="153.72"
          />
        </a>
      </Link>
      <ul
        className={classNames(styles.navmenu, {
          [styles.active]: isOpen,
        })}
      >
        {navItems.map(({ label, href }, index) => (
          <li className={styles.navitem} key={index}>
            <Link href={href}>
              <a
                className={classNames(styles.navlink, {
                  [styles.active]: isOpen,
                  [styles.selected]: href === asPath,
                })}
                onClick={openMenu}
              >
                {label}
              </a>
            </Link>
          </li>
        ))}
        <li className={styles.navitem}>
          <ModalButton
            // href="contact-us"
            className={classNames(styles.navlink, {
              [styles.active]: isOpen,
            })}
            onClick={openMenu}
          />
        </li>
      </ul>
      <button
        aria-label="right align"
        className={
          isOpen === false
            ? styles.hamburger
            : styles.hamburger + " " + styles.active
        }
        onClick={openMenu}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>
    </nav>
  );
}
