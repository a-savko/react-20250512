import { CONFIG } from "../config.js";

export const buildUrl = (path, options = {}) => {
    let apiPath = `/api${path}`;
    const { params = {}, query = {} } = options;

    Object.keys(params).forEach(param => {
        apiPath = apiPath.replace(`:${param}`, params[param]);
    });

    const url = new URL(apiPath, CONFIG.api.host);

    Object.keys(query).forEach(param => {
        url.searchParams.append(param, query[param]);
    })

    return url;
}
