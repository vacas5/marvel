import { connect } from 'react-redux'
import { setHoverName, setEtag } from './actions'
import ContentList from './ContentList'

const mapDispatchToProps = (dispatch, ownProps) => ({
    onMount: () => {
        dispatch(setHoverName(''))
    },
    onFetchSuccess: (etag) => {
        dispatch(setEtag(etag))
    }
})

const ContentListContainer = connect(
  null,
  mapDispatchToProps
)(ContentList)

export default ContentListContainer
