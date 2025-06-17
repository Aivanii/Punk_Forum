import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/reg", "./routes/reg/reg.tsx"),
] satisfies RouteConfig;
