function ajex(){
    console.log("get ajex");
    $("#submit-form").submit((e)=>{
    e.preventDefault()
    $.ajax({
        url:"https://script.google.com/macros/s/AKfycbyM-u3a_4LiEHmFAovWZBMEljKwtIAsRzEtZ_4PGV1N-wlUn1H3dy0-OwbTsDWRPxky/exec",
        data:$("#submit-form").serialize(),
        method:"post",
        success:function (response){
            // alert("Form submitted successfully")
            var name=document.getElementById("txt_name")
            // swal("Good job! , Message Send Successfully","Thank You "+name.value+"", "success");
            // alert("Successfully");
            // window.location.reload()
            //window.location.href="https://google.com"
            swal({
                text: "Message sent successfully. Thank you " + name.value + "!",
                title: "Good job!",
                    icon: "success"
                }).then(function() {
                    location.reload();
                  });

        },
        error:function (err){
            alert("Something Error");
            

        }
        
    })
    
})
   }

var choose="Not Working choosing functions";
function whatsapp(){
choose="whatsapp_data";
console.log(choose);
return validation();
}
function gmail(){
choose="gmail_data";  
// console.log(choose);
console.log("Going to validation");
return validation();

}


function validation(){

let name=document.getElementById("txt_name");
let email=document.getElementById("txt_email");
let subject=document.getElementById("txt_subject");
let message=document.getElementById("txt_message");
 let common="Please fill all the feilds";
 let msg="";
 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
if(name.value.trim()==""||name.value.trim()==null){
    msg="Enter the name";
 
    return fun(common,msg);

}else if(!isNaN(name.value)){
    msg="Enter the alphabet letters";
 
    return fun(common,msg);
}
else if(email.value.trim()==""){
    msg="Enter the Email"
 return fun(common,msg);
}
else if(!emailRegex.test(email.value)){
    msg="Not a valid email id";
    return fun(common,msg);

}else if(subject.value==""){
    msg="Enter the subject"
    return fun(common,msg);
}else if(subject.value.length<=10){
  msg="Subject lessthan 10 enter more"
  return fun(common,msg);
}else if(message.value.trim()==null){
    msg="Enter the message";
    return (common,msg);
}else if(message.value.length<=null){
    msg="The message length less than 10 only enter more"
    return fun(common,msg);
}
else{
    if(choose=="whatsapp_data"){
        return getWhatsapp();
    }else if(choose=="gmail_data"){
        console.log("Going to ajex");
        ajex();
        
       
    }else{
        console.log("Nothing getted");
    }
    
}
}
function fun(common,mes){

swal(common,mes);
console.log('called')
return false;
}
function  getWhatsapp(){

var name=document.getElementById("txt_name").value;
var email=document.getElementById("txt_email").value;
var subject=document.getElementById("txt_subject").value;
var message=document.getElementById("txt_message").value;
var url="http://wa.me/+919633892190?text="
+"*Name :* "+name+"%0a"
+"*Email :* "+email+"%0a"
+"*Subject :* "+subject+"%0a"
+"*Message :* "+message+"%0a";
// swal("Good job! , Message Send Successfully","Thank You "+name+"", "success"); 
window.open(url,'_blank')
return ajex();

}

