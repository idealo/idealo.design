import React from 'react'
import dynamic from 'next/dynamic'

const Preview = dynamic(
    // () => import('./StorybookPreview'),
    // () => import('./StorybookPreview_slim'),
    () => import('./StorybookPreview'),
    {ssr: false}
)


export {Preview}

