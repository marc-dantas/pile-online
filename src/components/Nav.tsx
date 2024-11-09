import { ReactNode } from "react"

export interface NavProps {
    children: ReactNode,
}

export default function Nav({ children }: NavProps) {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <a href="/" className="navbar-item">
                <strong className="has-logo-font">pile</strong>
            </a>
        </div>
        <div className="navbar-menu">
            <div className="navbar-end">
                {children}
            </div>
        </div>
    </nav>
  )
}

export function NavDocs() {
  return (
    <nav className="navbar">
        <div className="navbar-brand">
            <a href="/docs" className="navbar-item">
                <strong className="has-logo-font">docs</strong>
            </a>
        </div>
        <div className="navbar-menu">
            <a className="navbar-item" href="/">Back to home</a>
            <div className="navbar-end">
                <a className="navbar-item" href="/guide">Guide</a>
                <a className="navbar-item is-active" href="/docs">Documentation</a>
            </div>
        </div>
    </nav>
  )
}