/* =======[ Post object structure ]======
{
    id: 1,
    category: [],
    title: "",
    description: "",
    thumbnail: "",    // This is ONLY the filename (and extension) of the image in the /public/assets/blog/* path  // The naming rule used: <postID>_<imgName>.<extension>
    label: {
        text: "New post!"
        style: {}
    }    
    keywords: [],
    hidden: "false",
    lastUpdate: ""
    author: "",
    hidden: "false    // Hide the post at the blog page but not at the API
    lastUpdate: "31/12/2022"  // Last update date (DD/MM/YYYY)
    disableThumbnail: true  // Dont show thumbnail on the post
},

===============[ Categories ]================
- Cibersecurity
- Linux
- Cloud
- DB
- Programming
- Design
- Networking
- Algorithms
- Docs
- Libraries
- OSINT
- Tips
- Projects
- Info
- Dev. Tools
- Good practices
- Troubleshoot
- Web development
*/


const postData = 
[
    {
        id: "website-steps",
        title: "How I have created my website",
        category: ["Docs", "Projects"],
        description: "A summary of the steps i have taken to build this website",
        thumbnail: "blog_thumbnail.png",
        keywords: ["personal", "project", "react", "next.js"],
        hidden: "true",
        lastUpdate: "15/08/2022"
    },
    {
        id: "external-repos-github-bug",
        title: "Empty external repos in github",
        category: ["Troubleshoot", "Good practices", "Web development"],
        description: "How to solve the issue that makes external repos to appear empty on our own repo",
        thumbnail: "githubscreenshoot.png",
        keywords: ["issue", "github", "external", "repo", "clone", "empty", "not working", "stack overflow", "react", "next"],
        hidden: "false",
        lastUpdate: "16/08/2022"
    },
    {
        id: "instagram-unfollowers",
        title: "Get Instagram unfollowers",
        category: ["Tips", "Info", "OSINT"],
        description: "Find out who has unfollowed you on instagram without providing your private credentials",
        thumbnail: "instagramLogo.jpg",
        keywords: ["instagram", "tool", "unfollowers", "insta", "credentials"],
        hidden: "false",
        lastUpdate: "17/08/2022"
    },
    {
        id: "jq-command",
        title: "Query JSON files from the terminal CLI",
        category: ["Linux", "Docs", "Command"],
        description: "Parse JSON files from the terminal with the command 'jq'",
        thumbnail: "jq.png",
        keywords: ["JSON", "CLI", "Tool", "Linux", "parser", "command", "terminal", "selectors", "jq"],
        hidden: "false",
        lastUpdate: "18/08/2022"
    },
    {
        id: "socket-statistics-command",
        title: "Scan local open ports",
        category: ["Linux", "Docs", "Networking", "Cibersecurity", "Command"],
        description: "Look for opened ports on your local machine with the command 'ss'",
        thumbnail: "ss.png",
        keywords: ["open port", "linux", "pentest", "privesc", "ss", "socket", "statistics", "tupln", "process", "command", "cibersecurity", "pentesting"],
        hidden: "false",
        lastUpdate: "19/08/2022"
    },
    {
        id: "shell-string-manipulation",
        title: "String manipulation with terminal commands",
        category: ["Linux", "Command", "Dev. Tools"],
        description: "A list of tools user to manipulate string in the terminal or a script (sort, grep, head, tail, sed, cut, tr, awk,)",
        thumbnail: "string_manipulation_thumbnail.svg",
        keywords: ["sort", "grep", "head", "tail", "sed", "cut", "tr", "awk", "string", "shell", "terminal", "command"],
        hidden: "false",
        lastUpdate: "20/08/2022"
    },
    {
        id: "arch-install",
        title: "Download, install and setup of Arch Linux",
        category: ["Linux", "Docs", "Cibersecurity", "Tips", "Troubleshoot"],
        description: "Full guide of the download, installation and setup of the Arch Linux OS",
        thumbnail: "arch_install.svg",
        keywords: ["arch", "linux", "install", "setup", "chroot", "download", "distribution", "tutorial", "archlinux", "powerlevel", "kitty", "wpa_supplicant", "partition", "networkmanager", "os"],
        hidden: "false",
        lastUpdate: "26/08/2022"
    },
    {
        id: "linux-desktop",
        title: "Install a desktop GUI on linuz",
        category: ["Linux", "Docs", "Tips"],
        description: "A small tutorial about how to install a desktop enviorement on linux",
        thumbnail: "linux_desktop.svg",
        keywords: ["arch", "linux", "desktop", "enviorement", "GUI", "sddm", "gnome", "kde", "graphic", "interface", "plasma", "mate" , "xface"],
        hidden: "false",
        lastUpdate: "28/08/2022"
    },
    {
        id: "encrypt-disk",
        title: "Encrypt a partition in linux",
        category: ["Linux", "Docs", "Cibersecurity"],
        description: "Learn to encrypt a linux partition with linux and LUKS with a password or an identity file ",
        thumbnail: "encrypt_thumbnail.svg",
        keywords: ["linux", "luks", "encrypt", "cipher", "partition", "disk", "crypt", ],
        hidden: "false",
        lastUpdate: "08/09/2022"
    },
    
]

export default postData;