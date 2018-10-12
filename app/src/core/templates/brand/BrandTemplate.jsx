import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Spotify from 'app-core/shared/spotify/Spotify';

const BrandTemplate = (props) => (
  <Fragment>
    <Spotify />
    {props.children}
  </Fragment>
);

BrandTemplate.defaultProps = {};
BrandTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default BrandTemplate;
