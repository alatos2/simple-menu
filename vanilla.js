const menuItems = [
    ['Home', '/index.html'],
    ['About Us', '/about.html'],
    ['Mission', '/mission.html'],
    ['Vision', '/vision.html'],
    ['Contact Us', '/contact.html']
];

const mainMenu = document.getElementById('main');

function showMenu() {
    let li;
    for (const [menu, url] of menuItems) {
        li = document.createElement('li');
        li.innerHTML = `<a href=${url}>${menu}</a>`;
        mainMenu.appendChild(li);
    }
    const getUrl = document.URL;
    const getHost = window.location.host;
    const otherPart =getUrl.toString().split(getHost)[1];

    let getLI = document.getElementsByTagName('li');

    if (otherPart == '/') {
        getLI[0].classList.add('active');
    } else {
        switch (otherPart) {
            case '/index.html':
                getLI[0].classList.add('active');
                break;
            case '/about.html':
                getLI[1].classList.add('active');
                break;
            case '/mission.html':
                getLI[2].classList.add('active');
                break;
            case '/vision.html':
                getLI[3].classList.add('active');
                break;
        }
    }

}

showMenu();

// console.log(otherPart)