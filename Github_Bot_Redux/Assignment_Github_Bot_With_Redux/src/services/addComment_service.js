

    export const addCommentService = function(){     

        var repoName = document.getElementById("add-comment-repoName").value;
        var issueNumber = document.getElementById("add-comment-issueNumber").value;
        var commentBody = document.getElementById("add-comment-commentBody").value;

        let url = "https://api.github.com/repos/swat1508/" + repoName + '/issues/' + issueNumber + "/comments";
        var addCommentJson = {
            "body": commentBody
        }
        var objData = {};
        objData.url = url;
        objData.jsonData = addCommentJson;
        objData.method = "POST";
        objData.operation = "addComment";

        return objData;
    };


    