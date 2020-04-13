import {RECEIVE_SOURCES} from "./types";

export default {
    receive_sources: (sources) => {
        return {
            type: RECEIVE_SOURCES,
            payload: sources,
        };
    }
}
