import {Title, Title2, Title3, Title4, Paragraph, Callout, UList, Img, Code, Block, Section} from "@/components/MarkupWidgets/Tags.js"


export default (<>
    <Title>Scan local open ports</Title>

    <Section title="Overview">
        <Paragraph>
            <i>Scanning the ports opened on the local machine</i> is important for <b>security reasons</b>, 
            if we notice some weird port opened the first thing we should do is check what process is using it and what is that process doing,
            if that one is a ligitimate process there is no problem, but if there is no information about that process on the internet and we are not able to 
            figure out what is that process for we should consider <i>killing</i> it, this may not be the most scientific solution but could be a temporal one but we must know
            what we are doing, because we can make the mistake of killing the wrong process. To prevent this we will learn a few things about <i>analizing open ports</i>
        </Paragraph>
        <Callout label="tip">
            The <b>standard</b> says that ports under <b>1024</b> are reserved for <i>well-known</i> ports but thus is only a recommendation since anyone can open a port wherever they want
        </Callout>

        {/* <Hr/> */}
    </Section>

    <br/>
    
    <Section title={<>The <Code inline text="ss" /> command</>}>

        <Paragraph>
            The command <i>ss</i> <i>{"(Socket Statistics)"}</i>, is the enhanced version of the clasic <Code inline>netstat</Code>, 
            this tool will provide the network interface statistics providing us detailed information
        </Paragraph>
            
            <Title3>1.- Command overview</Title3>

            <Block>
                <Paragraph>
                    If we tipe <Code inline>ss</Code> we will get the default output of the command with a list of all sockets active on the host
                </Paragraph>
                <Code>
                    ss
                </Code>
                <Img img="https://i.gyazo.com/26dbbadb5e3ff1f089e96bdce393af4c.png" height="400px"/>
                <Paragraph>
                    This command will print a table with the following information
                </Paragraph>
                <UList items={[
                    <><b>Netid</b>{" ~ "}</>,
                    <><b>State</b>{" ~ State of the connection: "}</>,
                    <><b>Recv-Q</b>{" ~ Quantity of packets received"}</>,
                    <><b>Send-Q</b>{" ~ Quantity of packets sended"}</>,
                    <><b>Local address:Port</b>{" ~ Address of the local interface and port over the socket is built"}</>,
                    <><b>Peer address:Port</b>{" ~ Address of the remote address and port over the socket is connected"}</>,
                    <><b>Process</b>{" ~ Process ID that has created the socket"}</>
                ]} />
            </Block>

            <Title3>2.- Command flags</Title3>

            <Block>
                <Paragraph>
                    We can use flags to filter the command output format.
                    <br/><br/>
                    Here is an example of the most common flags usage:
                </Paragraph>
                <Code caption="Flags usage example">
                    ss -tupln
                </Code>
                <Title4>Flags list</Title4>
                <Paragraph>
                    <Code inline>-a</Code> ~ Prints all sockets <i>{"(connected and unconnected sockets)"}</i><br/>
                    <Code inline>-l</Code> ~ Prints only listening sockets<br/>
                    <Code inline>-t</Code> ~ Prints only TCP sockets<br/>
                    <Code inline>-p</Code> ~ Prints the PID of the process that owns the socket<br/>
                    <Code inline>-s</Code> ~ Prints a summary of the sockets by connection type <i>{"(TCP, UDP, Raw, etc...)"}</i><br/>
                </Paragraph>
                <Img img="https://i.gyazo.com/dee39bfeb2477ebc1f357065e15066da.png" height="200px" alt="Example Image"/>
                <Paragraph>
                    <Code inline>-4</Code> | <Code inline>-6</Code> ~ Prints addresses as its IPv4/IPv6 format<br/>
                    <Code inline>-n</Code> ~ No hostname resolving {"(show always the address)"}<br/>
                    <Code inline>-m</Code> ~ Show memory usage of the socket<br/>
                </Paragraph>
            </Block>

            <Title3>3.- Command filters</Title3>

            <Block>
                <Paragraph>
                    The command also allow us to filter by port or address.
                    <br/><br/>
                    The following example shows how to use the filters and the operator concatenation
                </Paragraph>
                <Code caption="Filters usage example">
                    ss -at {"'( dport = :22 or src = 192.168.1.12 )'"}
                </Code>
                <Paragraph>
                    We can filter by:
                    <br/><br/>
                    <Code inline>src</Code> | <Code inline>dst</Code> ~ Filter by address <i>{"(source | destination)"}</i><br/>
                    <Code inline>sport</Code> | <Code inline>dport</Code> ~ Filter by port <i>{"(SourcePort | DestinationPort)"}</i>, this command also allow
                    arithmetric operators like: <i>{"( <, >, <=, >=, !=, = )"}</i><br/>
                </Paragraph>
            </Block>
    </Section>



</>)