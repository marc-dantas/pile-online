import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Code from "@/components/Code";
import Image from "next/image"
import { Kw, Op, N } from "@/components/Code";

export default function Home() {
    return (
        <>
            <header className="hero">
                <div className="hero-head">
                    <Nav>
                        <a className="navbar-item" href="/docs">Documentation</a>
                    </Nav>
                </div>
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-centered is-vcentered">
                            {/* Column for title and description */}
                            <div className="column is-half">
                                <div className="columns is-centered is-multiline">
                                    <div className="column is-full">
                                        <Image alt="logo" width={300} height={300} src="/logo.svg" />
                                    </div>
                                    <div className="column is-full">
                                        <p className="is-italic is-size-4">
                                            An educational stack-based programming language designed to simplify learning in programming logic, stack-based structures, and core computer science principles.
                                        </p>
                                    </div>
                                    <div className="column is-narrow">
                                        <a href="/docs" className="button is-large is-rounded is-light">Go to Documentation</a>
                                    </div>
                                    <div className="column is-narrow">
                                        <a href="#learnmore" className="button is-large is-rounded is-light">Learn more</a>
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
                                                <N x="  0 1" /><br />
                                                <Kw x="  loop" /><br />
                                                <Op x="    dup" /> N <Op x=">=" /> <Kw x="if" /><br />
                                                <Op x="      dup dump" /><br />
                                                <Op x="      over over +" /><br />
                                                <Kw x="    else stop end" /><br />
                                                <Kw x="  end" /><br />
                                                <Kw x="end" /><br />
                                                <br />
                                                <Kw x="def" /> N <N x="400" /> <Kw x="end" /><br />
                                                fib<br />
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
                    <section id="learnmore" className="section">
                        <div className="container">
                            <div className="columns is-multiline">
                                <div className="column is-one-third">
                                    <div className="box p-6">
                                        <p className="title is-4 has-text-centered">Bridging the Gap</p>
                                        <p className="is-size-5 has-text-justified has-text-left-mobile">
                                            Pile is a comprehensive educational tool designed to bridge the gap between novice programmers and one of the most feared foundational computer science concepts.
                                        </p>
                                    </div>
                                </div>
                                <div className="column is-one-third">
                                    <div className="box p-6">
                                        <p className="title is-4 has-text-centered">Understanding Stack-Based Programming</p>
                                        <p className="is-size-5 has-text-justified has-text-left-mobile">
                                            With a focus on stack-based programming, Pile empowers learners to visualize how data is manipulated, fostering a deeper understanding of algorithms and data structures.
                                        </p>
                                    </div>
                                </div>
                                <div className="column is-one-third">
                                    <div className="box p-6">
                                        <p className="title is-4 has-text-centered">A Supportive Learning Environment</p>
                                        <p className="is-size-5 has-text-justified has-text-left-mobile">
                                            Our goal is to create a supportive environment where users can experiment, learn, and grow in their programming journey without the intimidation often associated with coding.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <h2 className="title has-logo-font has-text-centered">Features</h2>
                            <div className="box p-6">
                                <div className="columns is-8 has-text-justified has-text-left-mobile">
                                    <div className="column is-one-third">
                                        <div className="content is-size-4">
                                            <h4 className="has-text-weight-bold">Intuitive</h4>
                                            <p>Designed for easier understanding and exponential learning curve for those who are familiar with other programming languages.</p>
                                        </div>
                                    </div>
                                    <div className="column is-one-third">
                                        <div className="content is-size-4">
                                            <h4 className="has-text-weight-bold">Educational goals</h4>
                                            <p>Pile is crafted as a &quot;teacher&quot; for the computer science students. Always aiming to be concise, promoting algorithmic and logical thinking.</p>
                                        </div>
                                    </div>
                                    <div className="column is-one-third">
                                        <div className="content is-size-4">
                                            <h4 className="has-text-weight-bold">Focused on simplicity</h4>
                                            <p>Pile&apos;s codebase, syntax, and runtime behavior always aims to be simple, practical and predictable.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="columns is-8 has-text-justified has-text-left-mobile">
                                    <div className="column is-one-third">
                                        <div className="content is-size-4">
                                            <h4 className="has-text-weight-bold">Open Source</h4>
                                            <p>All of the code and documentation is free and open source. Join a community-driven project that thrives on collaboration.</p>
                                        </div>
                                    </div>
                                    <div className="column is-one-third">
                                        <div className="content is-size-4">
                                            <h4 className="has-text-weight-bold">Comprehensive Documentation</h4>
                                            <p>Access thorough resources to guide your learning journey.</p>
                                        </div>
                                    </div>
                                    <div className="column is-one-third">
                                        <div className="content is-size-4">
                                            <h4 className="has-text-weight-bold">And many more...</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <h2 className="title has-logo-font has-text-centered">Learn Pile</h2>
                            <div className="box p-6">
                                <div className="content">
                                    <div className="columns is-multiline is-centered">
                                        <div className="column is-full">
                                            <p className="is-size-3">Dive into the fundamentals of Pile and discover the simplicity and power of stack-based programming!</p>
                                            <p className="is-size-4">You can read the documentation of the Pile programming language to learn it.</p>
                                        </div>
                                        <div className="column is-narrow">
                                            <a href="/docs" className="button is-rounded is-light">Go to Documentation</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <h2 className="title has-logo-font has-text-centered">Help Build the Community</h2>
                            <div className="box p-6">
                                <div className="content is-size-4">
                                    <div className="columns is-multiline is-centered">
                                        <div className="column is-full">
                                            <div className="content">
                                                <p className="is-size-3">Pile is just getting started, and we invite you to be part of its journey!</p>
                                                <p className="is-size-4">Join us in shaping the future of this unique language by collaborating on the project and helping grow the Pile community together.</p>
                                                <p className="is-size-4">Connect with fellow enthusiasts and developers on our official Pile Discord server—your insights and ideas are essential to building something extraordinary!</p>
                                            </div>
                                        </div>
                                        <div className="column is-narrow">
                                            <a href="https://github.com/marc-dantas/pile" className="button is-link is-rounded">Discord server</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="section">
                        <div className="container">
                            <h2 className="title has-logo-font has-text-centered">Contributing</h2>
                            <div className="box p-6">
                                <div className="columns is-multiline is-centered">
                                    <div className="column is-full">
                                        <div className="content">
                                            <p className="is-size-3">
                                                Become an active part of Pile's evolution!
                                            </p>
                                            <p className="is-size-4">
                                                Visit the official GitHub repository to explore in-depth examples, access the full source code, and contribute directly to this innovative, stack-based language. Whether you're refining existing features, adding new ones, or simply learning, your contributions are invaluable to shaping Pile's future.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="column is-narrow">
                                        <a href="https://github.com/marc-dantas/pile" className="button is-dark is-rounded">GitHub Repository</a>
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
