import { ACTIONS } from "@/stores/modules/myExample/actions";
import { GETTERS } from "@/stores/modules/myExample/getters";
import { STATE } from "@/stores/modules/myExample/state";

export const myExampleStore = defineStore("myExampleStore", () => {
    return {
        ...STATE,
        ...GETTERS,
        ...ACTIONS,
    };
});
