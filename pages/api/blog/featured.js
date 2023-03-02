import postsData from "@/api/blog/postData"


const post = postsData.arch_install

const ImageData =  require(`@/blogImages/thumbnails/${post.thumbnail}`)
const featuredPostData = {
    ...post,
    image: ImageData
}

export {featuredPostData};