


//const GitOperations = require('./../services/gitOperations.js');
//const _gitOps = new GitOperations();
import { processFetchApiWithGet } from './../services/gitOperations';





// module.exports = class ModalValidator { 

// validateDataFromRecast(intent,intentData){    
export const validateDataFromRecast = function (intent, intentData) {
    debugger;
    var tb = intent + "-repoName";
    if (intentData.git_repo) {

        document.getElementById(tb).value = intentData.git_repo[0].value;
    } else {
        document.getElementById(tb).value = "";
    }

    if ((intent == "close-issue") || (intent == "add-collaborator")) {
        var tb = intent + "-target";
        if (intentData.target) {
            document.getElementById(tb).value = intentData.target[0].value;
        } else {
            document.getElementById(tb).value = "";
        }
    }
};

//displayModal(intent,intentData){  
export const displayModal = function (intent, intentData) {
    debugger;
    if (intent == "view-issues") {
        debugger;
        var repoName = intentData.git_repo[0].value;
        let url = "https://api.github.com/repos/swat1508/" + repoName + "/issues?state=all";
        //No Json Required For Get Operation        
        var objData = {};
        objData.url = url;
        objData.method = "GET";
        //objData.jsonData=getIssueJson;
        objData.operation = "viewIssues";
        //_gitOps.processFetchApiWithGet(objData);
        processFetchApiWithGet(objData);
    } else if (intent == "view-latest-comment") {
        debugger;
        var repoName = intentData.git_repo[0].value;
        var issueNumber = intentData.target[0].value;
        let url = "https://api.github.com/repos/swat1508/" + repoName + "/issues/" + issueNumber + "/comments";
        console.log("url", url);
        //No Json Required For Get Operation        
        var objData = {};
        objData.url = url;
        objData.method = "GET";
        objData.operation = "getLatestComment";
        //  _gitOps.processFetchApiWithGet(objData);
        processFetchApiWithGet(objData);
    } else {                                                        //Error Check 2
        var triggerElement = document.getElementById('showModal');
        triggerElement.setAttribute('data-target', '#' + intent);
        //this.validateDataFromRecast(intent,intentData);              
        validateDataFromRecast(intent, intentData);
        debugger;
        triggerElement.click();
    }


    // if(intent=="create-repo"){
    //     var triggerElement = document.getElementById('showModal');
    //     triggerElement.setAttribute('data-target', '#'+intent);
    //     this.validateDataFromRecast(intent,intentData); 
    //     //alert("try now");        
    //     debugger;
    //     triggerElement.click();

    // } else if(intent=="create-issue"){

    //     triggerElement.setAttribute('data-target', '#'+intent);
    //     // document.getElementById("createIssueRepoName").value= intentData.git_repo[0].value;
    //     this.validateDataFromRecast(intent,intentData);  
    //     triggerElement.click();
    // } else if(intent=="close-issue"){
    //     var triggerElement = document.getElementById('showModal');
    //     triggerElement.setAttribute('data-target', '#'+intent);
    //     // document.getElementById("closeIssueRepoName").value= intentData.git_repo[0].value;
    //     // document.getElementById("closeIssueNumber").value= intentData.target[0].value; 
    //     this.validateDataFromRecast(intent,intentData);  
    //     triggerElement.click();
    // } else if(intent=="add-comment"){
    //     debugger;
    //     var triggerElement = document.getElementById('showModal');
    //     triggerElement.setAttribute('data-target', '#'+intent);
    //     // document.getElementById("addCommentRepoName").value= intentData.git_repo[0].value;        
    //     this.validateDataFromRecast(intent,intentData);  
    //     triggerElement.click();
    // } else if(intent=="add-collaborator"){
    //     debugger;
    //     var triggerElement = document.getElementById('showModal');
    //     triggerElement.setAttribute('data-target', '#'+intent);
    //     // document.getElementById("addCollaboratorRepoName").value= intentData.git_repo[0].value;     
    //     // document.getElementById("addCollaboratorUsername").value= intentData.target[0].value; 
    //     this.validateDataFromRecast(intent,intentData);  
    //     triggerElement.click();
    // } else if(intent=="view-issues"){
    //     debugger;
    //     var repoName= intentData.git_repo[0].value;     
    //     let url = "https://api.github.com/repos/swat1508/" + repoName + "/issues?state=all";
    //   //No Json Required For Get Operation        
    //     var objData={};
    //     objData.url=url;
    //     objData.method="GET";
    //     //objData.jsonData=getIssueJson;
    //     objData.operation="viewIssues"; 
    //     _gitOps.processFetchApiWithGet(objData);
    // }else if(intent=="view-latest-comment"){
    //     var repoName= intentData.git_repo[0].value;     
    //     var issueNumber = intentData.target[0].value;
    //     let url = "https://api.github.com/repos/swat1508/" + repoName + "/issues/" + issueNumber + "/comments";
    //     console.log("url",url);
    //   //No Json Required For Get Operation        
    //     var objData={};
    //     objData.url=url;
    //     objData.method="GET";
    //     objData.operation="getLatestComment"; 
    //     _gitOps.processFetchApiWithGet(objData);
    // }else{                                                        //Error Check 2
    //     //alert("Entered matched some intent but not GIT command");
    //     return;
    // }            
};


//}