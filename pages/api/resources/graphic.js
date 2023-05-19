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
        title: "Camino de Datos (spanish)",
        description: "Interactive illustration about how the MIPS datapath",
        categories: ["documentation", "interactive"],
        tags: ["data", "hardware", "assembly", "mips"],
        url: "/resources/graphic/camino_datos",
        thumbnail: "/assets/resources/mips/Camino_de_datos.svg"
    },
    {
        title: "Memory Layout Analogy",
        description: "An analogy of the memory layout using your bedroom",
        categories: ["documentation"],
        tags: ["memory", "layout"],
        url: "/assets/resources/memory_bedroom/Memory_comparation.jpg",
    },
    {
        title: "Registers Naming Breakdown",
        description: "Breakdown of the registers prefix notation",
        categories: ["documentation"],
        tags: ["register", "naming"],
        url: "/assets/resources/memory_layout/register_naming_breakdown.svg",
    },
    {
        title: "Stack Memory Layout",
        description: "Breakdown of the stack layout concepts, offsets, etc...",
        categories: ["documentation"],
        tags: ["stack", "layout"],
        url: "/assets/resources/memory_layout/Memory_Layout.svg",
    },
    {
        title: "Stack Overflow Exploit",
        description: "Illustration of how stack overflow exploit works",
        categories: ["documentation"],
        tags: ["exploit", "layout", "binary"],
        url: "/assets/resources/exploits/StackOverflow.svg",
    },
    {
        title: "String Formatting Exploit",
        description: "Illustration of how string formatting exploit works",
        categories: ["documentation"],
        tags: ["exploit", "layout", "binary"],
        url: "/assets/resources/exploits/StringFormattingExploit.svg",
    },
    {
        title: "Loading dynamic libraries with PLT and GOT",
        description: "Workflow of the how dynamic libraries and managed over PLT and GOT",
        categories: ["documentation"],
        tags: ["got", "plt", "memory", "binary"],
        url: "/assets/resources/memory_layout/PLT_and_GOT.svg",
    },
    {
        title: "The heap (DLMalloc)",
        description: "How DLMalloc heap implementation works",
        categories: ["documentation"],
        tags: ["memory", "heap", "dlmalloc"],
        url: "/assets/resources/memory_layout/The_heap_(dlmalloc).svg",
    },
    {
        title: "Heap Unlink (DLMalloc)",
        description: "How DLMalloc heap implementation unlinks a free block",
        categories: ["documentation"],
        tags: ["memory", "heap", "dlmalloc"],
        url: "/assets/resources/memory_layout/Heap_Unlink.svg",
    },
    {
        title: "Heap DLMalloc Unlink exploit",
        description: "How to exploti DLMalloc heap implementation unlink algorithm",
        categories: ["documentation"],
        tags: ["memory", "heap", "dlmalloc", "exploit"],
        url: "/assets/resources/memory_layout/unlink_exploit.svg",
    },
    {
        title: "Assembly code comparation",
        description: "Comparation of the point of view over assembly code",
        categories: ["documentation"],
        tags: ["assembly", "comparation"],
        url: "/assets/resources/memory_layout/Assembly_code_comparation.svg",
    },
   
]

export default elements;