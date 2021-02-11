


fetchJSONFile('/data.json', function(items){
    // do something with your data
    if(items && items[0]) {
        var output = '';

        var cust_char = document.getElementById("cust-char");
        var cust_number = document.getElementById("cust-number");
        var cust_symbol = document.getElementById("cust-symbol");

        var cust_ligature = document.getElementById("cust-ligature");

        

        for(var i in items[0]) {
            var item = items[0][i];
            var _content = drawJsonItem(item, "char");
            if(_content) {
                output = output +    _content; 
            }
            switch(item.type) {
                case "char":
                    cust_char.insertAdjacentHTML('beforeend', _content);
                break;

                case "number":
                    cust_number.insertAdjacentHTML('beforeend', _content);
                break;    
                case "symbol":
                    cust_symbol.insertAdjacentHTML('beforeend', _content);
                break;       
                case "ligature":
                    cust_ligature.insertAdjacentHTML('beforeend', _content);
                break;                                                
            }
            
        }
        
        
        //custGlyph.innerHTML = output;
    }
    else {
        console.log("cant load");
    }
});


function ontypetextarea() {
  var x = document.getElementById("typeheretextarea").value;
  document.getElementById("typeddisplay").innerHTML = x; 

}


function drawJsonItem(item, _char){
    //console.log(_char, item);
    //if(_char != item.type) return false;

    var class_1 = "col-sm-3";
    var class_2 = "col-sm-3";
    var class_3 = "col-sm-6";
 
    if(item.type == 'ligature') {
        class_1 = "col-sm-5";
        class_2 = "col-sm-2";
        class_3 = "col-sm-5";
    }

    var text = '<div class = "row itemrow type-'+ item.type +'"><div class = "' + class_1 + '  col-nf">';
    var char_ = item.char;
    if(item.type == "char") {
      char_ = char_.toUpperCase() + " " + char_.toLowerCase(); 
    }
    text = text + char_ + "</div>";

    text = text + '<div class = "' + class_2 + ' col-cff">' + char_ + '</div>';

    text = text + '<div class = "' + class_3 + ' col-data">';
    text = text + '<div class = "ffname"><a target = "_blank" href = "' + item.link + '">' + item.title + '</a></div>';
    text = text + '<div class = "ffabout">' + item.about + '</div>';
    

    text = text + "</div></div>";


    return text;
}


function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send(); 
}


$('#glyphs').on('shown.bs.tab', function (e) {
  
})


