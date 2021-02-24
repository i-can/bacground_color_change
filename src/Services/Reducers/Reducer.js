import {INCREMENT_COUNT, DECEREMENT_COUNT} from '../Constant'



export default function counterItem(state = 0 , Action) {
    
    switch (Action.type) {
        case INCREMENT_COUNT:
            return state + 1
            
        case DECEREMENT_COUNT:
            return state - 1
          
    
        default:
            return state
    }
    
}