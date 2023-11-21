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
    <a href="/ru/newinlib/2738/" class="transit02"><img src="/rightaside/97df7145e9f14bdaa137b55e05880566.jpg" alt="Душечкина Е. В., Русская елка: история, мифология, литература"></a>
        <a href="/ru/newinlib/2738/" class="transit02">Душечкина Е. В., Русская елка: история, мифология, литература</a>
</div>

<div class="announce">
    <a href="/ru/newinlib/2737/" class="transit02"><img src="/rightaside/9d6b4c895c174f0d9548c50862a2221d.jpg" alt="Мещеряков А. Н., Terra Nipponica: среда обитания и среда воображения"></a>
        <a href="/ru/newinlib/2737/" class="transit02">Мещеряков А. Н., Terra Nipponica: среда обитания и среда воображения</a>
</div>

<div class="announce">
    <a href="/ru/newinlib/2736/" class="transit02"><img src="/rightaside/b9ec7b31b2ee417dbcb0aa46870d7da3.jpg" alt="Тарновский В. В., Формирование ансамбля Серафимо-Дивеевского монастыря как архитектурного и духовного центра Нижегородского края (XVIII-XX вв.): история, архитектура, традиции"></a>
        <a href="/ru/newinlib/2736/" class="transit02">Тарновский В. В., Формирование ансамбля Серафимо-Дивеевского монастыря как архитектурного и духовного центра Нижегородского края (XVIII-XX вв.): история, архитектура, традиции</a>
</div>

<div class="announce">
    <a href="/ru/newinlib/2735/" class="transit02"><img src="/rightaside/69db972d59ea46f9945497c3ee38142f.jpg" alt="Кинофантастика: от шедевров прошлого к блокбастерам настоящего. К 50-летию выхода на экраны фильма Андрея Тарковского &quot;Солярис&quot;"></a>
        <a href="/ru/newinlib/2735/" class="transit02">Кинофантастика: от шедевров прошлого к блокбастерам настоящего. К 50-летию выхода на экраны фильма Андрея Тарковского "Солярис"</a>
</div>

<div class="announce">
    <a href="/ru/newinlib/2734/" class="transit02"><img src="/rightaside/0e5fffcb707043819ef8b5ad52746d99.jpg" alt="Берк П., Полимат: история универсальных людей от Леонардо да Винчи до Сьюзен Сонтаг"></a>
        <a href="/ru/newinlib/2734/" class="transit02">Берк П., Полимат: история универсальных людей от Леонардо да Винчи до Сьюзен Сонтаг</a>
</div>

<div class="announce">
    <a href="/ru/newinlib/2733/" class="transit02"><img src="/rightaside/4450051ed2cc4e1bbd26fdd8761c12cc.jpg" alt="Игорь Грабарь: к 150-летию со дня рождения"></a>
        <a href="/ru/newinlib/2733/" class="transit02">Игорь Грабарь: к 150-летию со дня рождения</a>
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