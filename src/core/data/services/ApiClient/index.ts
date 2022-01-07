import axios, { AxiosInstance } from "axios";

class ApiClient {
    constructor(private apiUrl: string) {};

    buildClient(): AxiosInstance {
        return axios.create({
            baseURL: `${this.apiUrl}`,
            headers: {'Content-Type': 'application/json'}
        });
    }
}

export default ApiClient;