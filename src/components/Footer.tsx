import Image from "next/image"

export default function Footer() {
    return (
      <footer className="hero footer">
        <div className="hero-body">
          <div className="content has-text-centered">
              <div className="is-italic">
                <p className="has-text-weight-bold">
                  Copyright &copy; {new Date().getFullYear()}{/*<a href="https://github.com/marc-dantas">The Pile Team</a>, <a href="https://github.com/marc-dantas">Marcio Dantas</a>*/}. All rights reserved.
                </p>
                <div className="columns is-multiline is-centered">
                  <div className="column is-full">
                    <p>This website is fully open source and licensed under the <a href="https://www.gnu.org/licenses/gpl-3.0.en.html">GPL-3.0 License</a>.</p>
                  </div>
                  <div className="column is-narrow">
                    <Image alt="GPL 3.0" src="/gpl3.png" width={100} height={100} />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </footer>
    )
}