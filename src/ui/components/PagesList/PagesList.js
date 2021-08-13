import Link from 'next/link'

import data from '../../data'


function renderPageItems() {
    const pages = data.fetchPages().map((page, idx) => {

        const components = data.fetchComponentsBySlug(page.slug).map((comp, idy) => (
            <li key={idy}>
                <a href={`#${comp.title}`}>{comp.title}</a>
            </li>
        ));

        return (
            <div style={{marginBottom: '5rem'}} key={idx}>
                <a name={page.slug}/>
                <h2>{page.title}</h2>

                <h3>Components on this page</h3>
                <ul>
                    {components}
                </ul>

                <h3>URL</h3>
                {page.url
                    ? <Link href={'https://' + page.url}>
                        <a target="_blank"><small>{page.url}</small></a>
                    </Link>
                    : <small>Curate me</small>}
            </div>
        )
    })

    return pages
}

export function PagesList() {

    return (
        <>
            <h1>Pages</h1>
            <div>{renderPageItems()}</div>
        </>
    )
}
