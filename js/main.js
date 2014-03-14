$(window).load(function(){

});

var color = ['#ff0000','#ff9600','#fff000','#00ff00','#0099ff','#7200ff','#f000ff'];

var rainbow = {
	'red': color[0],
	'orange': color[1],
	'yellow': color[2],
	'green': color[3],
	'blue': color[4],
	'indigo': color[5],
	'violet': color[6],
	animate: function() {
		$('li').each(function(){
			var elm = $(this);
			cycleColors(elm);
		});
	}
};

