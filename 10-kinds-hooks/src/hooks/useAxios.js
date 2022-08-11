import defaultAxios from "axios";
import { useEffect, useState } from "react";

export const useAxios = (opts, axiosInstasnce = defaultAxios) => {
  const [state, setState] = useState({
    loading: true,
    error: null,
    data: null,
  });

  const [trigger, setTrigger] = useState(0);

  useEffect(() => {
    if (!opts.url) {
      return;
    }

    axiosInstasnce(opts)
      .then((data) => {
        setState({
          ...state,
          loading: false,
          data,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          loading: false,
          error,
        });
      });
  }, [trigger]);

  const refetch = () => {
    setState({
      ...state,
      loading: true,
    });
    setTrigger(Date.now());
  };

  return { ...state, refetch };
}