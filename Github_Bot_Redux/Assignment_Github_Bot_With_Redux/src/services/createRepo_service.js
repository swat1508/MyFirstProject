

    export const createRepoService = function(){     
        var repoName = document.getElementById("create-repo-repoName").value;
        var repoDesc = document.getElementById("create-repo-repoDesc").value;
        let url = 'https://api.github.com/user/repos';
        var newRepoJson = {
            "name": repoName,
            "description": repoDesc,
            "homepage": "https://github.com",
            "private": false,
            "has_issues": true,
            "has_wiki": true
        }
        var objData = {};
        objData.url = url;
        objData.method = "POST";
        objData.jsonData = newRepoJson;
        objData.operation = "createRepo";

        return objData;
    };


    