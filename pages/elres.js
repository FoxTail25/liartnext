import Head from "next/head";
import AllLinks from "../components/about_links";
import Layout from "../components/layout/layout";
import ai from "../styles/pages/about_ind.module.scss"

export default function Elres() {

    let elres = [
        {
            hreff: "/elres/",
            name: "Базы данных"
        },
        {
            hreff: "/elres/",
            name: "Электронный каталог"
        }
    ]

    let res = elres.map((el,ind)=> <AllLinks key={ind} {...el}/>)

    return <Layout>
        <Head>
            <title>
                Электронные ресурсы
            </title>
        </Head>
        <ul className="subpages">
            {res}
        </ul>

    </Layout>
}