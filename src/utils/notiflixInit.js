import Notiflix from 'notiflix';

const notiflixInit = () => {
    Notiflix.Report.init({
        className: 'notiflix-report',
        width: '320px',
        backgroundColor: '#f8f8f8',
        borderRadius: '10px',
        rtl: false,
        zindex: 9999,
        backOverlay: true,
        backOverlayColor: 'rgba(0,0,0,0.5)',
        backOverlayClickToClose: true,
        svgSize: '80px',
        plainText: true,
        titleFontSize: '16px',
        titleMaxLength: 34,
        messageFontSize: '13px',
        messageMaxLength: 400,
        buttonFontSize: '14px',
        buttonMaxLength: 34,
        cssAnimation: true,
        cssAnimationDuration: 360,
        cssAnimationStyle: 'zoom',
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
        borderRadius: '10px',
        backOverlay: true,
        backOverlayColor: 'rgba(0,0,0,0.5)',
        rtl: false,
        cssAnimation: true,
        cssAnimationDuration: 300,
        cssAnimationStyle: 'zoom',
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
    Notiflix.Loading.init({
        className: 'notiflix-loading',
        zindex: 9999,
        backgroundColor: 'rgba(0,0,0,0.8)',
        rtl: false,
        cssAnimation: true,
        cssAnimationDuration: 400,
        clickToClose: false,
        customSvgUrl: null,
        customSvgCode: null,
        svgSize: '80px',
        svgColor: '#2835d5',
        messageID: 'NotiflixLoadingMessage',
        messageFontSize: '15px',
        messageMaxLength: 34,
        messageColor: '#dcdcdc',
    });
};

export default notiflixInit;
