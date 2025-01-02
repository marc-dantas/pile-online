import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Text, P } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { Kw, N, Op, B, C, S } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Procedures</Title>
            <Subtitle>This topic is meant to document procedures in Pile</Subtitle>

            <Title2>Overview</Title2>
            
            <P>In the Pile programming language, a procedure is a reusable block of code designed to perform specific tasks. Unlike traditional functions in other languages, procedures in Pile:</P>

            <Text>
                <ul>
                    <li>Do not have named arguments: Data is passed and manipulated solely via the stack.</li>
                    <li>Do not return values: The stack holds all the intermediate and final results of the operations performed.</li>
                    <li>Procedures are a key part of writing modular and maintainable code in Pile, allowing you to define, organize, and reuse blocks of code.</li>
                </ul>
            </Text>
            
            <Title2>Defining a Procedure</Title2>

            <P>To define a procedure in Pile, use the <code>proc</code> keyword followed by the name of the procedure and the <code>end</code> keyword to mark the end of the procedure.</P>

            <P>Syntax:</P>
            <Code>
                <Kw x="proc" /> &lt;NAME&gt;<br />
                <span>  &lt;CODE&gt;</span><br />
                <Kw x="end" /><br />
            </Code>

            <Title2>Code examples</Title2>
            <P>Here&apos;s an example demonstrating a simple procedure to add two numbers:</P>
            <Code>
                <Kw x="proc" /> add_three_numbers<br />
                <Op x="  + +" /><br />
                <Kw x="end" /><br />
                <br />
                <N x="5 5 5" /> add_three_numbers <B x="println" /><br />
                <C x="# Output: 15" /><br />
            </Code>

            <P>Here&apos;s another example showing how procedures can interact with the stack for more complex operations:</P>
            <Code>
                <Kw x="proc" /> square<br />
                <Op x="  dup *" /><br />
                <Kw x="end" /><br />
                <br />
                <N x="8" /> square <B x="println" /><br />
                <C x="# Output: 64" /><br />
            </Code>
            
            <P>This procedure is meant to check if a given number is even or odd:</P>
            <Code>
                <Kw x="proc" /> even_odd<br />
                <N x="  2" /> <Op x="swap %" /> <N x="0" /> <Op x="=" /> <Kw x="if" /><br />
                    <S x='    "Even"' /> <B x="println" /><br />
                <Kw x="  else" /><br />
                    <S x='    "Odd"' /> <B x="println" /><br />
                <Kw x="  end" /><br />
                <Kw x="end" /><br />
                <br />
                <N x="4" /> even_odd <C x="# Output: Even" /><br />
                <N x="7" /> even_odd <C x="# Output: Odd" /><br />
            </Code>

            <P>Notice how the parameters (values on the stack) are manipulated within the procedure and the results remain on the stack after execution.</P>
        </DocsPage>
    );
}
