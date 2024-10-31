import { ReactNode } from "react"

export interface NavProps {
    children: ReactNode,
    docs?: boolean,
}

export default function Nav({ docs, children }: NavProps) {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <a href={docs!=undefined?"/docs":"/"} className="navbar-item">
                <strong className="has-logo-font">{docs!=undefined?"docs":"pile"}</strong>
            </a>
        </div>
        <div className="navbar-menu">
            {docs!=undefined?<div className="navbar-start">
                <a className="navbar-item" href="/">Back to Home</a>
            </div>:<></>}
            <div className="navbar-end">
                {children}
            </div>
        </div>
    </nav>
  )
}