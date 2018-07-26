// const GitOperations = require('./../services/gitOperations.js');
// const _gitOps = new GitOperations();
 import {createRepoService } from './../services/createRepo_service';
 import {createIssueService } from './../services/createIssue_service';
 import {closeIssueService } from './../services/closeIssue_service';
 import {addCommentService } from './../services/addComment_service';
 import {addCollaboratorService } from './../services/addCollaborator_service';

 import {processFetchApiWithPost } from './../services/gitOperations';

//export function determineOperation(intent) { // Ok Button in Create Issue
    export const determineOperation = function(){     
    var intent = document.getElementById("hiddenFieldIntent").value;
    
    debugger;

if(intent=="create-repo"){  
    document.getElementById("createRepoClose").click();
  //  _gitOps.processFetchApiWithPost(createRepoService());   
        processFetchApiWithPost(createRepoService());   
}else if(intent=="create-issue"){  
    document.getElementById("createIssueClose").click();
    _gitOps.processFetchApiWithPost(createIssueService());   
}else if(intent=="close-issue"){  
    document.getElementById("closeIssueClose").click();
    _gitOps.processFetchApiWithPost(closeIssueService()); 
      
}else if(intent=="add-comment"){  
    document.getElementById("addCommentClose").click();
    _gitOps.processFetchApiWithPost(addCommentService());   
}else if(intent=="add-collaborator"){  
    document.getElementById("addCollaboratorClose").click();
    _gitOps.processFetchApiWithPost(addCollaboratorService());   
}
    
};


