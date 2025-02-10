import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Text, P } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { Kw, N, Op, B, C, S } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Global Variables</Title>
            <Subtitle>This topic is meant to document global variables in Pile</Subtitle>

            <Title2>Overview</Title2>
            
            <P>In Pile, a global variable is a value bound to a name at runtime. When used, its stored value is pushed on the stack.</P>

            <P>A global variable can:</P>
            <Text>
                <ul>
                    <li>Not be destroyed. Its name is always defined during the execution of the entire program.</li>
                    <li>Be overwritten.</li>
                </ul>
            </Text>
            
            <Title2>Defining a Global Variable</Title2>

            <P>To define a variable in Pile, use the <code>let</code> statement.</P>
            <P>Use the <code>let</code> keyword followed by the name of the variable.</P>
            <P><strong>NOTE</strong>: <code>let</code> statement needs a value on top of the stack to bind. If there's no value, you'll see an <a href="/docs/error/#unboundvariable">Unbound Variable</a> error.</P>
            <P>Syntax:</P>
            <Code>
                <Kw x="let" /> &lt;NAME&gt;<br />
            </Code>

            <Title2>Code examples</Title2>
            <P>Here&apos;s an example demonstrating a simple variable containing a string:</P>
            <Code>
                <S x='"Message"'/> <Kw x="let" /> message<br />
                message <B x="println" /><br />
                <C x="# Output: Message" /><br />
            </Code>

            <P>Here&apos;s another example showing how variables can be used in procedures to work as named arguments:</P>
            <Code>
                <Kw x="proc" /> square<br />
                <Kw x="  let" /> number<br />
                <span>  number</span> <Op x="dup *" /><br />
                <Kw x="end" /><br />
                <br />
                <N x="8" /> square <B x="println" /><br />
                <C x="# Output: 64" /><br />
            </Code>
            
            <P>In this example, the variable <code>number</code> is still valid, but with use of <a href="/docs/locals">Local Variables</a>, this can be avoided.</P>
        </DocsPage>
    );
}
