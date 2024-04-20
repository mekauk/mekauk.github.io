var visible = false;
function showOrHideEmail(){
  if (visible){
    document.getElementById('mailId').innerHTML="Find my Mail";
    visible=false;
  }
  else{
    var myEmail="<a href='mailto:mekauk" +"@"+
                "mail.uc.edu'>mekauk"+"@"+"mail.uc.edu</a>";
    document.getElementById('mailId').innerHTML=myEmail;
    visible= true;
  }
}