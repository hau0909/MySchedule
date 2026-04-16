module.exports = (app) => {
  // feat(auth): signup & signin
  app.use("/api/auth", require("./api/auth.routes"));

  // feat(tasks): items
  app.use("/api/items", require("./api/item.routes"));
};
