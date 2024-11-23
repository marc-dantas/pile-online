import Image from "next/image"
import Link from "next/link"

export default function HomeNav() {
    return (
        <nav className="navbar has-background-black is-fixed-top">
            <div className="navbar-brand">
                <Link href="/" className="navbar-item">
                    <Image alt="logo" width={40} height={100} src="/img/pile/logo_text.svg" />
                </Link>
            </div>
            <div className="navbar-menu">
                <div className="navbar-start">
                    <Link className="navbar-item" href="/docs">Documentation</Link>
                </div>
                <div className="navbar-end">
                    <a href="https://github.com/marc-dantas/pile" className="navbar-item">
                        <Image
                            alt='logo'
                            src='/img/GitHub_Logo_White.png'
                            width={60}
                            height={28}
                        />
                    </a>
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
                    <Image alt="logo" width={40} height={100} src="/img/pile/logo_text.svg" />
                </Link>
            </div>
        </nav>
    )
}