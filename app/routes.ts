import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  //main
  index("routes/home/home.tsx"),
  //valid
  route("/reg", "./routes/reg/reg.tsx"),
  route("/login", "./routes/login/login.tsx"),
  //laws
  route("user_agreement", "./routes/userAgreement.tsx"),
  route("/privacy_policy", "./routes/privacyPolicy.tsx"),
  //other
  route("/test", "./routes/test.tsx"),
] satisfies RouteConfig;
