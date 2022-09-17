# ProgressCircle

Saf Css ve Javascript ile geliştirilen dairesel ilerleme çubuğu. / Pure Css and Javascript Circle Progress Bar.

İstenirse tek javascript dosyası ile çalışabilir. (css olmadan) / If desired, it can work with a single javascript file. (without css)

![Progress Circle Bar Screenshot](https://github.com/cengizbesir/ProgressCircleBar/blob/main/ProgressCircleBar.png)

Usage (recommended usage) / Kullanım
------
```js
const obj = {
		selector: "body" , 
		css: true , //without css file
		data: [ {
					text : "1.<br/>44%<br/>Exam." ,
					percent : 44 ,
					lines : [ { text: "Line 1", click: function() { console.log("Line 1 Click!"); } }
							, { text: "Line 2", click: function() { console.log("Line 2 Click!"); } } ] ,
					color : "red" ,
					textColor: "grey" ,
					click: function() {
						console.log("Container Click!");
					}
				},
				{
					text : "63%",
					percent : 63,
					lines : [{text:"Line 1"}, {text:"Line 2"}],
					color : "green",
					textColor: "blue"
				},
				{
					text : "3.<br/>75%<br/>Exam.",
					percent : 75,
					lines : [{text:"Single Line"}],
					color : "blue",
					textColor: "red"
				},
				{
					text : "4.<br/>32%<br/>Exam.",
					percent : 32,
					color : "pink",
					textColor: "brown"
				},
				{
					text : "95",
					percent : 95
				},
				{
				//empty
				} ]
	};


const pc = new ProgressCircle(obj);
```
```js
const pc = new ProgressCircle({ selector: "body", css: true });

let obj = [
	{
		text : "1.<br/>44%<br/>Exam.",
		percent : 44,
		lines : [{text:"Line 1"}, {text:"Line 2"}],
		color : "red",
		textColor: "grey"
	},
	{
		text : "63%",
		percent : 63,
		lines : [{text:"Line 1"}, {text:"Line 2"}],
		color : "green",
		textColor: "blue"
	}
];
```
For display of data / Verilerin gösterimi için...
```js
//obj -> Array or Object
pc.load(obj);
```
Tekrar veri ekle / Add data again
```js
// Send object
let obj2 = {
	text : "55%",
	percent : 55,
	lines : [{text:"Line 1"}, {text:"Line 2"}, {text:"Line 3"}, {text:"Line 4"}],
	color : "brown",
	textColor: "red"
};

pc.load(obj2);

pc.load({text:"Ahaa", percent: 15, color: "purple"});
// add empty - circle bar
pc.load({});
```
Ekrana duyarlı çalışması için ekleyiniz.(responsive)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
```html
<script type="text/javascript" src="assets/js/progresscircle.js"></script>
<link rel="stylesheet" href="assets/css/progresscircle.css">
```

Css buradaki projeden alınmıştır:

Css Fork-> https://github.com/tiagobalmeida/purecss-circular-progress-bar
