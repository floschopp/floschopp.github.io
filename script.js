//CONSTANTS
const totalchecklists = 2;

//GLOBALS
var checklistCurrent = 0;
var checklistItemCurrent = 0;
var checklistItemsTotal = 0;

//Functions for Buttons
function checklistMenuListButton(_checklistNum) {
  //set globals
  checklistCurrent = _checklistNum;
  checklistItemCurrent = 1;
  checklistItemsTotal = determineChecklistItemsTotal(_checklistNum);
  //hide menu
  document.getElementById("checklistMenu").style.display = "none";
  //show checklist 1
  document.getElementById("checklist" + _checklistNum).style.display = "block";
  //show checklist navbuttons
  document.getElementById("checkedButton").style.display = "block";
  document.getElementById("resetButton").style.display = "block";
  //show checklist Menu Button
  document.getElementById("checklistMenuButton").style.display = "block";
  //set active checklist item
  activeChecklistItem(checklistCurrent, checklistItemCurrent);
}

function checklistMenuButton() {
  //reset current checklist
  resetChecklistButton();
  //show menu
  document.getElementById("checklistMenu").style.display = "block";
  //hide current checklist
  document.getElementById("checklist" + checklistCurrent).style.display = "none";
  //hide checklist navbuttons
  document.getElementById("checkedButton").style.display = "none";
  document.getElementById("resetButton").style.display = "none";
  document.getElementById("nextChecklistButton").style.display = "none";
  //hide checklist Menu Button
  document.getElementById("checklistMenuButton").style.display = "none";
  //hide checklist completed message
  document.getElementById("checklistCompleted").style.display = "none";
}

function resetChecklistButton() {
  // reset color of all checklist items of current checklist
  for (var i = 1; i < checklistItemsTotal+1; i++) { 
    document.getElementById(checklistCurrent + "i" + i).style.color = "#196e6f";
  }
  // reset checkboxes
  for (var i = 1; i < checklistItemsTotal+1; i++) { 
    document.getElementById(checklistCurrent + "b" + i).checked = false;
  }
  // deactivate current checklist item
  //check if checklist is completed
  if (checklistItemCurrent > checklistItemsTotal) {
    deactiveChecklistItem(checklistCurrent, checklistItemCurrent-1);
  }
  else {
    deactiveChecklistItem(checklistCurrent, checklistItemCurrent);
  }
  // set first checklist item active
  checklistItemCurrent = 1;
  activeChecklistItem(checklistCurrent, checklistItemCurrent);
  //hide checklist completed message
  document.getElementById("checklistCompleted").style.display = "none";
  //hide next checklist button
  document.getElementById("nextChecklistButton").style.display = "none";
  //show Checked Button
  document.getElementById("checkedButton").style.display = "block";
}

function checkedChecklistButton() {
  // check current checklist item
  checkChecklistItem(checklistCurrent, checklistItemCurrent);
  // deactivate current checklist item
  deactiveChecklistItem(checklistCurrent, checklistItemCurrent);
  // increment current checklist item
  checklistItemCurrent++;
  // check if checklist is completed
  if (checklistItemCurrent > checklistItemsTotal) {
    // show checklist completed message
    document.getElementById("checklistCompleted").style.display = "block";
    //hide Checked Button
    document.getElementById("checkedButton").style.display = "none";
    //check if all checklists are completed
    if(checklistCurrent == totalchecklists) {
      return;
    }
    //show next checklist button
    document.getElementById("nextChecklistButton").style.display = "block";
    return;
  }
  // if checklist not completed:
  // set next checklist item active
  activeChecklistItem(checklistCurrent, checklistItemCurrent);
}

function nextChecklistButton() {
  //reset current checklist
  resetChecklistButton();
  //hide current checklist
  document.getElementById("checklist" + checklistCurrent).style.display = "none";
  //show next checklist
  checklistMenuListButton(checklistCurrent+1);
  //check if all checklists are completed!!!
}


//Functions for Tasks
//Checklist
function checkChecklistItem(checklistnum, itemnum) {
  // change the color of the checklist item to green
  document.getElementById(checklistnum + "i" + itemnum).style.color = "green";
  // check checkbox
  document.getElementById(checklistnum + "b" + itemnum).checked = true;
}

function activeChecklistItem(checklistnum, itemnum) {
  // set white border around checklist item
  document.getElementById(checklistnum + "i" + itemnum).style.border = "3px solid white";
}

function deactiveChecklistItem(checklistnum, itemnum) {
  // remove white border around checklist item
  document.getElementById(checklistnum + "i" + itemnum).style.border = "none";
}

function determineChecklistItemsTotal(checklistnum) {
  switch(checklistnum) {
    //checklist 1
    case 1:
      return 11;
    //checklist 2
    case 2:
      return 3;
    default:
      return 0;
  }
}





