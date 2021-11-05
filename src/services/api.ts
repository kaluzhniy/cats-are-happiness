import axios, {
    AxiosError,
  AxiosInstance,
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";

enum StatusCode {
  Unauthorized = 401,
  Forbidden = 403,
  TooManyRequests = 429,
  InternalServerError = 500,
}

const headers: AxiosRequestHeaders = {
    
};
const baseURL = "";

const injectToken = (
  config: AxiosRequestConfig,
  tokenName?: string
): AxiosRequestConfig => {
  if (!tokenName) return config;
  try {
    const token = localStorage.getItem(tokenName);

    if (token != null && config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  } catch (error) {
    throw error;
  }
};

class Http {
  private instance: AxiosInstance | null = null;
  private headers: AxiosRequestHeaders;
  private baseUrl: string;
  private tokenName: string | undefined;

  private get http(): AxiosInstance {
    return this.instance != null ? this.instance : this.initHttp();
  }

  constructor(
    headers: AxiosRequestHeaders,
    baseUrl: string,
    tokenName?: string
  ) {
    this.headers = headers;
    this.baseUrl = baseUrl;
    this.tokenName = tokenName;
  }

  initHttp() {
    const http = axios.create({
      baseURL: this.baseUrl,
      headers: this.headers,
    });

    http.interceptors.request.use(
      (config) => injectToken(config, this.tokenName),
      (error) => Promise.reject(error)
    );

    http.interceptors.response.use(
      (response) => response,
      (error) => {
        const { response } = error;
        return this.handleError(response);
      }
    );

    this.instance = http;
    return http;
  }

  request<T = any, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.http.request(config);
  }

  get<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.get<T, R>(url, config);
  }

  post<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.post<T, R>(url, data, config);
  }

  put<T = any, R = AxiosResponse<T>>(
    url: string,
    data?: T,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.put<T, R>(url, data, config);
  }

  delete<T = any, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.http.delete<T, R>(url, config);
  }

  private handleError(error: AxiosError) {
      console.error(error)
    return Promise.reject(error);
  }
}

export const http = new Http(headers, baseURL);
