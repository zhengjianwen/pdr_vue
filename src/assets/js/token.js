
export default function token(keys) {
    return new Promise((resolve, reject) => {
        this.axios.post("/token?key=" + keys).then((res) => {
            if (res.data.code == 200) {
                resolve(res.data.data)
            }
        }).catch(function (err) {
            reject(err)
        })
    })
}
