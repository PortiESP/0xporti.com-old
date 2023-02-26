
import Footer from "../components/footer/Footer"
import Header from "../components/header/Header"
import styles from "./Page.module.scss"


export default function Landing() {
  return (
    <>
      <div className={styles.div__landing_root}>
        <Header />


        <Footer />
      </div>
    </>
  )
}
