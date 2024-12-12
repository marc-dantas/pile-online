import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title3, P, Title2 } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { C, Op, B, N, Kw } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Control flow</Title>
            <Subtitle>This topic is meant to document control flow</Subtitle>
            <Title2>Simple <code>if</code> statement</Title2>
            <P>The simple <code>if</code> statement checks the last element on the stack.</P>
            <P><strong>If</strong> this value (<code>&lt;CONDITION&gt;</code>) is evaluated as a <i>truthy</i> condition. The interpreter executes the block inside (<code>&lt;CODE&gt;</code>).</P>
            <P>Syntax:</P>
            <Code>
                &lt;CONDITION&gt; <Kw x="if"/><br />
                <span>  &lt;CODE&gt;</span><br />
                <Kw x="end" /><br />
            </Code>
            <Title2>Compound <code>if</code> statement</Title2>
            <P>The compound <code>if</code> statement checks the last element on the stack.</P>
            <P><strong>If</strong> this value (<code>&lt;CONDITION&gt;</code>) is evaluated as a <i>truthy</i> condition. The interpreter executes the block inside (<code>&lt;CODE&gt;</code>).</P>
            <P><strong>Otherwise</strong>, the interpreter executes the block after <code>else</code> instead (<code>&lt;OTHERWISE&gt;</code>).</P>
            <P>Syntax:</P>
            <Code>
                &lt;CONDITION&gt; <Kw x="if"/><br />
                <span>  &lt;CODE&gt;</span><br />
                <Kw x="else" /><br />
                <span>  &lt;OTHERWISE&gt;</span><br />
                <Kw x="end" /><br />
            </Code>
            <Title2>The <code>loop</code> statement</Title2>
            <P>The <code>loop</code> statement repeats its block of code (<code>&lt;CODE&gt;</code>) indefinitely or until the interpreter finds a <code>stop</code> keyword.</P>
            <P>Syntax:</P>
            <Code>
                <Kw x="loop"/><br />
                <span>  &lt;CODE&gt;</span><br />
                <Kw x="end" /><br />
            </Code>
            <Code>
                <Kw x="loop"/><br />
                <span>  &lt;CODE&gt;</span><br />
                <Kw x="  stop" /> <C x="# optional" /><br />
                <Kw x="end" /><br />
            </Code>
            <Title2>Code examples</Title2>
            <P>Counting to 10:</P>
            <Code>
                <N x="0" /> <Kw x="loop"/><br />
                <Op x="  dup" /> <B x="println"/><br />
                <Op x="  dup" /> <N x="10" /> <Op x="=" /> <Kw x="if stop end" /><br />
                <N x="  1" /> <Op x="+"/><br />
                <Kw x="end" /><br />
            </Code>
        </DocsPage>
    )
}