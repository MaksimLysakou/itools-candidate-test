import { SET_ACTIVE } from '../constants/navigation'

export function setActive(tab) {

    return {
        type: SET_ACTIVE,
        payload: tab
    }
}