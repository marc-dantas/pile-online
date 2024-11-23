import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="hero footer">
            <div className="hero-body">
                <div className="columns">
                    <div className="column is-narrow">
                        <Link href="/" className="button is-small">Home</Link>
                    </div>
                    <div className="column is-narrow">
                        <Link href="/docs" className="button is-small">Documentation</Link>
                    </div>
                    <div className="column is-narrow">
                        <a className="button is-small" href="https://github.com/marc-dantas/pile">Github Repository</a>
                    </div>
                </div>
                <hr />
                <div className="has-text-left">
                    <div className="columns is-multiline">
                        <div className="column is-narrow">
                            <Image alt="logo" width={150} height={150} src="/logo_text.svg" />
                        </div>
                        <div className="column is-full">
                            <p className="has-text-weight-bold">
                                &copy; {new Date().getFullYear()} <a href="https://github.com/marc-dantas">Marcio Dantas</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="columns is-multiline">
                    <div className="column is-narrow">
                        <p className="is-italic">This website is fully open source and licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0 License</a>.</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}