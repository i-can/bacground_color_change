
import {INCREMENT_COUNT,DECEREMENT_COUNT} from '../Constant'



export const increment = () => {
    return {
        type: INCREMENT_COUNT
        
    }
}

export const decerement = () => {
    return {
        type: DECEREMENT_COUNT
        
    }
}