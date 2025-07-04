// import axios, { AxiosError, AxiosRequestConfig } from "axios";
// import { getSession } from "./session";

// interface RequestParams {
//   url: string;
//   withAuth?: boolean;
//   body?: Record<string, unknown>;
//   options?: AxiosRequestConfig;
// }

// export const serverManager = axios.create({
//   baseURL: process.env.BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// serverManager.interceptors.request.use(
//   function (request) {
//     console.log("------------- request data: ", request);
//     console.log("----------- end of request data -------------");
//     return request;
//   },
//   function (error) {
//     console.log("------------- request error: ", error);
//     console.log("----------- end of request error -------------");
//     return Promise.reject(error);
//   }
// );

// serverManager.interceptors.response.use(
//   function (response) {
//     const data = response.data;
//     console.log("------------- response data: ", data);
//     console.log("----------- end of response data -------------");
//     return data;
//   },
//   function (error: AxiosError) {
//     if (error.response) {
//       const apiError = error.response.data;
//       console.error("----------- error: ", apiError);
//       console.error("----------- end of error -------------");
//       return apiError;
//     } else {
//       const networkError = {
//         status: "error",
//         statusCode: 500,
//         message: "Network error or server unreachable",
//         errorKey: "network_error",
//         errorCode: 20000,
//       };
//       console.error("----------- network error: ", networkError);
//       console.error("----------- end of network error -------------");
//       return networkError;
//     }
//   }
// );

// const requestHandler = async (
//   method: "get" | "post" | "put" | "delete",
//   params: RequestParams
// ) => {
//   try {
//     const headers = {
//       ...params.options?.headers,
//       ...(params.withAuth && (await getAuthorization())),
//     };

//     const config: AxiosRequestConfig = {
//       ...params.options,
//       headers,
//       method,
//       url: params.url,
//       data: params.body,
//     };

//     const response = await serverManager.request(config);
//     return response;
//   } catch (error) {
//     console.log("server error", error);

//     return Promise.reject(error);
//   }
// };

// async function getAuthorization() {
//   const token = getSession();
//   return token ? { Authorization: `Bearer ${token}` } : {};
// }

// export const api = {
//   get: (params: RequestParams) => requestHandler("get", params),
//   post: (params: RequestParams) => requestHandler("post", params),
//   put: (params: RequestParams) => requestHandler("put", params),
//   delete: (params: RequestParams) => requestHandler("delete", params),
// };
