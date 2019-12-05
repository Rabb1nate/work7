// const ajax = function(url) {
//     const promise = new Promise(function(resolve, reject){
//       const handler = function() {
//         if (this.readyState !== 4) {
//           return;
//         }
//         if (this.status === 200) {
//           resolve(this.response);
//         } else {
//           reject(new Error(this.statusText));
//         }
//       };
//       const client = new XMLHttpRequest();
//       client.open("GET", url);
//       client.onreadystatechange = handler;
//       client.responseType = "json";
//       client.setRequestHeader("Accept", "application/json");
//       client.send();

//     });

//     return promise;
//   };
// ajax('http:39.107.142.107:3000/mock/25/getText').then((response)=>{
//     console.log(JSON.stringify(response));

// },
// ()=>{console.log('error')})
window.onload = () => {
    let flag1 = 1;
    let flag2 = 1;
    let buttons = document.getElementsByTagName('button');
    const ajax = (url, headers, name, method, body) => {
            const promise = new Promise((function(resolve, reject) {
                    const ready = function() {
                        if (this.readyState !== 4) {
                            return;
                        }
                        if (this.status === 200) {
                            resolve(this.response);
                        } else {
                            reject(new Error(this.statusText));
                        }
                    }
                    const xml = new XMLHttpRequest();
                    xml.open(method, url, true);
                    xml.onreadystatechange = ready;
                    xml.setRequestHeader(headers, name);
                    xml.send(JSON.stringify(body) || null);
                }

            ))
            return promise;
            // ajax(url,headers,method,body).then((response)=>{console.log(JSON.stringify(response))},
            //   (error)=>{console.log(error)})
        }
        // ajax().then((response)=>{console.log(JSON.stringify(response))},
        // (error)=>{console.log(error)})
    buttons[0].onclick = () => {
        if (flag1 === 1) {
            ajax('http://39.107.142.107:3000/mock/25/getText', 'content-type', 'application/json', 'GET').then((response) => {
                console.log(JSON.parse(response))
            }, (error) => {
                console.log(error)
            })
        }
        flag1 = 0;
    }
    buttons[1].onclick = () => {
        if (flag2 === 1) {
            ajax('http://39.107.142.107:3000/mock/25/testPost', 'content-type', 'application/json', 'POST', {
                "name": '2019级包匪',
                "id": 233
            }).then((response) => {
                console.log(JSON.parse(response))
            }, (error) => {
                console.log(error)
            })

        }
        flag2 = 0;
    }
}