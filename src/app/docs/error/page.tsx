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
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:1:3:</span><br />
                <span>    |    token error:</span><br />
                <span>    |        expected closing quotation mark (&quot;) for string</span><br />
                <span>    |        literal &quot;I am unterminated  println&quot;.</span><br />
                <span>    +    check if the string was left open unintentionally.</span><br />
            </Code>
    
            <Title4 id="invalidcharacter">Invalid Character</Title4>
            <P>Invalid Character is thrown when the lexer finds an invalid character in a value literal that you write.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <C x="# No cents in Pile" /><br />
                <N x="10¢" />
            </Code>
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:2:3:</span><br />
                <span>    |    token error:</span><br />
                <span>    |        invalid character `¢` found in number literal.</span><br />
            </Code>

            <Title4 id="illegalcharacter">Illegal Character</Title4>
            <P>Illegal Character is thrown when the lexer finds an illegal character in the file contents.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <C x="# This is ILLEGAL!" /><br />
                <N x="ürmom" />
            </Code>
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:2:1:</span><br />
                <span>    |    token error:</span><br />
                <span>    |        illegal character `ü` found in file.</span><br />
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
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:2:6:</span><br />
                <span>    |    parse error:</span><br />
                <span>    |        syntax error: unexpected token while parsing:</span><br />
                <span>    |        expected valid identifier but got /notanidentifier</span><br />
            </Code>

            <Title4 id="unexpectedeof">Unexpected EOF</Title4>
            <P>Unexpected EOF (End of File) is very similar to the <a href="#unexpectedtoken">Unexpected Token</a> error, the only difference is that in place of an unexpected token, the parser finds nothing (the termination of the file).</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <Kw x="proc" /><br />
                <C x="#   ^ should expect at least something :\" /><br />
            </Code>
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:1:1:</span><br />
                <span>    |    parse error:</span><br />
                <span>    |        syntax error: unexpected end of file while parsing:</span><br />
                <span>    |        expected valid identifier but got the end of the</span><br />
                <span>    |        file (nothing)</span><br />
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
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:1:6:</span><br />
                <span>    |    parse error:</span><br />
                <span>    |        syntax error: found unterminated block: termination</span><br />
                <span>    |        of block not provided from `proc` block</span><br />
                <span>    +    perhaps you forgot to write `end`?</span><br />
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
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:4:1:</span><br />
                <span>    |    parse error:</span><br />
                <span>    |        syntax error: found unmatched block: termination</span><br />
                <span>    |        of block (end) provided without a beginning</span><br />
                <span>    |        (`if`, `else`, `proc`, `def`, or `loop`)</span><br />
            </Code>

            <Title3>Runtime Error</Title3>
            <P>Represented as <code>runtime error</code></P>
            
            <Title4 id="stackunderflow">Stack Underflow</Title4>
            <P>Stack Underflow is thrown when the interpreter tries to execute an operation but the stack doesn&apos;t contain enough values on top for the operation.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <N x="1 2 3"/> <Op x="+ + + dump"/><br />
                <C x="#         ^ this operation only gets 6, there&apos;s no second value :\" /><br />
            </Code>
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:1:11:</span><br />
                <span>    |    runtime error:</span><br />
                <span>    |        operation `+` expects 2 element(s) on top of the</span><br />
                <span>    |        stack but got a different amount.</span><br />
                <span>    +    try checking the values before the operation.</span><br />
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
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:1:10:</span><br />
                <span>    |    runtime error:</span><br />
                <span>    |        operation `=` expects (number, number) or (string,</span><br />
                <span>    |        string) datatype(s) on the stack to work, but got</span><br />
                <span>    |        (string, number).</span><br />
                <span>    +    try checking the values before the operation.</span><br />
            </Code>
            <Title4 id="invalidword">Invalid Word</Title4>
            <P>Invalid Word is thrown when the interpreter finds an undefined name in any part of the program.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                GIRLFRIEND_PHONE_NUMBER <B x="println" /><br />
            </Code>
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:1:1:</span><br />
                <span>    |    runtime error:</span><br />
                <span>    |        `GIRLFRIEND_PHONE_NUMBER`</span><br />
                <span>    |        is not defined.</span><br />
                <span>    +    maybe a typo?</span><br />
            </Code>
            <P>Very sad :(</P>
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
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:7:1:</span><br />
                <span>    |    runtime error:</span><br />
                <span>    |        tried to redefine the procedure `again` (this</span><br />
                <span>    |        name is already taken).</span><br />
            </Code>
            <Title4 id="defredefinition">Definition Redefinition</Title4>
            <P>Definition Redefinition is basically the same error as <a href="#procredefinition">Procedure Redefinition</a> error but for Definitions.</P>
            
            <Title4 id="emptydef">Empty Definition</Title4>
            <P>Empty Definition is thrown when the interpreter can&apos;t bind a definition to any value. This happens because there&apos;s no value on top of the stack after the execution of the definition block.</P>
            <P>Here&apos;s a simple code example:</P>
            <Code>
                <Kw x="def" /> empty<br />
                    <C x='  # Nothing here!' /><br />
                <Kw x="end" /><br />
            </Code>
            <P>Output:</P>
            <Code>
                <span>pile: error at .\test.pile:3:3:</span><br />
                <span>    |    runtime error:</span><br />
                <span>    |        definition `empty` has no value to be associated</span><br />
                <span>    |        with. `x` can&apos;t be bound to anything.</span><br />
                <span>    +    add values to the definition body.</span><br />
            </Code>
        
        </DocsPage>
    )
}