import { HTTP_METHOD } from "next/dist/server/web/http";
import { HTTP_METHODS } from "@/config/constants";

export type HttpCallProps<TPayload = unknown> = {
  endpoint?: string;
  method?: HTTP_METHOD;
  payload?: TPayload;
  headers?: HeadersInit;
  bearerToken?: string;
  signal?: AbortSignal;
  credentials?: RequestCredentials;
  cache?: RequestCache;
};

export type HttpResponse<T> = {
  data: T;
  status: number;
  statusText: string;
  ok: boolean;
};

export async function httpCall<TResponse = unknown, TPayload = unknown>({
  endpoint,
  method = HTTP_METHODS.GET as HTTP_METHOD,
  payload,
  headers = {},
  bearerToken,
  signal,
  credentials,
  cache,
}: HttpCallProps<TPayload>): Promise<HttpResponse<TResponse>> {
  if (!endpoint) {
    throw new Error("Endpoint is required.");
  }
  const requestHeaders = new Headers(headers);

  if (!requestHeaders.has("Content-Type") && payload) {
    requestHeaders.set("Content-Type", "application/json");
  }

  if (bearerToken) {
    requestHeaders.set("Authorization", `Bearer ${bearerToken}`);
  }

  const config: RequestInit = {
    method,
    headers: requestHeaders,
    signal,
    credentials,
    cache,
  };

  // GET / HEAD shouldn't normally contain a body
  if (payload !== undefined && method !== "GET" && method !== "HEAD") {
    config.body =
      payload instanceof FormData ? payload : JSON.stringify(payload);
  }

  const response = await fetch(endpoint, config);

  let data: TResponse;

  const contentType = response.headers.get("content-type");

  if (contentType?.includes("application/json")) {
    data = (await response.json()) as TResponse;
  } else {
    data = (await response.text()) as TResponse;
  }

  if (!response.ok) {
    throw {
      status: response.status,
      statusText: response.statusText,
      data,
    };
  }
  // Format this reponse accrodingly (UI/API)
  return {
    data,
    status: response.status,
    statusText: response.statusText,
    ok: response.ok,
  };
}
