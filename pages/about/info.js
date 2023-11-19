import { useEffect, useRef } from "react";
import AboutHead from "../../components/abuot_head";
import Layout from "../../components/layout/layout";

export default function Info() {
    
let htmltext = `<div class="content">
<p style="text-align: center;" class="transit02"><span style="font-size: medium;" class="transit02"><strong>Общая информация</strong></span></p>
<p style="text-align: justify;" class="transit02">Российская государственная библиотека искусств (РГБИ) - хранилище ценностей отечественной культуры и искусства, ведущее научно-информационное учреждение. Библиотека преобразована в 1991 году из старейшей театральной библиотеки и является главной библиотекой, собирающей фонды литературы по вопросам искусства и театра.&nbsp;Библиотека вошла в историю культурного прошлого и продолжает играть значительную роль в гуманитарных процессах нашего времени.</p>
<hr>
<ul class="subpages">

</ul>
</div>`

    const info = useRef()

    useEffect(()=> {
        info.current.innerHTML = htmltext
        return () => {}
    },[])


    return <Layout>
    <AboutHead/>
        <div ref={info}></div>
    </Layout>
}