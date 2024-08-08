import useAxiosObserver from "@/composables/useAxiosObserver";

export const axiosErrorHandler = error => {
	if (!window.navigator.onLine) {
		// 網路出了點問題，請重新連線後重整網頁
		return;
	}

	const { response } = error;
	const { status } = response || {};
	if (!status) {
		return Promise.reject(error);
	}

	const { goErrorPage } = useAxiosObserver(
		error.response
	);

	if (response) {
		switch (status) {
			case 400:
				console.log("axiosErrorHandler:", 400);
				break;
			case 401:
				console.log("axiosErrorHandler:", 401);
				break;
			case 403:
				console.log("axiosErrorHandler:", 403);
				break;
			case 500:
				goErrorPage();
				break;
			default:
				break;
		}
	}

	return Promise.reject(error);
};
