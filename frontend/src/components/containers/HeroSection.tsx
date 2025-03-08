import Link from "next/link";
import PropTypes from "prop-types";
import React from "react";

const HeroSection = ({ t }) => (
    <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold mb-4">{t('hero.title')}</h1>
        <p className="text-lg mb-8">
            {t('hero.description')}
        </p>
        <div className="space-x-4">
            <Link href="/courses" className="btn btn-primary">
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

export default HeroSection;