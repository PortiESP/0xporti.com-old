
import BlogPostsGrid from "./LandingComponents/BlogPosts/BlogPosts"
import Footer from "./LandingComponents/Footer/Footer"
import Header from "./LandingComponents/Header/Header"
import SearchBar from "./LandingComponents/SearchBar/SearchBar"
import styles from "./Page.module.scss"


export default function Landing() {
  return (
    <>
      <div className={styles.div__landing_root}>
        <Header />
        <SearchBar />

        <BlogPostsGrid />

        <Footer />
      </div>
    </>
  )
}
