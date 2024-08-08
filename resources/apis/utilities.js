import { axiosErrorHandler } from "/@/apis/errorHandler";
import useAxiosObserver from "/@/composables/useAxixosObserver";

const interceptorSuccess = res => {
	const { propertyIsDiscontinued } = useAxiosObserver(res);
	const { status } = res;
	if (status === 200) {
		return res;
	} else {
		return propertyIsDiscontinued();
	}
};

const interceptorError = error => {
	axiosErrorHandler(error);
	return error;
};

export { interceptorError, interceptorSuccess };
