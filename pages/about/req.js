import Layout from "../../components/layout/layout";
import AboutHead from "../../components/abuot_head";
import { useEffect, useRef } from "react";

export default function Req() {
    
    let htmlText = `<div class="content">
    <p style="text-align: center;" class="transit02"><span style="font-size: medium;" class="transit02"><strong>Реквизиты библиотеки</strong></span></p>
<p class="transit02">Федеральное государственное бюджетное учреждение культуры «Российская государственная библиотека искусств»</p>
<p class="transit02">Адрес: 107031, г. Москва, ул. Б.Дмитровка, д.8/1,</p>
<p class="transit02">тел.8(495) 692-86-59</p>
<p class="transit02">ИНН 7707085611 КПП 770701001</p>
<p class="transit02">Получатель:</p>
<p class="transit02">Управление Федерального казначейства по г. Москве (Федеральное &nbsp;&nbsp;&nbsp;государственное бюджетное учреждение культуры&nbsp; &nbsp;«Российская &nbsp;государственная библиотека &nbsp;искусств», л/сч 20736Х06530)</p>
<p class="transit02">Банк организации:</p>
<p class="transit02"><strong>ГУ БАНКА РОССИИ ПО ЦФО//УФК ПО Г. МОСКВЕ г. Москва</strong></p>
<p class="transit02"><strong><strong>ЕКС</strong>&nbsp; 40102810545370000003</strong></p>
<p class="transit02">Номер счета (казначейства):&nbsp;03214643000000017300</p>
<p class="transit02">БИК &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>004525988</strong></p>
<p class="transit02">Директор&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Колганова Ида Ароновна&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</p>
<p class="transit02">ОКВЭД 91.01</p>
<p class="transit02">ОКПО 02173963</p>
<p class="transit02">ОГРН 1037739274352</p>
<p class="transit02">&nbsp;</p>
<p class="transit02">&nbsp;</p>
    <hr>
    <ul class="subpages">
    
    </ul>
</div>`
    
    let req = useRef()
    useEffect(()=> {
        req.current.innerHTML = htmlText
        return ()=>{}
    })


    
    return <Layout>
    <AboutHead/>
    <div ref={req}></div>
    </Layout>
}