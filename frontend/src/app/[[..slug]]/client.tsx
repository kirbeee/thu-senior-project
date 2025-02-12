// client.tsx
import dynamic from 'next/dynamic'
import Layout from "../../components/Layout";

const App = dynamic(() => import('../../components/Layout'), { ssr: false });

interface ClientOnlyProps {
    children: React.ReactNode;  // 指定 children 屬性類型
}

export function ClientOnly({ children }: ClientOnlyProps) {
    return (
        <div>
            <Layout children={children} />
        </div>
    );
}
