import React from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from 'next-i18next';
import i18nConfig from "../../../next-i18next.config";
import Link from "next/link";

function RegistrationSelector() {
    const { t } = useTranslation('registrationSelector');
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold mb-8">{t('registrationSelector.title')}</h1>
                    <p className="mb-8 text-lg">{t('registrationSelector.description')}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <div className="card-body flex flex-col items-center">
                                <FaUserGraduate className="text-6xl text-primary mb-4" />
                                <h2 className="card-title">{t('registrationSelector.student.title')}</h2>
                                <p className="text-center text-gray-500 mb-4">{t('registrationSelector.student.description')}</p> {/* 使用翻譯 */}
                                <div className="card-actions justify-center">
                                    <Link className="btn btn-primary" href="/auth/studentSignup">
                                        {t('registrationSelector.student.button')}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <div className="card-body flex flex-col items-center">
                                <FaChalkboardTeacher className="text-6xl text-secondary mb-4" />
                                <h2 className="card-title">{t('registrationSelector.teacher.title')}</h2>
                                <p className="text-center text-gray-500 mb-4">{t('registrationSelector.teacher.description')}</p> {/* 使用翻譯 */}
                                <div className="card-actions justify-center">
                                    <Link className="btn btn-secondary" href="/auth/teacherSignup">
                                        {t('registrationSelector.teacher.button')}
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <div className="card-body flex flex-col items-center">
                                <FaUserFriends className="text-6xl text-accent mb-4" />
                                <h2 className="card-title">{t('registrationSelector.visitor.title')}</h2>
                                <p className="text-center text-gray-500 mb-4">{t('registrationSelector.visitor.description')}</p> {/* 使用翻譯 */}
                                <div className="card-actions justify-center">
                                    <Link className="btn btn-accent" href="/auth/visitorSignup">
                                        {t('registrationSelector.visitor.button')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['registrationSelector'], i18nConfig)),
    },
})

export default RegistrationSelector;