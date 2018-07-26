

    export const addCollaboratorService = function(){     
        document.getElementById("addCollaboratorClose").click();
        var repoName = document.getElementById("add-collaborator-repoName").value;
        var collaboratorName = document.getElementById("add-collaborator-target").value;

        let url = 'https://api.github.com/repos/swat1508/' + repoName + '/collaborators/' + collaboratorName;
        var addCollaboratorJson = {
        }

        var objData = {};
        objData.url = url;
        objData.jsonData = addCollaboratorJson;  // Json needed for Add Collaborator Operation
        objData.method = "PUT";
        objData.operation = "addCollaborator";

        return objData;
    };


    