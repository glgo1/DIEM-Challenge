      var z = 0;
      var newjs;
      var newcss;      
      var newhtml;
      var count = 0;
      window.addEventListener("DOMContentLoaded",function(){myfunctions()}); 
      function myfunctions() {
    //Name Clicked(Cursor is in)
    function NameClick(){
      var Name = document.getElementById("name").value;      
      if (Name == ""){
      document.getElementById("nameOutput").innerHTML = "Hello there! What is your name?";
      }
      else{
      document.getElementById("nameOutput").innerHTML = "Hi, " + Name + "!";        
      }
    }
    //Name Not Clicked(Cursor is out)
    function NameNotClick(){
      var Name = document.getElementById("name").value;
      if (Name == "") {
        document.getElementById("nameOutput").innerHTML = "Would you mind entering your name?";
    }
      else{
        document.getElementById("nameOutput").innerHTML = "Hi, " + Name + "!";  
      }
    }
    //Birthday and Age 
    function BDClick(){
      var mybirthday = document.getElementById("date").value;
      const mydate = mybirthday.split("-");
      const today = new Date(); 
      var thisMonth = today.getMonth() + 1;
      if (mydate[1] <= thisMonth && mydate[0] != 0){
        var years = today.getFullYear() - mydate[0];
        if (years < 0){
          years = 0;
        }
        else if (mydate[1] == thisMonth && mydate[2] > today.getDate()){
          years = today.getFullYear() - mydate[0] -  1;
        }
        document.getElementById("ageOutput").innerHTML = "Your age is " + years + "!";
        z = 1;
      }
      else if (mydate[1] > thisMonth && mydate[0] != 0){
        var years =  today.getFullYear() - mydate[0] - 1;
        if (years < 0){
          years = 0;
        }
        document.getElementById("ageOutput").innerHTML = "Your age is " + years + "!";
        z = 1;
      }     
      else if (z == 0){
        document.getElementById("ageOutput").innerHTML = "Lemme guess, your age is...";
        z = 1;
      }
      else if (z == 1){
        document.getElementById("ageOutput").innerHTML = "Would you mind entering your birthday?";
      }
    }
    //Dark Mode
    function DarkChange(){
        document.getElementById("myDIV").className = "darkstyle";
        document.getElementById("themeOutput").innerHTML = "You chose Dark Mode!";
    }
    //Light Mode
    function LightChange(){
        document.getElementById("myDIV").className = "lightstyle";
        document.getElementById("themeOutput").innerHTML = "You chose Light Mode!";
    }
    //Creating JavaScript Button with functions
    function JSButton(){
        newjs = document.createElement("BUTTON");
        newjs.innerHTML = "JavaScript";
        newjs.className = "btn btn-success btn-sm";
        newjs.style = "margin-right: 5px";
        document.getElementById("skillsOutput").appendChild(newjs);
        newjs.onmouseover = function(){
          newjs.className = "btn btn-danger btn-sm";
        }
        newjs.onmouseout = function(){
          newjs.className = "btn btn-success btn-sm";
        }
        newjs.onclick = function(){
          newjs.remove();
          newjs = document.createElement("BUTTON");
          newjs.innerHTML = "JavaScript";
          newjs.className = "btn btn-success btn-sm";
          newjs.style = "margin-right: 5px";
          document.getElementById("skills").appendChild(newjs);
          newjs.onclick = function(){
            newjs.remove();
            JSButton();
          }
        }
    }
        //Creating CSS Button with functions
        function CSSButton(){
        newcss = document.createElement("BUTTON");
        newcss.innerHTML = "CSS";
        newcss.className = "btn btn-success btn-sm";
        newcss.style = "margin-right: 5px";
        document.getElementById("skillsOutput").appendChild(newcss);
        newcss.onmouseover = function(){
          newcss.className = "btn btn-danger btn-sm";
        }
        newcss.onmouseout = function(){
          newcss.className = "btn btn-success btn-sm";
        }
        newcss.onclick = function(){
          newcss.remove();
          newcss = document.createElement("BUTTON");
          newcss.innerHTML = "CSS";
          newcss.className = "btn btn-success btn-sm";
          newcss.style = "margin-right: 5px";
          document.getElementById("skills").appendChild(newcss);
          newcss.onclick = function(){
            newcss.remove();
            CSSButton();
          }
        }
    }
    //Creating HTML Button with functions
        function HTMLButton(){
        newhtml = document.createElement("BUTTON");
        newhtml.innerHTML = "HTML";
        newhtml.className = "btn btn-success btn-sm";
        newhtml.style = "margin-right: 5px";
        document.getElementById("skillsOutput").appendChild(newhtml);
        newhtml.onmouseover = function(){
          newhtml.className = "btn btn-danger btn-sm";
        }
        newhtml.onmouseout = function(){
          newhtml.className = "btn btn-success btn-sm";
        }
        newhtml.onclick = function(){
          newhtml.remove();
          newhtml = document.createElement("BUTTON");
          newhtml.innerHTML = "HTML";
          newhtml.className = "btn btn-success btn-sm";
          newhtml.style = "margin-right: 5px";
          document.getElementById("skills").appendChild(newhtml);
          newhtml.onclick = function(){
            newhtml.remove();
            HTMLButton();
          }
        }
      }
      //interactions

            var namelabel = document.getElementById("name");
            namelabel.onblur = function(){
              NameNotClick();
            }
            namelabel.onfocus = function(){
              NameClick();
            }
            var datelabel = document.getElementById("date");
            datelabel.onblur = function(){
              BDClick();
            }
            datelabel.onfocus = function(){
              BDClick();
            }  
            var lighttheme = document.getElementById("light");
            var darktheme = document.getElementById("dark");
            lighttheme.onchange = function(){
              LightChange();
            }
            darktheme.onchange = function(){
              DarkChange();
            }
            var htmlbutton = document.getElementById("html");
            var cssbutton = document.getElementById("css");
            var jsbutton = document.getElementById("javascript");
            htmlbutton.onclick = function(){
              htmlbutton.remove();
              HTMLButton();
            }
            cssbutton.onclick = function(){
              cssbutton.remove();
              CSSButton();
            }
            jsbutton.onclick = function(){
              jsbutton.remove();
              JSButton();
            }
      }