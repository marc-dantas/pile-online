import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Table, P, Text } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { C, Kw, Op, S, N, B } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Mathematical Operations</Title>
            <Subtitle>Learn how to use mathematical operations in your programs.</Subtitle>
            <Title2>Reference</Title2>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Name</td>
                        <td>Operation</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Add/Concatenate</td>
                        <td><code>+</code></td>
                        <td>
                            Pops the last 2 items from the stack and pushes their sum 
                            (if numbers) or concatenation (if strings).
                        </td>
                    </tr>
                    <tr>
                        <td>Subtract</td>
                        <td><code>-</code></td>
                        <td>Pops the last 2 items from the stack and pushes their difference.</td>
                    </tr>
                    <tr>
                        <td>Multiply</td>
                        <td><code>*</code></td>
                        <td>Pops the last 2 items from the stack and pushes their product.</td>
                    </tr>
                    <tr>
                        <td>Divide</td>
                        <td><code>/</code></td>
                        <td>Pops the last 2 items from the stack and pushes their quotient.</td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="has-text-centered">
                            <em>More operations coming soon!</em>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Title2>Usage</Title2>
            <P>
                Use the mathematical operations to perform simple calculations in your programs. 
                Here are a few examples:
            </P>
            <Code>
                <C x="# Adding two numbers" /><br />
                <N x="10" /> <N x="10" /> <Op x="+" /> <C x="# The stack now contains: 20" /><br />
                <br />
                <C x="# Concatenating strings" /><br />
                <S x='"Pile "' /> <S x='"Programming Language"' /> <Op x="+" /> <B x="println" /><br />
                <C x="# Output: Pile Programming Language" /><br />
                <C x="# Note: Concatenation works only with strings, not numbers." /><br />
                <br />
                <C x="# A more complex expression" /><br />
                <N x="2 50 10" /> <Op x="* /" /> <N x="1" /> <Op x="+" /><br />
                <C x="# Explanation:" /><br />
                <C x="# - Pushes 2, 50, and 10 onto the stack" /><br />
                <C x="# - Multiplies 50 and 10 (result: 500)" /><br />
                <C x="# - Divides 500 by 2 (result: 250)" /><br />
                <C x="# - Adds 1 to the result (final result: 251)" /><br />
            </Code>
            <Title2>Possible Errors</Title2>
            <Text>
                <ul>
                    <li><a href="/docs/error#stackunderflow">Stack Underflow</a></li>
                    <li><a href="/docs/error#unexpectedtype">Unexpected Type</a></li>
                </ul>
            </Text>
        </DocsPage>
    );
}
