import globalApi from "/@/apis/global";
import { interceptorError, interceptorSuccess } from "/@/apis/utilities";
import initMockServer from "/@/mock";

export const { axiosInstance, mockAxiosInstance } = instance();

axiosInstance.interceptors.response.use(interceptorSuccess, interceptorError);

// init mocker server
if (process.env.NODE_ENV !== "production") {
    const { apiFetchMockSinglePropertyServer } =
        initMockServer(mockAxiosInstance);
    mockAxiosInstance.interceptors.response.use(
        interceptorSuccess,
        interceptorError,
    );
    apiFetchMockSinglePropertyServer();
}

export const {} = globalApi(axiosInstance);
