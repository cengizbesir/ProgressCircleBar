# ProgressCircle

Saf Css ve Javascript ile geliştirilen dairesel ilerleme çubuğu.

Pure Css and Javascript Circle Progress Bar.

İstenirse tek javascript dosyası ile çalışabilir. (css olmadan)

If desired, it can work with a single javascript file. (without css)

Kullanım / Usage
------
```js
var progress_circle = new ProgressCircle("#main");
```
```js
//css dosyasız çalışma
//without css file
var progress_circle = new ProgressCircle("#main", true);
```
```js
// Send object
var obj = {
	text : "64%",
	percent : 64,
	lines : [{text:"Line 1"}, {text:"Line 2"}, {text:"Line 3"}, {text:"Line 4"}],
	color : "green",
	textColor: "grey"
};
```
```js
// Send Array -> object
var obj = [
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
	}
];
```
Verilerin gösterimi için / For display of data
```js
//obj -> Array or Object
progress_circle.load(obj);
```
Tekrar veri ekle / Add data again
```js
// Send object
var obj2 = {
	text : "55%",
	percent : 55,
	lines : [{text:"Line 1"}, {text:"Line 2"}, {text:"Line 3"}, {text:"Line 4"}],
	color : "brown",
	textColor: "red"
};

progress_circle.load(obj2);

progress_circle.load({text:"Ahaa", percent: 15, color: "purple"});
// add empty - circle bar
progress_circle.load({});
```
Ekrana duyarlı çalışması için ekleyiniz.(responsive)
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```
```html
<script type="text/javascript" src="assets/js/progresscircle.js"></script>
<link rel="stylesheet" href="assets/css/progresscircle.css">
```
Bu yöntem ile kullanıldığında css dosyasına ihtiyaç yoktur.
No css file is needed when used with this method.
```js
var progress_circle = new ProgressCircle("#main", true);

// only add -> <script type="text/javascript" src="assets/js/progresscircle.js"></script>
```
Çalışan bir örnek kodun tamamamı / A complete working example code
------
```js
// "#main" or ".main"-> verinin ekleneceği elemanı ifade eder / Indicates the element to which the data will be inserted.
// <div id="main"></div>

var progress_circle = new ProgressCircle("#main", true);

var obj = {
	text : "63%",
	percent : 63,
	lines : [{text:"Line 1"}, {text:"Line 2"}, {text:"Line 3"}, {text:"Line 4"}, {text:"Line 5"}],
	color : "red",
	textColor: "red"
};

progress_circle.load(obj);
```
Css buradaki projeden alınmıştır:

Css Fork-> https://github.com/tiagobalmeida/purecss-circular-progress-bar
