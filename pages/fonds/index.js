import Head from "next/head";
import AllLinks from "../../components/about_links";
import AboutHead from "../../components/abuot_head";
import Layout from "../../components/layout/layout";
import ai from "../../styles/pages/about_ind.module.scss"

export default function Fonds() {

    let fondLinks = [
        {
            hreff: '/fonds',
            name: "Основной фонд"
        },
        {
            hreff: '/fonds',
            name: "Справочно-информационный фонд"
        },
        {
            hreff: '/fonds',
            name: "Фонд изобразительных материалов"
        },
        {
            hreff: '/fonds',
            name: "Фонд отдела Абонемента"
        },
        {
            hreff: '/fonds',
            name: "Фонд газетных вырезок и театральных программ"
        },
        {
            hreff: '/fonds',
            name: "Видеофонд"
        },
        {
            hreff: '/fonds',
            name: "Фонд изданий на микрофишах"
        },
        {
            hreff: '/fonds',
            name: "Архивный фонд"
        },
    ]



    let links = fondLinks.map((el, ind) => {
        return <AllLinks key={ind} {...el} />
    })

    return (
        <>
            <Head>
                <title>Фонды</title>
            </Head>
            <Layout>
                <div>
                    <AboutHead  text="Фонды"/>
                    <ul className={ai.subpages}>
                        {links}
                    </ul>

                </div>
            </Layout>
        </>
    )
}