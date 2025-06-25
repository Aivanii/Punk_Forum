import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  //main
  index("routes/home.tsx"),
  //valid
  route("/reg", "./routes/reg/reg.tsx"),
  route("/login", "./routes/login/login.tsx"),
  //laws
  route("/user_agreement", "./routes/userAgreement/userAgreement.tsx"),
  route("/privacy_policy", "./routes/userAgreement/userAgreement.tsx"),
  //other
  route("/test", "./routes/test.tsx"),
] satisfies RouteConfig;
