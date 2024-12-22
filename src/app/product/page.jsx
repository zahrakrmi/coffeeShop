
import Link from "next/link"


async function getData() {
    const res = await fetch('https://675efc0f1f7ad24269974044.mockapi.io/procuct')
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
export default async function Product({ params, searchParams }) {
    const data = await getData()
    return (
        <nav>
            <h1>main menu</h1>
            <ul>
                {data.map((val) => {
                    console.log(val.id);
                    let x = val.id+'-'+val.name
                    return(
                        <li><Link href={x} as={x}>{val.name}</Link></li>
                    )
                })}
            </ul>
        </nav>
    )
}