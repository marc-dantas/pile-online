import { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

export interface NavProps {
    children: ReactNode,
}

export default function Nav({ children }: NavProps) {
    return (
        <nav className="navbar has-background-black is-fixed-top">
            <div className="navbar-brand">
                <Link href="/" className="navbar-item">
                    <Image alt="logo" width={40} height={100} src="/logo_text.svg" />
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    {children}
                </div>
            </div>
        </nav>
    )
}

export function NavDocs() {
    return (
        <nav className="navbar has-background-black is-fixed-top">
            <div className="navbar-brand">
                <Link href="/" className="navbar-item">
                    <Image alt="logo" width={40} height={100} src="/logo_text.svg" />
                </Link>
            </div>
        </nav>
    )
}