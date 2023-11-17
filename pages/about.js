import Image from "next/image";
import Layout from "../components/layout/layout";
import a from '../styles/pages/about.module.scss'

export default function About() {


    return (
        <Layout>
            <div className={a.container}>
                <p>
                    О библиотеке
                </p>
                <Image src="/pages/about/about.jpg" width="470" height="97"></Image>
                <br/>
                <hr/>
            </div>
        </Layout>
    )
}