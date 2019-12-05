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
            //   console.log('get');
            const xml = new XMLHttpRequest();
            xml.open('GET', 'http://39.107.142.107:3000/mock/25/getText', true);
            xml.setRequestHeader('content-type','application/json');
            // xml.headers = {'content-type':'application/json'}
            xml.send();
            xml.onreadystatechange = () => {
                if (xml.readyState === 4) {
                    if (xml.status === 200) {
                        console.log(JSON.parse(xml.responseText));
                    } else {
                        console.log('请求失败');
                    }
                }
            }
        }
        flag1 = 0;
    }
    buttons[1].onclick = () => {
        if (flag2 === 1) {
            const xml = new XMLHttpRequest();
            xml.open('POST', 'http://39.107.142.107:3000/mock/25/testPost', true);
            xml.setRequestHeader('content-type', 'application/json');
            xml.send(JSON.stringify(body));
            xml.onreadystatechange = () => {
                if (xml.readyState === 4) {
                    if (xml.status === 200) {
                        console.log(JSON.parse(xml.responseText));
                    } else {
                        console.log('请求失败');
                    }
                }


            }


        }
        flag2 = 0;
    }
}