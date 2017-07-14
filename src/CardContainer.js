import { connect } from 'react-redux'
import { setHoverName } from './actions'
import Card from './Card'

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.model.name === state.hoverName
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onMouseOver: () => {
        let name = ownProps.model.name;
        if (ownProps.type === 'series') {
            name = ownProps.model.title;
        }
        dispatch(setHoverName(name))
    }
})

const CardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Card)

export default CardContainer
