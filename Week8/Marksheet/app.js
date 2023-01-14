window.onload=function(){

    var Name = prompt("Enter your Name")
    var RegNo = prompt("Enter your Registration No.")
    var html = +prompt("Enter the HTML Marks")
    var css = +prompt("Enter the CSS Marks")
    var flex = +prompt("Enter the Flex box Marks")
    var boot = +prompt("Enter the Bootstrap Marks")
    var java = +prompt("Enter the Javascript Marks")



    document.getElementById('name').innerHTML=Name
    document.getElementById('RegNo').innerHTML=RegNo
    document.getElementById('html').innerHTML=html
    document.getElementById('css').innerHTML=css
    document.getElementById('flex').innerHTML=flex
    document.getElementById('boot').innerHTML=boot
    document.getElementById('java').innerHTML=java
      
    if ( html >= 45 && html <= 100){ 
        var remarks = "Pass"
        document.getElementById('remarkshtml').innerHTML=remarks
    }
    else if ( html >=0 && html <= 44){
        var remarks = "Fail"
        document.getElementById('remarkshtml').innerHTML=remarks
    }
    else{
        var remarks = "N/A"
        document.getElementById('remarkshtml').innerHTML=remarks
    }

    if ( css >= 45 && css <= 100){ 
        var remarks = "Pass"
        document.getElementById('remarkscss').innerHTML=remarks
    }
    else if ( css >=0 && css <= 44){
        var remarks = "Fail"
        document.getElementById('remarkscss').innerHTML=remarks
    }
    else{
        var remarks = "N/A"
        document.getElementById('remarkscss').innerHTML=remarks
    }
    
    if ( flex >= 45 && flex <= 100){ 
        var remarks = "Pass"
        document.getElementById('remarksflex').innerHTML=remarks
    }
    else if ( flex >=0 && flex <= 44){
        var remarks = "Fail"
        document.getElementById('remarksflex').innerHTML=remarks
    }
    else{
        var remarks = "N/A"
        document.getElementById('remarksflex').innerHTML=remarks
    }

    if ( boot >= 45 && boot <= 100){ 
        var remarks = "Pass"
        document.getElementById('remarksboot').innerHTML=remarks
    }
    else if ( boot >=0 && boot <= 44){
        var remarks = "Fail"
        document.getElementById('remarksboot').innerHTML=remarks
    }
    else{
        var remarks = "N/A"
        document.getElementById('remarksboot').innerHTML=remarks
    }

    if ( java >= 45 && java <= 100){ 
        var remarks = "Pass"
        document.getElementById('remarksjava').innerHTML=remarks
    }
    else if ( java >=0 && java <= 44){
        var remarks = "Fail"
        document.getElementById('remarksjava').innerHTML=remarks
    }
    else{
        var remarks = "N/A"
        document.getElementById('remarksjava').innerHTML=remarks
    }

        var totalmarks = html + css + flex + boot + java
    if ( totalmarks <= 500) {
         document.getElementById('totalmarks').innerHTML=totalmarks
    }
    else{
        var totalmarks = "N/A"
        document.getElementById('totalmarks').innerHTML=totalmarks
    }

        var percentage = ( totalmarks / 500 ) * 100
        var per = percentage.toFixed(2)
    if ( per <= 100 )
        document.getElementById('percentage').innerHTML=per + "%"
    else{
        var per = "N/A"
        document.getElementById('percentage').innerHTML=per
    }

    if( per >=100 ){
        var grade = "N/A"
        document.getElementById('grade').innerHTML=grade
    }
    else if(per >= 80 && per <= 100){
        var grade = "A+"
        document.getElementById('grade').innerHTML=grade
    }
    else if(per >= 70 && per <= 79 ){
        var grade = "A"
        document.getElementById('grade').innerHTML=grade
    }
    else if(per >= 60 && per <= 69 ){
        var grade = "B"
        document.getElementById('grade').innerHTML=grade
    }
    else if(per >= 45 && per <= 59 ){
        var grade = "C"
        document.getElementById('grade').innerHTML=grade
    }
    else{
        var grade = "Fail"
        document.getElementById('grade').innerHTML=grade
    }
}