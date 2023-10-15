module.exports.page =async function(req,res){
    const project = await ProjectModel.findById(req.params.id);
    res.render('createIssue',{title:"Create Issue ", project});
}

module.exports.create = async function(req,res){
    const project = await ProjectModel.findById(req.params.id);
    const issue = await IssueModel.create({
        title:req.body.title,
        description:req.body.description,
        label:req.body.label,
        issueAuthor:req.body.author
    });
    // adding the issue in project model
    project.issues.push(issue);
    await project.save();
    await issue.save();
    res.redirect("back");
}