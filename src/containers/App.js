import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { firstAction } from '../actions'
import App from '../components/App'
import { getFirstStateExample } from '../selectors'

const mapStateToProps = state => ({
  firstStateExample: getFirstStateExample(state)
})

export default withRouter(connect(mapStateToProps, { firstAction })(App))