import { createSlice } from "@reduxjs/toolkit";
import { REQUEST_STATUSES } from "../../constants/statuses";

const getTypePrefix = (type, status) => type.replace(`/${status}`, '');

const isLoadingStatus = (requestStatus) => requestStatus === REQUEST_STATUSES.Idle || requestStatus === REQUEST_STATUSES.Pending;
const isPendingOrFulfilledStatus = (requestStatus) => requestStatus === REQUEST_STATUSES.Pending || requestStatus === REQUEST_STATUSES.Fulfilled;
const isRejectedStatus = (requestStatus) => requestStatus === REQUEST_STATUSES.Rejected;

const initStatusState = (state, typePrefix) => {
    if (state[typePrefix]) {
        return;
    }
    state[typePrefix] = {}
}

export const requestSlice = createSlice({
    name: "requestSlice",
    initialState: {},
    selectors: {
        selectRequestStatus: (state, typePrefix, params) =>
            (params && state[typePrefix] && state[typePrefix][params])
            || state[typePrefix]
            || REQUEST_STATUSES.Idle,

        selectIsLoading: (state, typePrefix, params) =>
            params && state[typePrefix] && isLoadingStatus(state[typePrefix][params])
            || isLoadingStatus(state[typePrefix]),

        selectIsPendingOrFulfilled: (state, typePrefix, params) =>
            params && state[typePrefix] && isPendingOrFulfilledStatus(state[typePrefix][params])
            || isPendingOrFulfilledStatus(state[typePrefix]),

        selectIsRejected: (state, typePrefix, params) =>
            params && state[typePrefix] && isRejectedStatus(state[typePrefix][params])
            || isRejectedStatus(state[typePrefix])
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(
                ({ type }) => type.endsWith(REQUEST_STATUSES.Pending),
                (state, { type, meta }) => {
                    const typePrefix = getTypePrefix(type, meta.requestStatus);
                    const params = meta.arg;

                    if (params) {
                        initStatusState(state, typePrefix);
                        state[typePrefix][params] = REQUEST_STATUSES.Pending;
                        return;
                    }
                    state[typePrefix] = REQUEST_STATUSES.Pending;
                })
            .addMatcher(
                ({ type, }) => type.endsWith(REQUEST_STATUSES.Fulfilled),
                (state, { type, meta }) => {
                    const typePrefix = getTypePrefix(type, meta.requestStatus);
                    const params = meta.arg;

                    if (params) {
                        initStatusState(state, typePrefix);

                        state[typePrefix][params] = REQUEST_STATUSES.Fulfilled;
                        return;
                    }
                    state[typePrefix] = REQUEST_STATUSES.Fulfilled;
                })
            .addMatcher(
                ({ type }) => type.endsWith(REQUEST_STATUSES.Rejected),
                (state, { type, meta }) => {
                    const typePrefix = getTypePrefix(type, meta.requestStatus);
                    const params = meta.arg;

                    if (params) {
                        initStatusState(state, typePrefix);

                        state[typePrefix][params] = REQUEST_STATUSES.Rejected;
                        return;
                    }
                    state[typePrefix] = REQUEST_STATUSES.Rejected;
                });
    }
});

export const { selectRequestStatus, selectIsLoading, selectIsPendingOrFulfilled, selectIsRejected } = requestSlice.selectors;
