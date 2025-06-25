import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/reg", "./routes/reg/reg.tsx"),
  route("/login", "./routes/login/login.tsx"),
  route("/test", "./routes/test.tsx"),
] satisfies RouteConfig;
