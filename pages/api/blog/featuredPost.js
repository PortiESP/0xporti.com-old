import postsData from "@/api/blog/postsData"









// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------
            // Feature post from /api/postsData
            const post = postsData.arch_install  // <--- CHANGE THIS VALUE, SELECT THE FEATURED POST (postsData.POST_ID)
// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------









const ImageData =  require(`@/blogImages/thumbnails/${post.thumbnail}`)
const featuredPostData = {
    ...post,
    image: ImageData
}

export {featuredPostData};