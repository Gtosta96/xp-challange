import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { search } from 'app-redux/modules/search/search.reducer';

import Search from './Search';

class SearchContainer extends PureComponent {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    if (this.props.query) this.props.search(this.props.query);
  }

  onChange(event) {
    this.props.search(event.target.value);
    this.props.history.push(`/home/${this.props.query}`);
  }

  render() {
    return (
      <Search
        hint="Busque por artistas, álbuns ou músicas"
        placeholder="Comece a escrever..."
        query={this.props.query}
        onChange={this.onChange}
      />
    );
  }
}

SearchContainer.defaultProps = {
  query: null,
};

SearchContainer.propTypes = {
  search: PropTypes.func.isRequired,
  query: PropTypes.string,
};

const mapStateToProps = (state) => ({
  query: state.search.query,
});

const mapDispatchToProps = ({
  search,
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchContainer));
