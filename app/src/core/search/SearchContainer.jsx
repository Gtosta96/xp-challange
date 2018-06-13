import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { search } from '../../redux/modules/search/search.reducer';

import Search from './Search';

class SearchContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.search(event.target.value);
  }

  render() {
    return (
      <Search
        hint="Busque por artistas, álbuns ou músicas"
        placeholder="Comece a escrever..."
        onChange={this.onChange}
      />
    );
  }
}

SearchContainer.defaultProps = {};

SearchContainer.propTypes = {
  search: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  state
);

const mapDispatchToProps = ({
  search,
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
