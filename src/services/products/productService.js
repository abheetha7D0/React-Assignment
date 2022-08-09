import axios from "../../axios";

class Products{

    postRentalRatesService = async (data) => {
        console.log(data);
        const promise = new Promise((resolve, reject) => {
            axios.post('products', data)    // 20s
                .then((res) => {
                    return resolve(res)
                })
                .catch((err) => {
                    return resolve(err)
                })
        });

           return await promise;
        };

        GetRentalRates = async () => {
            const promise = new Promise((resolve, reject) => {
                axios.get('products')
                    .then((res) => {
                        return resolve(res)
                    })
                    .catch((err) => {
                        return resolve(err)
                    })
            })
            return await promise;
        }

        
}

export default new Products();