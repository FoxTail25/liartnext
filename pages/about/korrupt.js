import Layout from "../../components/layout/layout";
import AboutHead from "../../components/abuot_head";
import { useEffect, useRef } from "react";

export default function Korrupt() {
    
    let htmlText = `<div class="content">
    <p class="transit02"><strong><a href="/media/files/img/11072017/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA.jpg" class="transit02"><strong><span class="transit02"><span class="transit02">Нормативно-правовые акты по противодействию коррупции</span></span></strong></a></strong></p>
<p class="transit02"><a href="/media/files/img/11072017/pamatka.doc" class="transit02"><span style="font-size: small;" class="transit02"><span style="font-size: 10pt;" class="transit02"><strong>Памятка о мерах противодействия коррупции для должностных лиц РГБИ&nbsp;</strong></span></span></a></p>
<p class="transit02"><strong><a href="http://mkrf.ru/deyatelnost/anticorruption/list.php?SECTION_ID=19663" class="transit02"><span style="font-size: small;" class="transit02"><span style="font-size: 10pt;" class="transit02">Сведения о доходах, об имуществе и обязательствах имущественного характера на сайте Минкультуры России </span></span></a></strong></p>
<p class="transit02"><strong><a href="/media/files/doc/12072017/podarki.pdf" class="transit02">Положение о сообщении лицами, занимающими должность в РГБИ, о получении подарка в связи с их должностым положением или исполнением ими служебных обязанностей, сдаче и оценке подарка&nbsp;</a></strong></p>
<p class="transit02"><a href="/media/files/img/11072017/scan_2017-07-14-30-42%20%281%29.jpg" class="transit02"><strong>Комиссия по урегулированию конфликта интересов</strong></a></p>
<p class="transit02"><a href="/media/files/doc/12072017/zai.pdf" class="transit02"><strong>Положение о порядке соблюдения лицами, замещающими должности в РГБИ, о возникновении личной заинтересованности&nbsp;при исполнении должностных обязанностей, которая приводит или может привести к конфликту интересов</strong></a></p>
<p class="transit02"><a href="/media/files/doc/12072017/scan_2017-07-14-44-28cut.jpg" class="transit02"><strong>Уведомление о личной заинтересованности</strong></a></p>
<p class="transit02"><a href="/media/files/img/11072017/scan_2017-07-14-35-04.jpg" class="transit02"><strong>Уведомление о получении подарка</strong></a></p>
<hr>
<p class="transit02">Сообщение о фактах коррупции можно присылать по электронной почте на адрес <a href="mailto:bisk@liart.ru" rel="nofollow" target="_blank" class="transit02">bisk@liart.ru</a> и по телефону +7(495)692-86-59&nbsp;<strong> </strong></p>
    <hr>
    <ul class="subpages">
    
    </ul>
</div>`


    let korrupt = useRef()

    useEffect(()=> {
        korrupt.current.innerHTML = htmlText
        return ()=>{}
    })




    return <Layout>
    <AboutHead/>
        <div ref={korrupt}></div>
    </Layout>
}