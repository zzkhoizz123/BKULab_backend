const Router = require("express");
const jwt = require("jsonwebtoken");

const MemberModel = require("./../../model/MemberModel");

const router = Router();

// create new member
  router.post("/", (req, res, next) => {
    const name = req.body.name;
    const url = req.body.url;
    const academic_year = req.body.academic_year;

    if (!name || !url || !academic_year) {
      res.json({
        message: "Error occur",
        success: false,
        error: 0,
        data : {}
      });
      return;
    }
  
    MemberModel.CreateNewMember(name, url, academic_year)
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


  //Get member by id 
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
  
    MemberModel.GetMemberByID(id)
      .then(data => {
        res.status(200);
        res.json({
          message: "Get member success",
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

// Get member by year
  router.get("/year/:year", (req, res, next) => {
    const year= req.params.year;

    if (!year) {
      res.json({
        message: "Error occur",
        success: false,
        error: 0,
        data : {}
      });
      return;
    }
  
    MemberModel.GetMemberByYear(year)
      .then(data => {
        res.status(200);
        res.json({
          message: "Get by year success",
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


  // Delete member by id
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
  
    MemberModel.DeleteMemberByID(id)
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