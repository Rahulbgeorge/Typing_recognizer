var alphabet={'a':[],'b':[],'c':[],'d':[],'e':[],'f':[],'g':[],'h':[],'i':[],'j':[],'k':[],'l':[],'m':[],'n':[],'o':[],'p':[],'q':[],'r':[],'s':[],'t':[],
'u':[],'v':[],'w':[],'x':[],'y':[],'z':[],' ':[]};
var flag=false;
var type_start=0;
var keystrokes=0;
var t0,t1;
var time_taken=0;

$(document).ready(function(){

   
$("textarea").keypress(function(){
    keystrokes++;
});

$("textarea").keydown(function(){
    if(!flag)
        {
            type_start=performance.now();
            flag=true;
        }
        t0=performance.now();



});
$("textarea").keyup(function(evt){

    t1=performance.now();
    time_taken=t1-t0;
    alphabet[evt.key].push(time_taken);
    $("#output_time").text(time_taken);
    $("#output_key").text(evt.key);
    
});


});




function generate_average()
{
    var table=document.getElementById("result");
    var total;
    var row;
    var count=1;
    var cell1,cell2;
    for(var key in alphabet)
        {
            total=0;
            row=table.insertRow(count);
            cell1=row.insertCell(0);
            cell2=row.insertCell(1);
            alphabet[key].forEach(function(value){
                total+=value;
            })
            cell1.innerHTML=key;
            cell2.innerHTML=total/(alphabet[key].length);

            count++;
        }
}