import DocsPage from "@/components/DocsPage";
import { Title, P, Subtitle, Title2 } from "@/components/Docs";

export default function Docs() {
    return (
        <DocsPage>
            <Title>How Pile works</Title>
            <Subtitle>This topic is meant to show how to understand Pile programs and logic</Subtitle>
            <Title2>The stack in Pile</Title2>
            <P>In Pile, everything revolves around the stack. The stack is like a list or a container that holds data, it&apos;s called a <strong>stack</strong>. Imagine a stack of plates, you can only add or remove plates from the top of the stack, not from the middle or bottom.</P>
            <P>In Pile, the stack is not just for storing values. It&apos;s how the language handles all of its operations. Whether you&apos;re adding numbers, manipulating text, or even executing loops, everything happens on this stack. Every time you run a Pile program, you&apos;re interacting with this stack, pushing and popping items as needed.</P>
            <P>The stack in Pile is simple but powerful. You can push new items onto the stack, duplicate existing ones, and pop items off when you&apos;re done with them. These are the basic operations that drive all computations in Pile. Every operation you perform, like adding two numbers or checking conditions, is done by manipulating this stack.</P>
            <P>There is only one stack in a Pile program, and it is always present. No matter what the program does, whether it is running through loops or executing procedures, it&apos;s always working with the same stack. This means that if you change something on the stack, it directly affects the outcome of the program. The stack is central to everything that happens in Pile.</P>
            <P>Here are some videos desmonstrating visually the execution process of simple expressions showing the process of the program&apos;s stack.</P>
            <div className="columns">
                <div className="column is-narrow">
                    <video src="/video/pile_stack_explanation_1.mp4" width={450} controls />
                </div>
                <div className="column is-narrow">
                    <video src="/video/pile_stack_explanation_2.mp4" width={450} controls />
                </div>
            </div>
            <Title2>Why interpreted</Title2>
            <P>Pile is an <strong>interpreted language</strong>, meaning that instead of compiling the program beforehand, the program is executed line-by-line by an interpreter. This makes it easier to understand what is happening at every step of the program.</P>
            <P>Being interpreted also means that you can run and test your code quickly without needing to worry about the extra complexity of compiling it first. This is particularly useful when you&apos;re learning, as it allows you to experiment and see results immediately.</P>
            <P>In Pile, the interpreter reads through the stack and applies each operation in order, modifying the stack as it goes. This step-by-step execution mirrors how you might manually solve a problem using a stack, which is an excellent way to help you understand how algorithms and programming logic work at a basic level.</P>
        </DocsPage>
    )
}
