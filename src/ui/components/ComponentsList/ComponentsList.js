import Link from 'next/link'

import data from '../../data'

function renderComponentItems() {
    const components = data.fetchComponents().map((item, idx) => (
        <div key={idx}>
            <a name={item.title}>
                <h2>{item.title}</h2>
            </a>
            <p>{item.description}</p>
            <h3>Usage</h3>
            <ul>
                {item.onPages.map((slug, idx) => (
                    <li key={idx}>
                        <Link href={`#${slug}`}>
                            <a>{slug}</a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    ))

    return components
}

export function ComponentsList() {

    return (
        <>
            <h1>Components</h1>
            <div>{renderComponentItems()}</div>
        </>
    )
}
