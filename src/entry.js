import component from './component';

require('./style.css');

setTimeout(function () {
    document.getElementsByTagName("div")[0].innerHTML = 'Hacked by javascript skdfhdsk ';
    document.body.appendChild(component());
}, 1000);