import GithubButton from "@/components/GithubButton/GithubButton"
import {Button} from "@/components/MarkupWidgets/Tags"
import sass from "./styles.module.scss"
import blogIcon from "@/public/assets/icons/blog_icon.png"
import igIcon from "@/public/assets/icons/instagram.png"
import codePenIcon from "@/public/assets/icons/codepen-plain.svg"


export default function SocialButtons(){

    return (
        <div className={sass.div__social_buttons}>
            <div>
                <GithubButton username="PortiESP" bubble mini/>
            </div>
            <div>
                <Button href="/blog" color="black" mini iconScale="120%" background="#F2Cd00" icon={blogIcon} />
            </div>
            <div>
                <Button href="https://codepen.io/portiesp" color="black" mini iconScale="130%" background="#eee" icon={codePenIcon} />
            </div>
            <div>
                <Button href="https://www.instagram.com/portii.rm/" color="black" mini iconScale="130%" iconInvert={99} background="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)" icon={igIcon} />
            </div>
        </div>
    )
}