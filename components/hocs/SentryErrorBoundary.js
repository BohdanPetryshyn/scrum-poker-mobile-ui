import React from 'react';
import PropTypes from 'prop-types';
import * as Sentry from 'sentry-expo';

class SentryErrorBoundary extends React.Component {
  componentDidMount() {
    Sentry.init({
      dsn:
        'https://33e13bf663d847a4b34f96f430e70efd@o404858.ingest.sentry.io/5269578',
      enableInExpoDevelopment: true,
      debug: true,
    });
  }

  componentDidCatch(error, errorInfo) {
    Sentry.captureException(error, {
      extra: errorInfo,
    });
  }

  render() {
    const { children } = this.props;
    return children;
  }
}

SentryErrorBoundary.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
};

export default SentryErrorBoundary;
