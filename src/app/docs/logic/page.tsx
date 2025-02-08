import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Table, P, Text } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { C, Op, S, N } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Logical Operations</Title>
            <Subtitle>Learn how to use logical operations in your programs.</Subtitle>
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
                        <td>Equals</td>
                        <td><code>=</code></td>
                        <td>
                            Pops the last 2 items from the stack and pushes <code>true</code> if they are equal, or <code>false</code> otherwise. Works with both 
                            numbers and strings.
                        </td>
                    </tr>
                    <tr>
                        <td>Less Than</td>
                        <td><code>&lt;</code></td>
                        <td>
                            Pops the last 2 numbers from the stack and pushes <code>true</code> if the first is less than the second, or <code>false</code> otherwise.
                        </td>
                    </tr>
                    <tr>
                        <td>Greater Than</td>
                        <td><code>&gt;</code></td>
                        <td>
                            Pops the last 2 numbers from the stack and pushes <code>true</code> if the first is greater than the second, or <code>false</code> otherwise.
                        </td>
                    </tr>
                    <tr>
                        <td>Greater Than or Equal To</td>
                        <td><code>&gt;=</code></td>
                        <td>
                            Pops the last 2 numbers from the stack and pushes <code>true</code> if the first is greater than or equal to the second, or <code>false</code> otherwise.
                        </td>
                    </tr>
                    <tr>
                        <td>Less Than or Equal To</td>
                        <td><code>&lt;=</code></td>
                        <td>
                            Pops the last 2 numbers from the stack and pushes <code>true</code> if the first is less than or equal to the second, or <code>false</code> otherwise.
                        </td>
                    </tr>
                    <tr>
                        <td>Not Equals</td>
                        <td><code>!=</code></td>
                        <td>
                            Pops the last 2 items from the stack and pushes <code>true</code> if they are not equal, or <code>false</code> otherwise. Works with both 
                            numbers and strings.
                        </td>
                    </tr>
                    <tr>
                        <td>Is Nil</td>
                        <td><code>?</code></td>
                        <td>
                            Pops the last item on the stack and pushes <code>true</code> if the item in question is <code>nil</code>, otherwise <code>false</code>.
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Title2>Usage</Title2>
            <P>
                Use logical operations to evaluate conditions in your programs. 
                Here are a few examples:
            </P>
            <Code>
                <C x="# Checking equality between numbers" /><br />
                <N x="10" /> <N x="10" /> <Op x="=" /> <C x="# The stack now contains: 1" /><br />
                <br />
                <C x="# Comparing strings" /><br />
                <S x='"hello"' /> <S x='"world"' /> <Op x="!=" /> <C x="# The stack now contains: 1" /><br />
                <br />
                <C x="# Using greater than comparison" /><br />
                <C x="# Remember about LIFO, the order is reversed, it is 10 > 15 and not 15 > 10" /><br />
                <N x="15" /> <N x="10" /> <Op x=">" /> <C x="# The stack now contains: 0" /><br />
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
