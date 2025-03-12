import React from "react";
import { useTranslation } from '../../i18n';
import HeroSection from "@components/containers/HeroSection";
import CourseHighlights from "@components/containers/CourseHighlights";
import AnnouncementSection from "@components/containers/AnnouncementSection";
import FeatureList from "@components/containers/FeatureList";
import CallToActionSection from "@components/containers/CallToActionSection";


async function Index({params: {lng}}) {
    const { t } = await useTranslation(lng,'common');

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

export default Index;