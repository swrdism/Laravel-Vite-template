import { STATE } from "@/stores/modules/myExample/state";

export const GETTERS = {
    doubleCount: computed(() => {
        return STATE.count.value * 2;
    }),
};
