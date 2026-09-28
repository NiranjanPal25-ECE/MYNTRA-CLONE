import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusAction } from "../store/fetchSlice";

function FetchItems () {
    const fetchStatus = useSelector(store => store.fetchStatus);
    const dispatch = useDispatch();

    useEffect(() =>{
        if(fetchStatus.fetchDone) return;
        const controller = new AbortController();
        const signal = controller.signal;

        dispatch(fetchStatusAction.markFetchingStarted());
        fetch("http://localhost:8080/items", {signal})
        .then((res) => res.json())
        .then(({items}) => {
            dispatch(itemsAction.addInitialItems(items));
            dispatch(fetchStatusAction.markFetchDone());
            dispatch(fetchStatusAction.markFetchingFinished());
        });
        return () => {
            controller.abort();
        }

    }, [fetchStatus]);

    return (
        <>
        </>
    )
}

export default FetchItems;