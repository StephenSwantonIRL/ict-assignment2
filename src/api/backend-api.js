import axios from "axios";

export class BackendAPI {
    backendUrl = ""

    constructor(backendUrl) {
        this.backendUrl = backendUrl;
        const userCredentials = localStorage.currentUser;
        if (userCredentials) {
            const savedUser = JSON.parse(userCredentials);
            axios.defaults.headers.common["Authorization"] = "Bearer " + savedUser.token;
        }
    }

    async authenticate(user) {
        try {
            const response = await axios.post(`${this.backendUrl}/api/users/authenticate`, user);
            console.log(response)
            // eslint-disable-next-line dot-notation
            axios.defaults.headers.common["Authorization"] = `Bearer ${response.data.token}`;
            if (response.data.success) {
                const userDetails = await axios.post(`${this.backendUrl}/api/users/find`, {email: user.email});
                const userToStore = {
                    data: {
                        firstName: userDetails.data.firstName,
                        lastName: userDetails.data.lastName,
                        email: userDetails.data.email,
                        _id: userDetails.data._id,
                        token: response.data.token,
                    }
                }
                localStorage.currentUser = JSON.stringify(userToStore);
                return userToStore;
            }
            return false;
        } catch (error) {
            return false;
        }
    }

    async logout() {
        // eslint-disable-next-line dot-notation
        const res = await axios.post(`${this.backendUrl}/api/revokeToken`,);
        axios.defaults.headers.common["Authorization"] = "";
        localStorage.removeItem("currentUser");
        return "Logged Out."
    }

    async createUser(user) {
        const res = await axios.post(`${this.backendUrl}/api/users`, user);
        return res.data;
    }

    async createMovie(movie) {
        const res = await axios.post(`${this.backendUrl}/api/movies`, movie);
        return res.data;
    }



    async getUser(id) {
        const res = await axios.get(`${this.backendUrl}/api/users/${id}`);
        return res.data;
    }

    async getUserByEmail(email) {
        const res = await axios.post(`${this.backendUrl}/api/users/find`, {email: email});
        return res.data;
    }

    async checkToken() {
        const res = await axios.get(`${this.backendUrl}/api/checkToken`);
        if (res.data.statusCode == 401) {
            return false;
        };
        return true;
    }


};
