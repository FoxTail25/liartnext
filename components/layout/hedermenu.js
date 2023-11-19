
import MenuItem from "./menu_item";
import h from '../../styles/layout/headrmenu.module.scss'

export default function HederMenu() {

    let menu = [
        {
            nameHref: ["НОВОСТИ",'/'],
            subMenu: null
        },
        {
            nameHref: ["О БИБЛИОТЕКЕ",'/about'],
            subMenu: null
        },
        {
            nameHref: ["УСЛУГИ",'/'],
            subMenu: null
        },
        {
            nameHref: ["ФОНДЫ",'/'],
            subMenu: null
        },
        {
            nameHref: ["КАТАЛОГИ",'/'],
            subMenu: null
        },
        {
            nameHref: ["ЭЛЕКТРОННЫЕ РЕСУРСЫ",'/'],
            subMenu: null
        },
        {
            nameHref: ["КОНТАКТЫ", '/contact'],
            subMenu: null
        },
    ]

    let menuItem = menu.map( (el, ind) => <MenuItem key={ind}{...el}/>)

    return (
        <nav className={h.nav}>
            {menuItem}
        </nav>
    )
}