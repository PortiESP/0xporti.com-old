import GithubButton from "@/components/GithubButton/GithubButton"
import {Button} from "@/components/MarkupWidgets/Tags"
import sass from "./styles.module.scss"
import igIcon from "@/public/assets/icons/instagram.png"
import twitterIcon from "@/public/assets/icons/twitter-original.svg"
import youtubeIcon from "@/public/assets/icons/youtube.webp"


export default function SocialButtons(){

    return (
        <div className={sass.div__social_buttons}>
            <div>
                <GithubButton username="PortiESP" bubble mini/>
            </div>
            <div>
                <Button href="https://www.instagram.com/portii.rm/" color="black" mini iconScale="130%" iconInvert={99} background="radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%)" icon={igIcon} />
            </div>
            <div>
                <Button href="https://www.youtube.com/@0xPorti" color="black" mini iconScale="120%" background="#eee" icon={youtubeIcon} />
            </div>
            <div>
                <Button href="https://twitter.com/PortiiRM" color="black" mini iconScale="130%" background="#eee" icon={twitterIcon} />
            </div>
        </div>
    )
}