import Image from "next/image";
import ah from "../styles/pages/about_head.module.scss"

export default function AboutHead() {
    return <div className={ah.container}>
        <p>
            О библиотеке
        </p>
        <Image src="/pages/about/about.jpg" width="470" height="97"></Image>
        <br />
        <hr />
    </div>
}