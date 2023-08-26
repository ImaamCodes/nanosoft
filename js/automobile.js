function work() {
    var place = document.getElementsByClassName("pt2")[0];

    var theTable = document.createElement("table");
    var theThead = document.createElement("thead");
    var theTbody = document.createElement("tbody");
 
    var theTheadCode = "<tr><th></th>";
    var theTbodyCode = "<tr><th>Top Speed</th>";
    
    //The Type
    for (var i = 0; i<specs.types.length;i++) {
        theTheadCode += "<th>" + specs.types[i][0] + "</th>";
    } 
    theTheadCode += "</tr><tr><th></th>";
    //Stands for 
    for (var i = 0; i<specs.types.length;i++) {
        theTheadCode += "<th>"+specs.types[i][1]+"</th>";
    } 
    theTheadCode += "</tr>";

    theThead.innerHTML = theTheadCode;

    theTable.appendChild(theThead);

    //Top Speed
    for (var i = 0; i<specs.tspeed.length;i++) {
        theTbodyCode += " <td>"+specs.tspeed[i]+"km/h</td> ";
    } 
    theTbodyCode += "</tr>    <tr><th>Acceleration (0-100km/h)</th>";
    //Acceleration
    for (var i = 0; i<specs.accel.length;i++) {
        theTbodyCode += " <td>"+specs.accel[i]+"s</td> ";
    }
    theTbodyCode += "</tr>    <tr><th>Range (per charge)</th>";
    //Range
    for (var i = 0; i<specs.range.length; i++) {
        theTbodyCode += " <td>"+specs.range[i]+"km</td> ";
    } 
    theTbodyCode += "</tr>    <tr><th>Recharge Time (NanoCharge Locations)</th>";
    //Recharge Time (NanoCharge)
    for (var i = 0; i<specs.recharge1.length; i++) {
        theTbodyCode += " <td>"+specs.recharge1[i]+" minutes</td> ";
    }
    theTbodyCode += "</tr>    <tr><th>Recharge Time (Tesla Supercharger)</th>";
    //Recharge Time (Supercharger)
    for (var i = 0; i<specs.recharge2.length; i++) {
        theTbodyCode += " <td>"+specs.recharge2[i]+" minutes</td>";
    }
    theTbodyCode += "</tr>    <tr><th>Recharge Time (Other Chargers)";
    //Recharge Time (Others)
    for (var i = 0; i<specs.recharge3.length; i++) {
        theTbodyCode += " <td>"+specs.recharge3[i]+" minutes</td>";
    }
    theTbodyCode += "</tr>    <tr><th>Storage Space</th>";
    //Storage Space
    for (var i = 0; i<specs.space.length; i++) {
        theTbodyCode += " <td>"+specs.space[i]+"m<sup>3</sup></td> ";
    }
    theTbodyCode += "</tr>    <tr><th>Wheelbase</th>";
    //Wheelbase
    for (var i = 0; i<specs.wheelbase.length; i++) {
        theTbodyCode += " <td>"+specs.wheelbase[i]+"m</td> ";
    }
    theTbodyCode += "</tr>    <tr><th>Ground Clearance</th>";
    //Ground Clearance
    for (var i = 0; i<specs.gClearance.length; i++) {
        theTbodyCode += " <td>"+specs.gClearance[i]+"cm</td> ";
    }
    theTbodyCode += "</tr>    <tr><th>Horsepower</th>";
    //At last, Horsepower
    for (var i = 0; i<specs.hp.length; i++) {
        theTbodyCode += " <td>"+specs.hp[i]+"hp</td> "
    }
    theTbodyCode += "</tr></tbody>";
    
    theTbody.innerHTML = theTbodyCode;

    theTable.appendChild(theTbody);

    place.innerHTML += `<div class="pimg">
                            <img src="../../images/automobiles/${specs.name.toLowerCase().replace(" ", "_")}.png" alt="" id="ppImg">
                            <a id="aTc" href="#" class="material-icons">add_shopping_cart</a>
                        </div>`;

    place.appendChild(theTable);

    place.innerHTML += "<div id='go-upp'><a href='../automobiles.html' class='material-icons'>arrow_back</a></div>";
}