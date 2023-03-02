import {Title, Title2, Paragraph, Callout, Code, Button, Section} from "@/components/MarkupWidgets/Tags.js"
import iconGithub from "@/public/assets/icons/github_icon.png"

export default function Page() {
    return (<>
        <Title>Find instagram unfollowers</Title>
        <Paragraph>
            There is a way to check your instagram unfollowers without logging with your account into any thrid-party app, it is well known that those apps use you credentials
            for their own purposes like selling them or use them to  improve the engagement of their own clients
            <br/><br/>
            What we will do is request our data to instagram
        </Paragraph>

        <Section title="Request data">
            <Paragraph>
                To request our data we will go to the instagram settings:<br/>
                <span>PC: <Code inline text="Settings > Privacity and security > Request download" /></span><br/>
                <span>Mobile: Go to settings and type on the seach bar <Code inline text="download"/></span>
            </Paragraph>
        </Section>

        <br/>

        <Section title="Get unfollowers list">
            <Paragraph>
                To get the unfollowers list you can parse the file with your own tool or download mine on github
            </Paragraph>
            <Callout label="warning">This file containg sensible data, beware of what tools you use to parse this file</Callout>
            <Button icon={iconGithub} href="https://github.com/PortiESP/Starter_projects/tree/main/IG_report_analysis" style={{margin: "auto"}}>My parser tool</Button>
        </Section>

    </>)
}


// https://www.instagram.com/download/request/