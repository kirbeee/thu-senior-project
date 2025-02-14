import React from "react"; // Import React here
import Layout from '../components/Layout'
import PropTypes from 'prop-types'; // Import PropTypes

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

export default MyApp;