import DocsPage from "@/components/DocsPage";
import { P, Title, Subtitle, Title2, Title3, Title4, Text } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { C, Kw, Op, S, N, B } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Errors</Title>
            <Subtitle>This topic is meant to document all possible language errors in Pile</Subtitle>
            <Title2>How Errors Work</Title2>
            <P>In Pile, errors are represented like this:</P>
            <Code>
                <span>pile: error at &lt;FILENAME&gt;:&lt;LINE&gt;:&lt;COL&gt;:</span><br />
                <span>    | &lt;ERROR&gt;:</span><br />
                <span>    |    &lt;MESSAGE&gt;</span><br />
                <span>    + &lt;HELP&gt;</span><br />
            </Code>
            <Text>
                <ul>
                    <li><code>&lt;FILENAME&gt;</code>: The name of the file that the error was thrown.</li>
                    <li><code>&lt;LINE&gt;</code>: The line relative to the file that the error was thrown.</li>
                    <li><code>&lt;COLUMN&gt;</code>: The line column relative to the file that the error was thrown.</li>
                    <li><code>&lt;ERROR&gt;</code>: The type of error that was thrown.</li>
                    <li><code>&lt;MESSAGE&gt;</code>: The error message.</li>
                    <li><code>&lt;HELP&gt;</code>: The error help text.</li>
                </ul>
            </Text>
            
            <Title2>Types of Errors</Title2>

            <Title3>Token Error</Title3>            
            <P>Represented as <code>token error</code></P>
            
            <Title4 id="unterminatedstring">Unterminated String</Title4>
            <P>Unterminated String is thrown when the lexer finds a string literal without a matching closing delimiter (&quot;).</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>

                <S x='"I am unterminated'/><br />
                <B x="println" />
            </Code>
    
            <Title4 id="invalidcharacter">Invalid Character</Title4>
            <P>Invalid Character is thrown when the lexer finds an invalid character in a value literal that you write.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <C x="# No cents in Pile" /><br />
                <N x="10¢" />
            </Code>

            <Title4 id="illegalcharacter">Illegal Character</Title4>
            <P>Illegal Character is thrown when the lexer finds an illegal character in the file contents.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <C x="# Non-ascii characters are illegal" /><br />
                <C x="#    vvvvvv" /><br />
                <Kw x="proc" /> привет<br />
                <S x='    "Привет, мир"' /> <B x="println" /><br />
                <C x="    # But inside strings it's fine" /><br />
                <Kw x="end" /><br />
            </Code>
            
            <Title3>Parse Error</Title3>
            <P>Represented as <code>parse error</code></P>

            <Title4 id="unexpectedtoken">Unexpected Token</Title4>
            <P>Unexpected Token is thrown when the parser finds an unexpected token in the current parsing structure.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <C x="# Parser should expect a valid identifier for procs" /><br />
                <Kw x="proc" /> /notanidentifier <Kw x="end" /><br />
                <C x="#    ^+++++++++++++++ here" /><br />
            </Code>

            <Title4 id="unexpectedeof">Unexpected EOF</Title4>
            <P>Unexpected EOF (End of File) is very similar to the <a href="#unexpectedtoken">Unexpected Token</a> error, the only difference is that in place of an unexpected token, the parser finds nothing (the termination of the file).</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <Kw x="proc" /><br />
                <C x="#   ^ should expect at least something :\" /><br />
            </Code>
            
            <Title4 id="unterminatedblock">Unterminated Block</Title4>
            <P>Unterminated Block is thrown when the parser doesn&apos;t find a mathing <code>end</code> keyword to close the block.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <Kw x="proc" /> my_unterminated_procedure<br />
                <S x='  "Hello, Pile"' /> <B x="println" /><br />
                <br />
                <C x="# where&apos;s the end?" /><br />
            </Code>
            
            <Title4 id="unmatchedblock">Unmatched Block</Title4>
            <P>Unmatched Block is thrown when the parser does find an <code>end</code> block termination without the block beginning.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <S x='"hello" "pile"'/> <Op x="=" /> <Kw x="if"/><br />
                <S x='  "hello" "pile"'/> <Op x="swap +" /> <B x="println" /><br />
                <Kw x="end"/><br />
                <Kw x="end"/> <C x="# bruh" /><br />
            </Code>

            <Title3>Runtime Error</Title3>
            <P>Represented as <code>runtime error</code></P>
            
            <Title4 id="stackunderflow">Stack Underflow</Title4>
            <P>Stack Underflow is thrown when the interpreter tries to execute an operation but the stack doesn&apos;t contain enough values on top for the operation.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <N x="1 2 3"/> <Op x="+ + + trace"/><br />
                <C x="#         ^ this operation only gets 6, there&apos;s no second value :\" /><br />
            </Code>

            <Title4 id="unexpectedtype">Unexpected Type</Title4>
            <P>Unexpected Type is thrown when the interpreter tries to execute an operation but the stack values&apos; datatypes do not match properly.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <S x='"69"'/> <N x="420" /> <Op x="="/> <Kw x="if"></Kw><br />
                <C x="  #      ^ this is not JS please" /><br />
                <S x='  "bruh"'/> <B x="println" /><br />
                <Kw x="end"></Kw><br />
            </Code>

            <Title4 id="invalidword">Invalid Word</Title4>
            <P>Invalid Word is thrown when the interpreter finds an undefined name in any part of the program.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                GIRLFRIEND_PHONE_NUMBER <B x="println" /><br />
            </Code>

            <Title4 id="procredefinition">Procedure Redefinition</Title4>
            <P>Procedure Redefinition is thrown when the interpreter finds a second definition of a procedure in the program.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <Kw x="proc" /> again<br />
                <S x='  "Hello, World"' /> <B x="println" /><br />
                <Kw x="end" /><br />
                <br />
                <Kw x="proc" /> again <C x="# again!" /><br />
                <S x='  "Hello, World"' /> <B x="println" /><br />
                <Kw x="end" /><br />
            </Code>

            <Title4 id="defredefinition">Definition Redefinition</Title4>
            <P>Definition Redefinition is basically the same error as <a href="#procredefinition">Procedure Redefinition</a> error but for Definitions.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <Kw x="def" /> PI<br />
                <N x="    3.1415"/><br />
                <Kw x="end" /><br />
                <br />
                <Kw x="def" /> PI <C x="# again!" /><br />
                <N x="    3.1415"/><br />
                <Kw x="end" /><br />
            </Code>
            
            <Title4 id="emptydef">Empty Definition</Title4>
            <P>Empty Definition is thrown when the interpreter can&apos;t bind a definition to any value. This happens because there&apos;s no value on top of the stack after the execution of the definition block.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <Kw x="def" /> empty<br />
                    <C x='  # Nothing here!' /><br />
                <Kw x="end" /><br />
            </Code>
            
            <Title4 id="unboundvariable">Unbound Variable</Title4>
            <P>Unbound Variable is thrown when the interpreter can&apos;t bind a variable value a value on the stack. This happens because to define a variable, you need the amount of values on the stack corresponding to the variables you are defining.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <C x='# Nothing on the stack!' /><br />
                <Kw x="as" /> no_value <Kw x="let" /> <C x="# In this case, it should expect 1 value on the stack" /><br />
                <span>  no_value</span> <B x="println" /><br />
                <Kw x="end" /><br />
            </Code>
        </DocsPage>
    )
}