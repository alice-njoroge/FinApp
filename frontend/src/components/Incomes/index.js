import Component from './component';
import {connect} from 'react-redux';
import actions from '../../state/incomes/actions'

const mapStateToProps = state => {
    return {
        incomes: state.incomes.value.incomes,
        loading: state.incomes.value.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getIncomes: () => dispatch(actions.fetchIncomes())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)
(Component)
