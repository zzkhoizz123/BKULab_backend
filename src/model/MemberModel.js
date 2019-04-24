const Promise = require("promise");
const moment = require("moment");

const ObjectId = require("mongodb").ObjectID;

const MemberModel = require('./Member');


const CreateNewMember = (name, url, academic_year)=>{
  return new Promise((resolve, reject)=>{
    const member = new MemberModel({
      name,
      url,
      academic_year
    });

    MemberModel.create(member)
      .then(data=>{
        return resolve(data);
      })
      .catch(err=>{
        return reject("Error occur");
      })
  });
}


const GetMemberByYear = year => {
  return new Promise((resolve, reject) => {
    MemberModel.find({ academic_year: year })
      .then(res=>{
        return resolve(res);
      })
      .catch(err=>{
        return reject("Error occur");
      })     
  });
}; 

const GetMemberByID = id => {
  return new Promise((resolve, reject) => {
    MemberModel.findOne({ _id: new ObjectId(id) })
      .select("-__v")
      .exec((err, res) => {
        if (err) {
          return reject("Error occur");
        }
        return resolve(res);
      });
  });
};

const DeleteMemberByID = id => {
  return new Promise((resolve, reject) => {
    MemberModel.deleteOne({ _id: new ObjectId(id) })
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
    CreateNewMember,
    GetMemberByID,
    DeleteMemberByID,
    GetMemberByYear
  };
  