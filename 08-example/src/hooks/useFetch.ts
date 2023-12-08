import { useEffect, useReducer, useRef } from "react";

// state returned by the hook type
interface State<T> {
  data?: T;
  error?: Error;
  loading: boolean;
}

// action types
type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

/**
 * Use fetch hooking for fetching data
 * see more complete example with cache https://usehooks-ts.com/react-hook/use-fetch
 */
export function useFetch<T = unknown>(
  // url to fetch from
  url?: string,
  // flag to activate the fetch
  enabled?: boolean
): State<T> {
  // initial state returned by the hook
  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: false,
  };

  // use reducer to separate state-logic
  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState, loading: true };
      case "fetched":
        return { ...initialState, loading: false, data: action.payload };
      case "error":
        return { ...initialState, loading: false, error: action.payload };
      default:
        return state;
    }
  };

  // actual state variable returned by the hook
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    // don't do anything if no url or fetch not enabled
    if (!url || !enabled) return;
    // create abort controller to eventually abort call
    const abortController = new AbortController();

    const fetchData = async () => {
      dispatch({ type: "loading" });

      try {
        const response = await fetch(url, {
          signal: abortController.signal,
        });

        // since fetch returns no error if request fails we need to throw one ourselves
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = (await response.json()) as T;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        // Check if the error is an AbortError and ignore it
        if (error instanceof DOMException && error.name === "AbortError") {
          return;
        }

        dispatch({ type: "error", payload: error as Error });
      }
    };

    fetchData();

    return () => {
      // abort the request when url or enabled flag changes
      abortController.abort();
    };
  }, [url, enabled]);

  return state;
}
