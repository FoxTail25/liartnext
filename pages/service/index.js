import { useEffect, useRef } from "react"
import Layout from "../../components/layout/layout"
import Head from "next/head"

export default function Service() {
    let htmlText = `<div class="content">
    <p class="transit02"><span class="transit02">Уважаемые читатели! Просим обратить внимание, что на основании <a href="/ru/pages/service/02/" class="transit02">статьи 1275, IV Части Гражданского Кодекса РФ</a>&nbsp; (от 01.01. 2008 г.) библиотека не имеет права копировать на электронные носители документы, на которые распространяется действие авторского права.&nbsp;</span><br><br></p>
<center><span style="font-size: large;" class="transit02"><strong>Полезные ссылки</strong>&nbsp;<br></span><br>
<ul>
<li style="text-align: left;" class="transit02"><a href="/ru/pages/service/01/" class="transit02">Прейскурант платных услуг</a></li>
<li style="text-align: left;" class="transit02"><a href="/ru/pages/index/adress/" class="transit02">Расписание работы библиотеки и схема проезда</a></li>
<li style="text-align: left;" class="transit02"><a href="/media/files/doc/02022018/%D0%97%D0%B0%D1%8F%D0%B2%D0%BA%D0%B0%20%D0%BD%D0%B0%20%D1%81%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5%20%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B3%D0%BE%20%D1%81%D0%BF%D0%B8%D1%81%D0%BA%D0%B0.doc" class="transit02">Заявка на составление библиографического списка (.doc) </a></li>
<li style="text-align: left;" class="transit02"><a href="http://uslugi.liart.ru/" class="transit02">Интернет-услуги</a></li>
<li style="text-align: left;" class="transit02"><a href="/ru/pages/index/normdocs/02/" class="transit02">Правила копирования документов</a></li>
<li style="text-align: left;" class="transit02"><a href="/ru/pages/index/normdocs/porydok/" class="transit02">Порядок определения стоимости дополнительных услуг для пользователей РГБИ</a></li>
</ul>
<h3 class="transit02">&nbsp;</h3>
<p class="transit02"><strong>Бесплатные услуги:</strong></p>
<ul>
<li style="text-align: justify;" class="transit02">Выдача во временное пользование документов из библиотечных фондов</li>
<li style="text-align: justify;" class="transit02">Предоставление информации о наличии конкретного документа в фонде библиотеки</li>
<li style="text-align: justify;" class="transit02">Онлайн заказ изданий через сайт в читальные залы библиотеки</li>
<li style="text-align: justify;" class="transit02">Доступ к Интернет в помещениях библиотеки (WI-FI)</li>
<li style="text-align: justify;" class="transit02">Доступ к электронным ресурсам библиотеки (каталогам, базам данных, подписным ЭБС&nbsp; и т.д.)</li>
<li style="text-align: justify;" class="transit02">Обеспечение доступа к сетевым информационным ресурсам для читателей с ПК библиотеки (при полной загрузке рабочих мест - ограничение 1 час)</li>
<li style="text-align: justify;" class="transit02">Предоставление информацию о составе библиотечных фондов через систему каталогов, картотек и баз данных</li>
<li style="text-align: justify;" class="transit02">Консультации в поиске источников информации в фондах библиотеки</li>
<li style="text-align: justify;" class="transit02">Выполняет тематические, адресные, фактографические и уточняющие библиографические справки</li>
<li style="text-align: justify;" class="transit02">Проведение библиографических обзоров на основе фондов библиотеки</li>
<li style="text-align: justify;" class="transit02">Организация выставок, раскрывающих фонды РГБИ</li>
</ul>
<h3 class="transit02"><span style="font-size: large;" class="transit02"><br></span></h3>
<h3 class="transit02"><span style="font-size: large;" class="transit02">Перечень платных услуг, предоставляемых нашей библиотекой</span></h3>
&nbsp;
<div align="left"><strong>Копирование текстов из книг, журналов и других документов<br><br></strong></div>
</center>
<p class="transit02"><strong>Копирование изобразительных материалов</strong></p>
<blockquote>
<ul>
<li class="transit02">черно-белые и цветные копии</li>
<li class="transit02">сканирование (300 dpi) 600 dpi</li>
<li class="transit02">цифровая фотосъемка</li>
</ul>
</blockquote>
<p class="transit02"><strong>Прокат материалов</strong></p>
<blockquote>
<ul>
<li class="transit02">прокат экспонатов для кино и телевидения</li>
<li class="transit02">прокат для выставок в других организациях</li>
</ul>
</blockquote>
<p class="transit02"><strong>Информационные услуги</strong></p>
<blockquote>
<ul>
<li class="transit02">составление библиографических справок&nbsp;&nbsp;и списков&nbsp;</li>
<li class="transit02">&nbsp;&nbsp;(в том числе по электронной базе данных)</li>
<li class="transit02">подбор фактографических справок</li>
<li class="transit02">информационное обеспечение заданной темы</li>
</ul>
</blockquote>
<p class="transit02"><strong>Услуги в Видеосалоне</strong></p>
<blockquote>
<ul>
<li class="transit02">консультации и подбор видеоматериалов и информации по заданной теме</li>
</ul>
</blockquote>
<p class="transit02"><strong>Размещение афиш и объявлений</strong></p>
<p class="transit02"><strong>Распечатка документов</strong><br><strong>Продажа изданий РГБИ<br><br></strong></p>
<p class="transit02"><strong><strong>Зал на Кузнецком</strong></strong></p>
<p class="transit02">К услугам коллег и партнеров "Зал на Кузнецком" (35 мест) В зале проводятся семинары, лекции, конференции, презентации, встречи и т.д. Тел.: (495) 692- 57- 80</p>
<p class="transit02"><a href="/media/files/doc/04082022/мат.тех.база.pdf" target="_blank" class="transit02">Материально-техническое обеспечение выполнения услуг</a></p>
<p align="center" class="transit02"><br><strong>Примечания</strong></p>
<ul>
<li class="transit02">&nbsp;Стоимость услуг может меняться в зависимости от различных факторов</li>
<li class="transit02">&nbsp;Услуги могут оплачиваться по безналичному расчету. Возможно заключение договоров на абонентское обслуживание.</li>
<li class="transit02">&nbsp;В целях сохранности фондов библиотека оставляет за собой право отказать в копировании материалов.</li>
<li class="transit02">&nbsp;Студенты отраслевых учебных заведений пользуются льготами.</li>
</ul>
    <hr>
    <ul class="subpages">
    
    </ul>
</div>`

let service = useRef()

useEffect(()=> {
    service.current.innerHTML = htmlText
    return()=>{}
},[])
return <Layout>
    <Head>
        <title>Услуги</title>
    </Head>
<div ref={service}></div>
</Layout>
}