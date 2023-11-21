import { useEffect, useRef } from 'react';
import ar from '../../styles/layout/aside_right.module.scss'

export default function Aside_right() {

    let htmlText = `<div class="grid_3 transit02">
   
	   	<h2 class="transit02"><a href="https://liart.ru/ru/pages/service/01/" class="transit02">Платные услуги РГБИ:</a></h2>
		<ul>
					
		<li class="transit02"><a target="_blank" title="Заказ копирования фрагментов изданий из основного фонда РГБИ" href="http://copy.liart.ru/" class="transit02">Копирование</a></li>
		<li class="transit02"><a target="_blank" title="Заказ на подбор тематических списков" href="http://thematic.liart.ru/" class="transit02">Тематические списки</a></li>
		<!--li><a target="_blank" title="Оформление читательского билета" href="http://uslugi.liart.ru/">Читательский билет</a></li-->
		<li class="transit02"><a target="_blank" title="Оплата услуг РГБИ" href="http://oplata.liart.ru/" class="transit02">Оплата услуг РГБИ</a></li>
						
		</ul>

                    
				
					
				
	<!--div style="text-align:left;">		
			<div style="margin-left:25px; margin-bottom:25px; margin-top:25px;"><a href="https://liart.ru/ru/pages/electro/"><img src="https://liart.ru/media/files/img/2017/14122017/opros2.jpg" alt="" title="" /></a></div>
     </div-->

   
            
                

<h2 class="transit02"><a href="/ru/newinlib/" class="transit02">Из новых поступлений:</a>
 <a href="/ru/newinlib/rss/" class="transit02"><img src="/rightaside/rss.png" alt="Подписка" style="width: 15px;"></a> </h2>

<ul>
  <li class="transit02"><a href="https://liart.ru/ru/pages/newinlib/newinlibab/" class="transit02">Новые поступления в отдел абонемента</a></li>      
  <li class="transit02"><a href="https://liart.ru/ru/pages/newinlib/newinlibvid/" class="transit02">Новые поступления в Видеофонд</a></li>  
  <!--<li><a href="https://liart.ru/ru/pages/izd/">Издания РГБИ</a></li>-->  
</ul>
     <div style="text-align:left;">		
			<div style="margin-left:10px; margin-bottom:25px; margin-top:13px;"><a href="https://liart.ru/ru/pages/Choosing_a_Librarian/" class="transit02"><img src="https://liart.ru/media/files/img/Vibor_Bibl.jpg" alt="" title=""></a></div>
     </div>


<style type="text/css">
    .announce img{
        width: 86px;
    }
</style>








<div class="announce">
    <a href="/ru/newinlib/2758/" class="transit02"><img src="/rightaside/c1c8137412f249279416c8db225946fa.jpg" alt="Перлина Е.В., Мельникова Е.П. Классический танец в вузах культуры и искусств: теория и методика преподавания"></a>
        <a href="/ru/newinlib/2758/" class="transit02">Перлина Е.В., Мельникова Е.П. Классический танец в вузах культуры и искусств: теория и методика преподавания</a>
</div>


<div class="announce">
    <a href="/ru/newinlib/2757/" class="transit02"><img src="/media/uploads/newinlib/itemavatars/202311/345d862aa29f44c3bc0f50234375fe5f.jpg" alt="Криничная Н.А. Мифология воды и водоемов"></a>
        <a href="/ru/newinlib/2757/" class="transit02">Криничная Н.А. Мифология воды и водоемов</a>
</div>


<div class="announce">
    <a href="/ru/newinlib/2756/" class="transit02"><img src="/media/uploads/newinlib/itemavatars/202311/e7453edec41745a9b415fe7b22f904c3.jpg" alt="Алекс Козулин Анатомия праздника "></a>
        <a href="/ru/newinlib/2756/" class="transit02">Алекс Козулин Анатомия праздника </a>
</div>


<div class="announce">
    <a href="/ru/newinlib/2755/" class="transit02"><img src="/media/uploads/newinlib/itemavatars/202311/4e51ef7f64044ba9b9161943e864f09a.jpg" alt="Ольга Савельева Российская история рекламы учебник для бакалавров"></a>
        <a href="/ru/newinlib/2755/" class="transit02">Ольга Савельева Российская история рекламы учебник для бакалавров</a>
</div>


<div class="announce">
    <a href="/ru/newinlib/2754/" class="transit02"><img src="/media/uploads/newinlib/itemavatars/202311/adc28be139414450bd510fe83a1660fa.jpg" alt="Китайская мысль: от Конфуция до повара Дина"></a>
        <a href="/ru/newinlib/2754/" class="transit02">Китайская мысль: от Конфуция до повара Дина</a>
</div>


<div class="announce">
    <a href="/ru/newinlib/2753/" class="transit02"><img src="/media/uploads/newinlib/itemavatars/202311/11e6853e6e054ce084eef7177912b5d7.jpg" alt="Постсоветская молодежь: предварительные итоги"></a>
        <a href="/ru/newinlib/2753/" class="transit02">Постсоветская молодежь: предварительные итоги</a>
</div>


<div class="announce">
    <a href="/ru/newinlib/2752/" class="transit02"><img src="/media/uploads/newinlib/itemavatars/202311/56992df17c6141799756f7a97d582398.jpg" alt="Кацис Л.Ф. Политическая биография Осипа Мандельштама"></a>
        <a href="/ru/newinlib/2752/" class="transit02">Кацис Л.Ф. Политическая биография Осипа Мандельштама</a>
</div>



<div style="text-align: center; margin-bottom:40px;"><a href="https://liart.ru/ru/newinlib/" class="transit02">Показать еще...</a></div>
            
   
	<!--div style="text-align:left;">		
			<div style="margin-left:25px; margin-bottom:25px; margin-top:25px;"><a href="https://liart.ru/ru/pages/Choosing_a_Librarian/"><img src="https://liart.ru/media/files/img/Vibor_Bibl.jpg" alt="" title="" /></a></div>
     </div-->

        </div>`

    let rightAside = useRef()

    useEffect(() => {
        rightAside.current.innerHTML = htmlText
        return () => { }
    }, [])

    return (
        <div className={ar.container}>
            <div ref={rightAside}></div>
        </div>
    )
}