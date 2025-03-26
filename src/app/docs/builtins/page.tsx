import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, Title3, Table, P } from "@/components/Docs";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Builtins</Title>
            <Subtitle>This topic is meant to document builtins in Pile</Subtitle>
            <Title2>What is a builtin?</Title2>
            <P>A builtin is an operation that is built into Pile&apos;s interpreter. Builtins can have various use cases and help the developer to create programs with basic features.</P>
            <Title3>I/O</Title3>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Builtin</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>print</code></td>
                        <td>
                            Prints the last element on the stack to stdout.
                        </td>
                    </tr>
                    <tr>
                        <td><code>println</code></td>
                        <td>
                            Prints the last element on the stack to stdout with a newline character at the end.
                        </td>
                    </tr>
                    <tr>
                        <td><code>eprint</code></td>
                        <td>
                            Prints the last element on the stack to stderr.
                        </td>
                    </tr>
                    <tr>
                        <td><code>eprintln</code></td>
                        <td>
                            Prints the last element on the stack to stderr with a newline character at the end.
                        </td>
                    </tr>
                    <tr>
                        <td><code>input</code></td>
                        <td>
                            Reads input from stdin until EOF and pushes the input on top of the stack.
                        </td>
                    </tr>
                    <tr>
                        <td><code>inputln</code></td>
                        <td>
                            Reads only a line from stdin and pushes the input on top of the stack.
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Title3>Typing and conversion</Title3>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Builtin</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>tostring</code></td>
                        <td>
                            Converts the last element on the stack to a <code>string</code>.
                        </td>
                    </tr>
                    <tr>
                        <td><code>tofloat</code></td>
                        <td>
                            Converts the last element on the stack to a <code>float</code>.
                            If the conversion fails, it pushes a <code>nil</code> value instead.
                        </td>
                    </tr>
                    <tr>
                        <td><code>toint</code></td>
                        <td>
                            Converts the last element on the stack to a <code>int</code>.
                            If the conversion fails, it pushes a <code>nil</code> value instead.
                        </td>
                    </tr>
                    <tr>
                        <td><code>typeof</code></td>
                        <td>
                            Pops the last item on the stack and pushes the name of the respective type of the item in question as a <code>string</code>.
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Title3>Environment and System</Title3>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Builtin</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>exit</code></td>
                        <td>
                            Halts the execution of the program and exits with the exit code at the top of the stack.
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Title3>Strings</Title3>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Builtin</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>chr</code></td>
                        <td>
                            Pops the last item on the stack (an integer) and interprets it as a character and pushes the corresponding <code>string</code> on top of the stack.
                        </td>
                    </tr>
                    <tr>
                        <td><code>ord</code></td>
                        <td>
                            Pops a string of size 1 on top of the stack and pushes the character code as <code>int</code> back on the stack.
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Title3>Sequences</Title3>
            <Table>
                <thead className="has-text-weight-bold">
                    <tr>
                        <td>Builtin</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><code>len</code></td>
                        <td>
                            Pops a sequence on the top of the stack and pushes its size back.
                        </td>
                    </tr>
                </tbody>
            </Table>
        </DocsPage>
    )
}