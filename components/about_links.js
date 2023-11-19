import Link from "next/link";

export default function AboutLinks() {

    return <ul class="subpages">

        <li><Link href="/about/adress/">Адрес и время работы РГБИ</Link></li>

        <li><Link href="/about/zapis/">Запись читателей</Link></li>

        <li><Link href="/about/info/">Общая информация</Link></li>

        <li><Link href="/about/history/">Из истории РГБИ</Link></li>

        <li><Link href="/about/otdels/">Структура библиотеки</Link></li>

        <li><Link href="/about/req/">Реквизиты библиотеки</Link></li>

        <li><Link href="/about/normdocs/">Нормативные документы</Link></li>

        <li><Link href="/about/popsovet/">Попечительский совет</Link></li>

        <li><Link href="/about/korrupt/">Противодействие коррупции</Link></li>

    </ul>
}