const fetchData = (src, method) => {
    return new Promise((resolve, reject) => {
        fetch(src, {method})
            .then(res => {
                res.json()
                    .then(data => {
                        resolve(data);
                    })
                    .catch(e => {
                        reject(e);
                    })
            })
            .catch(err => {
                reject(err);
            })
    });
};

export default fetchData;
