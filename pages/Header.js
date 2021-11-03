import React, { useRef, useState } from "react";
import Link from 'next/link'

export default function Header() {
 
  return (
    <div className="headerWrap">
      <div className="header">

      </div>
      <nav className="nav">
        <ul>
          <li>
            <Link href="/">
              <a>WORKS</a>
            </Link>
          </li>
          <li>
            <Link href="/About">
              <a>ABOUT</a>
            </Link>
          </li>
          <li>
            <Link href="/CAREERS">
              <a>CAREERS</a>
            </Link>
          </li>
          <li>
            <Link href="/CONTACT">
              <a>CONTACT</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
