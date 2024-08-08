export default function () {
    const getToken = (key = null) => {
        let cookies_raw = decodeURIComponent(document.cookie);
        // if cookie is empty, return undefined
        if (cookies_raw.length === 0) {
            return undefined;
        }

        // extarct cookies
        cookies_raw = cookies_raw.split(";");
        let cookies = {};
        cookies_raw.forEach((cookie) => {
            cookies[cookie.split("=")[0].replace(" ", "")] = cookie
                .split("=")[1]
                ?.replace(" ", "");
        });

        return cookies[key];
    };

    const setCookie = (name, value, days) => {
        let expires = "";
        if (days) {
            const date = new Date();
            date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    };

    const deleteCookie = (key) => {
        document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    };

    return {
        getToken,
        setCookie,
        deleteCookie,
    };
}
