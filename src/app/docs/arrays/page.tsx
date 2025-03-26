import DocsPage from "@/components/DocsPage";
import { Title, Subtitle, Title2, P } from "@/components/Docs";
import Code from "@/components/Code";
// Code highlighting components
import { Kw, N, Op, C } from "@/components/Code";

export default function Docs() {
    return (
        <DocsPage>
            <Title>Arrays</Title>
            <Subtitle>This topic is meant to document arrays in Pile</Subtitle>

            <Title2>Overview</Title2>
            
            <P>In Pile, Array is a compound structure containing any possible type and with any length.</P>
            <P>Arrays can be used to store ordered information in one go, threated as one single value on the data stack.</P>

            <Title2>Creating Arrays</Title2>

            <P>To create arrays in Pile, use the <code>array</code> keyword and close it with <code>end</code>.</P>

            <P>Syntax:</P>
            <Code>
                <Kw x="array" /><br />
                <span>  &lt;CODE&gt;</span><br />
                <Kw x="end" /><br />
            </Code>

            <P>See that the array construction accepts code inside its block. The way arrays work is by adding all the elements that are pushed on the stack during the execution of the block into the array being created. After that, the array element is pushed on the stack.</P>
            <P>Here are some examples on how to experiment with arrays in Pile:</P>
            <Code>
                <C x="# All the values pushed on the stack inside the array..end block are inserted into the array in order"/><br />
                <Kw x="array" /><br />
                <Op x="  3 4 +" /> <C x="# This results in 7"/><br />
                <Op x="  6" /> <C x="# This results in 6"/><br />
                <C x="  # Final stack result: [ 7 6 ]"/><br />
                <Kw x="end" /><br />
                <C x="# Now the stack contains only one array, the items added to the stack"/><br />
                <C x="# inside the block were inserted into the array itself"/><br />
            </Code>
            <P>This approach to array creation enables a big variety of ways to generate arrays as you want. For example, you can use loops to create a range:</P>
            <Code>
                <C x="# All the values pushed on the stack inside the array..end block are inserted into the array in order"/><br />
                <Kw x="array" /><br />
                <C x="  # Generates a range from 0 to 10"/><br />
                <N x="  10 0"/> <Kw x="loop"/> <Op x="dup rot over over ="/> <Kw x="if break end"/><br />
                <Op x="    rot"/><br />
                <N x="    1"/> <Op x="+"/><br />
                <Kw x="  end"/><br />
                <Op x="  drop drop"/><br />
                <C x="  # Keeps pushing the counter on the stack, it will be later added to the array"/><br />
                <Kw x="end" /><br />
            </Code>
        </DocsPage>
    );
}
