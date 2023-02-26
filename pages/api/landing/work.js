import imagePathfinder from "@/assets/images/work_capturePathFinder.png"
import imagePortiOS from  "@/assets/images/work_capturePortiOS.png"
import imageTempMail from "@/assets/images/work_captureTempMail.png"
import markupWidgets from "@/assets/images/work_markup.png"
import blogImage from "@/assets/images/work_screenshotBlog.png"


const workCardsData = [
    {
        id: 1,
        title: "Personal blog",
        description: "My personal blog for posting interesting stuff I want to share",
        thumbnail: blogImage,
        clickUrl: "/blog",
        category: "Website"
    },
    {
        id: 2,
        title: "Temp Mail CLI",
        description: "CLI Application to manage multiple temporal email accounts (read only)",
        thumbnail: imageTempMail,
        clickUrl: "https://github.com/PortiESP/MAIL_BOT",
        category: "Software"
    },
    {
        id: 3,
        title: "PortiOS",
        description: "An OS for raspberryPI mounted on a car to provide an interface for music and electronics",
        thumbnail: imagePortiOS,
        clickUrl: "https://github.com/PortiESP/PortiOS",
        category: "Software"
    },
    {
        id: 4,
        title: "Pathfinder",
        description: "An AI tool that finds the shortest paths between two points, the user can place walls to get different paths",
        thumbnail: imagePathfinder,
        clickUrl: "https://github.com/PortiESP/Tiny_games/tree/main/PATHFINDER",
        category: "Algorithm"
    },
    {
        id: 5,
        title: "MarkUp Widgets",
        description: "A bundle of react tag components that with customizable styles interactive elements",
        thumbnail: markupWidgets,
        clickUrl: "https://github.com/PortiESP/MarkupWidgets",
        category: "React component"
    },
]

export {workCardsData};