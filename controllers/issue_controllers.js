const Project = require("../models/projects");
const Issue = require("../models/issues");

module.exports.page =async function(req,res){
    const project = await Project.findById(req.params.id);
    res.render('createIssue',{title:"Create Issue ", project});
}

module.exports.create = async function(req,res){
    const project = await Project.findById(req.params.id);
    const issue = await Issue.create({
        title:req.body.title,
        description:req.body.description,
        label:req.body.label,
        issueAuthor:req.body.author
    });
    // adding the issue in project model
    project.issues.push(issue);
    await project.save();
    await issue.save();
    res.redirect(`/project_details/${req.params.id}`);
}