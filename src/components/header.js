import { Link } from "gatsby"
import React from "react"
import headerCSS from "./header.module.scss"

export default function  Header({ siteTitle }){
  return (
    <header className={`${headerCSS.headerClass}`}>
      <div>
        <h1>
          <Link to="/">{siteTitle}</Link>
        </h1>
      </div>
    </header>
  )
}
