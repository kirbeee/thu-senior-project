import PropTypes from "prop-types";
import React from "react";

const AnnouncementSection = ({ t }) => {
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

export default AnnouncementSection;
