import Link from "next/link"
import Image from "next/image"

export default function Footer() {
    return (
        <footer className="hero footer">
            <div className="hero-body">
                <div className="has-text-centered">
                    <div className="columns is-centered is-multiline">
                        <div className="column is-narrow">
                            <Image alt="logo" width={150} height={150} src="/img/pile/logo_text.svg" />
                        </div>
                        <div className="column is-full">
                            <p className="has-text-weight-bold">
                                &copy; {new Date().getFullYear()} <a href="https://github.com/marc-dantas">Marcio Dantas</a>
                            </p>
                        </div>
                        <div className="column is-narrow">
                            <p className="is-italic">This website is fully open source and licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0 License</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}