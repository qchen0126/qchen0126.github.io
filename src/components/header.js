import React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
      <>
        <h1>Qi's blog</h1>
        <span>Nice to meet you !</span>
        <Link to="/">Home</Link>
        <Link to="/pieces-of-thinking">Pensées</Link>
        <Link to="/about-me/">About me ?</Link>
      </>
  );
}
