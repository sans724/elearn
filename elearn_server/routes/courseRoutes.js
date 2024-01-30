import express from "express";

const router = express.Router();

router.route("/courses").get(getAllCourses);

export default router;