import Layout from "../../components/layout/layout";
import AboutHead from "../../components/abuot_head";
import { useEffect, useRef } from "react";

export default function Popsovet() {
    
    let htmlText = `<div class="content">
    <p align="center" class="transit02"><strong><span style="font-size: medium;" class="transit02">Попечительский совет РГБИ</span></strong></p>
<ol>
<li style="text-align: justify;" class="transit02">Любавин Анатолий Александрович, ректор Московского государственного академического художественного института имени В.И. Сурикова при Российской академии художеств;</li>
<li style="text-align: justify;" class="transit02">Свиблова Ольга Львовна, директор Мультимедиа Арт Музея, Москва / музея «Московский Дом фотографии»; &nbsp;</li>
<li style="text-align: justify;" class="transit02">Соломин Юрий Мефодьевич, художественный руководитель Государственного Академического Малого театра;</li>
<li style="text-align: justify;" class="transit02">Церетели Василий Зурабович, исполнительный директор Московского музея современного искусства;</li>
<li style="text-align: justify;" class="transit02">Шахназаров Карен Георгиевич, генеральный директор Киноцентра «Мосфильм»;</li>
<li style="text-align: justify;" class="transit02">Ширвиндт Александр Анатольевич, Президент организации культуры и искусства ГБУК г.Москвы "Московский академический театр сатиры";&nbsp;&nbsp;</li>
<li style="text-align: justify;" class="transit02">&nbsp;Мессерер Борис Асафович, член Российской академии художеств,&nbsp; президент ассоциации художников театра, кино и телевидения Москвы;</li>
<li style="text-align: justify;" class="transit02">Райкин Константин Аркадьевич, художественный руководитель Российского государственного театра «Сатирикон» имени Аркадия Райкина;</li>
<li style="text-align: justify;" class="transit02">Родионов Дмитрий Викторович, главный редактор журнала «Сцена»;</li>
<li style="text-align: justify;" class="transit02">Любимов Борис Николаевич, ректор высшего театрального училища (института) им. М. С. Щепкина</li>
</ol>
    <hr>
    <ul class="subpages">
    
    </ul>
</div>`

let popsovet = useRef()

useEffect(()=> {
    popsovet.current.innerHTML = htmlText
    return ()=>{}
})



    return <Layout>
    <AboutHead/>
        <div ref={popsovet}></div>
    </Layout>
}