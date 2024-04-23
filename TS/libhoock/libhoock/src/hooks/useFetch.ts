import axios from 'axios';

import { AxiosError, type AxiosInstance, type AxiosRequestConfig } from 'axios';
import * as React from 'react';
import { useLiveRef } from './useLiveRef';
import { config } from 'process';
import { setCommonHeaders } from '../utils/header';
import { initialState, fetchReducer } from '../reducers/fetch';
import { ACTIONS } from '../actions/fetch';

interface Config extends AxiosRequestConfig {
  instance?: AxiosInstance;
  method: 'get' | 'post' | 'put' | 'patch' | 'delete';
  url: string;
  enabled?: boolean;
}
interface UseAxios<T> {
  data: T | null;
  error: string | null;
  loading: boolean;
  fetcher?: () => Promise<void>;
}
function newAbortSignal(to: number): AbortSignal {
  const abortController = new AbortController();
  setTimeout(() => {
    abortController.abort();
  }, to);
  return abortController.signal;
}

export const useAxios = <T>(Config: Config): UseAxios<T> => {
  const configRef = useLiveRef(Config);
  const { instance = axios } = configRef.current;

  instance.defaults.timeout = 300;
  setCommonHeaders(instance);
  const [state, dispatch] = React.useReducer(fetchReducer, initialState);

  const fetch = React.useCallback(
    async (config: Config): Promise<void> => {
      try {
        const enabled = config.enabled ?? true;
        if (!enabled) return;

        const res = await instance.request<T>({
          ...config,
          method: config.method.toLowerCase() ?? 'get',
          signal: newAbortSignal(300), // timeout para request,
          headers: {
            ...config.headers,
            ...instance.defaults.headers.common,
          },
        });
        dispach({ type: ACTIONS.SET_DATA, payload: res.data });
      } catch (err) {
        if (err instanceof AxiosError) {
          dispach({ type: ACTIONS.SET_ERROR });
        }
      }
    },
    [instance, config]
  );
  return {
    state
  };
};
