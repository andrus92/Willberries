const getGoods = function () {
    const links = document.querySelectorAll('.navigation-link');

    const getData = () => {
        fetch('/db/db.json')
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                console.log(data);
            })
    }

    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            getData();
        })
    })

}

getGoods();