var name= prompt("Write your Name");
       var m101=prompt("Write you Grade point in ITPM");
       var m102 = prompt("Write your Grade point in PF");
       var m103 = prompt("Write your Grade point in CN");
       var m104 = prompt("Write your Grade point in Phy");
       var m105 = prompt("Write your Grade point in Web");
       var qp = m101*3 +m102*3+ m103*3+ m104*2 +m105*3;
       var cu =3+3+3+2+3;
       var gpa=qp/cu;
      document.write("<h1>"+name);

       if(gpa >= 4){
        document.write("<h2>YOUR GPA IS 4 <\h2>")
        document.write("<h3>Grade A+<\h3>");
       }
       else if((gpa<=4 )&& (gpa>3.5)){
        var a=gpa.toFixed(1);
        document.write("<h1>YOUR GPA IS <\h1>"+a)
        document.write("<h1>Grade B<\h1>");
       }
       else if((gpa<=3.5)&& (gpa>3)){
        var a=gpa.toFixed(1);
        document.write("<h1>YOUR GPA IS <\h1>"+a)
        document.write("<h1>Grade C<\h1>");
       }

       
       else if((gpa<=3 )&& (gpa>2.5)){
        var a=gpa.toFixed(1);
        document.write("<h1>YOUR GPA IS <\h1>"+a)
        document.write("<h1>Grade D<\h1>");
       }
       else if((gpa<=2.5)&& (gpa>2)){
        var a=gpa.toFixed(1);
        document.write("<h1>YOUR GPA IS <\h1>"+a)
        document.write("<h1>Grade E<\h1>");
       }
       else{
        document.write("You fail");
       }
