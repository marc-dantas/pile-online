import { ReactNode } from "react"
import Footer from "@/components/Footer";
import { NavDocs } from "@/components/Nav";
import { DocsContent } from "@/components/Docs";
import DocsSidebar from "@/components/DocsSidebar";

export default function DocsPage({ children }: { children: ReactNode }) {
    return (
        <>
            <header className="hero is-medium">
                <div className="hero-head">
                    <NavDocs />
                </div>
            </header>
            <main className="hero">
                <div className="hero-body">
                    <DocsSidebar>
                        <DocsContent>
                            {children}
                        </DocsContent>
                    </DocsSidebar>
                    <hr />
                    <div className="columns is-centered">
                        <div className="column is-narrow">
                            <a href="#top" className="button is-small is-rounded is-light">Back to top</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}