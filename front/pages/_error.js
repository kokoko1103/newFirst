import Error from 'next/error';
import React from 'react';
import PropTypes from 'prop-types';

const MyError = (statusCode) => {
    console.log(statusCode);
    return (
        <div>
            <h1>{statusCode} 에러발생</h1>
        </div>
    )
};

MyError.propTypes = {
    statusCode : PropTypes.number
};

MyError.defaultProps = {
    statusCode : 400,
};

MyError.getInitialProps = async (context) => {
    const statusCode = context.res ? constext.res.statusCode : constext.err ? err.statusCode : null;
    return { statusCode };
};

export default MyError;