import axios, { GenericAbortSignal } from 'axios';

export const getFromUrl = async <TReturn>(
  url: string,
  options?: {
    abortAxiosSignal?: GenericAbortSignal;
  },
): Promise<TReturn | undefined> => {
  try {
    const response = await axios.get<TReturn>(url, {
      signal: options?.abortAxiosSignal,
    });
    return response.data;
  } catch (error: unknown) {
    if (!axios.isAxiosError(error) || error.code !== 'ERR_CANCELED') {
      console.error(error);
    }
  }
};
