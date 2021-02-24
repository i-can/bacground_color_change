import Counter from '../Components/Counter'
import { connect } from 'react-redux'
import {increment,decerement} from '../Services/Actions/Action'



const mapStateToProps = (state) => ({
    Data:state
})


const mapDispatchToProps = (dispatch) => ({
    incrmentHandller: () => dispatch(increment()),
    decrementHandler: () => dispatch(decerement())
    
})


export default connect(mapStateToProps,mapDispatchToProps)(Counter)