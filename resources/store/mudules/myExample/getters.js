import { STATE } from "./state";

export const GETTERS = {
    doubleCount: computed(() => {
        return STATE.count.value * 2;
    }),
};
