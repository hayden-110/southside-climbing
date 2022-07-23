import Cookies from './node_modules/js-cookie/dist/js.cookie.js'

const banner = document.querySelector('.cookie-pop');
const acceptAll = document.querySelectorAll('#acceptAll');
const openSettings = document.querySelectorAll('#open-cookies');

const settings = document.querySelector('.cookie-settings');
const settingsSave = document.querySelector('.settings-save');
const options = document.querySelectorAll('.checkbox');
const checkboxes = document.querySelectorAll('.checkbox')

document.addEventListener('DOMContentLoaded', () => {
    if(!Cookies.get('southsideEssential')){
        Cookies.set('southsideEssential', true, { expires: 28, path: '', sameSite: 'strict'});
        banner.classList.remove('none');
    }

    // console.log(Cookies.get('southsideClimbing'))
    
    checkboxes.forEach(x => {
        if(Cookies.get(x.id)){
            x.checked == true;
        }
    })
})

function acceptAllCookies(){
    Cookies.set('southsideThirdParty', true, { expires: 28, path: '', sameSite: 'strict'});
    Cookies.set('southsideMarket', true, { expires: 28, path: '', sameSite: 'lax'});
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-THCW64VJYF');
      
}

settingsSave.addEventListener('click', () => {
    checkboxes.forEach(box => {
        if(box.id == 'southsideAnalytics' && box.checked){
            window.dataLayer = window.dataLayer || [];
            function gtag() { dataLayer.push(arguments); }
            gtag('js', new Date());
            gtag('config', 'G-THCW64VJYF');
        }
        else {
        Cookies.set(box.id, box.checked, { expires: 28, sameSite: box.id === 'southsideMarket' ?  'lax' : 'strict'})
        }
    })
    settings.classList.add('none');

})

openSettings.forEach(x => {
    x.addEventListener('click', () => {
        banner.classList.add('none');
        settings.classList.remove('none');
    })
})

acceptAll.forEach(button => {
    button.addEventListener('click', x => {
        const name = button.name
        document.querySelector(`.${name}`).classList.add('none');
        acceptAllCookies();
    })
})

