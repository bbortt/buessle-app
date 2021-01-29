import { combineEpics } from "redux-observable";

import { helloFetchEpic } from "./hello.epic";

const epics = [helloFetchEpic];

export default combineEpics(...epics);
