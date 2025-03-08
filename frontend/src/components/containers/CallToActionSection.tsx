import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const CallToActionSection = ({ t }) => (
    <section className="text-center mb-12">
        <h2 className="text-2xl font-bold mb-4">{t('callToAction.ready')}</h2>
        <p className="text-lg mb-8">
            {t('callToAction.description')}
        </p>
        <Link href="/courses" className="btn btn-lg btn-primary">
            {t('callToAction.browseCoursesNow')}
        </Link>
    </section>
);

CallToActionSection.propTypes = {
    t: PropTypes.func.isRequired,
};

export default CallToActionSection;