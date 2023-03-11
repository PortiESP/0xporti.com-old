'use client'

import { Callout, Code, Img, Paragraph, Section, Title, Title3, Title4, UList } from "@/components/MarkupWidgets/Tags";
import image1 from "@/postsImages/memory_layout/register_naming_breakdown.svg"

export default function Page(){

    return (<>
        <Title>Memory Layout: The Stack</Title>

        <Callout label="info">
            The stack is the section os a process where the information related to the execution workflow is stored. The stack uses a LIFO structure (<i>Last In First Out</i>)
        </Callout>

        <Callout label="warning">
            <Title3>Notice the difference between x32 and x64 architectures:</Title3>

            <UList items={[
                <>The <b>pointers size</b> will use 4 Bytes in x32 archs, while in x64 pointers use 8 Bytes</>,
                <>The <b>registers naming</b> uses prefixes to match a slice of the register data, or the whore register...</>                
            ]}/>

            <Title4>Registers naming prefixes</Title4>

            <UList items={[
                <>The x32 systems registers (4 Bytes) are referenced with the prefix <Code inline>E</Code> : <i>EBP, EIP, EAX, ...</i></>,
                <>The x64 systems registers (8 Bytes) are referenced with the prefix <Code inline>R</Code> : <i>RBP, RIP, RAX, ...</i></>,
            ]}/>
            
            <Img title="Register Naming Breakdown" src={image1} />
        </Callout>


        <Section title="Stack Layout">
            <Paragraph>
                The stack grows from the higher to the lower addresses but the data is accessed from lower to higher. 
                This means that when some memory is allocated, it takes memory from the highest free addresses, but when we access the allocated space we use the lowest address as the start. 
                So if we write data in the allocated memory it will be written from the lowest address of the allocated chunk to the higher address
            </Paragraph>
        </Section>
    </>)
}