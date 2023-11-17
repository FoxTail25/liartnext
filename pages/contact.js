import Head from "next/head";
import Layout from "../components/layout/layout";
import c from '../styles/pages/contact.module.scss'

export default function Contact() {

    let telMaildata = [
        {
            name: ['Директор', ' Колганова Ада Ароновна'],
            tel: '+7 (495) 692-65-20',
            mail: 'ada@liart.ru'
        },
        {
            name: ['Секретарь', 'Медведева Елена Евгеньевна'],
            tel: '+7 (495) 692-06-53',
            mail: 'bisk@liart.ru'
        },
        {
            name: ['Заместитель директора по информатизации', 'Шейнин Максим Юлианович'],
            tel: '+7 (495) 692-51-59',
            mail: 'shemax@liart.ru'
        },
        {
            name: ['Заместитель директора по экономической деятельности', 'Петрова Надежда Аквилоновна'],
            tel: '+7 (495) 692-86-59',
            mail: 'buh@liart.ru'
        },
        {
            name: ['Главный бухгалтер', 'Суслова Екатерина Вячеславовн'],
            tel: '+7 (495) 692-86-59',
            mail: 'suslova@liart.ru'
        },
    ]

    function getContactTable(arr) {
        let tableData = arr.map(e => <tr>
            <td>{e.name[0]} <br /> {e.name[1]}</td>
            <td>{e.tel}</td>
            <td>
                <a href={'mailto:'+ e.mail}>
                    {e.mail}
                </a>
            </td>
        </tr>)
        return <table>
            <thead>
                <tr>
                    <th>Подразделение, ответственный</th>
                    <th>телефон</th>
                    <th>E-mail</th>
                </tr>
                {tableData}
            </thead>
        </table>
    }


    return <>
        <Head>
            <title>Контакты РГБИ</title>
        </Head>
        <Layout>
            <div className={c.contacts}>

                <p>
                    Контакты
                </p>

                <p>
                    <span>
                        Справочно-информационное обслуживание:
                    </span>
                    <a href="tel:+7 916 5837339">
                        +7 916 5837339, &thinsp;
                    </a>
                    <a href="mailto:cio@liart.ru">
                        cio@liart.ru
                    </a>
                </p>

                <p>
                    В связи с переездом библиотеки городские номера телефонов, начинающиеся с 495 могут быть временно не доступны.
                </p>

                {getContactTable(telMaildata)}

            </div>
        </Layout>
    </>
}