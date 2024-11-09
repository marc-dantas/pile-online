import Footer from "@/components/Footer";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <>
      <header className="hero is-medium">
        <div className="hero-head">
          <Nav>
            <a className="navbar-item is-active" href="/guide">Guide</a>
            <a className="navbar-item" href="/docs">Documentation</a>
          </Nav>
        </div>
        <div className="hero-body">
          <div className="container">
            <p className="has-text-weight-bold has-logo-font has-text-huge">Guide</p>
            <p className="subtitle">Learn the basics of the Pile programming language fast!</p>
          </div>
        </div>
      </header>
      <main className="hero">
        <div className="hero-body">
          
          {/* Introduction */}
          <section className="section" id="introduction">
            <div className="container">
              <h2 className="title has-logo-font has-text-centered">Introduction</h2>
              <div className="box p-6">
                <div className="content is-size-4 has-text-justified">
                  <p>Pile is a stack-based programming language designed to simplify programming logic for learners, focusing on direct data manipulation through a stack. Every operation works on this single stack, giving a clear understanding of how data flows and changes.</p>
                  <p>In Pile, understanding stack manipulation is key, as each command interacts with the data structure. Let&apos;s see a quick example:</p>
                  <pre className="has-text-white is-size-4">
                    <span className="str">"Hello World!"</span> <span className="op">dump</span> <span className="c"># Classic Hello World program</span><br />
                    <span className="n">1 2</span> <span className="op">+</span> <span className="c"># Pushes 1 and 2 to the stack, then adds them, resulting in 3</span><br />
                    <span className="n">5 10</span> <span className="op">swap</span> <span className="c"># Swaps 5 and 10 on the stack, putting 5 on top</span><br />
                    <span className="n">5</span> <span className="op">dup</span> <span className="c"># Duplicates 5, now the stack has 2 fives</span><br />
                  </pre>
                </div>
              </div>
            </div>
          </section>
          
          {/* Simple Operations */}
          <section className="section" id="simple-operations">
            <div className="container">
              <h2 className="title has-logo-font has-text-centered">Simple Operations</h2>
              <div className="box p-6">
                <div className="content is-size-4 has-text-justified">
                  <p>Pile includes all kinds of basic operations such as arithmetic, logic, comparison and bitwise.</p>
                  <p>Operations are executed on the last elements added to the stack:</p>
                  <h3 className="title is-size-5">Mathematical operations</h3>                  
                  <pre className="has-text-white is-size-4">
                    <span className="n">10 20</span> <span className="op">+</span> <span className="c"># Adds 10 and 20, resulting in 30</span><br />
                    <span className="n">15 5</span> <span className="op">-</span> <span className="c"># Subtracts 5 from 15, resulting in 10</span><br />
                    <span className="n">2 3</span> <span className="op">*</span> <span className="c"># Multiplies 2 by 3, resulting in 6</span><br />
                    <span className="n">20 4</span> <span className="op">/</span> <span className="c"># Divides 20 by 4, resulting in 5</span>
                  </pre>
                  <h3 className="title is-size-5">Logic and comparison operations</h3>
                  <pre className="has-text-white is-size-4">
                    <span className="n">2 3</span> <span className="op">=</span> <span className="c"># Checks if 3 is equal to 2</span><br />
                    <span className="n">2 3</span> <span className="op">!=</span> <span className="c"># Checks if 3 is not equal to 2</span><br />
                    <span className="n">2 3</span> <span className="op">&lt;=</span> <span className="c"># Checks if 3 is less than or equal to 2</span><br />
                    <span className="n">2 3</span> <span className="op">&gt;=</span> <span className="c"># Checks if 3 is greater than or equal to 2</span><br />
                    <span className="n">2 3</span> <span className="op">&lt;</span> <span className="c"># Checks if 3 is less than 2</span><br />
                    <span className="n">2 3</span> <span className="op">&gt;</span> <span className="c"># Checks if 3 is greater than to 2</span><br />
                  </pre>
                  <h3 className="title is-size-5">Bitwise operations</h3>
                  <pre className="has-text-white is-size-4">
                    <span className="n">1</span> <span className="op">!</span> <span className="c"># Bitwise NOT</span><br />
                    <span className="n">1 0</span> <span className="op">|</span> <span className="c"># Bitwise OR</span><br />
                    <span className="n">1 0</span> <span className="op">&</span> <span className="c"># Bitwise AND</span><br />
                    <span className="n">1 0</span> <span className="op">&gt;&gt;</span> <span className="c"># Bitwise SHIFT RIGHT by 1 to 0</span><br />
                    <span className="n">1 0</span> <span className="op">&lt;&lt;</span> <span className="c"># Bitwise SHIFT LEFT by 1 to 0</span><br />
                  </pre>
                </div>
              </div>
            </div>
          </section>
          {/* Stack Manipulation */}
          <section className="section" id="stack-manipulation">
            <div className="container">
              <h2 className="title has-logo-font has-text-centered">Stack Manipulation</h2>
              <div className="box p-6">
                <div className="content is-size-4 has-text-justified">
                  <p>Pile includes 5 operations designed to control the elements that are on the stack. You can use them to create the data logic inside your programs.</p>
                  <p><strong>ANY</strong> literal value that you write in pile is always interpreted as a <i>push</i> operation onto the stack.</p>
                  
                  <h3 className="title is-size-5">Stack manipulation operations</h3>                  
                  <pre className="has-text-white is-size-4">
                    <span className="n">10</span> <span className="op">drop</span> <span className="c"># Drop removes the last value from the top of the stack, represented as (a -- )</span><br />
                    <span className="n">10</span> <span className="op">dup</span> <span className="c"># Duplicates the last value on top of the stack, represented as (a -- a a)</span><br />
                    <span className="n">10 20</span> <span className="op">swap</span> <span className="c"># Swaps the last 2 values on top of the stack, represented as (a b -- b a)</span><br />
                    <span className="n">10 20</span> <span className="op">over</span> <span className="c"># Duplicates the second last element on top the stack and puts it on top, represented as (a b -- a b a)</span><br />
                    <span className="n">10 20 30</span> <span className="op">rot</span> <span className="c"># Duplicates the third last element on the stack and puts it on top, represented as (a b c -- c b a)</span>
                  </pre>

                  <p>Here are a simple example implementing the circle area calculation using the <span className="op is-family-monospace">dup</span> operation:</p>
                  <pre className="has-text-white is-size-4">
                    <span className="kw">def</span> PI <span className="n">3.14159265359</span> <span className="kw">end</span><br />
                    <br />
                    <span className="kw">proc</span> circle_area<br />
                    <span className="op">  dup *</span> PI <span className="op">*</span> <span className="c"># The same as PIr^2</span><br />
                    <span className="kw">end</span>
                  </pre>
                </div>
              </div>
            </div>
          </section>
          {/* Control Flow */}
          <section className="section" id="control-flow">
            <div className="container">
              <h2 className="title has-logo-font has-text-centered">Control Flow</h2>
              <div className="box p-6 is-size-4">
                <div className="content is-size-4 has-text-justified">
                  <p>Control flow commands allow branching and looping, essential for creating logic-driven paths and repetitive actions within the program. Pile provides <span className="kw is-family-monospace">if</span> for conditional statements and <span className="kw is-family-monospace">loop</span> for repetitive actions.</p>
                  <p>Example of <span className="kw is-family-monospace">if</span> statement:</p>
                  <pre className="has-text-white is-size-4">
                    <span className="n">10 10</span> <span className="op">=</span> <span className="kw">if</span><br />
                    <span className="str">  "true case"</span> <span className="op">dump</span> <span className="c"># Use dump to print the value on the stack to stdout</span><br />
                    <span className="kw">else</span><br />
                    <span className="str">  "false case"</span> <span className="op">dump</span><br />
                    <span className="kw">end</span>
                  </pre>
                  <p>Example of <span className="kw is-family-monospace">loop</span> statement:</p>
                  <pre className="has-text-white is-size-4">
                    <span className="kw">loop</span><br />
                    <span className="str">  "this will dump forever"</span> <span className="op">dump</span><br />
                    <span className="kw">  stop</span> <span className="c"># Optional: breaks the loop</span><br />
                    <span className="kw">end</span>
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* Procedures and Definitions */}
          <section className="section" id="procedures-definitions">
            <div className="container">
              <h2 className="title has-logo-font has-text-centered">Procedures and Definitions</h2>
              <div className="box p-6 is-size-4">
                <div className="content is-size-4 has-text-justified">
                  <p>Procedures are reusable blocks of code for commonly used logic, while definitions allow constant values on the stack. Both are useful for code readability and efficiency.</p>
                  
                  <h3 className="title is-size-5">Procedures</h3>
                  <p>Define a procedure with <span className="kw is-family-monospace">proc</span>, followed by a name, then end it with <span className="kw is-family-monospace">end</span>:</p>
                  <pre className="has-text-white is-size-4">
                    <span className="kw">proc</span> greet<br />
                    <span className="str">  "Hello, Pile!"</span> <span className="op">dump</span><br />
                    <span className="kw">end</span><br /><br />
                    greet <span className="c"># Outputs: Hello, Pile!</span>
                  </pre>

                  <h3 className="title is-size-5">Definitions</h3>
                  <p>Constants can be defined with <span className="kw is-family-monospace">def</span> and pushed to the stack whenever needed:</p>
                  <pre className="has-text-white is-size-4">
                    <span className="kw">def</span> PI <span className="n">3.14</span> <span className="kw">end</span><br />
                    PI <span className="c"># Pushes 3.14 onto the stack</span>
                  </pre>
                  <p>You can also write normal operations inside the <span className="kw is-family-monospace">def</span> block:</p>
                  <pre className="has-text-white is-size-4">
                    <span className="kw">def</span> ONEPLUSONE <span className="n">1 1</span> <span className="op">+</span> <span className="kw">end</span><br />
                    ONEPLUSONE <span className="c"># Pushes the result of the calculation made in the def block onto the stack</span>
                  </pre>
                  <p>In Pile, constants and procedures reduce redundancy and make code modular and easier to read.</p>
                </div>
              </div>
            </div>
          </section>
          <div className="columns is-centered">
            <div className="column is-narrow">
              <a href="/docs" className="button is-large is-light is-rounded">Go to Documentation</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
