import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Text, P } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { Kw, N, Op, B, C, S } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Local Variables</Title>
            <Subtitle>This topic is meant to document local variables in Pile</Subtitle>

            <Title2>Overview</Title2>
            
            <P>In Pile, a local variable is a value bound to a name at runtime. When used, its stored value is pushed on the stack.</P>

            <P>A local variable can:</P>
            <Text>
                <ul>
                    <li>Be destroyed. Its name becomes undefined after the end of a scoped block.</li>
                    <li>Be overwritten.</li>
                </ul>
            </Text>
            
            <Title2>Defining Local Variables</Title2>

            <P>To define a local variable in Pile, use the <code>as..let</code> statement block.</P>
            <P>Use the <code>as</code> keyword followed by the names of the variables you want to define, separated by space.</P>
            <P>Then write <code>let</code> and put the code that uses those variables inside the block</P>
            <P><strong>NOTE</strong>: <code>as..let</code> statement needs values on top of the stack to bind. If there's no value or too few of them, you'll see an <a href="/docs/error/#unboundvariable">Unbound Variable</a> error.</P>
            <P>Syntax:</P>
            <Code>
                <Kw x="as" /> &lt;NAMES...&gt; <Kw x="let" /><br />
                <span>    &lt;CODE&gt;</span><br />
                <Kw x="end" /><br />
            </Code>

            <Title2>Code examples</Title2>
            <P>Here&apos;s an example demonstrating a numbers being assigned to different variables:</P>
            <Code>
                <N x='1 2 3 4'/><br/>
                <Kw x="as" /> a b c d <Kw x="let"/><br />
                <C x="    # Each variable is assigned to each corresponding value"/><br />
                <C x="    # a = 1, b = 2, c = 3, d = 4"/><br />
                <Kw x="end" /><br />
                <C x="# After this end, a, b, c, and d are not valid variables anymore"/><br />
            </Code>

            <P>Here&apos;s another example showing how variables can be used in procedures to work as named arguments:</P>
            <Code>
                <Kw x="proc" /> square<br />
                <Kw x="  as" /> number <Kw x="let" /><br />
                <span>    number</span> <Op x="dup *" /><br />
                <Kw x="  end" /><br />
                <Kw x="end" /><br />
                <br />
                <N x="8" /> square <B x="println" /><br />
                <C x="# Output: 64" /><br />
            </Code>
            
            <P>In this example, the variable <code>number</code> is not valid after the call of <code>square</code> which is (in most cases) the desired behavior for named arguments.</P>
        </DocsPage>
    );
}
