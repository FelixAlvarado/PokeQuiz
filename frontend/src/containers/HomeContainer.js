import { connect } from 'react-redux'
import { getQuizes } from '../actions/quizes'
import Home from '../components/Home'


const mapStateToProps = state => ({
  quizes: state.quizes
})

const mapDispatchToProps = dispatch => ({
  getQuizes: () => dispatch(getQuizes())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)