window.onload = () => {
    let flag1 = 1;
    let flag2 = 1;
    let buttons = document.getElementsByTagName('button');
    let body = {
        "name": '2019级包匪',
        "id": 233
    }
    buttons[0].onclick = () => {
        if (flag1 === 1) {
            fetch('http://39.107.142.107:3000/mock/25/getText', {
                method: 'GET',
                headers: {
                    'content-type': 'application/json'
                },
            }).then((response) => {
                return response.json()

            }).then((myJson) => {
                console.log(myJson);
            })
            flag1 = 0;
        }
    }
    buttons[1].onclick = () => {
        if (flag2 === 1) {
            fetch('http://39.107.142.107:3000/mock/25/testPost', {
                method: 'POST',
                body: JSON.stringify(body),
                headers: {
                    'content-type': 'application/json'
                },
            }).then((response) => {
                return response.json()

            }).then((myJson) => {
                console.log(myJson);
            })

        }
        flag2 = 0;
    }

}