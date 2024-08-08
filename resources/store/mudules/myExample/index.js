import { ACTIONS } from "./actions";
import { GETTERS } from "./getters";
import { STATE } from "./state";

export const myExampleStore = defineStore("myExampleStore", () => {
    return {
        ...STATE,
        ...GETTERS,
        ...ACTIONS,
    };
});
