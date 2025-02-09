import DocsPage from "@/components/DocsPage";
import Code from "@/components/Code";
import { Kw, Op, N, C, B } from "@/components/Code";
import { Title, Subtitle, P, Title2 } from "@/components/Docs";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Definitions</Title>
            <Subtitle>This topic is meant to document definitions in Pile</Subtitle>

            <Title2>Overview</Title2>

            <P>In the Pile programming language, a definition is a constant value bound to a name which is computed at the time of its creation.</P>

            <Title2>Creating a Definition</Title2>

            <P>To create a definition in Pile, use the <code>def</code> keyword followed by the name of the definition and <code>end</code> keyword to mark the end of the definition.</P>

            <P>Syntax:</P>
            <Code>
                <Kw x="def" /> &lt;NAME&gt;<br />
                <span>  &lt;CONSTANT&gt;</span><br />
                <Kw x="end" /><br />
            </Code>

            <P><code>&lt;CONSTANT&gt;</code> can be any expression that results in a value on top of the stack to be associated with the definition&apos;s name.</P>

            <Title2>Code examples</Title2>
            <P>Here&apos;s an example demonstrating a simple definition that stores the result of 1 + 1:</P>
            <Code>
                <Kw x="def" /> ONEPLUSONE <N x="1 1" /> <Op x="+"/> <Kw x="end" /><br />
                <br />
                ONEPLUSONE <B x="println" /><br />
                <C x="# Output: 2" /><br />
            </Code>

            <P>Here&apos;s another example of a definition that stores &pi;:</P>
            <Code>
                <Kw x="def" /> PI <N x="3.14159265359" /> <Kw x="end" /><br />
            </Code>
            <P>Note that you can input any code inside the definition&apos;s block as long as there is a value on top of the stack <strong>produced by the expression</strong> to be bound to the name.</P>
        </DocsPage>
    )
}