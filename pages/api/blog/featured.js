import postsData from "@/api/blog/postData"




// Select featured post index (from postData.js)
/* ----------------------------------------------------- */ 
/* ==============> */ const index = 6 /* <============== */
/* ----------------------------------------------------- */ 




const post = postsData[index]
const ImageData =  require(`@/blogImages/thumbnails/${post.thumbnail}`)
const featuredPostData = {
    ...post,
    image: ImageData
}

export {featuredPostData};