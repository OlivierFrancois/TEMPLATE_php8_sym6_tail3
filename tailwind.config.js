module.exports = {
    mode: "jit",
    content: [
        './templates/**/*.html.twig',
        './templates/*.html.twig',
    ],
    theme: {
        extend: {
            colors : {
                mariboo:{
                    primary: '#ffbf14',
                    dark: '#e2a90c',
                    darker: '#bf8302',
                },
                livounet:{
                    primary: '#0f718c',
                    dark: '#0c5367',
                    darker: '#083a48',
                },
                theme:{
                    light: '#EDEFF5',
                    dark: '#25262D',
                },
                header: '#333344',
                light: '#f1f1f1',
            },
            height: {
                header: '5rem',
                headermin: '45px',
            },
            transitionProperty: {
                fweight: "font-weight"
            },
            fontFamily: {
                logo: ["Gill Sans MT"]
            }
        }
    },
    variants: {
        extend: {
            fontSize: ['hover'],
            fontWeight: ['hover'],
            ringWidth: ['hover'],
        }
    },
    plugins: []
}