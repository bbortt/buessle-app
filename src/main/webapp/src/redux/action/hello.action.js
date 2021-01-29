export const HELLO_FETCH = 'hello:fetch';
export const HELLO_SET = 'hello:set';

export const fetchHello = () => ({ type: HELLO_FETCH });
export const setHello = (world) => ({ type: HELLO_SET, payload: world });
