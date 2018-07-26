

    export const closeIssueService = function(){     

        var repoName = document.getElementById("close-issue-repoName").value;
        var issueNumber = document.getElementById("close-issue-target").value;

        let url = "https://api.github.com/repos/swat1508/" + repoName + '/issues/' + issueNumber;
        var closeIssueJson = {
            "state": "close"
        }
        var objData = {};
        objData.url = url;
        objData.jsonData = closeIssueJson;
        objData.method = "PATCH";
        objData.operation = "closeIssue";
        
        return objData;
    };


    