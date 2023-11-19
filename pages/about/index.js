import Image from "next/image";
import Layout from "../../components/layout/layout";
// import a from '../../styles/pages/about.module.scss'
import Head from "next/head";
import AboutLinks from "../../components/about_links";
import AboutHead from "../../components/abuot_head";


export default function About() {


    return (
        <>
        <Head>
            <title>О Библиотеке</title>
        </Head>
        <Layout>
            <div>
                <AboutHead/>
                <AboutLinks/>
            </div>
        </Layout>
        </>
    )
}