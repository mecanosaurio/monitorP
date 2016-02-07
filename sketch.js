var c;
var i, j, k,r, ph;
//var img = new p5.Image();
var labels, cur_label, words, test_word, sort_words, mX, mN;

var font1, font2;
var index=0;
function preload(){
	font1  = loadFont("Minecraft.ttf");
	font2 = loadFont("SadMachine.ttf");
}

function setup() {
  	canvas = createCanvas(900,800);
  	//canvas.position = (0,0);
  	canvas.style("display: block;");
  	canvas.style("margin-left: auto;");
  	canvas.style("margin-right: auto;");
  	//canvas.parent(".span11");

	//backgrund(05);
  	//stroke(220);
  	frameRate(12);
  	textFont (font2);

	labels = Object.keys(data); // lista de labels
  	cur_label = labels[0];
  	//words = Object.keys(data[cur_label]).sort(function(a,b){return data[cur_label][a]-data[cur_label][b]}); //lista de palabras para cada label
  	words = Object.keys(data[cur_label]).sort();
  	sort_words = Object.keys(data[cur_label]).sort(function(a,b){return data[cur_label][a]-data[cur_label][b]});
  	mN = data[cur_label][sort_words[0]];
  	mX = data[cur_label][sort_words[sort_words.length-1]];
  	test_word = words[0];
  	console.log(mN+' '+mX);
}

function draw() {
	//clear(); //background(0);
	colorMode(RGB);
	noStroke();
	fill(0,25);
	rect(0,0,width, height);

	strokeWeight(5);
	stroke(0,0,245,75);
	noFill();
	rect(10,10,width-20, height-20);

	strokeWeight(2);
	stroke(245,0,0);
	line (width/2, 100, width/2, 710);
	
	// text for screen title
	textAlign(CENTER);
	textSize(52);
	noStroke();
	fill(0,245,0);
	text(cur_label, width/2, 50);
	
	// text for labels
	textAlign(RIGHT);
	textSize(36);
	
	// draw the bars for given key
	x =20+width/2;
	y = 10;
	for (w in words){
		var new_long = map( data[cur_label][words[w]], mN, mX, 10, 360 );
		var new_tone = map( data[cur_label][words[w]], mN, mX, 0, 255 );
		//console.log(nc+' , '+nd);
		stroke(255);
		noFill();
		rect(x, y+100+w*20, new_long, 10);
		noStroke();
		colorMode(HSB);
		fill(new_long,50+new_tone,50+new_tone);
		text(w+'::'+words[w]+' ['+data[cur_label][words[w]]+']', x-40, y+110+w*20);
		colorMode(RGB);
		//text(i+'::'+dk[i]+' ['+data[ke][dk[i]]+']', x+10+data[ke][dk[i]]*2, y+110+i*20);
		//console.log (words[w]+" :: "+data[cur_label][words[w]]);
	}
	// draw buttons
	textAlign(CENTER);
	textSize(20);
	noStroke();
	fill(255,50);
	text("-«-",width/2-110,height-38);
	text("-»-",width/2+110,height-38);
	noFill();
	stroke(255,50);
	rect(width/2-130,height-50,40,20);
	rect(width/2+90,height-50,40,20);

	// draw time
	noStroke();
	fill(255, 60);
	textSize(18);
	text(day()+'/'+month()+'/'+year(), width/2, height-40);
	text(hour()+':'+minute()+':'+second(), width/2, height-30);
}

function mousePressed(){
	
	if ( ((mouseX>width/2-130) && (mouseX<width/2-90)) &&((mouseY>height-50)&&(mouseY<height-30)) ){
		fill(127,255, 255);
		rect(width/2-130,height-50,40,20);
		index += 1;
		if (index>16){
			index=0;
		}
	} else if ( ((mouseX>width/2+90) && (mouseX<width/2+130)) &&((mouseY>height-50)&&(mouseY<height-30)) ){
		fill(255, 32, 255);
		rect(width/2+90,height-50,40,20);
		index -= 1;
		if (index<0){
			index=16;
		}
	}
	  	//
  	cur_label = labels[index];
  	words = Object.keys(data[cur_label]).sort();; //lista de palabras para la clase dada
  	test_word = words[0];
   	sort_words = Object.keys(data[cur_label]).sort(function(a,b){return data[cur_label][a]-data[cur_label][b]});
  	mN = data[cur_label][sort_words[0]];
  	mX = data[cur_label][sort_words[sort_words.length-1]];
   	console.log(mN+' '+mX);
}