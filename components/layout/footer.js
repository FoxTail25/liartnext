import { useEffect, useRef } from 'react'
import f from '../../styles/layout/footer.module.scss'
// import '../../styles/layout/footer2.scss'


export default function Footer() {

    let htmlText = `<footer class="transit02">
    <div class="container_12 transit02">
        <div class="grid_3 transit02">
            <p class="transit02">© Федеральное государственное<br>бюджетное учреждение культуры<br>Российская государственная<br>библиотека искусств</p><p class="transit02"><a href="mailto:bisk@liart.ru" class="transit02">bisk@liart.ru</a>
            
			</p><p class="transit02">
                <!--Rating@Mail.ru COUNTER-->
                <script language="JavaScript" type="text/javascript"><!--
                d=document;var a='';a+=';r='+escape(d.referrer)
                js=10//--></script><script language="JavaScript1.1" type="text/javascript"><!--
            a+=';j='+navigator.javaEnabled()
            js=11//--></script><script language="JavaScript1.2" type="text/javascript"><!--
            s=screen;a+=';s='+s.width+'*'+s.height
            a+=';d='+(s.colorDepth?s.colorDepth:s.pixelDepth)
            js=12//--></script><script language="JavaScript1.3" type="text/javascript"><!--
            js=13//--></script><script language="JavaScript" type="text/javascript"><!--
            d.write('<a href="http://top.mail.ru/jump?from=410642"'+
                    ' target="_top"><img src="http://d4.c4.b6.a0.top.mail.ru/counter'+
                    '?id=410642;t=216;js='+js+a+';rand='+Math.random()+
                    '" alt="Рейтинг@Mail.ru"'+' border="0" height="31" width="88"/><\/a>')
            if(11<js)d.write('<'+'!-- ')//--></script><a href="http://top.mail.ru/jump?from=410642" target="_top" class="transit02"><img src="http://d4.c4.b6.a0.top.mail.ru/counter?id=410642;t=216;js=13;r=;j=false;s=1920*1080;d=24;rand=0.6764777013758654" alt="Рейтинг@Mail.ru" border="0" height="31" width="88"></a><!-- <noscript><a
                target="_top" href="http://top.mail.ru/jump?from=410642"><img
                src="http://d4.c4.b6.a0.top.mail.ru/counter?js=na;id=410642;t=216"
                border="0" height="31" width="88"
                alt="Рейтинг@Mail.ru"/></a></noscript><script language="JavaScript" type="text/javascript"><!--
        if(11<js)d.write('--'+'>')//-->
            <!--/COUNTER-->
           
		   <!-- Yandex.Metrika counter -->
<script type="text/javascript">
(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter21341830 = new Ya.Metrika({id:21341830,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");
</script>
<noscript><div><img src="//mc.yandex.ru/watch/21341830" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
<!-- /Yandex.Metrika counter -->
		   
		   
		   
		   
		   
		   
            <!-- /Google Analytics -->
            <script type="text/javascript">
                var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
                document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
            </script><script src="http://www.google-analytics.com/ga.js" type="text/javascript"></script>
            <script type="text/javascript">
                try {
                    var pageTracker = _gat._getTracker("UA-15394172-1");
                    pageTracker._trackPageview();
                } catch(err) {}</script>
            <!-- /Google Analytics  -->

        </p></div>
        <div class="grid_3 transit02">
            <ul class="footer_link">
                <li class="transit02"><a href="/ru/pages/index/" class="transit02">О библиотеке</a></li>
                <li class="transit02"><a href="/ru/pages/service/" class="transit02">Услуги</a></li>
                <li class="transit02"><a href="/ru/pages/fonds/" class="transit02">Фонды</a></li>
                <li class="transit02"><a href="/ru/pages/catalogs/" class="transit02">Каталоги</a></li>
                <li class="transit02"><a href="http://liart.ru/ru/pages/index/korrupt/" class="transit02">Противодействие коррупции</a></li>
            </ul>
        </div>
        <div class="grid_3 transit02">
            <ul class="footer_link">
                <li class="transit02"><a href="/ru/news/" class="transit02">Новости</a></li>
                <li class="transit02"><a href="/ru/pages/eresorses/" class="transit02">Электронные ресурсы</a></li>
                <li class="transit02"><a href="http://liart.ru/ru/gallery/" class="transit02">Галерея</a></li>
                <li class="transit02"><a href="/ru/pages/contacts/" class="transit02">Контакты</a></li>
            </ul>
        </div>
        <div class="grid_3 transit02">
            <p class="transit02">Наши адреса: <br><strong><a href="http://liart.ru/ru/pages/index/adress" class="transit02">=Адреса на картах=</a></strong></p><p class="transit02">Читальные залы:<br>107031, Россия, Москва,<br>Большая Дмитровка, 8/1</p><p class="transit02">Абонемент:<br>127051, Россия, Москва, Петровские<br>линии, д.1</p>


        </div>

        </div>
        <div class="grid_12">
            <p class="transit02">Разработчик сайта: <b><a href="http://obs.ruslan.ru/" class="transit02">ООО «Открытые библиотечные системы»</a></b>, ПО <b><a href="http://obs.ruslan.ru/?product:biblioportal" class="transit02">«Библиопортал»</a></b>. Дизайн сайта: АНО Центр культуры и искусства <b><a href="http://www.mediaartlab.ru/" class="transit02">«МедиаАртЛаб»</a></b>.
                При использовании материалов прямая ссылка на сайт <b><a href="http://www.liart.ru" class="transit02">www.liart.ru</a></b> обязательна.</p>


        </div>
	
<!-- Yandex.Metrika counter --><script type="text/javascript">(function (d, w, c) { (w[c] = w[c] || []).push(function() { try { w.yaCounter24265294 = new Ya.Metrika({id:24265294, webvisor:true, clickmap:true, trackLinks:true, accurateTrackBounce:true}); } catch(e) { } }); var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js"; if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script><noscript><div><img src="//mc.yandex.ru/watch/24265294" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter -->
</footer>`

const footer = useRef()

useEffect(()=> {
    footer.current.innerHTML = htmlText
    return ()=>{}
},[])

    return (
        <div className={f.f_container}>
            <div ref={footer} className='width_container'>
                
            </div>
        </div>
    )
}