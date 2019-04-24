const Router = require("express");

const member = require("./members");
const project = require("./projects");
const blog = require("./blogs");

const router = Router();

router.use("/members", member);
router.use("/projects", project);
router.use("/blogs", blog);

module.exports = router;