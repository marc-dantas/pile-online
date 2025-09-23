import Footer from "@/components/Footer";
import HomeNav from "@/components/Nav";
import Code from "@/components/Code";
import Image from "next/image"
import { Kw, Op, B, N, C } from "@/components/Code";

export default function Home() {
    return (
        <>
            <header className="hero is-black">
                <div className="hero-head">
                    <HomeNav />
                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered is-vcentered">
                            {/* Column for title and description */}
                            <div className="column is-half">
                                <div className="columns is-centered is-multiline">
                                    <div className="column is-full">
                                        <Image alt="logo" width={300} height={300} src="/img/pile/logo.svg" />
                                    </div>
                                    <div className="column is-full">
                                        <p className="iosevka-italic is-size-4">
                                            A simple, general-purpose concatenative scripting programming language meant to be minimal in syntax and intuitive.
                                        </p>
                                    </div>
                                    <div className="column is-narrow">
                                        <a href="/docs" className="button is-large is-rounded is-light">Go to Documentation</a>
                                    </div>
                                </div>
                            </div>
                            <div className="column is-hidden-mobile is-half">
                                <div className="box has-background-dark has-text-white">
                                    <div className="columns is-multiline">
                                        <div className="column is-full">
                                            <p className="subtitle has-text-weight-semibold"><code>./fib.pile</code></p>
                                            <Code>
                                              <C x="# Fibonacci sequence in Pile programming language" /><br />
                                              <Kw x="proc" /> fib<br />
                                              <N x="    0" /> <N x="1" /> <Kw x="as" /> n a b <Kw x="let" /><br />
                                              <span>    </span>n <N x="1" /> <Op x="<=" /> <Kw x="if" /> n <Kw x="return" /> <Kw x="end" /><br />
                                              <N x="    2" /> <Kw x="loop" /> <Op x="dup" /> n <N x="1" /> <Op x="+" /> <Op x="=" /> <Kw x="if" /> <Kw x="break" /> <Kw x="end" /><br />
                                              <span>        </span>a b <Op x="+" /> b<br />
                                              <Kw x="          let" /> a<br />
                                              <Kw x="          let" /> b<br />
                                              <N x="        1" /> <Op x="+" /><br />
                                              <Kw x="    end" /> <Op x="drop" /><br />
                                              <span>    </span>b<br />
                                              <Kw x="end" /><br /><br />
                                              <N x="69" /> fib <B x="println" /><br />
                                            </Code>
                                        </div>
                                        <div className="column is-narrow">
                                            <a href="https://github.com/marc-dantas/pile/tree/master/examples" className="button">More examples</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main className="hero">
                <div className="hero-body">
                    <section className="section">
                        <div className="container">
                            <h2 className="title has-text-centered has-text-weight-bold">Learning Resources</h2>
                            <div className="box p-6">
                                <div className="columns is-multiline is-centered">
                                    <div className="column content is-full">
                                        <p className="is-size-4">This website provides a concise documentation. You may find it useful to start using the language.</p>
                                        <h4 className="title is-4">The docs include:</h4>
                                        <ul className="is-size-4">
                                            <li><a href="/docs/introduction">Brief introduction</a> and explanation of Pile and <a href="/docs/howpileworks">how it works</a></li>
                                            <li>Language Reference</li>
                                            <li>Code examples (<em>coming soon</em>)</li>
                                            <li>Standard library reference (<em>coming soon</em>)</li>
                                        </ul>
                                    </div>
                                    <div className="column is-narrow">
                                        <a href="/docs" className="button is-rounded is-light">Go to Documentation</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <h2 className="title has-text-centered has-text-weight-bold">Contributing</h2>
                            <div className="box p-6">
                                <div className="columns is-multiline is-centered">
                                    <div className="column is-full">
                                        <h4 className="title is-4">Contributing to Pile&apos;s implementation</h4>
                                        <p className="is-size-4">Visit the official GitHub repository to explore in-depth examples, access the full source code, and contribute directly to this innovative, stack-based language. Whether you&apos;re refining existing features, adding new ones, or simply learning, your contributions are invaluable to shaping Pile&apos;s future.</p>
                                    </div>
                                    <div className="column is-narrow">
                                        <a href="https://github.com/marc-dantas/pile" className="button is-dark is-rounded">Implementation Repository</a>
                                    </div>
                                    <div className="column content is-full">
                                        <h4 className="title is-4">Contributing to Pile&apos;s website</h4>
                                        <p className="is-size-4">Contribute to this website. If you have any suggestions, Pull Requests are welcome!</p>
                                    </div>
                                    <div className="column is-narrow">
                                        <a href="https://github.com/marc-dantas/pile-online" className="button is-dark is-rounded">Website Repository</a>
                                    </div>
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
