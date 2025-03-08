import PropTypes from "prop-types";
import React from "react";

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

export default FeatureList;