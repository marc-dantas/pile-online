import { Title, Subtitle, Title2, P } from "@/components/Docs";
import DocsPage from "@/components/DocsPage"

export default function Docs() {
    return (
        <DocsPage>
            <Title>Introduction</Title>
            <Subtitle>This topic is meant to explain Pile briefly</Subtitle>
            <Title2>What is Pile?</Title2>
            <P>
                Pile is a scripting concatenative programming language designed to bring clarity and ease to stack-based programming. With a primary focus on stack-based concepts, Pile operates around a single stack where every operation directly manipulates values. This distinctive design allows users to visualize program flow and logic in a straightforward manner, minimizing the need for complex abstractions.
            </P>
            <P>
                In Pile, control flow and arithmetic are seamlessly managed through concise commands that interact with the stack, making it easier to understand core concepts like looping, conditionals, and procedural execution. This structure is ideal for learners and professionals who wish to build a strong foundation in computational thinking, as each command leads to visible, predictable changes in the stack.
            </P>
            <P>
                By minimizing extraneous syntax and focusing on fundamental programming principles, Pile offers a direct approach to problem-solving, equipping users with an intuitive yet powerful toolkit for exploring the essence of programming.
            </P>
            <Title2>History of Pile</Title2>
            <P>Pile&apos;s origins trace back to two influential concatenative programming languages: <i>Joy</i> and <i>Porth</i>.</P>
            <P>
                Joy, a well-established stack-based language, is known for its unique data structure handling, allowing fine-grained control over data manipulation. Despite its slightly cryptic syntax, Joy has become a respected model for efficient stack-based computation in various environments.
            </P>
            <P>
                The other key influence, Porth, is a lesser-known stack-based language developed by Russian livestreamer Alexey Kutepov (also known as Tsoding). Porth&apos;s development journey was unique in that Kutepov live-streamed nearly every stage of its creation, starting with an implementation in Python. This open and engaging approach to language development, now available on his YouTube channel <a href="https://youtube.com/@TsodingDaily">@TsodingDaily</a>, became a major inspiration for Pile&apos;s development.
            </P>
        </DocsPage>
    );
}
