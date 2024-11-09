import Nav from "./Nav"
import { ReactNode } from "react"

export interface HeaderProps {
    title: string,
    subtitle?: string
    children?: ReactNode
}

export default function Header({ title, subtitle, children }: HeaderProps) {
    return (
        <>
            <header className="hero is-medium">
                <div className="hero-head">
                    <Nav>
                        <a className="navbar-item is-active" href="/guide">Guide</a>
                        <a className="navbar-item" href="/docs">Documentation</a>
                    </Nav>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <p className="has-text-weight-bold has-logo-font has-text-huge">Guide</p>
                        <p className="subtitle">Learn the basics of the Pile programming language fast!</p>
                    </div>
                </div>
            </header>
        </>
    )
}