import Footer from "@/components/Footer";
import { NavDocs } from "@/components/Nav";
import DocsSidebar from "@/components/DocsSidebar";

export default function Home() {
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
            <div className="box p-6">
              <p className="title is-1">Welcome to Pile Documentation</p>
              <p className="subtitle">Start by choosing one of the topics on the left side.</p>
              <p>Or you can read the <a href="/docs/introduction">Introduction</a>.</p>
            </div>
          </DocsSidebar>
        </div>
      </main>
      <Footer />
    </>
  );
}
