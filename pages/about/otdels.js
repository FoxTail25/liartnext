import Layout from "../../components/layout/layout";
import AboutHead from "../../components/abuot_head";
import { useEffect, useRef } from "react";

export default function Otdels() {
    
    let htmlText = `<div class="content">
    <p style="text-align: center;" class="transit02"><span style="font-size: medium;" class="transit02"><strong>Отделы&nbsp;библиотеки</strong></span></p>
    <hr>
    <ul class="subpages">
 
        <li class="subpage transit02"><a href="/ru/pages/index/otdels/01/" class="transit02">Отдел обслуживания читальных залов, статистики и контроля</a></li>
 
        <li class="subpage transit02"><a href="/ru/pages/index/otdels/10/" class="transit02">Отдел хранения библиотечных фондов</a></li>

        <li class="subpage transit02"><a href="/ru/pages/index/otdels/06/" class="transit02">Отдел научной обработки</a></li>
 
        <li class="subpage transit02"><a href="/ru/pages/index/otdels/08/" class="transit02">Отдел научной информации</a></li>

        <li class="subpage transit02"><a href="/ru/pages/index/otdels/09/" class="transit02">Центр визуальной информации</a></li>
  
        <li class="subpage transit02"><a href="/ru/pages/index/otdels/03/" class="transit02">Отдел абонемента</a></li>
  
        <li class="subpage transit02"><a href="/ru/pages/index/otdels/05/" class="transit02">Отдел научной библиографии</a></li>

        <li class="subpage transit02"><a href="/ru/pages/index/otdels/04/" class="transit02">Отдел культурных программ</a></li>
   
        <li class="subpage transit02"><a href="/ru/pages/index/otdels/02/" class="transit02">Центр информационных технологий</a></li>
  
        <li class="subpage transit02"><a href="/ru/pages/index/otdels/12/" class="transit02">Отдел комплектования</a></li>
     
    </ul>
</div>`

let otdels = useRef()

useEffect(()=> {
    otdels.current.innerHTML = htmlText
    return ()=>{}
},[])



    return <Layout>
    <AboutHead/>
    <div ref={otdels}></div>
    </Layout>
}