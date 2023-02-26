import {Title, Title2, Title4, Paragraph, UList, Code, Section} from "@/components/MarkupWidgets/Tags.js"


export default (
    <>
        <Title>Query JSON files from the terminal CLI {"(jq)"}</Title>

        <br/>

        <Section title={<>What is the <Code inline>jq</Code> command</>}>

            <Paragraph>
                The <Code inline>jq</Code> command is JSON parser used from the terminal as a CLI application, it takes an input file and a query string 
            </Paragraph>
            <Code inline>
                cat {"<filePath.json>"} | jq {"'<selector>'"}
            </Code>
            <Code caption="Command example">
                cat myFile.json | jq {'".users[2]"'}
            </Code>

        </Section>

        <br/>

        <Section title="Command usage">
            <Paragraph>We have created an example file with template data to navigate through it</Paragraph>
            <Code caption="Example file">
{`
$ cat test.json

{
    users: [
        {
            "username": "microsoft",
            "password": "******************",
            "stats": {
                "followers": 100M,
                "following": 55,
                "posts": 30,
            },
            "verified": true
        },
        {
            "username": "portii.rm",
            "password": "*****************",
            "stats": {
                "followers": 1K,
                "following": 500,
                "posts": 1,
            },
            "verified": false
        },
        {
            "username": "willyrex",
            "password": "***********",
            "stats": {
                "followers": 5,2M,
                "following": 91,
                "posts": 3,
            },
            "verified": true
        },
    ]
}
`}
            </Code>

            <Title4>Command execution</Title4>
            <Paragraph>We can execute the command using <Code inline>-r</Code> flag or the <Code inline>|</Code> <i>pipe</i> format</Paragraph>
            <UList items={[<Code inline key={"1"}>jq {"<selector>"} {"<filepath>"}</Code>, <Code inline key={"2"}>cat {"<filepath>"} {"|"} jq {"<selector>"} </Code>]}/>
            
            <Code caption="Exampe command usage">
                jq .users test.json        # Option 1
                <br/>
                cat test.json | jq .users  # Option 2
            </Code>

            <Title4>Command selectors</Title4>
            <Paragraph>
                This command uses a simple selector format to select the output data
                <br/>
                <br/>
                The command uses <Code inline>.</Code> to select the <b>root</b> of the JSON file and from this point slide down the file structure by
                typing the keys we want to access, <i>Ex:</i> <Code inline>.data.users</Code>
                <br/>
                <br/>
                To access elements from an array we access as we will do in any programming language with <Code inline>{"[]"}</Code> , <i>Ex: </i> <Code inline>{".users[0]"}</Code>
            </Paragraph>
            <Paragraph>
                <b>Examples:</b><br/>
            </Paragraph>
            <Code>
                # Access the first username data <br/>
                $ jq -r {".users[0]"} test.json <br/>
                <br/>
                # Access the second user username <br/>
                $ jq -r {".users[1].username"} test.json <br/>
                <br/>
                # Access multiple array index <br/>
                $ jq -r {".users[1,2]"} test.json <br/>
                <br/>
                # Access array index interval <br/>
                $ jq -r {".users[1:2]"} test.json <br/>
                <br/>
                # Access the whole array <br/>
                $ jq -r {".users[]"} test.json <br/>
            </Code>

            <Title4>Advanced selectors</Title4>
            <Paragraph>
                <b>Examples:</b><br/>
            </Paragraph>
            <Code>
                # Select using multiple filters <br/>
                $ jq -r {".users[0].username, .users[0].password"} test.json <br/>
                <br/>
                # Access access the whole array and for each result access its username <br/>
                $ jq -r {".users[] | .username"} test.json <br/>
                <br/>
            </Code>

            <Title4>Output functions</Title4>
            <Paragraph>
                <b>Examples:</b><br/>
            </Paragraph>
            <Code>
                # Get output length <br/>
                $ jq -r {".users[] | length"} test.json <br/>
                <br/>
            </Code>

        </Section>


    </>
)