import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Text, P } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { Kw, N, Op, B, C } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Procedures</Title>
            <Subtitle>This topic is meant to document procedures in Pile</Subtitle>

            <Title2>What is a procedure?</Title2>
            <P>
                In Pile, a <strong>procedure</strong> is a reusable block of code that is executed when it is <strong>called</strong>. 
                Unlike conventional programming languages where parameters are passed explicitly, and return values are common, procedures 
                in Pile interact solely through the stack.
            </P>
            <P>
                Procedures in Pile are stack-based by design. This means that:
            </P>
            <Text>
                <ul>
                    <li>
                        Parameters are implicitly <strong>pushed</strong> onto the stack before the procedure is called.
                    </li>
                    <li>
                        The procedure <strong>modifies</strong> the stack directly—either by consuming values, producing new ones, or both.
                    </li>
                    <li>
                        There is no concept of explicit return values; instead, the stack holds the results after the procedure completes.
                    </li>
                </ul>
            </Text>
            
            <P>
                This makes procedures in Pile behave like isolated transformations of the stack, providing a flexible and consistent 
                mechanism for code execution.
            </P>

            <Title2>Usage</Title2>
            <P>To define a procedure, use the <code>proc</code> keyword followed by the procedure name. The procedure ends with the <code>end</code> keyword.</P>
            <P>To call a procedure, simply use its name in the code. Ensure the required stack values are present before the call.</P>
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

            <P>Notice how the parameters (values on the stack) are manipulated within the procedure and the results remain on the stack after execution.</P>
        </DocsPage>
    );
}
