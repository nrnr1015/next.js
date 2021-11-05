import ActiveLink from './ActiveLink'
import { pages } from "../data/pages";
import styles from "./Layout.module.css";

const Nav = () => (
  <nav className={styles.nav} >
    <style jsx>{`
      .nav-link {
        text-decoration: none;
        position: relative;
        border-bottom: 2px solid transparent;
        transition: border-bottom-color .8s ease;
        -webkit-transition: border-bottom-color .8s ease;
      }

      .active{
        border-bottom: 2px solid #000;
      }
    `}</style>
        {pages.map((page, index) => (
          <ActiveLink href={page.path} key={index} activeClassName="active">
              <a className="nav-link">{page.title}</a>
          </ActiveLink>
        ))}
    </nav>
)

export default Nav