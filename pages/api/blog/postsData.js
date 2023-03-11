/* =======[ Post object structure ]======
id:{
    id: 1,
    tags: [],
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

// ========================================================================================================================================================================

const postData = {

    website_steps:{
        id: "website_steps",
        title: "How I have created my website",
        tags: ["Docs", "Projects"],
        description: "A summary of the steps i have taken to build this website",
        thumbnail: "blog_thumbnail.png",
        keywords: ["personal", "project", "react", "next.js"],
        hidden: "true",
        lastUpdate: "15/08/2022"
    },

    external_repos_github_bug:{
        id: "external_repos_github_bug",
        title: "Empty external repos in github",
        tags: ["Troubleshoot", "Good practices", "Web development"],
        description: "How to solve the issue that makes external repos to appear empty on our own repo",
        thumbnail: "githubscreenshoot.png",
        keywords: ["issue", "github", "external", "repo", "clone", "empty", "not working", "stack overflow", "react", "next"],
        hidden: "false",
        lastUpdate: "16/08/2022"
    },

    instagram_unfollowers:{
        id: "instagram_unfollowers",
        title: "Get Instagram unfollowers",
        tags: ["Tips", "Info", "OSINT"],
        description: "Find out who has unfollowed you on instagram without providing your private credentials",
        thumbnail: "instagramLogo.jpg",
        keywords: ["instagram", "tool", "unfollowers", "insta", "credentials"],
        hidden: "false",
        lastUpdate: "17/08/2022"
    },

    jq_command:{
        id: "jq_command",
        title: "Query JSON files from the terminal CLI",
        tags: ["Linux", "Docs", "Command"],
        description: "Parse JSON files from the terminal with the command 'jq'",
        thumbnail: "jq.png",
        keywords: ["JSON", "CLI", "Tool", "Linux", "parser", "command", "terminal", "selectors", "jq"],
        hidden: "false",
        lastUpdate: "18/08/2022"
    },

    socket_statistics_command:{
        id: "socket_statistics_command",
        title: "Scan local open ports",
        tags: ["Linux", "Docs", "Networking", "Cibersecurity", "Command"],
        description: "Look for opened ports on your local machine with the command 'ss'",
        thumbnail: "ss.png",
        keywords: ["open port", "linux", "pentest", "privesc", "ss", "socket", "statistics", "tupln", "process", "command", "cibersecurity", "pentesting"],
        hidden: "false",
        lastUpdate: "19/08/2022"
    },

    shell_string_manipulation:{
        id: "shell_string_manipulation",
        title: "String manipulation with terminal commands",
        tags: ["Linux", "Command", "Dev. Tools"],
        description: "A list of tools user to manipulate string in the terminal or a script (sort, grep, head, tail, sed, cut, tr, awk,)",
        thumbnail: "string_manipulation_thumbnail.svg",
        keywords: ["sort", "grep", "head", "tail", "sed", "cut", "tr", "awk", "string", "shell", "terminal", "command"],
        hidden: "false",
        lastUpdate: "20/08/2022"
    },

    arch_install:{
        id: "arch_install",
        title: "Download, install and setup of Arch Linux",
        tags: ["Linux", "Docs", "Cibersecurity", "Tips", "Troubleshoot"],
        description: "Full guide of the download, installation and setup of the Arch Linux OS",
        thumbnail: "arch_install.svg",
        keywords: ["arch", "linux", "install", "setup", "chroot", "download", "distribution", "tutorial", "archlinux", "powerlevel", "kitty", "wpa_supplicant", "partition", "networkmanager", "os"],
        hidden: "false",
        lastUpdate: "26/08/2022"
    },

    linux_desktop:{
        id: "linux_desktop",
        title: "Install a desktop GUI on linuz",
        tags: ["Linux", "Docs", "Tips"],
        description: "A small tutorial about how to install a desktop enviorement on linux",
        thumbnail: "linux_desktop.svg",
        keywords: ["arch", "linux", "desktop", "enviorement", "GUI", "sddm", "gnome", "kde", "graphic", "interface", "plasma", "mate" , "xface"],
        hidden: "false",
        lastUpdate: "28/08/2022"
    },
    encrypt_disk:{
        id: "encrypt_disk",
        title: "Encrypt a partition in linux",
        tags: ["Linux", "Docs", "Cibersecurity"],
        description: "Learn to encrypt a linux partition with linux and LUKS with a password or an identity file",
        thumbnail: "encrypt_thumbnail.svg",
        keywords: ["linux", "luks", "encrypt", "cipher", "partition", "disk", "crypt", ],
        hidden: "false",
        lastUpdate: "08/09/2022"
    },
    windows_shortcuts:{
        id: "windows_shortcuts",
        title: "Advanced windows shortcuts",
        tags: ["Windows", "Tips"],
        description: "Windows shortcuts for productivity",
        thumbnail: "windows_shortcuts.svg",
        keywords: ["windows", "shortcuts", "screenshoot"],
        hidden: "false",
        lastUpdate: "06/03/2023"
    },
    memory_bedroom:{
        id: "memory_bedroom",
        title: "How do memory is managed, explained using your bedroom",
        tags: ["Docs", "Binary"],
        description: "How does data is stored and accessed from the disk to memory, explained using the similarities with the elements in your room and how you use them",
        thumbnail: "memory_bedroom.svg",
        keywords: ["bedroom", "memory", "disk", "hard-drive", "register"],
        hidden: "false",
        lastUpdate: "10/03/2023"
    },
    memory_layout_stack:{
        id: "memory_layout_stack",
        title: "Memory Layout: The Stack",
        tags: ["Docs", "Binary"],
        description: "As part of the Memory Layout series, this posts explains concepts about the stack, its structure, stack frames, pointers, ...",
        thumbnail: "memory_layout_stack.svg",
        keywords: ["stack", "memory", "layout", "frame", "register", "pointers", "structure", "ebp", "top of the stack", "variables", "stack frame"],
        hidden: "false",
        lastUpdate: "11/03/2023"
    }
   
}


// ======================================================================================================================================================================


export default postData;