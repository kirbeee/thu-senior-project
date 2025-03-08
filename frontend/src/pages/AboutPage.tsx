import React from "react";
import { useTranslation,withTranslation } from 'next-i18next';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import i18nConfig from "../../next-i18next.config";

function AboutPage() {
    const { t } = useTranslation('translation');

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="text-center mb-10">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">{t('aboutPageTitle')}</h1> {/* 字體加大、顏色更深 */}
                <p className="text-lg text-gray-700">{t('aboutPageSubtitle')}</p> {/* 副標題字體略加大、顏色調整 */}
            </div>

            <section className="mb-12">
                <div className="rounded-lg shadow-md p-5 sm:p-7 bg-gray-50 border border-gray-200"> {/* 邊框線條更細緻 */}
                    <div className="flex items-center mb-3"> {/* 縮小標題下方間距 */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 text-indigo-500 mr-2"> {/* 圖示尺寸略微縮小 */}
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{t('problemStatementTitle')}</h2> {/* 標題字重調整為 semibold */}
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg"> {/* 內文字體略微放大 */}
                        {t('problemStatement')}
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <div className="rounded-lg shadow-md p-5 sm:p-7 bg-green-50 border border-gray-200"> {/* 樣式調整同上 */}
                    <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 text-green-500 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{t('motivationTitle')}</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        {t('motivationText')}
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <div className="rounded-lg shadow-md p-5 sm:p-7 bg-yellow-50 border border-gray-200"> {/* 樣式調整同上 */}
                    <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 text-yellow-500 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                        </svg>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{t('objectiveTitle')}</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        {t('objectiveText')}
                    </p>
                </div>
            </section>

            <section className="mb-12">
                <div className="rounded-lg shadow-md p-5 sm:p-7 bg-blue-50 border border-gray-200"> {/* 樣式調整同上 */}
                    <div className="flex items-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-5 sm:size-6 text-blue-500 mr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">{t('targetUsersTitle')}</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        {t('targetUsersText')}
                    </p>
                </div>
            </section>
        </div>
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['translation'], i18nConfig)), // 載入所有 namespaces
    },
})

export default withTranslation('translation')(AboutPage);