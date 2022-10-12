import Notiflix from 'notiflix';

const notiflixInit = () => {
    Notiflix.Report.init({
        className: 'notiflix-report',
        width: '320px',
        backgroundColor: '#f8f8f8',
        borderRadius: '25px',
        rtl: false,
        zindex: 9999,
        backOverlay: true,
        backOverlayColor: 'rgba(0,0,0,0.5)',
        backOverlayClickToClose: false,
        fontFamily: 'Quicksand',
        svgSize: '110px',
        plainText: true,
        titleFontSize: '16px',
        titleMaxLength: 34,
        messageFontSize: '13px',
        messageMaxLength: 400,
        buttonFontSize: '14px',
        buttonMaxLength: 34,
        cssAnimation: true,
        cssAnimationDuration: 360,
        cssAnimationStyle: 'fade',
        success: {
            svgColor: '#32c682',
            titleColor: '#1e1e1e',
            messageColor: '#242424',
            buttonBackground: '#32c682',
            buttonColor: '#fff',
            backOverlayColor: 'rgba(0,0,0,0.5)',
        },
        failure: {
            svgColor: '#ff5549',
            titleColor: '#1e1e1e',
            messageColor: '#242424',
            buttonBackground: '#ff5549',
            buttonColor: '#fff',
            backOverlayColor: 'rgba(0,0,0,0.5)',
        },
        warning: {
            svgColor: '#eebf31',
            titleColor: '#1e1e1e',
            messageColor: '#242424',
            buttonBackground: '#eebf31',
            buttonColor: '#fff',
            backOverlayColor: 'rgba(0,0,0,0.5)',
        },
        info: {
            svgColor: '#26c0d3',
            titleColor: '#1e1e1e',
            messageColor: '#242424',
            buttonBackground: '#26c0d3',
            buttonColor: '#fff',
            backOverlayColor: 'rgba(0,0,0,0.5)',
        },
    });
    Notiflix.Confirm.init({
        className: 'notiflix-confirm',
        width: '300px',
        zindex: 9999,
        position: 'center',
        distance: '10px',
        backgroundColor: '#f8f8f8',
        borderRadius: '25px',
        backOverlay: true,
        backOverlayColor: 'rgba(0,0,0,0.5)',
        rtl: false,
        fontFamily: 'Quicksand',
        cssAnimation: true,
        cssAnimationDuration: 300,
        cssAnimationStyle: 'fade',
        plainText: true,
        titleColor: '#2835d5',
        titleFontSize: '16px',
        titleMaxLength: 34,
        messageColor: '#1e1e1e',
        messageFontSize: '14px',
        messageMaxLength: 110,
        buttonsFontSize: '15px',
        buttonsMaxLength: 34,
        okButtonColor: '#f8f8f8',
        okButtonBackground: '#2835d5',
        cancelButtonColor: '#f8f8f8',
        cancelButtonBackground: '#a9a9a9',
    });
};

export default notiflixInit;
