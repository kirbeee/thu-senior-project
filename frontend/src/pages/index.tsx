import React from "react";
import { useTranslation, withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nConfig from '../../next-i18next.config';
import HeroSection from "@components/containers/HeroSection";
import CourseHighlights from "@components/containers/CourseHighlights";
import AnnouncementSection from "@components/containers/AnnouncementSection";
import FeatureList from "@components/containers/FeatureList";
import CallToActionSection from "@components/containers/CallToActionSection";

function Index() {
    const { t } = useTranslation('common');

    return (
        <div className="container mx-auto px-4 py-8">
            <HeroSection t={t} />
            <CourseHighlights t={t} />
            <FeatureList t={t} />
            <AnnouncementSection t={t} />
            <CallToActionSection t={t} />
        </div>
    );
}

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'header'], i18nConfig)), // Load namespaces: 'common', 'header', 'layout'
    },
});


export default withTranslation('common')(Index);