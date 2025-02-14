import React from 'react'
import { ClientOnly } from "./client";

export function generateStaticParams() {
    return [{ slug: [''] }]
}

export default function Page() {
    // eslint-disable-next-line react/no-children-prop
    return <ClientOnly children={undefined} />
}