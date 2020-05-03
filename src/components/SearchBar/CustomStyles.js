export const customStyles = {
    control: (base, state) => ({
        ...base,
        fontFamily: 'Myriad',
        fontSize: 14,
        border: state.isFocused ? 0 : 0,
        boxShadow: state.isFocused ? 0 : 0,
        cursor: 'text',
        borderRadius: 0,
        backgroundColor: '#404859'
    }),

    option: (styles, { isFocused }) => {
        return {
            ...styles,
            cursor: 'pointer',
            backgroundColor: isFocused ? '#404859' : '#404859',
            color: isFocused ? 'white' : 'black',
            fontSize: 14,
        }
    },

    input: styles => ({
        ...styles,
        color: 'white',
        fontFamily: 'Myriad, Serif',
    }),

    menu: styles => ({
        ...styles,
        marginTop: 0,
        boxShadow: 'none',
        borderRadius: 0,
    }),

    singleValue: styles => ({
        ...styles,
        color: 'white',
    }),
}