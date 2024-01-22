import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCQueryUtils, createTRPCReact } from "@trpc/react-query";
import type { Router } from "@qrst-stack/functions/trpc/trpc";

export const trpc = createTRPCReact<Router>();

export const queryClient = new QueryClient();

export const trpcClient = trpc.createClient({
  links: [
    httpBatchLink({
      url: import.meta.env.VITE_API_URL + "/trpc",
      // optional
      headers() {
        return {
          // authorization: getAuthCookie(),
        };
      },
    }),
  ],
});

// We will use this in the route loaders
export const apiUtils = createTRPCQueryUtils({
  client: trpcClient,
  queryClient,
});
