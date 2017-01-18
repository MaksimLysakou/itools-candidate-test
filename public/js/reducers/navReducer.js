import { SET_ACTIVE } from '../constants/navigation'

const initialState = {
    links: [
        {
            label: "Главная",
            href: "/",
            active: true
        },
        {
            label: "Авторы",
            href: "/authors",
            active: false
        },
        {
            label: "Книги",
            href: "/books",
            active: false
        }
    ]
};

export default function navState(state = initialState, action) {
    switch (action.type) {
        case SET_ACTIVE:
            let result = Object.assign({}, state);

            result.links.forEach( (element) => {
                element.active = false;
            });

            result.links[action.payload].active = true;

            return result;

        default:
            return state;
    }
}