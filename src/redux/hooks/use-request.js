// should be removed for RTK query only
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { selectRequestStatus } from "../entities/request/slice";
import { isRejected } from "../../helpers/statuses-helper";
import { REQUEST_STATUSES } from "../constants/statuses";

export const useRequest = (thunk, params) => {
    const dispatch = useDispatch();

    const [_, setRequest] = useState();
    const requestStatus = useSelector((state) => selectRequestStatus(state, thunk.typePrefix, params));

    useEffect(() => {
        const request = dispatch(thunk(params));
        setRequest(request);

        return () => {
            request.abort();
            setRequest(null);
        };
    }, [dispatch, params, thunk]);

    if (isRejected(requestStatus)) {
        console.log(`${thunk.typePrefix} was ${REQUEST_STATUSES.Rejected}`);
    }

    return requestStatus;
}
