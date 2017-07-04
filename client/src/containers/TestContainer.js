import { connect } from 'react-redux';
import { testAction, testAjaxAction } from '../actions';
import TestComponent from '../components/TestComponent';

const mapStateToProps = (state, ownProps) => {
  console.log('Mapping to props', state);
  return {
    text: state.text
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    testAction: () => {
      dispatch(testAction('New kuko'))
    },
    testAction2: () => {
      dispatch(testAction('New kuko 2'))
    },
    testAjaxAction: () => {
      dispatch(testAjaxAction())
    }
  }
}

const TestContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(TestComponent)

export default TestContainer