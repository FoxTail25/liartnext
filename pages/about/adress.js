import AboutHead from "../../components/abuot_head";
import Layout from "../../components/layout/layout";

export default function Adress() {
    return <Layout>
        <AboutHead />
      
        <div className="content">
            <p style={{ textAlign: "center" }} className="transit02">
                <span style={{ fontSize: "large" }} className="transit02">
                    Адрес и время работы
                </span>
            </p>
            <p style={{ textAlign: "center" }} className="transit02">&nbsp;
            </p>
            <p style={{ textAlign: "center" }} className="transit02">
                <span style={{ fontSize: "medium", color: "#800000" }} className="transit02">
                    С
                </span>
                <span style={{ fontSize: "medium", color: "#800000" }} className="transit02">
                    1 сентября
                </span>
                <span style={{ fontSize: "medium", color: "#800000" }} className="transit02">
                    &nbsp;2023 года
                </span>
            </p>
            <p style={{ textAlign: "center" }} className="transit02">
                <span style={{ fontSize: "medium", color: "#800000" }} className="transit02">
                    библиотечное&nbsp;обслуживание в читальном зале&nbsp;по новому адресу:&nbsp;
                </span>
            </p>
             <p style={{ textAlign: "center" }} className="transit02">
                <span style={{ fontSize: "medium", color: "#ff0000" }} className="transit02">Николоямская д.1, 4 этаж&nbsp;
                </span>
            </p>
            <p style={{ textAlign: "center" }} className="transit02">
                <span style={{fontSize: "medium", color: "#000080"}} className="transit02">производится по графику:&nbsp;
                </span>
            </p>
            <p style={{ textAlign: "center" }} className="transit02">
                <span style={{fontSize: "medium", color: "#000080"}} className="transit02">в рабочие дни с 11:00 до 20:00,&nbsp;
                </span>
            </p>
            <p style={{ textAlign: "center" }} className="transit02">
                <span style={{fontSize: "medium", color: "#000080"}} className="transit02">
                    в субботу с 11:00 до 19:00&nbsp;
                </span>
            </p>
            <p style={{ textAlign: "center" }} className="transit02">
                <span style={{fontSize: "medium", color: "#000080"}} className="transit02">
                    выходной – воскресенье.&nbsp;
                </span>
            </p>
            <p style={{textAlign: "center"}} className="transit02">
                <span style={{fontSize: "medium", color: "#800000"}} className="transit02">Санитарный день – каждый последний четверг месяца.&nbsp;
                </span>
            </p>
            <hr />
            <p style={{textAlign: "center"}} className="transit02">
                <span style={{color: "#000080", fontSize: "medium"}} className="transit02">
                    Отдел абонемента ( ул. Петровские линии, дом 1)
                </span>
            </p>
             <p style={{textAlign: "center"}} className="transit02">
                <span style={{color: "#000080", fontSize: "medium"}} className="transit02">
                    производит запись читателей и библиотечное обслуживание
                </span>
            </p>
            <p style={{textAlign: "center"}} className="transit02">
                <span style={{color: "#000080", fontSize: "medium"}} className="transit02">по следующему графику:
                </span>
            </p>
           <p style={{textAlign: "center"}} className="transit02">
                <span style={{color: "#000080", fontSize: "medium"}}  className="transit02">
                    в рабочие дни с 11:00 до 20:00,
                </span>
            </p>
           <p style={{ textAlign: "center" }} className="transit02">
                <span style={{ fontSize: "medium", color: "#000080" }} className="transit02">в&nbsp;
                    <span className="bx-messenger-ajax bx-messenger-ajax-black transit02" data-entity="date" data-messageid="1652809" data-ts="1693670400">
                        субботу с 11:00 до 19:00
                    </span>
                </span>
            </p>
            <p style={{ textAlign: "center" }} className="transit02">
                <span style={{ fontSize: "medium", color: "#000080" }} className="transit02">
                    выходной –&nbsp;
                    <span className="bx-messenger-ajax bx-messenger-ajax-black transit02" data-entity="date" data-messageid="1652809" data-ts="1693753200">
                        воскресенье
                    </span>
                    .
                </span>
                <br />
                <br />
                <span style={{ color: "#800000" }} className="transit02">
                    Санитарный день – каждый последний&nbsp;
                    <span className="bx-messenger-ajax bx-messenger-ajax-black transit02" data-entity="date" data-messageid="1652809" data-ts="1694098800">
                        четверг
                    </span>
                    &nbsp;месяца.
                </span>
                &nbsp;
            </p>
            <hr />
            {/* <p style={{ textAlign: "center" }} className="transit02">-------------------------------------------------------------------------------------</p> */}
            <p className="transit02">
                1) Библиотечное обслуживание в читальном зале:
            </p>
            <p className="transit02">
                <span className="transit02">
                    109240, г. Москва, ул. Николоямская, д. 1, 4 этаж&nbsp;
                </span>
            </p>
            <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3A6251638205902cda0cb8eeb1012b195cfa1c2669e183294e489ad2bb151aec65"   width="90%" height="400px" style={{ display: "block" ,margin: "0 auto"}}>

            </iframe>
            {/* <p className="transit02">
                ----------------------------------------------------------------------
            </p> */}
            <p className="transit02">
                <strong>
                    2) Абонемент:
                </strong>
            </p>
            <p className="transit02">
                127051, Россия, Москва, Петровские линии, д.1, (м. "Кузнецкий мост", м. "Трубная")
                <span style={{ textAlign: "center" }} className="transit02">
                    &nbsp;
                </span>
            </p>
            {/* <div style={{ width: "470px", textAlign: "center" }}>
                <a style={{ color: "#1a3dc1", font: "13px Arial, Helvetica, sans-serif" }} href="http://api.yandex.ru/maps/tools/constructor/index.xml" target="_blank" className="transit02">
                    Создано с помощью инструментов Яндекс.Карт
                </a>
            </div> */}
            <p className="transit02">
                {/* <script type="text/javascript">// <![CDATA[
                                function fid_135175511615182434593(ymaps) {var map = new ymaps.Map("ymaps-map-id_135175511615182434593", {center: [37.6162208578563, 55.76081632846982], zoom: 16, type: "yandex#map"});map.controls.add("zoomControl").add("mapTools").add(new ymaps.control.TypeSelector(["yandex#map", "yandex#satellite", "yandex#hybrid", "yandex#publicMap"]));map.geoObjects.add(new ymaps.Placemark([37.615441229211775, 55.76072558666135], {balloonContent: "Российская Государственная библиотека искусств (РГБИ)<br />ул. Большая Дмитровка, 8/1 (м. Охотный ряд, 1-й вагон из центра)<br />www.liart.ru<br />+7(495) 692-48-92, +7(495) 692-06-53", iconContent: "1"}, {preset: "twirl#lightblueIcon"}));};
// ]]></script> */}
                <iframe src="https://yandex.ru/map-widget/v1/?lang=ru_RU&amp;scroll=true&amp;um=constructor%3Aee3108232a0b18f5898ad89387c2021a5966e7eb8907b0b6d0af9bfc58903ddd"  width="90%" height="400px" style={{ display: "block",margin: "0 auto" }}>

                </iframe>
            </p>
            {/* <!-- Этот блок кода нужно вставить в ту часть страницы, где вы хотите разместить карту (конец) --> */}
            {/* <p style={{ textAlign: "center" }} className="transit02">-------------------------------------------------------------------------------------</p>*/}
            <hr />
            <ul className="subpages">

            </ul> 
        </div>
    </Layout>
}