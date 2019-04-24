const Router = require("express");
const jwt = require("jsonwebtoken");

const ProjectModel = require("./../../model/ProjectModel");

const router = Router();

// create new project
  router.post("/", (req, res, next) => {
    const route = req.body.route;
    const url = req.body.url;
    const title = req.body.title;
    const icon = req.body.icon;
    const description = req.body.description;

    if (!route || !url || !title || !icon || !description) {
      res.json({
        message: "Error occur",
        success: false,
        error: 0,
        data : {}
      });
      return;
    }
  
    ProjectModel.CreateNewProject(route, url, title, icon, description)
      .then(data => {
        res.status(200);
        res.json({
          message: "create success",
          success: true,
          error: 0,
          data: data
        });
      })
      .catch(msg => {
        res.json({
          message: "Error occur",
          success: false,
          error: 0,
          data : {}
        });
        return;
      });
  });


  //Get project by id 
  router.get("/:id", (req, res, next) => {
    const id= req.params.id;

    if (!id) {
      res.json({
        message: "Error occur",
        success: false,
        error: 0,
        data : {}
      });
      return;
    }
  
    ProjectModel.GetProjectByID(id)
      .then(data => {
        res.status(200);
        res.json({
          message: "Get project success",
          success: true,
          error: 0,
          data: data
        });
      })
      .catch(msg => {
        res.json({
          message: "Error occur",
          success: false,
          error: 0,
          data : {}
        });
        return;
      });
  });

// Get all project
  router.get("/", (req, res, next) => {

    ProjectModel.GetAllProject()
      .then(data => {
        res.status(200);
        res.json({
          message: "Get all projects success",
          success: true,
          error: 0,
          data: data
        });
      })
      .catch(msg => {
        res.json({
          message: "Error occur",
          success: false,
          error: 0,
          data : {}
        });
        return;
      });
  });


  // Delete project by id
  router.delete("/:id", (req, res, next) => {
    const id= req.params.id;

    if (!id) {
      res.json({
        message: "Error occur",
        success: false,
        error: 0,
        data : {}
      });
      return;
    }
  
    ProjectModel.DeleteProjectByID(id)
      .then(data => {
        res.status(200);
        res.json({
          message: "Delete success",
          success: true,
          error: 0,
          data: data
        });
      })
      .catch(msg => {
        res.json({
          message: "Error occur",
          success: false,
          error: 0,
          data : {}
        });
        return;
      });
  });

  
module.exports = router;