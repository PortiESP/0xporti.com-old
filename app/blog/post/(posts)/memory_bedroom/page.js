import { Callout, Img, Paragraph, Quote, Section, Title } from "@/components/MarkupWidgets/Tags";
import image1 from "@/postsImages/memory_bedroom/Memory_comparation.svg"



export default function Page(){


    return (<>
        <Title>How do memory is managed, explained using your bedroom</Title>

        <Paragraph>
            In this post I will explain how does data is stored and accessed from the disk to memory, explained using the similarities with the elements in your room and how you use them
        </Paragraph>

        <Callout label="custom" labelData={{text:"Imagine your computer is your bedroom…", color:"#ffe000"}}>
            When you want to work/study, you must sit in your desk with a book and start taking notes, so lets see how this scene can be similar to what happens in you computer when data is loaded from the disk to memory
        </Callout>

        <Section title="Defining concepts">
            <Paragraph>
                You must take a a notebook from your self (<i>hard-drive</i>) before start working on it, then you bring it to your desk (<i>memory</i>) and with your hands (<i>registers</i>) you will be able to actually write in your notebook. Once you have finished, you will close the notebook and take it from your desk (<i>memory</i>) back to your self (<i>hard-drive</i>)
            </Paragraph>

            <Img title="Bedroom illustration for memory" img={image1}/>

            <Callout label="warning">
                We have to notice that in this example, when we take something from the self (<i>hard-drive</i>), that data doesnt disappear, we are making a copy, and the changes will be updated once we take that thing back to the self (<i>hard-drive</i>)
            </Callout>
        </Section>


        <Section title="Loading data in memory">
            <Paragraph>
                You can take a few books, pencils, and other tools and move all of them to your desk (<i>memory</i>), but you cant take the whole self (<i>hard-drive</i>), you must choose what are the things that you will need in the short period to have it at your reach, and avoid to lose time standing up, taking some file from the self (<i>hard-drive</i>) and sitting again
            </Paragraph>
        </Section>


        <Section title="Registers role">
            <Paragraph>
                Everything we want to do, we need to do it using our hands (registers), with your hands you can take any of the tools that are currently in the desk (memory) and grab it with you hands (registers) so now we can write to it or read it
            </Paragraph>
            <Callout label="info">
                Registers are the most basic storage unit, we only have a few of this registers to store data, also some of this registers have a special purpose in the machine
            </Callout>
        </Section>


        <Section title="Buffering">
            <Paragraph>
                Lets say that you are studing and you are writting in your notebook, you will write a line, then contine studing, then write another line, and so on until you finish studing and then you will close your notebook and storing it in the self (hard-drive); What we have done is called buffering
            </Paragraph>
            <Callout label="info">
                In this example its obvius that we will only store the notebook once we have finished working with it, doesnt matter if we wont be writting on it for a while, we want to avoid to stand up and store it to then have to take it again each time we are not writting on it 
            </Callout>
        </Section>


        <Section title="Volatility">
            <Paragraph>
                The data stored in your desk (memory) and you hands (registers) is cleaned over the night by your mother that wants you to keep your room clean and organized, only the things in the self (hard-drive) will remain there when you wake up tomorrow. You will have to move all your things to the desk (memory) again each morning and everything that was not stored in the self (hard-drive) will be lost
            </Paragraph>
            <Callout label="info">
                Your mother cleaning up your room represents you shutting down the computer, and the power-on is represented by you waking up
            </Callout>
        </Section>
    </>)
}