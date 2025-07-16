import { REQUEST_STATUSES } from "../redux/constants/statuses";

export const isLoading = (requestStatus) =>
    requestStatus === REQUEST_STATUSES.Idle || requestStatus === REQUEST_STATUSES.Pending;

export const isRejected = (requestStatus) =>
    requestStatus === REQUEST_STATUSES.Rejected;
