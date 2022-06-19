import { createGlobalStyle } from "styled-components";
import themeInterface from "../interfaces/themeInterface";

export const theme: themeInterface = {
    backgroundColor: '#171718',
    textColorLight: '#A0A0A1',
    primaryColor: "#5C62EC",
    hoverColor: "#3C40AE",
    textColorDark: '#FFFFFF',
    linkColor: '#85BFD1',
    borderColor: '#26292D',
    cardBackgroundColor: "#1C1E22"
}


export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'DM Sans', sans-serif;;
    }

    body {
        background-color: ${({theme}: any) => theme.backgroundColor};
    }

    h1, h2, h3, h4 {
        color: ${({theme}: any) => theme.textColorDark};
    }

    span, p, li, input, textarea {
        color: ${({theme}: any) => theme.textColorLight};
    } 

    button {
        color: ${({theme}) => theme.textColorDark};
        background-color: ${({theme}) => theme.primaryColor};
        font-size: 20px;
    }

    .swiper-button-next,.swiper-button-prev {
        color: transparent !important;
    }
    
`