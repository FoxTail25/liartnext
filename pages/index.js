
import { nanoid } from "nanoid";

import Layout from "../components/layout/layout";
import NewsRecord from "../components/news";
import Head from "next/head";
// import News from '../components/news'

export default function News() {

    let arr = [
        { id: nanoid(), news_header: "news1", news_text: "text1 news text text text" },
        { id: nanoid(), news_header: "news2", news_text: "text2 news text text text" },
        { id: nanoid(), news_header: "news3", news_text: "text3 news text text text" },
        { id: nanoid(), news_header: "news4", news_text: "text4 news text text text" },
        { id: nanoid(), news_header: "news5", news_text: "text5 news text text text" },
        { id: nanoid(), news_header: "news6", news_text: "text6 news text text text" },
        { id: nanoid(), news_header: "news7", news_text: "text7 news text text text" },
        { id: nanoid(), news_header: "news8", news_text: "text8 news text text text" },
        { id: nanoid(), news_header: "news9", news_text: "text9 news text text text" },
        { id: nanoid(), news_header: "news10", news_text: "text10 news text text text" },
    ]

    let news = arr.map(e => <NewsRecord key={e.id} header={e.news_header} content={e.news_text} />)

    return (
        <>
            <Head>
                <title>Новости</title>
            </Head>
            <Layout>
                <h1>Новости</h1>
                <div>
                    {news}
                </div>
            </Layout>
        </>
    )
}