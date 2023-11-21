import { useEffect, useRef } from "react"
import Layout from "../components/layout/layout"
import AboutHead from "../components/abuot_head"
import Head from "next/head"

export default function Catalog() {
    let htmlText = `<div class="content">
<p class="transit02"><a class="a2 transit02" href="http://opac.liart.ru/opacg/nog.htm">Электронный каталог</a></p>
<p style="text-align: justify; text-indent: 25px;" class="transit02">Электронный каталог содержит библиографические записи на издания на русском и иностранном языках, на микроформы и электронные ресурсы. ЭК объединяет поисковые возможности алфавитного, предметного и систематического каталогов. Поиск возможен по всем элементам библиографического описания, предметным рубрикам, индексу ББК.</p>
<p style="text-align: justify; text-indent: 25px;" class="transit02">Для изданий, поступивших в библиотеку до 1998 г., поиск возможен только по автору, заглавию книги и другим элементам библиографического описания.</p>
<p class="transit02"><a class="a2 transit02" href="/predm/i2.htm">Предметный каталог</a></p>
<div class="short">
<p style="text-align: justify; text-indent: 25px;" class="transit02">Начал создаваться 1930-е годы. Хронологический охват литературы – с XVIII в. по 1997 г. Объем каталога составляет более&nbsp;500 000 карточек. Отражены документы по зрелищным искусствам, изобразительному и декоративно-прикладному искусству. В отдельный массив выделен ряд персоналий. Предметные рубрики и подрубрики расположены в алфавитном порядке и отражают информацию о книгах, статьях из сборников, частях, главах, разделах книг. Каталог снабжен системой ссылок и отсылок, которые дают возможность увидеть каждое явление как часть системной целостности.</p>
<p style="text-align: justify; text-indent: 25px;" class="transit02">В каталоги отражена следующая проблематика:</p>
<ul>
<li class="transit02">Отрасли, виды и жанры театра, музыки, киноискусства, декоративно-прикладного искусства</li>
<li class="transit02">Быт и культура отдельных народов, стран, городов – построены от названия народов, стран, городов</li>
<li class="transit02">Материалы об отдельных пьесах и их постановках – по названию произведения</li>
<li class="transit02">Материалы об отдельных фильмах – по названию</li>
<li class="transit02">Материалы о деятельности отдельных учреждений и организаций. Названия организаций ем города.</li>
</ul>
<p style="text-align: justify; text-indent: 25px;" class="transit02">Предметный каталог представлен в виде отсканированных библиографических карточек с возможностью поиска.</p>
<p class="transit02"><a class="a2 transit02" href="/ru/pages/catalogs/Kartochnye_katalogi/">Карточные каталоги</a></p>
<br style="text-align: justify; text-indent: 25px;">
<p style="text-align: justify; text-indent: 25px;" class="transit02">&nbsp;</p>
<p style="text-indent: 25px; text-align: left;" class="transit02">&nbsp;</p>
</div>
    <hr>
    <ul class="subpages">
    
    </ul>
</div>`

let catalog = useRef()

useEffect(()=> {
    catalog.current.innerHTML = htmlText
    return () => {}
},[])

return (
    <Layout>
        <Head>
            <title>Каталоги</title>
        </Head>
        <AboutHead text={"Каталоги"}/>
        <div ref={catalog}></div>
    </Layout>
)


}