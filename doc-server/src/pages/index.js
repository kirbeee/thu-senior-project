import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title} 開發者文檔
                </Heading>
                <p className="hero__subtitle">歡迎來到東海學生社群論壇的開發者文檔！</p>
            </div>
        </header>
    );
}

function HomepageContent() {
    return (
        <section className="container margin-top--lg margin-bottom--lg">
            <div className="row">
                <div className="col col--6 col--offset-3">
                    <Heading as="h2" className="text--center">
                        開始探索
                    </Heading>
                    <p className="text--center padding-bottom--md">
                        本文件旨在幫助開發者了解和貢獻於東海學生社群論壇的開發。
                        在這裡，你可以找到關於系統架構、API 使用、開發指南以及更多資訊。
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col col--3">
                    <div className="card shadow--md">
                        <div className="card__header">
                            <Heading as="h3" className="text--center card__title">
                                <Link to="/docs/getting-started">
                                    快速開始
                                </Link>
                            </Heading>
                        </div>
                        <div className="card__body">
                            <p className="text--center">
                                設定你的開發環境，並快速開始為論壇貢獻程式碼。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col--3">
                    <div className="card shadow--md">
                        <div className="card__header">
                            <Heading as="h3" className="text--center card__title">
                                <Link to="/docs/architecture">
                                    系統架構
                                </Link>
                            </Heading>
                        </div>
                        <div className="card__body">
                            <p className="text--center">
                                深入了解論壇的系統架構和設計理念。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col--3">
                    <div className="card shadow--md">
                        <div className="card__header">
                            <Heading as="h3" className="text--center card__title">
                                <Link to="/docs/api-reference">
                                    API 參考
                                </Link>
                            </Heading>
                        </div>
                        <div className="card__body">
                            <p className="text--center">
                                查看論壇提供的 API 介面及使用說明。
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col col--3">
                    <div className="card shadow--md">
                        <div className="card__header">
                            <Heading as="h3" className="text--center card__title">
                                <Link to="/docs/contribution-guide">
                                    貢獻指南
                                </Link>
                            </Heading>
                        </div>
                        <div className="card__body">
                            <p className="text--center">
                                學習如何參與專案，提交程式碼和建議。
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={`開發者文檔 - ${siteConfig.title}`}
            description="東海學生社群論壇 - 開發者文檔首頁">
            <HomepageHeader />
            <main>
                <HomepageContent />
            </main>
        </Layout>
    );
}