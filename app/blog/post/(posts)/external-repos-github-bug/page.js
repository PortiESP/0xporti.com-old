import {Title, Title2, Title3, Title4, Paragraph, UList, Img, Link, Callout, Code, Hr, Br, Quote, Section} from "@/components/MarkupWidgets/Tags.js"
import {Color} from "@/components/MarkupWidgets/tags/Colors"
import image1 from "@/blogImages/postsImages/github_submodules/githubscreenshootIssue.png"
import image2 from "@/blogImages/postsImages/github_submodules/githubscreenshoot.png"
import metadataList from "@/api/blog/postsData"


export const metadata = metadataList.external_repos_github_bug


export default function Page(){ return(
    <>
        <Title>Empty external repos bug in github</Title>

        <br/>

        <Section title="Issue...">

            <Paragraph>
                Recently {"I've"} ran into some issues with one of my projects im building with <b>React</b> and <b>NEXT.JS</b>, the problem was that when I uploaded
                the repo to github, the external repos that {"i've"} cloned from my computer {"weren't"} been updated to the github repo (<i>those repos were mine anyway</i>),
                the cloned repos directory was empty and replaced by a folder with an <i>arrow</i> icon. Apart from that, when I clone the repo from another computer those 
                directories were empty
            </Paragraph>
            <Img img={image1} alt="Screenshoot form github with the issue solved"/>

        </Section>
        
        <br/>

        <Section title="Solution...">

            <Title4>Clone repos as submodules</Title4>
            <Paragraph>
                The correct way to clone a repo that will be used inside your own repo is by using the git <i>submodule</i> feature, any repo we want to use in our own one
                must be cloned as: <Code inline>git submodule add {"<REPO_URL>"}</Code>
                <br/><br/>
                This will clone the repo but keep a reference to the original url of the repo, unfortunately there is one step more on the other side...
            </Paragraph>
            <Code caption="Example">
                <Color fuchsia>git</Color> <Color red>submodule</Color> <Color red>add</Color> <Color deepskyblue>https://github.com/PortiESP/BubbleScrollBar.git</Color>
            </Code>
            <Img img={image2} alt="Screenshoot form github with the issue solved"/>

            <Title4>Fetch submodules repos</Title4>
            <Paragraph>
                Once we have downloaded the external repos as submodules we can clone our repo wherever we want, but we still need to do one thing. 
                <br/><br/>
                In the cloned destination we will still have our external repos as empty folders, then we will execute the following command to fetch the submodules and 
                downloaded them from their respective repos: <Code inline>git submodule update --init --recursive</Code>
            </Paragraph>
            <Code caption="Example">
                <Color fuchsia>git</Color> <Color red>submodule</Color> <Color red>update</Color> <Color orange>--init --recursive</Color>
            </Code>
            <Paragraph>
                Then the repos will be cloned/updated and now you can access the contents inside them
            </Paragraph>

            <Quote title="Reminder...">
                Remember to use  when you clone React repos to install the dependencies <Code inline>npm install</Code>
            </Quote>

        </Section>
    </>
)}