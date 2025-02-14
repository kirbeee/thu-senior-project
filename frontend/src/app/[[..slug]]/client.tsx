// client.tsx
import React from 'react' // Import React here
import Layout from "../../components/Layout";


interface ClientOnlyProps {
    children: React.ReactNode;  // 指定 children 屬性類型
}

export function ClientOnly({ children }: ClientOnlyProps) {
    return (
        <div>
            <Layout >{children}</Layout> {/* Nest children instead of passing as prop */}
        </div>
    );
}