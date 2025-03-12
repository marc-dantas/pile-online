import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Table, P, Text } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { C, Op, N } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Stack Manipulation Operations</Title>
            <Subtitle>Learn how to manipulate the stack directly in your programs.</Subtitle>
            <Title2>Reference</Title2>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Name</td>
                        <td>Operation</td>
                        <td>Stack notation</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Duplicate</td>
                        <td><code>dup</code></td>
                        <td>
                            <span className="notation">( a -- a a )</span>
                        </td>
                        <td>
                            Duplicates the top item of the stack. 
                        </td>
                    </tr>
                    <tr>
                        <td>Drop</td>
                        <td><code>drop</code></td>
                        <td>
                            <span className="notation">( a --  )</span>
                        </td>
                        <td>
                            Removes the top item from the stack.
                        </td>
                    </tr>
                    <tr>
                        <td>Swap</td>
                        <td><code>swap</code></td>
                        <td>
                            <span className="notation">( a b -- b a )</span>
                        </td>
                        <td>
                            Swaps the top two items on the stack.
                        </td>
                    </tr>
                    <tr>
                        <td>Over</td>
                        <td><code>over</code></td>
                        <td>
                            <span className="notation">( a b -- a b a )</span>
                        </td>
                        <td>
                            Copies the second item on the stack to the top.
                        </td>
                    </tr>
                    <tr>
                        <td>Rotate</td>
                        <td><code>rot</code></td>
                        <td>
                            <span className="notation">( a b c -- b c a )</span>
                        </td>
                        <td>
                            Rotates the top three items on the stack, moving the third item to the top.
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Title2>Usage</Title2>
            <P>
                Use stack manipulation operations to manage data flow in your programs. Here are a few examples:
            </P>
            <Code>
                <C x="# Duplicating the top item" /><br />
                <N x="5" /> <Op x="dup" /> <C x="# The stack now contains: 5 5" /><br />
                <br />
                <C x="# Dropping the top item" /><br />
                <N x="10 20" /> <Op x="drop" /> <C x="# The stack now contains: 10" /><br />
                <br />
                <C x="# Swapping two items" /><br />
                <N x="7 9" /> <Op x="swap" /> <C x="# The stack now contains: 9 7" /><br />
                <br />
                <C x="# Using over to duplicate the second item" /><br />
                <N x="3 6" /> <Op x="over" /> <C x="# The stack now contains: 3 6 3" /><br />
                <br />
                <C x="# Rotating the top three items" /><br />
                <N x="1 2 3" /> <Op x="rot" /> <C x="# The stack now contains: 2 3 1" /><br />
            </Code>
            <Title2>Possible Errors</Title2>
            <Text>
                <ul>
                    <li><a href="/docs/error#stackunderflow">Stack Underflow</a></li>
                </ul>
            </Text>
        </DocsPage>
    );
}
