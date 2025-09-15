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
                <span>&lt;FILENAME&gt;:&lt;LINE&gt;:&lt;COL&gt;: &lt;ERROR&gt;:</span><br />
                <span>  |    &lt;MESSAGE&gt;</span><br />
                <span>  +  &lt;HELP&gt;</span><br />
            </Code>
            <Text>
                <ul>
                    <li><code>&lt;FILENAME&gt;</code>: The name of the file that the error was thrown.</li>
                    <li><code>&lt;LINE&gt;</code>: The line relative to the file that the error was thrown.</li>
                    <li><code>&lt;COL&gt;</code>: The line column relative to the file that the error was thrown.</li>
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

            <Title4 id="emptydef">Empty Definition</Title4>
            <P>Empty Definition is thrown when the interpreter can&apos;t bind a definition to any value. This happens because there&apos;s no value on top of the stack after the execution of the definition block.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <Kw x="def" /> empty<br />
                    <C x='  # Nothing here!' /><br />
                <Kw x="end" /><br />
            </Code>

            <Title4 id="arrayindexoutofbounds">Array Index Out Of Bounds</Title4>
            <P>Array Index Out Of Bounds is thrown when the interpreter can&apos;t access a array element at the specified index by using a <a href="/docs/sequences">sequence operation</a> incorrectly.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <Kw x="array" /> <Op x="1 2 3" /> <Kw x="end" /><br />
                <Kw x="  let"/> arr<br />
                <br />
                <C x="# Tried to access at index 20 but the size of the array is 3"/><br />
                arr <N x="20" /> <Op x="@"/><br />
            </Code>

            <Title4 id="stringindexoutofbounds">String Index Out Of Bounds</Title4>
            <P>String Index Out Of Bounds is thrown when the interpreter can&apos;t access string character at the specified index by using a <a href="/docs/sequences">sequence operation</a> incorrectly.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <S x='"abcdef"' /><br />
                <Kw x="  let"/> str<br />
                <br />
                <C x="# Tried to access at index 13 but the size of the string is 6"/><br />
                str <N x="13" /> <Op x="@"/><br />
            </Code>
        </DocsPage>
    )
}