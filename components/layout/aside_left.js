import { useEffect, useRef } from 'react'
import al from '../../styles/layout/aside_left.module.scss'


export default function Aside_left() {

    let htmlText = `<div style="margin: 0 auto" class="transit02">

     <div style="margin-top:30px; ">
     <p style="text-align:center;" class="transit02"><a target="_blank" href="http://official.liart.ru/calendars/month.pdf" class="transit02">Афиша на месяц</a></p>
     </div> 
  

<!--div  style="margin-top:30px; ">
<p style="text-align:center;"><a target="_blank" href="http://official.liart.ru/calendars/month.pdf">Афиша на месяц</a></p>

</div


<div id="side-calendar" style="width:200px; margin:0 auto;"></div>   
    
<script type="text/javascript" src="/media/files/scripts/side-calendar.js"></script>	        
--> 

<div style="text-align:center">
    <a href="https://mkrf.ru/" class="transit02"><img width="203" src="https://liart.ru/media/files/img/2016/09022016/MINCULT_RUS_RGB_40.png"></a><br><br>
    <a href="https://grants.culture.ru/helpful_information/" class="transit02"><img width="203" src="https://liart.ru/media/files/imgs/Grants.jpg"></a><br><br>
    <a href="https://quality.mkrf.ru/mark/?orgid=0373100000442" class="transit02"><img width="200" src="https://mkrf.ru/upload/mkrf/images/banner.png"></a><br><br>
    <b><p style="font-size:14px;color:#6b001c;" class="transit02">ЧТОБЫ ОЦЕНИТЬ УСЛОВИЯ ПРЕДОСТАВЛЕНИЯ УСЛУГ ИСПОЛЬЗУЙТЕ QR-КОД<br>
    <a href="https://bus.gov.ru/qrcode/rate/444883" class="transit02"><img width="203" src="/leftaside/qr_gov_vioce.png"></a><br>
    ИЛИ ПЕРЕЙДИТЕ ПО <a href="https://bus.gov.ru/qrcode/rate/444883" class="transit02">ССЫЛКЕ</a></p></b>
</div>  

<!--div style="text-align:center">
    <iframe width="200" height="300" frameborder="no" scrolling="no" src="http://quality.mkrf.ru/widget.php?orgid=0373100000442&amp;bgcolor=6b001c&amp;btnheight=37&amp;btnwidth=80&amp;btnstartwidth=100&amp;btnhpadding=0&amp;btnvpadding=3&amp;btnborderradius=0&amp;btnfsize=10&amp;labelfsize=13&amp;labellheight=16"></iframe>
</div-->   


    
                
    <div style="float:left; text-align:center; margin-top:20px; margin-left:21px">
    <div>
        <a href="http://nilc.ru/skk/" class="transit02"><img alt="" title="Центр «ЛИБНЕТ» – базы данных в свободном доступе" src="https://liart.ru/media/ban_145.gif" border="0" width="203" height="60"></a>
          </div>
          </div>
    
        
    <div style="float:left; text-align:center; margin-top:20px; margin-left:21px">
        <a href="https://biblioclub.ru" class="transit02"><img src="https://liart.ru/media/files/img/14012016/online.jpg"></a><br>
        <a href="https://www.bibliorossica.com" class="transit02"><img src="https://liart.ru/media/files/img/14012016/biblioros.jpg"></a><br>
        <a href="https://e.lanbook.com" class="transit02"><img src="https://liart.ru/media/files/img/2016/11022016/lan.jpg"></a>
        <!--a href="https://liart.ru/ru/pages/Countering_terrorism/"><img src="https://liart.ru/media/antiterror_2020.jpg"></a-->
        
    </div>
<!--div style="text-align:center">
    <a href="https://liart.ru/ru/pages/Countering_terrorism/"><img width="250" src="https://liart.ru/ru/pages/Countering_terrorism/"></a><br /><br /-->
    
    <!--div style="float:left; text-align:center; margin-top:20px; margin-left:21px">
        <div id="e329fb40-widget-pos" style="width: 150px; height: 480px; border: 1px solid gray;"></div>
        <script id="e329fb40" src="https://pos.gosuslugi.ru/og/widget/js/main.js" data-src-host="https://pos.gosuslugi.ru/og" data-org-id="14935"></script>
      </div-->
    
    <div style="float:left; text-align:center; margin-top:20px; margin-left:21px">
        <a href="https://объясняем.рф" class="transit02"><img alt="" title="" src="https://liart.ru/media/files/obyasn1.jpg" border="0" width="203" height="75"></a>
      </div>
    <div>
    
    <div style="float:left; text-align:center; margin-top:20px; margin-left:21px">
    
        <a href="https://liart.ru/ru/pages/Countering_terrorism/" class="transit02"><img alt="" title="Противодействие терроризму" src="https://liart.ru/media/antiterror_2023.jpg" border="0" width="203" height="80"></a>
      </div>
      </div>

    <div style="float:left; text-align:center; margin-top:20px; margin-left:21px">
    <div>
       <a href="http://www.rba.ru/" class="transit02"><img alt="" title="" src="https://liart.ru/media/Rba_logo.png" border="0" width="203"></a>
      </div>
      <br>
    <div>
       <a href="https://bae.rsl.ru/" class="transit02"><img alt="" title="" src="https://liart.ru/media/bae.GIF" border="0" width="203"></a>
      </div>
      <br>
    <div>
       <a href="https://www.ifla.org" class="transit02"><img alt="" title="" src="https://liart.ru/media/ifla-logo.gif" border="0" width="203"></a>
      </div>
      <br>
    <div>
       <a href="https://icom.museum/en/" class="transit02"><img alt="" title="" src="https://liart.ru/media/icom.PNG" border="0" width="203"></a>
      </div>
      <br>
    
          <!--div>
        <a href="https://moscowballetcompetition.com"><img alt="" title="" src="https://liart.ru/media/bt_3_11_2022_.jpg" border="0" width="203" height="101"/></a>
          </div>
          <br-->
        <!--br>
          <div>
        <a href="https://kids-forum.ru" target="_blank"><img src="https://emcdn.ru/5222/20220726_093822_409.jpg" border="0" alt="Детский культурный форум 2022" style="display: block;width:100%;max-width:270px" width="270"></a>
          </div-->
      </div>



<div style="float:left; margin-top:20px; margin-left:18px;">


 <!--div style=" padding-bottom:10px;">
   <a href="http://www.soldaty-pobedy.ru/"><img width="203px" src="https://liart.ru/media/files/img/04122015/arxiv.jpg"></a>
   
   
   
 </div-->
 


       
    </div>

    <div class="clear"></div>
  

    
    </div>`


    let leftAside = useRef()

    useEffect(() => {
        leftAside.current.innerHTML = htmlText
        return () => { }
    }, [])

    return (
        <div className={al.container}>
            <div ref={leftAside}></div>
        </div>
    )
}