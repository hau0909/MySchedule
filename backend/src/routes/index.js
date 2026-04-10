module.exports = (app) => {
  // feat(auth): signup & signin
  app.use("/api/auth", require("./api/auth.routes"));
};
