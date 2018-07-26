

    export const createIssueService = function(){     
        var repoName = document.getElementById("create-issue-repoName").value;
        var issueTitle = document.getElementById("create-issue-issueTitle").value;
        var issueBody = document.getElementById("create-issue-issueDesc").value;


        let url = "https://api.github.com/repos/swat1508/" + repoName + "/issues";
        var newIssueJson = {
            "title": issueTitle,
            "body": issueBody,
            "assignees": [
                "swat1508"
            ],
            "labels": [
                "bug"
            ]
        }
        var objData = {};
        objData.url = url;
        objData.method = "POST";
        objData.operation = "createIssue";
        objData.jsonData = newIssueJson;

        return objData;
    };


    