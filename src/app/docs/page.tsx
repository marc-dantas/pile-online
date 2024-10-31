import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <header className="hero is-medium">
        <div className="hero-head">
          <Nav docs>
            <a className="navbar-item" href="/guide">Guide</a>
            <a className="navbar-item is-active" href="/docs">Documentation</a>
          </Nav>
        </div>
        <div className="hero-body">
            <div className="container">
                <p className="has-text-weight-bold has-logo-font has-text-huge">Documentation</p>
                <p className="subtitle">Learn Pile</p>
            </div>
        </div>
      </header>
      <main className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="notification is-danger">
              <div className="columns is-vcentered is-centered is-multiline">
                <div className="column is-narrow has-text-centered">
                  <p className="title is-family-monospace">WARNING</p>
                </div>
                <div className="column">
                  <p className="is-size-4 is-family-monospace">Documentation is not finished yet.</p>
                </div>
                <div className="column is-narrow">
                  <a href="/guide" className="button">Read the Guide</a>
                </div>
              </div>
            </div>
          </div>
          <section className="section" id="features">
            <div className="container">
              <h2 className="title has-logo-font has-text-centered">Table of contents</h2>
              <div className="box p-6">
                <div className="content is-size-3">
                    <ul>
                        <li><a href="/docs/introduction">Introduction</a> (TBD)</li>
                        <li><a href="/docs/math">Mathematical operations</a> (TBD)</li>
                        <li><a href="/docs/logic">Logical operations</a> (TBD)</li>
                        <li><a href="/docs/bitwise">Bitwise operations</a> (TBD)</li>
                        <li><a href="/docs/stack">Stack manipulation operations</a> (TBD)</li>
                        <li><a href="/docs/controlflow">Control flow</a> (TBD)</li>
                        <li><a href="/docs/procs">Procedures</a> (TBD)</li>
                        <li><a href="/docs/defs">Definitions</a> (TBD)</li>
                        <li><a href="/docs/builtins">Builtins</a> (TBD)</li>
                        <li><a href="/docs/io">I/O</a> (TBD)</li>
                    </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
