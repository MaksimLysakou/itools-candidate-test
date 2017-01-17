const initialState = {
    links: [
        {
            label: "Главная",
            href: "/",
            active: true
        },
        {
            label: "Авторы",
            href: "/#",
            active: false
        },
        {
            label: "Книги",
            href: "/#",
            active: false
        }
    ]
};

export default function navState(state = initialState) {
    return state
}