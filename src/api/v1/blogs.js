const Router = require("express");

const BlogModel = require("./../../model/BlogModel");

const router = Router();

// create new blog
  router.post("/", (req, res, next) => {
    
    const group = req.body.group;
    const title = req.body.title;
    const link  = req.body.link;

    if (!group || !title || !link) {
      res.json({
        message: "Error occur",
        success: false,
        error: 0,
        data : {}
      });
      return;
    }
  
    BlogModel.CreateNewBlog(group, title, link)
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


  //Get blog by id 
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
  
    BlogModel.GetBlogByID(id)
      .then(data => {
        res.status(200);
        res.json({
          message: "Get blog success",
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

// Get all blog
  router.get("/", (req, res, next) => {

    BlogModel.GetAllBlog()
      .then(data => {
        res.status(200);
        res.json({
          message: "Get all blog success",
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


  // Delete blog by id
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
  
    BlogModel.DeleteBlogByID(id)
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