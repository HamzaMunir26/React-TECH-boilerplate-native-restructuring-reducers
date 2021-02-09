import { api } from '../Config/index';

const loginService = (body) => api.post('/login', body, {});

export default loginService;