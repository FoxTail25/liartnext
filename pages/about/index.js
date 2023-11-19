import Image from "next/image";
import Layout from "../../components/layout/layout";
import ai from '../../styles/pages/about_ind.module.scss'
import Head from "next/head";
// import AboutLinks from "../../components/about_links";
import AboutHead from "../../components/abuot_head";
import AllLinks from "../../components/about_links";


export default function About() {

    let aboutlinks = [
        {
            hreff: "/about/adress/",
            name: "Адрес и время работы РГБИ"
        },
        {
            hreff: "/about/zapis/",
            name: "Запись читателей"
        },
        {
            hreff: "/about/info/",
            name: "Общая информация"
        },
        {
            hreff: "/about/history/",
            name: "Из истории РГБИ"
        },
        {
            hreff: "/about/otdels/",
            name: "Структура библиотеки"
        },
        {
            hreff: "/about/req/",
            name: "Реквизиты библиотеки"
        },
        {
            hreff: "/about/normdocs/",
            name: "Нормативные документы"
        },
        {
            hreff: "/about/popsovet/",
            name: "Попечительский совет"
        },
        {
            hreff: "/about/korrupt/",
            name: "Противодействие коррупции"
        },
    ]

    let links = aboutlinks.map((el, ind) => {
        return <AllLinks key={ind} {...el} />
    })

    return (
        <>
            <Head>
                <title>О Библиотеке</title>
            </Head>
            <Layout>
                <div>
                    <AboutHead text="О библиотеке"/>
                    <ul className={ai.subpages}>
                        {links}
                    </ul>

                </div>
            </Layout>
        </>
    )
}