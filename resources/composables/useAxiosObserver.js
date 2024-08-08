import router from "@/router/router";
export default function (res) {
	const goErrorPage = () => {
		if (process.env.NODE_ENV === "production") {
			setTimeout(() => router.push("/pages/error"/** Todo: Write Your Error Page */), 500);
		}
	};

	const propertyIsDiscontinued = () => {/** Todo: Write Your Conditions */};

	return {
		goErrorPage,
		propertyIsDiscontinued,
	};
}
