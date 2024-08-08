import axios from "axios";
import useCookie from "@/composables/useCookie";

const instance = () => {
    const { getToken } = useCookie();
    const apiToken = getToken("api_token")
        ? "Bearer " + getToken("api_token")
        : "";

    const mockAxiosInstance = axios.create({
        headers: {
            "Content-Type": "application/json",
        },
        timeout: 3000,
    });

    const axiosInstance = axios.create({
        headers: {
            "Content-Type": "application/json",
            Authorization: apiToken,
        },
        timeout: 50000,
        validateStatus: (status) =>
            (status >= 200 && status < 300) || status === 308,
    });

    return { axiosInstance, mockAxiosInstance };
};

export default instance;
