

module.exports = class DomOperations {


    clearAllWidgets() {
        var mainDiv = document.getElementById("myWidget");
        debugger;
        if (mainDiv.hasChildNodes()) {
            var numberOfChildNodes = mainDiv.childNodes.length;
            for (let i = 1; i <= numberOfChildNodes; i++) {
                var childNodeId = "widget_" + i;
                var child = document.getElementById(childNodeId);
                mainDiv.removeChild(child);
            }
        }
    }

    createHTMLElement(html) {
        debugger;
        const template = document.createElement('template');
        template.innerHTML = html;
        return template.content.firstElementChild;
      }

      setResponseForCreateRepo(element,w_id,b_id){
          var command = element.command;
          var myArray=element.data;
        const viewRepoData = this.createHTMLElement(`
        <div id='${w_id}' class="widget">    
            <h5 class="card-title">Response For Command: ${command} <a class="close" id="${b_id}"><h6>x</h6></a></h5>
            

            <table class="table table-bordered table-striped table-hover">
            <tr>
            <td>Repo Name</td>
            <td>${myArray.name}</td>
            </tr>
            
            <tr>
            <td>Repo Desc</td>
            <td>${myArray.description}</td>
            </tr>
            
            <tr>
            <td>Repo Id</td>
            <td>${myArray.id}</td>
            </tr>
            
            <tr>
            <tdRepo Clone Url</td>
            <td${myArray.clone_url}</td>
            </tr>

            <tr>
            <td>Repo Owner Id</td>
            <td>${myArray.owner.login}</td>
            </tr>
              
            </table>
        
        </div>
        `);  
      //Try Code Ends
      
      // <button href="#" class="addBtn btn btn-primary">Add</button>       //this line was added before </div> above
    //     const addButton = viewRepoData.querySelector('button');
    //   addButton.addEventListener('click', this.addButtonInViewRepoPage);
    
     return viewRepoData;
      }

    setResponseInWidget(element,statusCode) {
        var operationType=element.type;
        var myArray=element.data; 
        var widgetId="widget_1";
        var buttonId="button_1";
        var tablearea = document.getElementById('myWidget');   

        if (tablearea.hasChildNodes()) {
            var newChildId = tablearea.childNodes.length + 1;
            widgetId = "widget_" + newChildId;
            buttonId = "button_" + newChildId;
        //    table.setAttribute("id", widgetId);
        //    anchor.setAttribute("id",buttonId);
        //    tablearea.insertBefore(table, tablearea.childNodes[0]);
        } else {
   //         table.setAttribute("id", "widget_1");
  //          anchor.setAttribute("id","button_1");
  //          tablearea.appendChild(table);
        }






        if (operationType == "createRepo") {
            if (statusCode == 201) {         
                
                if(! tablearea.hasChildNodes()){
                    tablearea.appendChild(this.setResponseForCreateRepo(element,widgetId,buttonId));
                }else{
                    tablearea.insertBefore(this.setResponseForCreateRepo(element,widgetId,buttonId),tablearea.childNodes[0]);
                }

            } //201 ends
            else if (statusCode == 422) {
                // var tablearea = document.getElementById('myWidget');
                // var table = document.createElement('table');
                // table.setAttribute("id", "command_result");


                // var tr = document.createElement('tr');
                // var td = document.createElement('td');
                // td.style.border = "1px solid blue";

                // var errorMsg = document.createTextNode("Repo with this name already exists");  //error msg
                // td.appendChild(errorMsg);
                // tr.appendChild(td);

                // table.appendChild(tr);
                // table.style.border = "3px solid black";
                // tablearea.appendChild(table);
            }


        } //createRepo ends

        else if (operationType == "createIssue") {
            if (statusCode == 201) {

                debugger;
                var tablearea = document.getElementById('myWidget');
                var table = document.createElement('table');

                table.setAttribute("id", "command_result");

                //create table data
                debugger;
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var issueTitleTag = document.createTextNode("Issue Title");  //Issue Title
                var issueTitle = document.createTextNode(myArray.title);
                td1.appendChild(issueTitleTag);
                td2.appendChild(issueTitle);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var issueDescTag = document.createTextNode("Issue Desc");     //Issue Desc
                var issueDesc = document.createTextNode(myArray.body);
                td1.appendChild(issueDescTag);
                td2.appendChild(issueDesc);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var issueUrlTag = document.createTextNode("Issue URL");  //Issue URL
                var issueUrl = document.createTextNode(myArray.url);
                td1.appendChild(issueUrlTag);
                td2.appendChild(issueUrl);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var issueAssigneeTag = document.createTextNode("Issue Assignee"); //Issue Assignee
                var issueAssignee = document.createTextNode(myArray.assignee.login);
                td1.appendChild(issueAssigneeTag);
                td2.appendChild(issueAssignee);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
                table.style.border = "3px solid black";
                tablearea.appendChild(table);


            }


        }

        if (operationType == "addComment") {
            if (statusCode == 201) {
                var tablearea = document.getElementById('myWidget');
                var table = document.createElement('table');

                table.setAttribute("id", "command_result");

                //create table data
                debugger;
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var commentIdTag = document.createTextNode("Comment ID");  //Comment Id
                var commentId = document.createTextNode(myArray.id);
                td1.appendChild(commentIdTag);
                td2.appendChild(commentId);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var commentBodyTag = document.createTextNode("Comment Body");     //Commment URL
                var commentBody = document.createTextNode(myArray.body);
                td1.appendChild(commentBodyTag);
                td2.appendChild(commentBody);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var commentUrlTag = document.createTextNode("Issue URL");     //Commment URL
                var commentUrl = document.createTextNode(myArray.issue_url);
                td1.appendChild(commentUrlTag);
                td2.appendChild(commentUrl);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
                table.style.border = "3px solid black";
                tablearea.appendChild(table);
            }
        }

        if (operationType == "closeIssue") {
            if (statusCode == 200) {
                var tablearea = document.getElementById('myWidget');
                var table = document.createElement('table');

                table.setAttribute("id", "command_result");

                //create table data
                debugger;
                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var commentNumberTag = document.createTextNode("Issue ID");  //Comment Number
                var commentNumber = document.createTextNode(myArray.number);
                td1.appendChild(commentNumberTag);
                td2.appendChild(commentNumber);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var commentIdTag = document.createTextNode("Comment Id");     //Commment Id
                var commentId = document.createTextNode(myArray.id);
                td1.appendChild(commentIdTag);
                td2.appendChild(commentId);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var commentBodyTag = document.createTextNode("Commment Body");     //Commment Body
                var commentBody = document.createTextNode(myArray.body);
                td1.appendChild(commentBodyTag);
                td2.appendChild(commentBody);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var commentTitleTag = document.createTextNode("Commment Title");     //Commment Title
                var commentTitle = document.createTextNode(myArray.title);
                td1.appendChild(commentTitleTag);
                td2.appendChild(commentTitle);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var commentStateTag = document.createTextNode("Commment State");     //Commment State
                var commentState = document.createTextNode(myArray.state);
                td1.appendChild(commentStateTag);
                td2.appendChild(commentState);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
                table.style.border = "3px solid black";

                tablearea.appendChild(table);
            }
        }

        if (operationType == "addCollaborator") {
            if (statusCode == 201) {
                debugger;

                var tablearea = document.getElementById('myWidget');
                var table = document.createElement('table');
                table.setAttribute("id", "command_result");

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var urlTag = document.createTextNode("URL");                 //URL
                var url = document.createTextNode(myArray.html_url);
                td1.appendChild(urlTag);
                td2.appendChild(url);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var inviterIdTag = document.createTextNode("Inviter Id");     //Inviter Id
                var inviterId = document.createTextNode(myArray.inviter.id);
                td1.appendChild(inviterIdTag);
                td2.appendChild(inviterId);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var inviterLoginTag = document.createTextNode("Inviter Login");    //Inviter Login
                var inviterLogin = document.createTextNode(myArray.inviter.login);
                td1.appendChild(inviterLoginTag);
                td2.appendChild(inviterLogin);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var inviteeIdTag = document.createTextNode("Invitee ID");   //Invitee ID
                var inviteeId = document.createTextNode(myArray.invitee.id);
                td1.appendChild(inviteeIdTag);
                td2.appendChild(inviteeId);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);

                var tr = document.createElement('tr');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                var inviteeLoginTag = document.createTextNode("Invitee Login");     //Invitee Login
                var inviteeLogin = document.createTextNode(myArray.invitee.login);
                td1.appendChild(inviteeLoginTag);
                td2.appendChild(inviteeLogin);
                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
                table.style.border = "3px solid black";
                tablearea.appendChild(table);
            }
        }

        else if (operationType == "viewIssues") {   //View Issues
            debugger;
            var tablearea = document.getElementById('myWidget');
            var table = document.createElement('table');

            table.setAttribute("id", "command_result");
            var tr = document.createElement('tr');
            tr.style.border = "1px solid green";
            var td = document.createElement('td');
            var td0 = document.createElement('td');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            var td3 = document.createElement('td');
            var td4 = document.createElement('td');
            var td5 = document.createElement('td');

            td.style.border = "1px solid blue";
            td0.style.border = "1px solid blue";
            td1.style.border = "1px solid blue";
            td2.style.border = "1px solid blue";
            td3.style.border = "1px solid blue";
            td4.style.border = "1px solid blue";
            td5.style.border = "1px solid blue";

            var text = document.createTextNode('Issue Number');
            var text0 = document.createTextNode('Issue ID');
            var text1 = document.createTextNode('Issue Body');
            var text2 = document.createTextNode('Issue Title');
            var text3 = document.createTextNode('Issue State');
            var text4 = document.createTextNode('Assignee Id');
            var text5 = document.createTextNode('Assignee Name');

            td.appendChild(text);
            td0.appendChild(text0);
            td1.appendChild(text1);
            td2.appendChild(text2);
            td3.appendChild(text3);
            td4.appendChild(text4);
            td5.appendChild(text5);

            tr.appendChild(td);
            tr.appendChild(td0);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);

            table.appendChild(tr);

            //create table data
            debugger;
            for (var i = 0; i < myArray.length; i++) {
                var tr = document.createElement('tr');
                tr.style.border = "1px solid green";
                var td = document.createElement('td');
                var td0 = document.createElement('td');
                var td1 = document.createElement('td');
                var td2 = document.createElement('td');
                var td3 = document.createElement('td');
                var td4 = document.createElement('td');
                var td5 = document.createElement('td');


                td.style.border = "1px solid blue";
                td0.style.border = "1px solid blue";
                td1.style.border = "1px solid blue";
                td2.style.border = "1px solid blue";
                td3.style.border = "1px solid blue";
                td4.style.border = "1px solid blue";
                td5.style.border = "1px solid blue";

                debugger;
                var text = document.createTextNode(myArray[i].number);
                var text0 = document.createTextNode(myArray[i].id);
                var text1 = document.createTextNode(myArray[i].body);
                var text2 = document.createTextNode(myArray[i].title);
                var text3 = document.createTextNode(myArray[i].state);

                var text4 = document.createTextNode("NA");
                if (myArray[i].assignee) {
                    text4 = document.createTextNode(myArray[i].assignee.id);
                }
                var text5 = document.createTextNode("NA");
                if (myArray[i].assignee) {
                    text5 = document.createTextNode(myArray[i].assignee.login);
                }

                td.appendChild(text);
                td0.appendChild(text0);
                td1.appendChild(text1);
                td2.appendChild(text2);
                td3.appendChild(text3);
                td4.appendChild(text4);
                td5.appendChild(text5);


                tr.appendChild(td);
                tr.appendChild(td0);
                tr.appendChild(td1);
                tr.appendChild(td2);
                tr.appendChild(td3);
                tr.appendChild(td4);
                tr.appendChild(td5);

                table.appendChild(tr);
            }
            table.style.border = "3px solid black";

            tablearea.appendChild(table);


        }
        else if (operationType == "getLatestComment") {
            //alert("Get Latest Comment");
            debugger;

            myArray.forEach(function (element) {
                var utcDate = element.updated_at;
                var localDate = new Date(utcDate);
                console.log(localDate);
            });


            //Finding the last updated comment and storing in array lastComment              
            var lastComment = [];
            lastComment = myArray[0];
            for (var i = 1; i < myArray.length; i++) {
                if (myArray[i].updated_at > lastComment.updated_at) {
                    lastComment = myArray[i];
                }
            }
            console.log("Last Updated Comment : ", lastComment.body);

            var tablearea = document.getElementById('myWidget');
            var table = document.createElement('table');
            table.setAttribute("id", "command_result");

            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td1.style.border = "1px solid blue";
            td2.style.border = "1px solid blue";
            var idTag = document.createTextNode("ID");                 //Id
            var idValue = document.createTextNode(lastComment.id);
            td1.appendChild(idTag);
            td2.appendChild(idValue);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);

            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td1.style.border = "1px solid blue";
            td2.style.border = "1px solid blue";
            var bodyTag = document.createTextNode("Body");     //Body
            var bodyValue = document.createTextNode(lastComment.body);
            td1.appendChild(bodyTag);
            td2.appendChild(bodyValue);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);

            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td1.style.border = "1px solid blue";
            td2.style.border = "1px solid blue";
            var urlTag = document.createTextNode("URL");                 //URL
            var urlValue = document.createTextNode(lastComment.html_url);
            td1.appendChild(urlTag);
            td2.appendChild(urlValue);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);

            var lastUpdatedInUTCFormat = lastComment.updated_at;
            var lastUpdatedInISTFormat = new Date(lastUpdatedInUTCFormat);

            var tr = document.createElement('tr');
            var td1 = document.createElement('td');
            var td2 = document.createElement('td');
            td1.style.border = "1px solid blue";
            td2.style.border = "1px solid blue";
            var updatedTag = document.createTextNode("Last Updated At");     //Last Updated At
            var updatedValue = document.createTextNode(lastUpdatedInISTFormat);
            td1.appendChild(updatedTag);
            td2.appendChild(updatedValue);
            tr.appendChild(td1);
            tr.appendChild(td2);
            table.appendChild(tr);

            table.style.border = "3px solid black";
            tablearea.appendChild(table);
        }
        //generic code for all operations to push new widget down
       


    }

}