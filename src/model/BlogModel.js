const Promise = require("promise");

const ObjectId = require("mongodb").ObjectID;

const BlogModel = require('./Blog');

const CreateNewBlog = (group, title, link)=>{
  return new Promise((resolve, reject)=>{
    const blog = new BlogModel({
      group,
      title, 
      link
    });

    BlogModel.create(blog)
      .then(data=>{
        return resolve(data);
      })
      .catch(err=>{
        return reject("Error occur");
      })
  });
}

const GetAllBlog = ()=>{
    return new Promise((resolve, reject) => {
        BlogModel.find({})
            .then(res=>{
                return resolve(res);           
            })
            .catch(err=>{
                return reject("Error occur");
            })        
    });
}

const GetBlogByID = id => {
  return new Promise((resolve, reject) => {
    BlogModel.findOne({ _id: new ObjectId(id) })
      .select("-__v")
      .exec((err, res) => {
        if (err) {
          return reject("Error occur");
        }
        return resolve(res);
      });
  });
};

const DeleteBlogByID = id => {
  return new Promise((resolve, reject) => {
    BlogModel.deleteOne({ _id: new ObjectId(id) })
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
    CreateNewBlog,
    GetAllBlog,
    GetBlogByID,
    DeleteBlogByID 
};
  