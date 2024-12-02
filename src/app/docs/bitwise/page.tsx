import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Table, P, Text } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { C, Kw, Op, S, N, B } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Bitwise Operations</Title>
            <Subtitle>Learn how to perform bitwise operations in your programs.</Subtitle>
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
                        <td>AND</td>
                        <td><code>&amp;</code></td>
                        <td>
                            Pops the last 2 numbers from the stack and pushes their bitwise AND.
                        </td>
                    </tr>
                    <tr>
                        <td>OR</td>
                        <td><code>|</code></td>
                        <td>
                            Pops the last 2 numbers from the stack and pushes their bitwise OR.
                        </td>
                    </tr>
                    <tr>
                        <td>NOT</td>
                        <td><code>!</code></td>
                        <td>
                            Pops the top number from the stack and pushes its bitwise NOT.
                        </td>
                    </tr>
                    <tr>
                        <td>Shift Left</td>
                        <td><code>&lt;&lt;</code></td>
                        <td>
                            Pops the last 2 numbers from the stack (value and shift amount) and 
                            pushes the result of shifting the value left.
                        </td>
                    </tr>
                    <tr>
                        <td>Shift Right</td>
                        <td><code>&gt;&gt;</code></td>
                        <td>
                            Pops the last 2 numbers from the stack (value and shift amount) and 
                            pushes the result of shifting the value right.
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Title2>Usage</Title2>
            <P>
                Use bitwise operations to manipulate binary data directly. Here are a few examples:
            </P>
            <Code>
                <C x="# Performing a bitwise AND" /><br />
                <N x="6" /> <N x="3" /> <Op x="&amp;" /> <C x="# The stack now contains: 2" /><br />
                <br />
                <C x="# Performing a bitwise OR" /><br />
                <N x="4" /> <N x="1" /> <Op x="|" /> <C x="# The stack now contains: 5" /><br />
                <br />
                <C x="# Performing a bitwise NOT" /><br />
                <N x="5" /> <Op x="!" /> <C x="# The stack now contains: -6 (two's complement)" /><br />
                <br />
                <C x="# Shifting bits left" /><br />
                <C x="# Remember about LIFO, the order is reversed, it is 3 << 2 and not 2 << 3" /><br />
                <N x="2" /> <N x="3" /> <Op x="&lt;&lt;" /> <C x="# The stack now contains: 12" /><br />
                <br />
                <C x="# Shifting bits right" /><br />
                <C x="# Remember about LIFO, the order is reversed, it is 16 >> 2 and not 2 >> 16" /><br />
                <N x="2" /> <N x="16" /> <Op x="&gt;&gt;" /> <C x="# The stack now contains: 4" /><br />
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
