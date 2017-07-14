import { connect } from 'react-redux'
import Header from './Header'

const mapStateToProps = (state, ownProps) => {
    return {
        hoverName: state.hoverName,
        etag: state.etag
    };
};

const HeaderContainer = connect(
  mapStateToProps
)(Header)

export default HeaderContainer
