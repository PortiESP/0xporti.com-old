'use client'

import { Callout, Code, Img, Paragraph, Section, Title, Title3, Title4, UList, ImgTextAside, Hr, Quote, Color } from "@/components/MarkupWidgets/Tags";

import image_reg_brk from "@/postsImages/memory_layout/register_naming_breakdown.svg"
import image_stack1 from "@/postsImages/memory_layout/stack_layout.svg"
import image_stack2 from "@/postsImages/memory_layout/stack_frame.svg"
import image_stack3 from "@/postsImages/memory_layout/pointers_offsets.svg"
import image_stack4 from "@/postsImages/memory_layout/stack_frames_pointers.svg"

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
            
            <Img title="Register Naming Breakdown" src={image_reg_brk} />
        </Callout>


        <Section title="Stack Layout">

            <Paragraph>
                The stack grows from the higher to the lower addresses but the data is accessed from lower to higher. 
                This means that when some memory is allocated, it takes memory from the highest free addresses, but when we access the allocated space we use the lowest address as the start. 
                So if we write data in the allocated memory it will be written from the lowest address of the allocated chunk to the higher address
            </Paragraph>

            <Hr/>
            <br/>

            <ImgTextAside title="Stack Layout" src={image_stack1} separator imgProportion="35%" ratio="1/2">
                <Title3>How the stack grows. Stack Frames</Title3>
                <Paragraph>Every time we call a function, the required amount of memory for the function is allocated in the stack</Paragraph>
                <Callout label="info">
                    The piece of data that is being allocated by a function is called a <b>Stack Frame</b>, so each <i>stack frame</i> belongs to a function call
                </Callout>
                <Quote>
                    Each stack frame is allocated/placed/stacked below to the previous one
                </Quote>
                <Quote>
                    The last stack frame pushed to the stack is known as the <i>Top of the Stack</i>, this is a pointer to the lowest allocated address of the stack by a stack frame
                </Quote>
                <Paragraph>Each time a function returns, the stack frame of that function is poped/removed from the stack, and the Top of the Stack is moved</Paragraph>
            </ImgTextAside>


            <ImgTextAside title="Stack Frame" src={image_stack2} separator imgProportion="35%" ratio="1/2">
                <Title3>The stack frames layout</Title3>
                <Paragraph>When a function call is pushed to the stack, a stack frame is allocated with the following data</Paragraph>
                <UList items={[
                    <><b>Function parameters:</b> Parameters passed to the function</>,
                    <><b>Return address:</b> Address of following intruction from where the function was called</>,
                    <><b>Base pointer:</b> The address of the previous function <i>base pointer</i> in stack</>,
                    <><b>Local variables:</b> Local variables of the funtion</>,
                ]} />
                <Quote title="Note">
                This fields are allocated down to the lower addresses, but when we write over thoose fields, the data  written is filled from the the lowest address of the buffer to the highest address
                    <br/>
                    <br/>
                    <b>Example:</b> arrays of 50 chars will take 50 Bytes of  memory and the index 0 will be written in the lowest address of the array
                </Quote>
            </ImgTextAside>


            <ImgTextAside title="Pointer Offsets" src={image_stack3} separator imgProportion="35%" ratio="2/5">
                <Title3>Accessing data with pointer offsets. ESP & EBP</Title3>
                <Paragraph>The stack is accessed over pointers plus a certain offset</Paragraph>
                <Quote>The main pointers used to handle the stack are the <Color color="#08f"><b>ESP</b></Color> and <Color color="#0c2"><b>EBP</b></Color></Quote>
                <Callout label="warning">Remember that you can use the prefix <Code inline>R</Code> or <Code inline>E</Code> to select 8/4 Bytes</Callout>
                <Title4>ESP (Stack Pointer)</Title4>
                <Paragraph>
                    This pointer will point always to the <i>Top of the Stack</i>. This correspond to the address of the last <i>local variable</i> allocated in the stack
                    <br/>
                    <br/>
                    This pointer is used as a reference to push new stack frames
                </Paragraph>
                <Title4>EBP (Base Pointer)</Title4>
                <Paragraph>
                    This pointer is used as a reference to access the data of the corresponding stack frame. We can use offsets to access the local varirables fields or the parameters
                </Paragraph>
            </ImgTextAside>
            
            <br/>
            <Hr/>
            <br/>

            <ImgTextAside title="Stack Frames Pointers" src={image_stack4} separator imgProportion="35%" ratio="3/5">
                <Title4>Pointers over the rest of the stack frames</Title4>
                <Quote title="EBP" color="#040">
                    Here we can see how the <Color color="#0c2"><b>EBP</b></Color> pointers are pointing to the previous stack frame <Color color="#0c2"><b>EBP</b></Color> field
                </Quote>
                <Quote title="EIP" color="#400">
                    The <Color color="#e00"><b>EIP</b></Color> of each stack frame will be pointing to some address of the code section
                </Quote>
                <Quote title="ESP" color="#028">
                    The <Color color="#08f"><b>ESP</b></Color> pointer is pointint to the <i>Top of the Stack</i>, so the lowest address of the top stack frame
                </Quote>
            </ImgTextAside>

        </Section>
    </>)
}