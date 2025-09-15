import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Title3, Text, P } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { Kw, N, Op, B, C } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Variables and Scope</Title>
            <Subtitle>Understand variables and the scoping system in Pile</Subtitle>

            <Title2>Variables</Title2>
            
            <P>In Pile, a variable is a value bound to a name at runtime. When used, its stored value is pushed on the stack.</P>

            <P>A local variable can:</P>
            <Text>
                <ul>
                    <li>Be destroyed. Its name becomes undefined after the end of a scoped block.</li>
                    <li>Be overwritten (have its value changed during runtime).</li>
                </ul>
            </Text>
            
            <Title2>Defining and using variables</Title2>

            <P>There are two ways to define variables in Pile, you can use the more compact <strong><code>let</code> statement</strong>, or you may use the <strong><code>as-let</code> statement</strong> to define multiple variables.</P>
            
            <Title3>Using <code>let</code> statement</Title3>
            <Code>
                <C x="# Use let <name> syntax to define variables"/><br/>
                <C x="# Remember to be sure that you have at least a value on the stack"/><br/>
                <C x="# or you will get a "/><a href="/docs/error#stackunderflow">Stack Underflow</a> <C x="error"/><br/>
                <N x="69"/> <Kw x="let"/> x<br/><br/>
                <C x="# Now, to use it, just refer to its name and its value will be pushed onto the stack:"/><br/>
                x <B x="println"/> <C x="# Result: 69"/><br/>
            </Code>

            <Title3>Using <code>as-let</code> statement</Title3>
            <P><code>as-let</code> statement is a way I found to make defining multiple variables easier through the logic of a program.</P>
            <P>Use the <code>as</code> keyword followed by the names of the variables you want to define, separated by space.</P>
            <Code>
                <N x="69 420 1336"/> <Kw x="as" /> variable1 variable2 variable3 <Kw x="let" /><br />
                <C x="# Note that the binding order is related to how they appear reading, not the order on the top of the stack."/><br/>
                <C x="# That means variable1 = 69, variable2 = 420, and variable3 = 1336"/><br/>
            </Code>

            <Title2>Scoping</Title2>
            <P>In Pile, scoping works pretty much like any other programming language. All variables defined inside a scope are invalidated after the end of the same.</P>
            <P>The following structures in Pile generate scoped blocks:</P>
            <Text>
                <ul>
                    <li>Modules</li>
                    <li>Procedure blocks</li>
                </ul>
            </Text>
            <P>Other blocks like conditionals and loops do not create scoped blocks. This is purely a design choice.</P>

            <Title2>Code examples</Title2>
            <P>Here&apos;s another example, this time showing how <code>as-let</code> can be used in procedures to work as named arguments:</P>
            <Code>
                <Kw x="proc" /> square <Kw x="as" /> number <Kw x="let" /><br />
                <span>  number</span> <Op x="dup *" /><br />
                <Kw x="end" /><br />
                <br />
                <N x="8" /> square <B x="println" /><br />
                <C x="# Output: 64" /><br />
            </Code>
            
            <P>In this example, the variable <code>number</code> is not valid after the call of <code>square</code> which is (in most cases) the desired behavior for named arguments.</P>
        </DocsPage>
    );
}
