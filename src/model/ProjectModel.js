const Promise = require("promise");

const ObjectId = require("mongodb").ObjectID;

const ProjectModel = require('./Project');


const CreateNewProject = (route, url, title, icon, description)=>{
  return new Promise((resolve, reject)=>{
    const project = new ProjectModel({
      route,
      url,
      title, 
      icon,
      description
    });

    ProjectModel.create(project)
      .then(data=>{
        return resolve(data);
      })
      .catch(err=>{
        return reject("Error occur");
      })
  });
}


const GetAllProject = ()=>{
    return new Promise((resolve, reject) => {
        ProjectModel.find({})
            .then(res=>{
                return resolve(res);           
            })
            .catch(err=>{
                return reject("Error occur");
            })        
    });
}


const GetProjectByID = id => {
  return new Promise((resolve, reject) => {
    ProjectModel.findOne({ _id: new ObjectId(id) })
      .select("-__v")
      .exec((err, res) => {
        if (err) {
          return reject("Error occur");
        }
        return resolve(res);
      });
  });
};

const DeleteProjectByID = id => {
  return new Promise((resolve, reject) => {
    ProjectModel.deleteOne({ _id: new ObjectId(id) })
      .select("-__v")
      .exec((err, res) => {
        if (err) {
          return reject("Error occur");
        }
        return resolve(res);
      });
  });
};


module.exports = {
    CreateNewProject,
    GetAllProject,
    GetProjectByID,
    DeleteProjectByID 
};
  