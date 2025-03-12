import Footer from "@/components/Footer";
import HomeNav from "@/components/Nav";
import Code from "@/components/Code";
import Image from "next/image"
import Icon from "@/components/Icon";
import { Kw, Op, B, N } from "@/components/Code";

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
                                            A concatenative scripting programming language designed to teach software basics and stack-based computing.
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
                                                <Kw x="proc" /> fib<br />
                                                <Kw x="    let" /> n<br />
                                                <N  x="    0 1" /><br />
                                                <Kw x="    loop" /><br />
                                                <span>        <Op x="over" /> n</span> <Op x="&gt;=" /> <Kw x="if break end"/><br />
                                                <Kw x="        as" /> a b <Kw x="let" /><br />
                                                <span>            a</span> <B x="println" /><br />
                                                <span>            b a b</span> <Op x="+"/><br />
                                                <Kw x="        end" /><br />
                                                <Kw x="    end" /><br />
                                                <Kw x="end" /><br /><br />

                                                <N x="60000"/> fib<br />
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
                            <h2 className="title has-text-centered has-text-weight-bold">Learn Pile</h2>
                            <p className="subtitle has-text-centered">Dive into the fundamentals of Pile and discover the simplicity and power of stack-based programming!</p>
                            <div className="box p-6">
                                <div className="columns is-multiline is-centered">
                                    <div className="column content is-full">
                                        <h4 className="title is-4">Why learn Pile?</h4>
                                        <p className="is-size-4">Whether you&apos;re a beginner or an experienced developer looking to explore a fresh approach to coding, Pile can still be an amazing tool for teachers, students and even mathematicians.</p>
                                        <p className="is-size-4">With a comprehensive and small documentation, you can learn Pile in a few hours and start learning even more!</p>
                                        <h4 className="title is-4">What is in the documentation?</h4>
                                        <ul className="is-size-4">
                                            <li>Brief introduction and explanation of Pile and how it works</li>
                                            <li>Language Reference</li>
                                            <li>Code examples</li>
                                            <li>And more!</li>
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
                            <p className="subtitle has-text-centered">Become an active part of Pile&apos;s evolution!</p>
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
