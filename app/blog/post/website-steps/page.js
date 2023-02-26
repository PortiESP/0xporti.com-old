import {Title, Title2, Title3, Paragraph, UList, Img, Link, Callout, Code, Block, Title4, Section} from "@/components/MarkupWidgets/Tags.js"
import {Color} from "@/components/MarkupWidgets/tags/Colors"
import BubbleScrollBar from "@/components/BubbleScrollBar/BubbleScrollBar"
// Images
import image1 from "@/postsImages/blogProject/0_screenshotPortfolio.png"
import image2 from "@/postsImages/blogProject/0_screenshotBlog.png"
import image3 from "@/postsImages/blogProject/0_apiScreenshoot.png"
// Scrollbar sections
const sections = [
    {
        label: "Skills required",
        id: "skills--title"
    },
    {
        label: "How to build it",
        id: "build--title"
    },
    {
        label: "The landing page",
        id: "landing--title"
    },
    {
        label: "Components used",
        id: "components--title"
    },
    {
        label: "The site API",
        id: "api--title"
    },
    {
        label: "Dynamic data of the site",
        id: "dynamic--title"
    },
    {
        label: "Steps to create a new post",
        id: "newpost--title"
    },
    {
        label: "Hosting of the site with AWS and Vercel",
        id: "aws--title"
    }
]

export default function Page(){ return (
    <>

        <Title>How did I built my website 😎</Title>
        <Paragraph>
            In this post I will explain the steps I have take to build this website, all the technologies I have used, issues I have went through.
        </Paragraph>
        
        <br />
        
        <Section title="What skills are required for this project?" id="skills--title">
            <UList items={["HTML, CSS and JavaScrip ⭐⭐⭐⭐", "React with NEXT.JS framework ⭐⭐⭐", "Git ⭐⭐⭐", "SASS ⭐⭐⭐"]}/>
        </Section>

        <br />

        <Section title="Building the website" id="build--title">
            <Paragraph>
                For the moment the web page is divided in two parts: the <i>portfolio</i> and the <i>blog</i>
            </Paragraph>
            
            <Img img={image1} alt="Screenshoot of the portfolio" caption="Portfolio" ratio="9/4"/>
            <br />
            <Img img={image2} alt="Screenshoot of the blog" caption="Blog" ratio="9/4"/>
        </Section>

        <br/>

        <Section title="Landing page" id="landing--title">
            <Paragraph>
                My landing page for this project is the portfolio page, this page is divided in 3 sections:
            </Paragraph>

            <UList items={["Profile", "Skills", "Work"]} />

            <Paragraph>
                The page also counts with a custom scroll menu that allows you to navigate over the page, the page is small so the scroll bar mission is mostly letting the user know what section is he visiting
            </Paragraph>
        </Section>

        <br/>

        <Section title="Components used in the project" id="components--title">
            <Paragraph>
                All the components used in the project are made by me!, they are uploaded to github so you can take it and use in your own projects:
            </Paragraph>
            <UList items={[
                <i key="1"><Link  href="https://github.com/PortiESP/BubbleScrollBar">BubbleScrollBar</Link> : An interactive and customizable scrollbar based on IDs</i>, 
                <i key="2"><Link  href="https://github.com/PortiESP/MarkupWidgets">MarkupWidgets</Link> : A pack of React components that provide new UI elements (this page is built with it)</i>, 
                <i key="3"><Link  href="https://github.com/PortiESP/GithubButton">GithubButton</Link> : A basic github button that points to your github page and also can show a little bubble with your public repos count</i>
            ]}/>
        </Section>

        <br/>

        <Section title="The API"  id="api--title">
            <Paragraph>
                The site uses an API to store dynamic data, actually the API has only one available endpoint: <Code inline>/api/blog/posts</Code>

            </Paragraph>
            <br/>
            <Img img={image3} alt="API Screenshoot" caption="API Query screenshoot"/>
        </Section>

        <br/>

        <Section title="Dynamic data" id="dynamic--title">
            <Paragraph>
                Most of the data shown at the site is stored in a separated file from the page where it is show, this way we can reutilize the data but also its easier to make changes,
                the featured post data is stored in a specific file so even if the data is displayed in many pages, I only need to change the values in this file. Other things like 
                the posts metadata is stored in an array in the API
            </Paragraph>
        </Section>

        <br/>
        
        <Section title="Creation of a new post" id="newpost--title">
            <Paragraph>
                To create a new post there is two things we need to do.
                In fact the only necesary thing to create a new post is creating the page but adding the post to the metadata array will make it visible form the api and from the nav search bar
            </Paragraph>
            <UList items={["Create id page", "Add to the post metadata array"]}/>
            <Paragraph>
                To all new pages must be created at <Code inline>/pages/api/blog/posts/</Code> and the name of the file must be only the ID of the posts in the metadata file, so the name of the page will be somethin like this  
                <Code inline>/api/blog/posts/25.js</Code> for the post with the ID=25, then inside the file we only need to export the JSX content
            </Paragraph>
            <Code>
            export default (<br/>
                {"  <>"}<br/>
                    {"      // Code here"} <br/>
                {"  </>"}<br/>
            )
            </Code>
            <Paragraph>
                Then add the post data to the postsData file at `/pages/api/blog/postData.js`
            </Paragraph>

            <Color lightgray><i>Object of the metadata array with all the available keys to create a new post</i></Color>
            <Code>{`\
    {
        id: 1,
        category: [],
        title: "",
        description: "",
        thumbnail: "",
        label: {
            text: "New post!"
            style: {}
        }    
        keywords: "",
        author: "",
    }\
            `}</Code>
        </Section>

        <br/>

        <Section title="Cloud hosting" id="aws--title">

            <Paragraph>
                The final step is deploying the site to some hosting server, there are many way to host an online service like a webpage but the easiest way is with the help
                PaaS {"(Platform As A Service)"} companies, the most used now-a-days is <i>AWS</i> from Amazon but there is alternatives like <i>Azure {"(Microsoft)"}</i> or <i>{"Google Cloud"}</i>
                <br/><br/>
                Today we will follow how to do it on <b>AWS</b> and <b>Vercel</b>, this last one cames from the hand of the same developers of the <i>NEXT.JS</i> framework
            </Paragraph>

            <Block>
                <Title3>Hosting with Vercel</Title3>
                <Paragraph>
                    Hosting with Vercel has lost of advatages, the most importat is that <b>Its FREE!</b>, but it has other cool features as:
                </Paragraph>
                <UList items={[
                    "Sync with github repo",
                    "Auto-building",
                    "Domaing forwarding",
                    "SSL Certificate",
                    "Its FREE!!!!"
                ]}/>
                <Paragraph>
                    There is lots of reasons reasons to choose Vercel as the host of our NEXT.JS App, and its is as simple as sign-in and link with your github account, 
                    then you choose the repo that holds your project and Vercel will care about the rest
                </Paragraph>
            </Block>
            <Block>
                <Title3>Hosting with AWS</Title3>
                <Paragraph>
                    With AWS we have two options, one is by using the <i>AWS Amplify</i> product that is pretty much the same as what we have done with Vercel, the other option
                    is to build it manualy on an <i>EC2 instance</i>, we are gonna talk about this option since the other is the same concept explained before
                    <br/><br/>
                </Paragraph>
                <Title4>Setup the instance</Title4>
                <Paragraph>
                    With this option you will need to take care about <i>updates, SSL, Security, Build, etc...</i>
                </Paragraph>
                <UList items={[
                    "Start the instance",
                    "Create a security group and enable port 80 (HTTP) of 443 (HTTPS with SSL)",
                    "Get an elastic IP address and bind to the instance"
                ]}/>
                <Title4>Setup the server</Title4>
                <Paragraph>
                    Then clone the repo or download it as you would normaly do.
                    <Code>git clone https://github.com/myUser/myAwesomeRepo</Code>
                    Then <Code inline>cd</Code> into the repo directory and install the dependencies
                    <Code>npm install</Code>
                    <Callout label="warning">
                        Since we are deploying the app on linux machine there might be some diferences if we have developed it in Windows and it may 
                        lead into <Color color="#F00e">issues</Color > while building, check that the paths where you are importing your components are right,
                        sometines this platforms <b>capitalize</b> the paths, if you are still experimenting errors try installing <Code inline>npm install next/canary</Code>
                    </Callout>
                    Once we have every thing in place its time to try if our app build successfully
                    <Code>
                        npm run build
                    </Code>
                    <Paragraph>
                        If every thing has gone well a summary of site map will be prompted to the terminal
                        <Code caption="Example built site">{`\
    info  - Creating an optimized production build
    info  - Compiled successfully
    info  - Collecting page data
    info  - Finalizing page optimization

    Page                                                           Size     First Load JS
    ┌ ○ /                                                          3.44 kB          65 kB
    ├   └ css/9a89afcbe95084ea8b90.css                             703 B
    ├   /_app                                                      0 B            61.6 kB
    ├ ○ /404                                                       3.44 kB          65 kB
    └ λ /api/hello                                                 0 B            61.6 kB
    + First Load JS shared by all                                  61.6 kB
    ├ chunks/f6078781a05fe1bcb0902d23dbbb2662c8d200b3.ca31a7.js  11.3 kB
    ├ chunks/framework.9116e7.js                                 41.8 kB
    ├ chunks/main.d1e355.js                                      7.3 kB
    ├ chunks/pages/_app.333f97.js                                529 B
    ├ chunks/webpack.e06743.js                                   751 B
    └ css/6e9ef204d6fd7ac61493.css                               194 B`}
                        </Code>
                    </Paragraph>
                </Paragraph>
            </Block>
        </Section>

        <BubbleScrollBar sections={sections}/>
    </>
)}