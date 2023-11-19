import Image from "next/image";
import ah from "../styles/pages/about_head.module.scss"

export default function AboutHead({text}) {
    return <div className={ah.container}>
        <h2>
            {text}
        </h2>
        <Image priority={true} src="/pages/about/about.jpg" width="470" height="97" alt="read" quality={75}/>
        <br />
        <hr />
    </div>
}