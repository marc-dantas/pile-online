import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Table, P } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { C, Kw, Op, S, N, B } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Mathematical operations</Title>
            <Subtitle>This topic is meant to document mathematical operations</Subtitle>
            <Title2>Reference</Title2>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr><td>Name</td><td>Operation</td><td>Description</td></tr>
                </thead>
                <tbody>
                    <tr><td>Add/Concatenate</td><td><code>+</code></td><td>Pops the last 2 items from the stack and pushes the sum/concatenation of them</td></tr>
                    <tr><td>Subtract</td><td><code>-</code></td><td>Pops the last 2 items from the stack and pushes the subtraction of them</td></tr>
                    <tr><td>Multiply</td><td><code>*</code></td><td>Pops the last 2 items from the stack and pushes the multiplication of them</td></tr>
                    <tr><td>Divide</td><td><code>/</code></td><td>Pops the last 2 items from the stack and pushes the division of them</td></tr>
                    <tr><td>More operations coming soon!</td></tr>
                </tbody>
            </Table>
            <Title2>Usage</Title2>
            <P>Use the mathematical operations to perform simple calculation in your programs:</P>
            <Code>
                <C x="# Adding two numbers" /><br />
                <N x="10" /> <N x="10" /> <Op x="+" /> <C x="# The stack now contains 20 at the top" /><br />
                <C x="# Concatenating strings" /><br />
                <S x='"Pile "' /> <S x='"Programming Language"' /> <Op x="+" /> <B x="println" /> <C x="# Output: Pile Programming Language" /><br />
                <C x="# Note: Concatenation only works with two strings, no numbers involved" /><br />
                <br />
                <C x="# A more complex expression" /><br />
                <N x="2 50 10" /> <Op x="* /" /> <N x="1" /> <Op x="+" /><br />
                <C x="# Pushes 2, 50 and 10 onto the stack" /><br />
                <C x="# Multiplies the 50 and the 10, resulting in 500" /><br />
                <C x="# Divides the 500 by 2, resulting in 250" /><br />
                <C x="# Adds 1 to all of this, resulting in 251" /><br />
            </Code>
        </DocsPage>
    )
}