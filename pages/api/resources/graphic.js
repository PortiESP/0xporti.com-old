import image1 from "@/blogImages/thumbnails/arch_install.svg"

// {
//     title: "Element 1",                             // Title
//     image: image1,                                  // Image URL
//     description: "aaaaaaaaa",                       // Description
//     categories: ["test"],                           // List of categories
//     tags: ["bar", "foo"],                           // List of categories
//     url: "/assets/images/0xPorti_Logo.svg",         // OnClick URL
// },

const elements = [
    {
        title: "Memory Layout Analogy",
        description: "An analogy of the memory layout using your bedroom",
        categories: ["Documentation"],
        tags: ["memory", "layout"],
        url: "/assets/resources/memory_bedroom/Memory_comparation.jpg",
    },
    {
        title: "Registers Naming Breakdown",
        description: "Breakdown of the registers prefix notation",
        categories: ["Documentation"],
        tags: ["register", "naming"],
        url: "/assets/resources/memory_layout/register_naming_breakdown.svg",
    },
    {
        title: "Stack Memory Layout",
        description: "Breakdown of the stack layout concepts, offsets, etc...",
        categories: ["Documentation"],
        tags: ["stack", "layout"],
        url: "/assets/resources/memory_layout/Memory_Layout.svg",
    },
    {
        title: "Stack Overflow Exploit",
        description: "Illustration of how stack overflow exploit works",
        categories: ["Documentation"],
        tags: ["exploit", "layout", "binary"],
        url: "/assets/resources/exploits/StackOverflow.svg",
    },
    {
        title: "String Formatting Exploit",
        description: "Illustration of how string formatting exploit works",
        categories: ["Documentation"],
        tags: ["exploit", "layout", "binary"],
        url: "/assets/resources/exploits/StringFormattingExploit.svg",
    },
    {
        title: "Loading dynamic libraries with PLT and GOT",
        description: "Workflow of the how dynamic libraries and managed over PLT and GOT",
        categories: ["Documentation"],
        tags: ["got", "plt", "memory", "binary"],
        url: "/assets/resources/memory_layout/PLT_and_GOT.svg",
    },
    {
        title: "The heap (DLMalloc)",
        description: "How DLMalloc heap implementation works",
        categories: ["Documentation"],
        tags: ["memory", "heap", "dlmalloc"],
        url: "/assets/resources/memory_layout/The_heap_(dlmalloc).svg",
    },
    {
        title: "Heap Unlink (DLMalloc)",
        description: "How DLMalloc heap implementation unlinks a free block",
        categories: ["Documentation"],
        tags: ["memory", "heap", "dlmalloc"],
        url: "/assets/resources/memory_layout/Heap_unlink.svg",
    },
    {
        title: "Heap DLMalloc Unlink exploit",
        description: "How to exploti DLMalloc heap implementation unlink algorithm",
        categories: ["Documentation"],
        tags: ["memory", "heap", "dlmalloc", "exploit"],
        url: "/assets/resources/memory_layout/unlink_exploit.svg",
    },
    {
        title: "Assembly code comparation",
        description: "Comparation of the point of view over assembly code",
        categories: ["Documentation"],
        tags: ["assembly", "comparation"],
        url: "/assets/resources/memory_layout/Assembly_code_comparation.svg",
    },
   
]

export default elements;