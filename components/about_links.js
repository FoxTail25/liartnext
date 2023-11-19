import Link from "next/link";

export default function AllLinks({hreff, name}) {


    return (
    <li>
        <Link href={hreff}>
            {name}
       </Link>
    </li>
    )
}