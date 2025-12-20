import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, P, Title2, Title3 } from "@/components/Docs";
import Code from "@/components/Code";
import { Op, N, Kw, B, S } from "@/components/Code"; // Import B for built-ins

export default function Docs() {
  return (
    <DocsPage>
      <Title>Control Flow</Title>
      <Subtitle>
        This topic documents control flow structures in the language.
      </Subtitle>

      <Title2>
        Simple <code>if</code> Statement
      </Title2>
      <P>
        The simple <code>if</code> statement checks the top element on the
        stack. If this value (<code>&lt;CONDITION&gt;</code>) is <i>truthy</i>{" "}
        (non-zero), the interpreter executes the block inside (
        <code>&lt;CODE&gt;</code>).
      </P>
      <P>Syntax:</P>
      <Code>
        &lt;CONDITION&gt; <Kw x="if" />
        <br />
        <span> &lt;CODE&gt;</span>
        <br />
        <Kw x="end" />
      </Code>
      <P>Example:</P>
      <Code>
        <N x="1" /> <Kw x="if" />
        <br />
        <N x="  10" /> <B x="Print" />
        <br />
        <Kw x="end" />
        <br />
        <N x="0" /> <Kw x="if" />
        <br />
        <N x="  20" /> <B x="Print" />
        <br />
        <Kw x="end" />
      </Code>
      <P>
        In this example, only 10 will be printed, as 1 is truthy and 0 is falsy.
      </P>

      <Title2>
        Compound <code>if</code> Statement
      </Title2>
      <P>
        The compound <code>if</code> statement checks the top element on the
        stack. If this value (<code>&lt;CONDITION&gt;</code>) is <i>truthy</i>,
        the interpreter executes the block inside (<code>&lt;CODE&gt;</code>).
        Otherwise, the interpreter executes the block after <code>else</code> (
        <code>&lt;OTHERWISE&gt;</code>).
      </P>
      <P>Syntax:</P>
      <Code>
        <>
          &lt;CONDITION&gt; <Kw x="if" />
          <br />
          <span> &lt;CODE&gt;</span>
          <br />
          <Kw x="else" />
          <br />
          <span> &lt;OTHERWISE&gt;</span>
          <br />
          <Kw x="end" />
        </>
      </Code>
      <P>Example:</P>
      <Code>
        <N x="0" /> <Kw x="if" />
        <br />
        <N x="  10" /> <B x="Print" />
        <br />
        <Kw x="else" />
        <br />
        <N x="  20" /> <B x="Print" />
        <br />
        <Kw x="end" />
      </Code>
      <P>
        In this example, &quot;20&quot; will be printed because the condition is
        0 (falsy).
      </P>

      <Title2>Loops</Title2>
      <Title3>
        The <code>loop</code> statement
      </Title3>
      <P>
        The <code>loop</code> keyword creates an infinite loop.
      </P>
      <P>
        Use <code>break</code> to exit the loop and <code>continue</code> to
        jump to the next iteration.
      </P>
      <P>Syntax:</P>
      <Code>
        <Kw x="loop" />
        <br />
        <span> &lt;CODE&gt;</span>
        <br />
        <Kw x="end" />
      </Code>
      <P>
        Example with <code>if</code> and <code>break</code>:
      </P>
      <Code>
        <N x="0" /> <Kw x="loop" />
        <br />
        <Op x="  dup" /> <B x="Print" />
        <br />
        <Op x="  dup" /> <N x="10" /> <Op x="=" /> <Kw x="if" />
        <br />
        <Kw x="    break" />
        <br />
        <Kw x="  end" />
        <br />
        <N x="  1" /> <Op x="+" />
        <br />
        <Kw x="end" />
      </Code>
      <P>This will output "1 2 3 4 5 6 7 8 9 10"</P>

      <Title3>
        The <code>for</code> statement
      </Title3>
      <P>
        The <code>for</code> statement iterates over a{" "}
        <a href="/docs/sequence">sequence</a> on top of the stack while
        assigning each iterated element to a variable.
      </P>

      <P>
        As in <code>loop</code> statement, use <code>break</code> to exit the
        loop and <code>continue</code> to jump to the next iteration.
      </P>
      <P>Syntax:</P>
      <Code>
        <Kw x="for" /> &lt;VARIABLE NAME&gt;
        <br />
        <span> &lt;CODE&gt;</span>
        <br />
        <Kw x="end" />
      </Code>
      <P>
        Example with <code>if</code>, <code>break</code> and <code>continue</code>:
      </P>
      <Code>
        <Kw x="array" /> <N x="1 2 3 4 5 6" /> <Kw x="end" />
        <br />
        <Kw x="  for" /> x<br />
        <span>    </span>x <N x="3" /> <Op x="=" /> <Kw x="if continue end" />
        <br />
        <span>    </span>x <B x="Print" /><br />
        <span>    </span>x <N x="3" /> <Op x="=" /> <Kw x="if break end" /><br/>
        <Kw x="  end" />
        <br />
      </Code>
      <P>This will output "1 2 4 5"</P>
    </DocsPage>
  );
}
