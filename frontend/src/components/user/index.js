import actions from "../../state/user/actions";
import {connect} from "react-redux";
import Component from './component';

const mapStateToProps = state => {
    return {
        user: state.user.value.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getUser: () => {
            return dispatch(actions.fetchUser())
        }
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Component);
