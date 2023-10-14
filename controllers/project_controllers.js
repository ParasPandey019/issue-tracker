const Project = require("../models/projects");
const Issue = require("../models/issues");


module.exports.homePage = async function(req,res){
    let projects = await Project.find({}).sort('-createdAt')
    res.render('homePage',{title:"Home",projects})
}

module.exports.page = function(req,res){
    res.render('createProject',{title:"Create Project "});
}

module.exports.create = async function(req,res){
    const project = await Project.create({
        projectName:req.body.projectName,
        description:req.body.description,
        authorName:req.body.authorName
    });
    await project.save();
    res.redirect('/');
}

module.exports.detail = async function(req,res){
    const project = await Project.findById(req.params.id).populate({path:"issues"});
    res.render('projectDetail',{title:"Project Details ",project});
}

