import Layout from "../../components/layout/layout";
import AboutHead from "../../components/abuot_head";
import { useEffect, useRef } from "react";

export default function Normdocs() {
    
    let htmlText = `<div class="content">
    <p class="transit02">Нормативные документы</p>
    <hr>
    <ul class="subpages">

        <li class="subpage transit02"><a href="/ru/pages/index/normdocs/library_rules/" class="transit02">Правила пользования библиотекой</a></li>
 
        <li class="subpage transit02"><a href="/ru/pages/index/normdocs/43253565654/" class="transit02">Кодекс профессиональной этики сотрудника Российской государственной библиотеки искусств</a></li>
 
        <li class="subpage transit02"><a href="/ru/pages/index/normdocs/electronBible/" class="transit02">Концепция развития электоронной библиотеки Российской государственной библиотеки искусств</a></li>
        
    </ul>
</div>`

let normdocs = useRef()
useEffect(()=> {
    normdocs.current.innerHTML = htmlText
    return()=>{}
})

    return <Layout>
    <AboutHead/>
        <div ref={normdocs}></div>
    </Layout>
}