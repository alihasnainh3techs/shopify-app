import { createApp } from "@shopify/app-bridge";

export const app = createApp({
    apiKey: "a5bcfd3035ff0e3e7cf6c5d96f8aa7e5",
    host: new URLSearchParams(location.search).get("host")!,
    forceRedirect: true,
}); 