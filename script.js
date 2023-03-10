  function generateCSS(){
    var title = updateTitle(document.getElementById("title").value);
    var titlecolor = updateTitleColor(document.getElementById("title-color").value);
    var name = updateName(document.getElementById("name").value);
    var namecolor = updateNameColor(document.getElementById("name-color").value);
    var world = updateWorld(document.getElementById("world").value);
    var dc = updateDC(document.getElementById("dc").value);
    var servercolor = updateServerColor(document.getElementById("server-color").value);
    var serverglow = updateServerGlow(document.getElementById("server-glow").value);
    var classjob = updateClassJob(document.getElementById("classjob").value);
    var classjobcolor = updateClassJobColor(document.getElementById("class-job-color").value);
    var level = updateLevel(document.getElementById("level").value);
    var gc = updateGC(document.getElementById("gc").value);
    var gccolor = updateGCColor(document.getElementById("gc-color").value);
    var text = updateText(document.getElementById("char-info").value);
    var textcolor = updateTextColor(document.getElementById("char-info-color").value);
    var headingcolor = updateHeadingColor(document.getElementById("heading-color").value);
    var topcolor = updatePlateTopColor(document.getElementById("plate-top-color").value);
    var bottomcolor = updatePlateBottomColor(document.getElementById("plate-btm-color").value);
    var portrait = updatePortrait(document.getElementById("portrait").value);
    
    var css = "<div style='padding: 10px;width:100%;overflow: auto;'><div style='background-image: linear-gradient(rgb("+topcolor+"), rgb("+bottomcolor+")); width: 600px; min-height: 350px; border-radius: 0.5em; filter: drop-shadow(0px 0px 5px);'><div style='background-image: linear-gradient(to right, rgb("+headingcolor+"), rgba("+headingcolor+", 0.25)); display: inline-block; padding: 5px; width: 100%; height: 55px; border-radius: 0.5em;'><div style='float: left; margin-left: 10px; line-height: 1.25; filter: drop-shadow(0px 0.5px 1px);'><span style='color: rgb("+titlecolor+"); font-size: 13px;'>"+title+"</span><br><span style='color: rgb("+namecolor+"); font-size: 14px;'>"+name+"</span></div><div style='font-size: 14px; margin-right: 30px; float: right; color: rgb("+servercolor+"); filter: "+serverglow+";'>"+world+" ["+dc+"]</div></div><div style='margin-left: 15px; width: 295px; height: 280px; overflow: auto;'><div style='line-height: 1.3; color: rgb("+classjobcolor+")'><img src='https://zenithstar95.neocities.org/adventurer-plate/classjob/"+classjob+".png' style='margin: 0px; filter: drop-shadow(0px 0px 1px #000000); float: left;' width='55'><span style='font-family: \"Verdana\", sans-serif;'>LEVEL "+level+"</span><br><span style='font-family: \"Georgia\", serif; font-size: 20px;'>"+classjob.toUpperCase()+"</span></div><br>";
    
    if(gc.length > 0){
      css += "<div style='color: rgb("+gccolor+")'><img src='https://zenithstar95.neocities.org/adventurer-plate/ranks/"+gc[0]+".png' style='margin: 0px 10px 10px; width: 35px; float: left;'><span>"+gc[1]+"</span></div><br>";
    }
    
    css += "<div style='color: rgb("+textcolor+")'>"+text+"</div></div><img style='height: 350px; width: 250px; position: absolute; top: 0px; right: 30px; z-index: -1; margin:0' src='"+portrait+"'></div></div></div>";
    
    document.getElementById("css").value = css;
  }
  
  function updateTitle(title){
    document.getElementById("plate-title").innerHTML = title;
    return title;
  }
  
  function updateTitleColor(color){
   document.getElementById("plate-title").style.color = color; 
   return convertRGB(color);
  }
  
  function updateName(name){
    document.getElementById("plate-name").innerHTML = name;
    return name;
  }
  
  function updateNameColor(color){
    document.getElementById("plate-name").style.color = color;
    return convertRGB(color);
  }
  
  function updateWorld(world){
    document.getElementById("plate-world").innerHTML = world;
    return world;
  }
  
  function updateDC(dc){
    document.getElementById("plate-dc").innerHTML = dc;
    return dc;
  }
  
  function updateServerColor(color){
    document.getElementById("world-dc").style.color = color;
    return convertRGB(color);
  }
  
  function updateServerGlow(color){
    var newstyle = "drop-shadow(0px 0px 2px " + color + ")";
    document.getElementById("world-dc").style.filter = newstyle;
    return newstyle;
  }
  
  function updateClassJob(classjob){
    document.getElementById("plate-job-icon").src = "https://zenithstar95.neocities.org/adventurer-plate/classjob/"+classjob+".png";
    classjob = classjob.replace("mage", " mage");
    classjob = classjob.replace("knight", " knight");
    document.getElementById("plate-job-name").innerHTML = classjob.toUpperCase();
    return classjob;
  }
  
  function updateLevel(level){
    document.getElementById("plate-level").innerHTML = level;
    return level;
  }
  
  function updateClassJobColor(color){
    document.getElementById("plate-job-level").style.color = color;
    return convertRGB(color);
  }
  
  function updateGC(gc){
    var result = [];
    if(gc == "none"){
      document.getElementById("grand-company").hidden = true;
    }
    else{
      document.getElementById("grand-company").hidden = false;
      document.getElementById("plate-rank-icon").src = "https://zenithstar95.neocities.org/adventurer-plate/ranks/"+gc+".png";
      result[0] = gc;
      gc = formatGC(gc);
      document.getElementById("plate-rank").innerHTML = gc;
      result[1] = gc;
    }
    return result;
  }
  
  function formatGC(gc){
      gc = gc.replace("chief", "Chief ");
      
      gc = gc.replace("storm", "Storm ");
      gc = gc.replace("serpent", "Serpent ");
      gc = gc.replace("flame", "Flame ");
      
      gc = gc.replace("private", "Private ");
      gc = gc.replace("corporal", "Corporal");
      gc = gc.replace("sergeant", "Sergeant ");
      gc = gc.replace("lieutenant", "Lieutenant");
      gc = gc.replace("captain", "Captain");
      
      gc = gc.replace("third", "Third ");
      gc = gc.replace("second", "Second ");
      gc = gc.replace("first", "First ");
      
      gc = gc.replace("class", "Class");
      
      return gc;
  }
  
  function updateGCColor(color){
    document.getElementById("plate-rank").style.color = color;
    return convertRGB(color);
  }
  
  function updateText(text){  
    document.getElementById("character-info").innerHTML = text;
    return text;
  }
  
  function updateTextColor(color){
    document.getElementById("character-info").style.color = color;
    return convertRGB(color);
  }
  
  function updateHeadingColor(color){
    var rgb = convertRGB(color);
    
    var newstyle = "linear-gradient(to right, rgb(" + rgb + "), rgba(" + rgb + ",0.25))";
    
    document.getElementById("plate-head").style["background-image"] = newstyle;
    return rgb;
  }
  
  function updatePlateTopColor(color){
    var rgb = convertRGB(color); 
    var style = document.getElementById("adv-plate-bg").style["background-image"];
    var newstyle = "linear-gradient(rgb(" + rgb + ")," + style.substring(style.lastIndexOf("rgb"));
    
    document.getElementById("adv-plate-bg").style["background-image"] = newstyle;
    return rgb;
  }
  
  function updatePlateBottomColor(color){
    var rgb = convertRGB(color); 
    var style = document.getElementById("adv-plate-bg").style["background-image"];
    var newstyle = style.substring(0, style.lastIndexOf("rgb")) + " rgb(" + rgb + "))";
    
    document.getElementById("adv-plate-bg").style["background-image"] = newstyle;
    return rgb;
  }
  
  function updatePortrait(portrait){
   document.getElementById("plate-image").src = portrait;
   return portrait;
  }
  
  function convertRGB(color){
    return parseInt(color.slice(1,3), 16) + "," + parseInt(color.slice(3,5), 16) + "," + parseInt(color.slice(5,7), 16);
  }