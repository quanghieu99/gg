export class Services {
    getPhones = async () => {
        try {
            const res = await axios({
                url: 'https://mockapi.io/projects/66c740b6732bf1b79fa5e8d0/mobile',
                method: 'GET',
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    addPhone = async (phone) => {
        try {
            await axios({
                url: 'https://mockapi.io/projects/66c740b6732bf1b79fa5e8d0/mobile',
                method: 'POST',
                data: phone,
            });
        } catch (err) {
            console.log(err);
        }
    };

    deletePhone = async (id) => {
        try {
            await axios({
                url: `https://mockapi.io/projects/66c740b6732bf1b79fa5e8d0/mobile/${id}`,
                method: 'DELETE',
            });
        } catch (err) {
            console.log(err);
        }
    };

    getPhoneById = async (id) => {
        try {
            const res = await axios({
                url: `https://mockapi.io/projects/66c740b6732bf1b79fa5e8d0/mobile/${id}`,
                method: 'GET',
            });
            return res.data;
        } catch (err) {
            console.log(err);
        }
    };

    updatePhone = async (phone) => {
        try {
            await axios({
                url: `https://mockapi.io/projects/66c740b6732bf1b79fa5e8d0/mobile/${phone.id}`,
                method: 'PUT',
                data: phone,
            });
        } catch (err) {
            console.log(err);
        }
    };
}
