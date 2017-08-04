var qs = require('querystring')
    //axios
import axios from 'axios'


var get = (type = 'GET', url, data) => {
    var qsData = qs.stringify(data)
    return new Promise((resolve, reject) => {
        if (type === 'GET') {
            if (data && Object.keys(data).length > 0) {
                url = `${url}?${qsData}`
                console.log(url);
            }
            axios.get(url)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        };

        if (type === 'POST') {
            console.log(url, qsData);
            axios.post(url, qsData)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        }

        if (type === 'PUT') {
            console.log(url, qsData);
            axios.put(url, qsData)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        };

        if (type === 'DELETE') {
            console.log(url, qsData);
            axios.delete(url, qsData)
                .then((res) => {
                    resolve(res);
                })
                .catch((err) => {
                    reject(err);
                });
        };
    });
}

export default get;