import express from "express";
import demoRouter from "./v1";

// import your routes

const apiRouter = express.Router();

// below is the example of how to use the router
apiRouter.use("/v1/demo", demoRouter);

export default apiRouter;
