import Image from "next/image"

export default function Footer() {
    return (
      <footer className="hero footer">
        <div className="hero-body">
          <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
            <ul>
              <li><a href="https://github.com/marc-dantas/">Creator&apos;s Github</a></li>
              <li><a href="https://github.com/marc-dantas/pile">Pile&apos;s Github Repository</a></li>
              <li><a href="#">Discord</a></li>
            </ul>
          </nav>
          <div className="is-italic">
            <div className="columns is-centered is-multiline">
              <div className="column is-narrow">
                <p className="has-text-weight-bold">
                  Copyright &copy; {new Date().getFullYear()}{/*<a href="https://github.com/marc-dantas">The Pile Team</a>, <a href="https://github.com/marc-dantas">Marcio Dantas</a>*/}. All rights reserved.
                </p>
              </div>
              <div className="column is-narrow">
                <p>This website is fully open source and licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0 License</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}