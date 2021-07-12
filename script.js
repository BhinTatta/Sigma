

//here the value from form

function valuecard(){
var name = document.getElementById('f-name').value;
var date = document.getElementById('f-date').value;
var rule = document.getElementById('f-rule').value;
var sign = document.getElementById('f-sign').value;
var img = document.getElementById('f-img');
	console.log(name, date , rule , sign , img);

var nameC = document.getElementById('c-name');
var dateC = document.getElementById('c-date');
var ruleC = document.getElementById('c-rule');
var signC = document.getElementById('c-sign');
var imgC = document.getElementById('c-imgout');
var cardC = document.getElementById('card');
//var imgC = document.getElementById('f-img');	
//console.log(nameC, dateC , ruleC , signC , img);
	nameC.innerHTML = name;
	dateC.innerHTML = date;
	ruleC.innerHTML = rule;
	signC.innerHTML = sign;
	imgC.style.visibility = "visible";
	cardC.style.display = "block";
		}


function showPreview(event){
	if(event.target.files.length > 0){
		var src = URL.createObjectURL(event.target.files[0]);
		var preview = document.getElementById("c-imgout");
		
		preview.src = src;
		preview.style.visibility = "hidden";
		};
	
	}

function download(){
domtoimage.toBlob(document.getElementById('card1'))
    .then(function (blob) {
        window.saveAs(blob, 'my-node.png');
    });
    
var node = document.getElementById('card1');
domtoimage.toPng(node)
    .then(function (dataUrl) {
        var img = new Image();
        img.src = dataUrl;
        document.body.appendChild(img);
    })
    .catch(function (error) {
        console.error('oops, something went wrong!', error);
    });
    
}
