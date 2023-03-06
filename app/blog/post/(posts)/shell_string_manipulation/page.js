import BubbleScrollBar from "@/components/BubbleScrollBar/BubbleScrollBar"
import {Title, Title2, Title3, Title4, Paragraph, Callout, UList, Img, Code, Hr, Block, Quote, Link, Toggle, Section} from "@/components/MarkupWidgets/Tags.js"
import { Gray } from "@/components/MarkupWidgets/tags/Colors"
import metadataList from "@/api/blog/postsData"


export const metadata = metadataList.shell_string_manipulation



const sections = [
    {
        label: "Overview",
        id: "section--overview"
    },
    {
        label: "grep",
        id: "section--grep"
    },
    {
        label: "awk",
        id: "section--awk"
    },
    {
        label: "head",
        id: "section--head"
    },
    {
        label: "tail",
        id: "section--tail"
    },
    {
        label: "sed",
        id: "section--sed"
    },
    {
        label: "cut",
        id: "section--cut"
    },
    {
        label: "tr",
        id: "section--tr"
    },
    {
        label: "sort",
        id: "section--sort"
    },
   
]

export default function Page(){ return (<>

    <Title>String manipulation with terminal commands</Title>

    <Section sticky title="Overview" id="section--overview">

        <Paragraph>
                Manipulating string is required when you want to extract some piece of information from <i>a file, command output, user input, etc...</i>
                <br/><br/>
                Manipulating strings with a shell could be a little bit tricky. In this post I will go through some handy commands that make this task possible
        </Paragraph>

        <Title2>Commands list</Title2>
        <UList bulletColor="#5af" items={[
            <><Code inline>grep</Code> ~ Filter substrings and regex</>,
            <><Code inline>awk</Code> ~ process and format</>,
            <><Code inline>head</Code> ~ Extract file top lines</>,
            <><Code inline>tail</Code> ~ Extract file bottom lines</>,
            <><Code inline>sed</Code> ~ Match and replace</>,
            <><Code inline>cut</Code> ~ Slice string</>,
            <><Code inline>tr</Code> ~ Replace characters</>,
            <><Code inline>sort</Code> ~ Sort string</>,
        ]}/>

        <Callout label="info">This command can take a string as a parameter or piped with <Code inline>|</Code></Callout>

        <Callout label="tip">Try the following commands at an online linux enviorement: <i><Link href={"https://bellard.org/jslinux/vm.html?url=alpine-x86.cfg&mem=192"}>JSLinux</Link></i></Callout>
    </Section>

    <br/>

    <Section sticky title={<>1. <Code inline>grep</Code> for filtering substrings</>} id="section--grep">
    
        <Paragraph>
            This command can be used to filter some input text based on a substring or regex
        </Paragraph>
        <Quote title="Sintax">
            <Code inline>grep {"[<flags>]"} {"<pattern>"} {"[<text>]"}</Code>
            <UList items={[
                <><Code inline>{"<flags>"}</Code> ~ Modifiers of the command: <i>Ex: <Code inline>-i</Code></i></>,
                <><Code inline>{"<pattern>"}</Code> ~ The substring we want to find in the text</>,
                <><Code inline>{"<text>"}</Code> ~ Text where we want to look for the pattern</>,
            ]}/>
            <Callout label="tip">Remember using <Code inline>grep --help</Code> or <Code inline>man grep</Code> for more information</Callout>

        </Quote>
        
        <Toggle title="Flags">
            <UList items={[
                <><Code inline>-i</Code> ~ Ignore case</>,
                <><Code inline>-c</Code> ~ Number of lines with matching substrings</>,
                <><Code inline>-v</Code> ~ Invert search, return the lines that doesnt match the pattern</>,
                <><Code inline>-r</Code> ~ Recursive search from the current path <i>{"(path parameter not required)"}</i></>,
                <><Code inline>-R</Code> ~ Same as <Code inline>-r</Code> but also follows symbolic paths</>,
                <><Code inline>-h</Code> ~ Print only the matched text of the files with matches but not the file name</>,
                <><Code inline>-l</Code> ~ Print only the name of the files with matches but not the text matched</>,
                <><Code inline>-L</Code> ~ Print only the name of the files without matches but not the text matched</>,
                <><Code inline>-w</Code> ~ Match the whole WORD, pattern must match exactly to the word</>,
                <><Code inline>-E</Code> ~ Match RegEx in pattern</>,
                <><Code inline>-n</Code> ~ Output the line number of the matches</>,
            ]}/>
        </Toggle>

        <Title4>Example</Title4>
        <Code caption="Example code">
            <Gray># Match basic substring</Gray><br/>
            cat paragraph.txt | grep computers
        </Code>
        <Img img="https://i.gyazo.com/8eecacb3b8470bc2ca347dd4f8fa1270.png" alt="Examples" height="300px"/>
        
    </Section>

    <br/>

    <Section sticky title={<>2. <Code inline>awk</Code> for formating strings</>} id="section--awk">
        
        <Paragraph>
            This command allow us to process some text line by line, format it and output it back
        </Paragraph>
        <Quote title="Sintax">
            <Code inline>awk {"<logic>"} {"[<text>]"}</Code>
            <UList items={[
                <>
                    <Code inline>{"<logic>"}</Code> ~ Contains the conditions and processing that the text will pass through, this parameter can be divided
                    in two parts: <Code inline>{"[<condition>] {commands}"}</Code> , where we can define a condition and a command to be executed
                </>,
                <><Code inline>{"<text>"}</Code> ~ Text where we want to look for the pattern</>,
            ]}/>
            <Callout label="tip">Remember using <Code inline>grep --help</Code> or <Code inline>man grep</Code> for more information</Callout>

        </Quote>

        <Code caption="Basic example">
            <Gray># Match the 5th line (condition), and print the fist field (command)</Gray><br/>
            {"echo 'This is an example line' | awk 'NR==5{ print \"First field (\" $1 \")\"}' "}<br/>
            <Gray># OUTPUT{">>>"} First field {"(This)"}</Gray>
        </Code>

        <Code caption="Entended example">
            <Gray># In this example we will execute some code a the beggining and other code on each line</Gray><br/>
            <Gray># Initialize a varible at the (begginging), and print the last field using the variable as index, then increment it (command)</Gray><br/>
            {"echo 'This is an example line' | awk 'BEGIN{i=1} {print i++ $NF}' "}<br/>
            <Gray># OUTPUT{">>>"} First field {"(This)"}</Gray>
        </Code>

        <Toggle title="Flags">
            <UList items={[
                <><Code inline>-F</Code> ~ Set delimiter separator</>,
            ]}/>
        </Toggle>
        
        <Toggle title="Env. Variables">
            <UList items={[
                <><Code inline>$0</Code> ~ Print the whole line</>,
                <><Code inline>${"<N>"}</Code> ~ Print the line <Code inline>N</Code></>,
                <><Code inline>FS</Code> ~ Field separator</>,
                <><Code inline>NR</Code> ~ Number of lines to process</>,
                <><Code inline>NF</Code> ~ Number of fields to process</>,
                <><Code inline>ONR</Code> ~ Output number of lines to process</>,
                <><Code inline>ONF</Code> ~ Output field separator</>,
                <><Code inline>length</Code> ~ Length of the current line processing</>,
                <><Code inline>FILENAME</Code> ~ Name of the current processing file</>,
                <><Code inline>ARGC</Code> ~ Number of parameters passed to the command</>,
                <><Code inline>ARGV</Code> ~ Parameters passed to the command</>,
                <><Code inline>BEGIN</Code> ~ Define statements to execute before every line</>,
                <><Code inline>END</Code> ~ Define statements to execute after all lines</>,
            ]}/>

            <Title4>Examples</Title4>

            <Code>
                <Gray>{"# Print the 1st and 3rd field"}</Gray><br/>
                {"awk '{print $1, $3}' paragraph.txt"}<br/>
                <Gray>{"# Print the number of fields and 1st field"}</Gray><br/>
                {"awk '{print NF, $1}' paragraph.txt"}<br/>
                <Gray>{"# Print the last field ( $ + NF) (NF == NumOFFields == LastFieldIndex)"}</Gray><br/>
                {"awk '{print NF}' paragraph.txt"}<br/>
            </Code>
        </Toggle>

        <Toggle title="Conditions">
            <Paragraph>
                Conditions combine variables and operatores to evaluate if the current line will be printed
            </Paragraph>
            <Title4>Operators supported</Title4>
            {["+", "-", "*", "/", "%", "++", "--", "=", "+=", "-=", "*=", "/=", "%="].map( (op,i) => <span key={i}><Code inline color="lime">{op}</Code> </span>)}
            <br/><br/>
            
            <Title4>Statements blocks supported</Title4>
            <UList items={[
                <><Code inline color="lightgray">{"if ( <condition> ) <statement>"}</Code></>,
                <><Code inline color="lightgray">{"if ( <condition> ) <statement> else <statement>"}</Code></>,
                <><Code inline color="lightgray">{"while ( <condition> ) <statement>"}</Code></>,
                <><Code inline color="lightgray">{"do statement ( <condition> )"}</Code></>,
                <><Code inline color="lightgray">{"for ( <opt_expr>;<opt_expr>;<opt_expr> ) <statement>"}</Code></>,
                <><Code inline color="lightgray">{"for ( <variable> in <array> ) <statement>"}</Code></>,
                <><Code inline color="lightgray">{"continue"}</Code></>,
                <><Code inline color="lightgray">{"break"}</Code></>,
                <><Code inline color="lightgray">{"(<condition>) ? <truth_case> : <false_case>"}</Code></>,
            ]}/>

            <Title4>Substring methods {"(regex)"}</Title4>
            <UList items={[
                <><Code inline color="lightgray">{"/<regex>/"}</Code> ~ Match regex</>,
                <><Code inline color="lightgray">{"$<N> ~ /<regex>/"}</Code> ~ Match regex in the <Code inline color="green">N</Code> field</>,
                <><Code inline color="lightgray">{"$<N> !~ /<regex>/"}</Code> ~ Match regex except in the <Code inline color="red">N</Code> field</>,
                <><Code inline color="lightgray">{"/(<regex>)/ | /(<regex>)/"}</Code> ~ Match regex A or B</>,
                <><Code inline color="lightgray">{"/(<regex>)/ , /(<regex>)/"}</Code> ~ Match between strings A and B</>,
            ]}/>
                
            <Title4>Examples</Title4>
            <Code>
                <Gray># Print filelds in reverse order</Gray><br/>
                {"awk  '{ for ( i=NF ; i<0 ; i--) print $i }' myFile.txt"}<br/>
                <Gray># Print only the 1st and 5th line</Gray><br/>
                {"awk '(NR==1) && (NR==5) { print $0 }' myFile.txt"}<br/>
                <Gray># Print lines with more than 100 characters</Gray><br/>
                {"awk 'length < 100 { print $0 }' myFile.txt"}<br/>
                <Gray># Print lines that match the regex</Gray><br/>
                {"awk '/^ho[a-z]]/ { print }' myFile.txt"}<br/>
                <Gray># Print lines that doesnt match the regex</Gray><br/>
                {"awk '!/^ho[a-z]]/ { print }' myFile.txt"}<br/>
                <Gray># Match substrings</Gray><br/>
                {"awk ' ($0 ~ \"my name is\") { print }' myFile.txt"}<br/>
            </Code>
        </Toggle>

        <Toggle title="Variables">
            <Paragraph>
                We can create variables inside <Code inline>{"{}"}</Code> , then the values of the variables will be remembered over line rest of the line iterations
            </Paragraph>
            <Code>
                <Gray># Declarate a variable based on the value of a field + 1</Gray><br/>
                {"awk '{ offset = int($2) + 1 } NR==offset { print $0 }' myFile.txt"}
            </Code>
        </Toggle>

        <Toggle title="Functions">
            <UList items={[
                <><Code inline color="lightgray">{"int()"}</Code> ~ Parse parameter to an integer value</>,
                <><Code inline color="lightgray">{"length()"}</Code> ~ Length of the argument string </>,
                <><Code inline color="lightgray">{"toupper()"}</Code> ~ Make all characters uppercase</>,
                <><Code inline color="lightgray">{"tolower()"}</Code> ~ Make all characters lowercase</>,
                <><Code inline color="lightgray">{"system()"}</Code> ~ Command to execute</>,
                <><Code inline color="lightgray">{"rand()"}</Code> ~ Calculate a random number</>,
            ]}/>

            <Title4>Examples</Title4>
            <Code>
                <Gray># Print the length of every field</Gray><br/>
                {"awk '{ offset = int($2) + 1 } NR==offset { print $0 }' myFile.txt"}<br/>
            </Code>
        </Toggle>
        
    </Section>

    <br/>

    <Section sticky title={<>3. <Code inline>head</Code> for slice the first lines</>} id="section--head">
        
        <Paragraph>
            This is a simple command that just outputs the N first lines of a file
        </Paragraph>
        <UList items={[
            <><Code inline>-n</Code> ~ Print the first <Code inline>N</Code> lines</>,
            <><Code inline>-b</Code> ~ Print the first <Code inline>N</Code> bytes</>
        ]}/>
        <Code>
            <Gray># Get the 4 first lines in the file</Gray><br/>
            cat file.txt | head -n 4
        </Code>
        
    </Section>

    <br/>

    <Section sticky title={<>4. <Code inline>tail</Code> for slice the last lines</>} id="section--tail">
        
        <Paragraph>
            This is a simple command that just outputs the N lines lines of a file
        </Paragraph>
        <UList items={[
            <><Code inline>-n</Code> ~ Print the last <Code inline>N</Code> lines</>,
            <><Code inline>-b</Code> ~ Print the last <Code inline>N</Code> bytes</>,
            <><Code inline>-f</Code> ~ Read last lines but keeps reading the file listening for changes</>
        ]}/>
        <Code>
            <Gray># Get the 4 last lines in the file</Gray><br/>
            cat file.txt | head -n 4<br/>
            <Gray># Get the 4 last lines in the file and keep reading</Gray><br/>
            cat file.txt | head -f -n 4 
        </Code>
        
    </Section>

    <br/>

    <Section sticky title={<>5. <Code inline>sed</Code> for substring operations {"(replace/delete/...)"}</>} id="section--sed">
        
        <Paragraph>
            StreamEDitor command performs some substring oprations line replacing matched substrings, deleting lines, ...
        </Paragraph>

        <Quote title="Sintax">
            <Code inline>sed {"<operation>"}/{"<oldString>"}/{"<newString>"}/{"[<param>]"}</Code>
            <UList items={[
                <><Code inline>{"<operations>"}</Code> ~ <i>{"(s)ubstite, (d)elete line, (c)hange all the line"}</i></>,
                <><Code inline>{"<oldString>"}</Code> ~ Substring that will be replaced</>,
                <><Code inline>{"<newString>"}</Code> ~ Replacement for the matched string</>,
                <><Code inline>{"<parameters>"}</Code> ~ <i>{"g = Match all, Ng = First N matches, gN = All matches from the Nth"}</i></>,
            ]}/>
            <Callout label="tip">Remember using <Code inline>sed --help</Code> or <Code inline>sed grep</Code> for more information</Callout>

        </Quote>

        <Code>
            <Gray># Replace {'"cake"'} with {'"make"'} at the first match</Gray><br/>
            cat file.txt | sed {"s/cake/make/"}<br/>
            <Gray># Replace {'"cake"'} with {'"make"'} at every match</Gray><br/>
            cat file.txt | sed {"s/cake/make/g"}<br/>
            <Gray># Replace {'"cake"'} with {'"make"'} in the 3rd line</Gray><br/>
            cat file.txt | sed {"3 s/cake/make/"}<br/>
            <Gray># Remove the 5th line</Gray><br/>
            cat file.txt | sed {"5d"}<br/>
            <Gray># Remove from the 5th - 10th line {"(both included)"}</Gray><br/>
            cat file.txt | sed {"5,10d"}
        </Code>
        
    </Section>

    <Section sticky title={<>6. <Code inline>cut</Code> for splitting strings</>} id="section--cut">
        
        <Paragraph>
            This command splits and string and output specific slices
        </Paragraph>
        <Quote title="Sintax">
            <Code inline>cut {"[<flags>]"}</Code>
            <UList items={[
                <><Code inline>{"<flags>"}</Code> ~ Modifiers of the command: <i>Ex: <Code inline>-i</Code></i></>,
                <><Code inline>{"<text>"}</Code> ~ Text where we want to look for the pattern</>,
            ]}/>
            <Callout label="tip">Remember using <Code inline>cut --help</Code> or <Code inline>man cut</Code> for more information</Callout>

        </Quote>
        
        <Toggle title="Flags">
            <UList items={[
                <><Code inline>-d</Code> ~ Set delimiter</>,
                <><Code inline>-f</Code> ~ Fields that will be returned</>,
                <><Code inline>-b</Code> ~ Bytes that will be returned</>,
                <><Code inline>-c</Code> ~ Characters that will be returned</>,
            ]}/>
        </Toggle>

        <Title4>Example</Title4>
        <Code caption="Example code">
            <Gray># Cut at {"':'"} and output 1st and 3rd columns</Gray><br/>
            cat paragraph.txt | cut -d {"':'"}  -f 1,3<br/>
            <Gray># Cut at {"':'"} and output interval from 1st to 3rd column {"(included)"}</Gray><br/>
            cat paragraph.txt | cut -d {"':'"}  -f 1-3<br/>
            <Gray># Cut at {"':'"} and output from 5th to last column</Gray><br/>
            cat paragraph.txt | cut -d {"':'"}  -f 5-<br/>
            <Gray># Cut at {"':'"} and output interval from first to 5th column {"(included)"}</Gray><br/>
            cat paragraph.txt | cut -d {"':'"}  -f -5
            
        </Code>            
        
    </Section>

    <br/>

    <Section sticky title={<>7. <Code inline>tr</Code> for translate characters</>} id="section--tr">
        
        <Paragraph>
            This command is used to replace single charaters
        </Paragraph>
        <Quote title="Sintax">
            <Code inline>tr {"[<flags>]"} {"<oldChar>"} {"[<newChar>]"}</Code>
            <UList items={[
                <><Code inline>{"<flags>"}</Code> ~ Modifiers of the command: <i>Ex: <Code inline>-i</Code></i></>,
                <><Code inline>{"<oldChar>"}</Code> ~ Character that will be replaced</>,
                <><Code inline>{"<newChar>"}</Code> ~ Replacement for the matched character</>,
            ]}/>
            <Callout label="tip">Remember using <Code inline>tr --help</Code> or <Code inline>man tr</Code> for more information</Callout>

        </Quote>
        
        <Toggle title="Flags">
            <UList items={[
                <><Code inline>-d</Code> ~ Delete character</>,
                <><Code inline>-c</Code> ~ Negated match</>,
                <><Code inline>-s</Code> ~ Strip repeated matches, {"Remove if the following character is the same"}</>,
            ]}/>

            <Title4>Example</Title4>
            <Code caption="Example code">
                <Gray># Replace {"'a' with 'b'"}</Gray><br/>
                cat paragraph.txt | tr {'"a" "b"'}<br/>
                <Gray># Delete character {"'p'"}</Gray><br/>
                cat paragraph.txt | tr -d {'"p"'}<br/>
                <Gray># Negated match</Gray><br/>
                {'echo "Abc123d56E"'} | {"tr -c 'A' 't'"}<br/>
                <Gray>RETURN {">>>"} Atttttttttt</Gray><br/>
                <Gray># Strip repeated vocals</Gray><br/>
                {'echo "I looooveeee paancakessss"'} | {"tr -s 'aeiou'"}<br/>
                <Gray>RETURN {">>>"} I love pancakessss</Gray>
            </Code>

        </Toggle>

        <Toggle title="Charsets">
            <Paragraph>
                Charsets are group of charaters that are replaced with the corresponding character in the replacement charset
            </Paragraph>
            <UList items={[
                <><Code inline>{"[:lower:]"}</Code> ~ Lowercase alphabet</>,
                <><Code inline>{"[:upper:]"}</Code> ~ Uppercase alphabet</>,
                <><Code inline>{"[:alpha:]"}</Code> ~ Alphabetic characters</>,
                <><Code inline>{"[:alnum:]"}</Code> ~ Alphanueric characters</>,
                <><Code inline>{"[:digit:]"}</Code> ~ Digits</>,
                <><Code inline>{"[:blank:]"}</Code> ~ Horizontal spacing characters</>,
                <><Code inline>{"[:space:]"}</Code> ~ Newlines and blank characters</>,
                <><Code inline>{"[:cntrl:]"}</Code> ~ Control characters</>,
                <><Code inline>{"[:punct:]"}</Code> ~ Puntuation characters</>,
                <><Code inline>{"[:graph:]"}</Code> ~ Printable characters characters {"(not spaces)"}</>,
                <><Code inline>{"[:print:]"}</Code> ~ Printable characters</>,
                <><Code inline>{"<CHR1>-<CHR2>"}</Code> ~ Custom charset, interval from char to char in alphabetic order</>,
                <><Code inline>{"<CHR1><CHR2><CHR3"}</Code> ~ Custom charset, match any of thoose chars</>,
            ]}/>

            <Code>
                <Gray># Replace lowecase with uppercase</Gray><br/>
                cat paragraph.txt | tr {'[:lower:] [:upper:]'}<br/>
                <Gray># Replace lowecase with uppercase</Gray><br/>
                cat paragraph.txt | tr -d {"'a-z' 'A-Z'"}<br/>
                <Gray># Replace: {"a->x, b->y, c->z"}</Gray><br/>
                cat paragraph.txt | tr -d {"'abc' 'xyz'"}<br/>
            </Code>
        </Toggle>
        
    </Section>

    <br/>

    <Section sticky title={<>8. <Code inline>sort</Code> for sorting lines</>} id="section--sort">
        
        <Paragraph>
            This command is used to sort lines of a file
        </Paragraph>
        <Quote title="Sintax">
            <Code inline>sort {"[<flags>]"} {"[<text>]"}</Code>
            <UList items={[
                <><Code inline>{"<flags>"}</Code> ~ Modifiers of the command: <i>Ex: <Code inline>-i</Code></i></>,
                <><Code inline>{"<text>"}</Code> ~ Text where we want to look for the pattern</>,
            ]}/>
            <Callout label="tip">Remember using <Code inline>sort --help</Code> or <Code inline>man sort</Code> for more information</Callout>

        </Quote>
        
        <Toggle title="Flags">
            <UList items={[
                <><Code inline>-r</Code> ~ Sort reverse</>,
                <><Code inline>-n</Code> ~ Sort numbers</>,
                <><Code inline>-f</Code> ~ Ignore case</>,
                <><Code inline>-u</Code> ~ Return repeated lines once: unique</>,
                <><Code inline>-R</Code> ~ Random sort: shuffle</>,
                <><Code inline>-o</Code> ~ Define an output file</>,
                
            ]}/>
        </Toggle>

        <Title4>Example</Title4>
        <Code caption="Example code">
            <Gray># Sort lines in alphabetical order</Gray><br/>
            cat paragraph.txt | sort
        </Code>
    
    </Section>

    <BubbleScrollBar sections={sections}/>


</>)}