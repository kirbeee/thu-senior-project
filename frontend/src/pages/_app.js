import React from "react"; // Import React here
import Layout from '../components/Layout'
import PropTypes from 'prop-types'; // Import PropTypes
import { appWithTranslation } from "next-i18next";
import i18nConfig from '../../next-i18next.config';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    )
}

MyApp.propTypes = { // Add propTypes for MyApp
    Component: PropTypes.elementType.isRequired, // Component should be a React component type and is required
    pageProps: PropTypes.object, // pageProps is an object and is optional (no isRequired)
};

export default appWithTranslation(MyApp, i18nConfig); // Export with i18n config