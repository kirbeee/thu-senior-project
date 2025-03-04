import React from "react";
import Link from 'next/link';
import { useTranslation, withTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nConfig from '../../next-i18next.config';
import PropTypes from 'prop-types';

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

// -------------------- Homepage Components --------------------

// 1. Hero Section
const HeroSection = ({ t }) => (
    <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-lg mb-8">
            {t('hero.description')}
        </p>
        <div className="space-x-4">
            <Link href="/courses/Course" className="btn btn-primary">
                {t('hero.exploreCourses')}
            </Link>
            <Link href="/auth/RegistrationSelector" className="btn btn-secondary">
                {t('hero.signUpNow')}
            </Link>
        </div>
    </section>
);

HeroSection.propTypes = {
    t: PropTypes.func.isRequired,
};

// 2. Course Highlights / Featured Courses
const CourseHighlights = ({ t }) => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('featuredCourses')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Replace with actual course data, maybe from an API or static data */}
            <CourseCard
                title={t('courseTitles.introCS')}
                description={t('courseDescriptions.introCS')}
                viewDetailsText={t('courseCard.viewDetails')} // Pass translation for button text
            />
            <CourseCard
                title={t('courseTitles.calculus1')}
                description={t('courseDescriptions.calculus1')}
                viewDetailsText={t('courseCard.viewDetails')} // Pass translation for button text
            />
            <CourseCard
                title={t('courseTitles.linearAlgebra')}
                description={t('courseDescriptions.linearAlgebra')}
                viewDetailsText={t('courseCard.viewDetails')} // Pass translation for button text
            />
        </div>
    </section>
);

CourseHighlights.propTypes = {
    t: PropTypes.func.isRequired,
};

const CourseCard = ({ title, description, viewDetailsText }) => (
    <div className="card bg-base-100 shadow-md">
        <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p>{description}</p>
            <div className="card-actions justify-end">
                <Link href="/courses/Course" className="btn btn-sm btn-primary">{viewDetailsText}</Link>
            </div>
        </div>
    </div>
);

CourseCard.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    viewDetailsText: PropTypes.string.isRequired,
};


// 3. Key Features / Benefits
const FeatureList = ({ t }) => (
    <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">{t('keyFeatures')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureItem
                title={t('features.easySearch.title')}
                description={t('features.easySearch.description')}
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 10.5a2.25 2.25 0 1 1-4.5 0 2.25 0 0 1 4.5 0Z" /></svg>}
            />
            <FeatureItem
                title={t('features.personalizedSchedule.title')}
                description={t('features.personalizedSchedule.description')}
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-2.25M21 18.75v-2.25M6.75 21v-2.25M10.5 3v2.25m8.25 0v2.25M3 10.5H21M3 15.75H21M6.75 7.5H6.825m-3 0h.075" /></svg>}
            />
            <FeatureItem
                title={t('features.enrollmentManagement.title')}
                description={t('features.enrollmentManagement.description')}
                icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 inline-block mr-2"><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>}
            />
        </div>
    </section>
);

FeatureList.propTypes = {
    t: PropTypes.func.isRequired,
};

const FeatureItem = ({ title, description, icon }) => (
    <div className="flex flex-col items-center text-center p-6 bg-base-100 shadow-md rounded-lg">
        <div className="mb-4">{icon}</div>
        <h4 className="text-xl font-semibold mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
    </div>
);

FeatureItem.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};


// 4. Announcements Section
const AnnouncementSection = ({ t }) => {
    // Make sure announcementList exists and is an array
    const announcements = t('announcementList', { returnObjects: true }) || [];
    const isArray = Array.isArray(announcements);

    return (
        <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">{t('announcements')}</h2>
            <div className="card bg-base-100 shadow-md">
                <div className="card-body">
                    <ul className="list-disc list-inside">
                        {isArray
                            ? announcements.map((announcement, index) => (
                                <li key={index}>{announcement}</li>
                            ))
                            : <li>{t('announcementList')}</li> // Fallback if it's not an array
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
};
AnnouncementSection.propTypes = {
    t: PropTypes.func.isRequired,
};

// 5. Call to Action Section
const CallToActionSection = ({ t }) => (
    <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">{t('callToAction.ready')}</h2>
        <p className="text-lg mb-8">
            {t('callToAction.description')}
        </p>
        <Link href="/courses/Course" className="btn btn-lg btn-primary">
            {t('callToAction.browseCoursesNow')}
        </Link>
    </section>
);

CallToActionSection.propTypes = {
    t: PropTypes.func.isRequired,
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['common', 'header'], i18nConfig)), // Load namespaces: 'common', 'header', 'layout'
    },
});


export default withTranslation('common')(Index);