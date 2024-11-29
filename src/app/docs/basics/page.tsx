import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, P, Title2, Highlighted } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { C, Kw, Op, S, N, B } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Basics</Title>
            <Subtitle>This topic is meant to demonstrate the basics</Subtitle>
            <Title2>Simple tutorial</Title2>
            <P>
                Let's start with a simple demonstration of how Pile works. Each number or string 
                you type is automatically pushed onto the stack. From there, you can perform operations.
            </P>
            <Code>
                <C x="# Adding two numbers" /><br />
                <N x="3" /> <N x="5" /> <Op x="+" /><br />
                <C x="# The stack now contains: 8" /><br />
                <br />
                <C x="# A more complex operation" /><br />
                <N x="4" /> <N x="2" /> <Op x="*" /> <N x="6" /> <Op x="+" /><br />
                <C x="# Multiplies 4 by 2, then adds 6. Stack result: 14" /><br />
            </Code>
            <P>
                Pile operates with a single stack, so everything you do affects the same stack. 
                Here's a demonstration of how stack manipulation works:
            </P>
            <Code>
                <C x="# Stack manipulation example" /><br />
                <N x="10" /> <Op x="dup" /><br />
                <C x="# Duplicates the top value: 10 10" /><br />
                <N x="20" /> <Op x="swap" /><br />
                <C x="# Swaps the top two values: 20 10" /><br />
                <Op x="drop" /><br />
                <C x="# Removes the top value: 20" /><br />
            </Code>
            <P>Use <code>dump</code> operation to write to the terminal the last item on top of the stack. Use <code>println</code> to print to stdout the last string on top of the stack (if it is a number, converts it to a string)</P>
            <Code>
                <C x="# Use dump as a debugging operation" /><br />
                <N x="99" /> <Op x="dump" /><br />
                <br />
                <C x="# Use println to print messages like Hello World" /><br />
                <S x='"Hello World"' /> <B x="println" /><br />
            </Code>
            <P>Pile works with the Last-in, First-out (LIFO) mechanism of executing operations. That means that the order of the operands of some operations that matter the order of the operands is reversed:</P>
            <Code>
                <C x="# Subtraction, for example, is reversed in order" /><br />
                <N x="1 10" /> <Op x="-" /> <C x="# This is 10 - 1 and not 1 - 10" /><br />
                <br />
                <C x="# Division can be weird" /><br />
                <N x="2 10" /> <Op x="/" /> <C x="# This is 10/2 and not 2/10" /><br />
                <br />
                <N x="1 10" /> <Op x="+" /> <C x="# In addition, the order doesn't matter" /><br />
                <N x="10 1" /> <Op x="+" /> <C x="# In addition, the order doesn't matter" /><br />
                <br />
                <N x="5 2" /> <Op x="*" /> <C x="# Same for multiplication" /><br />
                <N x="2 5" /> <Op x="*" /> <C x="# Same for multiplication" /><br />
            </Code>

            <Title2>Control flow</Title2>
            <P>
                Pile uses simple keywords like <code>if</code>, <code>else</code>, and <code>end</code> to handle conditional logic. Here's a small example:
            </P>
            <Code>
                <C x="# Conditional example" /><br />
                <N x="5" /> <N x="5" /> <Op x="=" /> <Kw x="if" /><br />
                <S x='  "Equal"' /> <Op x="dump" /><br />
                <Kw x="else" /> <C x="# This is optional" /><br />
                <S x='  "Not equal"' /> <Op x="dump" /><br />
                <Kw x="end" /><br />
                <br />
                <C x="# Output: Equal" /><br />
            </Code>
            <Title2>Procedures</Title2>
            <P>
                In Pile, you can create reusable blocks of code called procedures. They do not take 
                arguments directly but can manipulate the stack:
            </P>
            <Code>
                <C x="# Procedure example" /><br />
                <Kw x="proc" /> say_hello<br />
                <S x='  "Hello, Pile!"' /> <B x="println" /><br />
                <Kw x="end" /><br />
                <br />
                <C x="# Calling the procedure" /><br />
                say_hello<br />
                <br />
                <C x="# Output: Hello, Pile!" /><br />
            </Code>
            <P>
                This code defines a procedure <code>say_hello</code> that prints <code>"Hello, Pile!"</code>. When 
                the procedure is called, the stack remains consistent.
            </P>

            <Highlighted>Learn more about Pile in the next topics.</Highlighted>
        </DocsPage>
    );
}