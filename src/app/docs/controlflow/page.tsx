import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, P, Title2 } from "@/components/Docs";
import Code from "@/components/Code";
import { Op, N, Kw, B } from "@/components/Code"; // Import B for built-ins

export default function Docs() {
    return (
        <DocsPage>
            <Title>Control Flow</Title>
            <Subtitle>This topic documents control flow structures in the language.</Subtitle>

            <Title2>Simple <code>if</code> Statement</Title2>
            <P>The simple <code>if</code> statement checks the top element on the stack. If this value (<code>&lt;CONDITION&gt;</code>) is <i>truthy</i> (non-zero), the interpreter executes the block inside (<code>&lt;CODE&gt;</code>).</P>
            <P>Syntax:</P>
            <Code>
                &lt;CONDITION&gt; <Kw x="if"/><br />
                <span>  &lt;CODE&gt;</span><br />
                <Kw x="end" />
            </Code>
            <P>Example:</P>
            <Code>
                <N x="1" /> <Kw x="if" /><br />
                <N x="  10" /> <B x="println" /><br />
                <Kw x="end" /><br />
                <N x="0" /> <Kw x="if" /><br />
                <N x="  20" /> <B x="println" /><br />
                <Kw x="end" />
            </Code>
            <P>In this example, only 10 will be printed, as 1 is truthy and 0 is falsy.</P>

            <Title2>Compound <code>if</code> Statement</Title2>
            <P>The compound <code>if</code> statement checks the top element on the stack. If this value (<code>&lt;CONDITION&gt;</code>) is <i>truthy</i>, the interpreter executes the block inside (<code>&lt;CODE&gt;</code>). Otherwise, the interpreter executes the block after <code>else</code> (<code>&lt;OTHERWISE&gt;</code>).</P>
            <P>Syntax:</P>
            <Code>
                <>&lt;CONDITION&gt; <Kw x="if"/><br />
                <span>  &lt;CODE&gt;</span><br />
                <Kw x="else" /><br />
                <span>  &lt;OTHERWISE&gt;</span><br />
                <Kw x="end" /></>
            </Code>
            <P>Example:</P>
            <Code>
                <N x="0" /> <Kw x="if" /><br />                
                <N x="  10" /> <B x="println" /><br />
                <Kw x="else" /><br />
                <N x="  20" /> <B x="println" /><br />
                <Kw x="end" />
            </Code>
            <P>In this example, &quot;20&quot; will be printed because the condition is 0 (falsy).</P>

            <Title2>Loops (<code>loop</code>)</Title2>
            <P>The <code>loop</code> keyword creates an infinite loop.</P>
            <P>Use <code>break</code> to exit the loop.</P>
            <P>Use <code>continue</code> to jump to the next iteration.</P>
            <P>Syntax:</P>
            <Code>
                <Kw x="loop" /><br />
                <span>  &lt;CODE&gt;</span><br />
                <Kw x="end" />
            </Code>
            <P>Example with <code>if</code> and <code>break</code>:</P>
            <Code>
                <N x="0" /> <Kw x="loop" /><br />
                <Op x="  dup" /> <B x="println" /><br />
                <Op x="  dup" /> <N x="10" /> <Op x="=" /> <Kw x="if" /><br />
                <Kw x="    break" /><br />
                <Kw x="  end" /><br />
                <N x="  1" /> <Op x="+"/><br />
                <Kw x="end" />
            </Code>
            <P>This will print 1, 2, 3, 4, 5, 6, 7, 8, 9 and 10 and then exit the loop.</P>
        </DocsPage>
    )
}