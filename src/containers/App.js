import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { firstAction } from '../actions'
import App from '../components/App'

const mapStateToProps = state => ({})

export default withRouter(connect(mapStateToProps, { firstAction })(App))