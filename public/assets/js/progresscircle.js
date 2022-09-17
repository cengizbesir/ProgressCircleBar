/*!
 * progresscircle.js
 * version : 2.0
 * author : Cengiz Beşir
 * license : MIT
 */
class ProgressCircle {

	constructor(_main, _css, _data) {
		
		if(typeof(_main) === "object") {

			const template = {selector: "body", css: true, data: []};
			const _obj = Object.assign(template, _main);
			
			_main = _obj.selector;
			_css = _obj.css;
			_data = _obj.data;
		}
		
		this.main = document.querySelector(_main);
		
		if(this.main === null) {
			return;
		}
		
		this.css = _css;
		this.colors = ["red", "green", "blue", "orange", "yellow", "teal", "black", "brown", "olive", "purple", "pink", "grey"];

		this.app = {
			data : [],
			mainContainer : {},
			containers : []
		};
		
		this.createApp();

		if(_data !== undefined && _data !== null) {
			this.app.data = _data;
			this.load(_data);
		}
	}

	createApp() {

		this.app.mainContainer = document.createElement("div");
		this.app.mainContainer.setAttribute("class", "pc-app");
		
		this.main.appendChild(this.app.mainContainer);

		if(this.css !== undefined && this.css) {
			const css = '.pc-app{display:inline-block;font-size:10px;--red:#d01919;--green:#50b23e;--blue:#1678c2;--orange:#f26202;--yellow:#eaae00;--teal:#009c95;--black:#27292a;--brown:#975b33;--olive:#a7bd0d;--violet:#6435c9;--purple:#a333c8;--pink:#e03997;--grey:#767676;--border:#bbb;--offwhite:#f2e9e1}.pc-container{margin:.3em;padding:.9em .2em .9em .2em;width:18em;border-radius:.5em;border:1px solid var(--border);display:inline-grid;cursor:pointer}.pc-container .list-parent{font-size:2em;padding:.6em .6em .2em .6em}.pc-container .list-parent span{padding:.2em;border-bottom:1px solid var(--border);text-align:center;display:block}.pc-container .list-parent span:nth-child(1){border-top:1px solid var(--border)}.progress-circle{font-size:3em;width:5em;height:5em;padding:0;margin:auto;border-radius:50%;background-color:var(--offwhite);position:relative}.progress-circle::after{top:.5em;left:.5em;width:4em;height:4em;border:none;border-radius:50%;text-align:center;content:" ";background-color:#fff;display:block;position:absolute}.progress-circle:hover:after{top:.6em;left:.6em;width:3.8em;height:3.8em}.progress-circle span{width:5em;text-align:center;z-index:2;position:absolute;display:block}.progress-circle span div{width:5em;height:5em;color:var(--grey);text-align:center;vertical-align:middle;display:table-cell}.progress-circle .value-bar.red{border:.6em solid var(--red)!important}.progress-circle .value-bar.green{border:.6em solid var(--green)!important}.progress-circle .value-bar.blue{border:.6em solid var(--blue)!important}.progress-circle .value-bar.orange{border:.6em solid var(--orange)!important}.progress-circle .value-bar.yellow{border:.6em solid var(--yellow)!important}.progress-circle .value-bar.teal{border:.6em solid var(--teal)!important}.progress-circle .value-bar.black{border:.6em solid var(--black)!important}.progress-circle .value-bar.brown{border:.6em solid var(--brown)!important}.progress-circle .value-bar.olive{border:.6em solid var(--olive)!important}.progress-circle .value-bar.purple{border:.6em solid var(--purple)!important}.progress-circle .value-bar.pink{border:.6em solid var(--pink)!important}.progress-circle .value-bar.grey{border:.6em solid var(--grey)!important}.progress-circle .first50-bar.red{background-color:var(--red)!important}.progress-circle .first50-bar.green{background-color:var(--green)!important}.progress-circle .first50-bar.blue{background-color:var(--blue)!important}.progress-circle .first50-bar.orange{background-color:var(--orange)!important}.progress-circle .first50-bar.yellow{background-color:var(--yellow)!important}.progress-circle .first50-bar.teal{background-color:var(--teal)!important}.progress-circle .first50-bar.black{background-color:var(--black)!important}.progress-circle .first50-bar.brown{background-color:var(--brown)!important}.progress-circle .first50-bar.olive{background-color:var(--olive)!important}.progress-circle .first50-bar.purple{background-color:var(--purple)!important}.progress-circle .first50-bar.pink{background-color:var(--pink)!important}.progress-circle .first50-bar.grey{background-color:var(--grey)!important}.progress-circle .red{color:var(--red)!important}.progress-circle .green{color:var(--green)!important}.progress-circle .blue{color:var(--blue)!important}.progress-circle .orange{color:var(--orange)!important}.progress-circle .yellow{color:var(--yellow)!important}.progress-circle .teal{color:var(--teal)!important}.progress-circle .black{color:var(--black)!important}.progress-circle .brown{color:var(--brown)!important}.progress-circle .olive{color:var(--olive)!important}.progress-circle .purple{color:var(--purple)!important}.progress-circle .pink{color:var(--pink)!important}.progress-circle .grey{color:var(--grey)!important}.progress-circle .left-half-clipper{width:5em;height:5em;border-radius:50%;clip:rect(0,5em,5em,2.5em);position:absolute}.progress-circle.over50 .left-half-clipper{clip:rect(auto,auto,auto,auto)}.progress-circle .value-bar{width:5em;height:5em;border-radius:50%;border:.6em solid var(--grey);box-sizing:border-box;clip:rect(0,2.5em,5em,0);position:absolute}.progress-circle.over50 .first50-bar{width:5em;height:5em;background-color:var(--grey);border-radius:50%;clip:rect(0,5em,5em,2.5em);position:absolute}.progress-circle:not(.over50) .first50-bar{display:none}.progress-circle.p0 .value-bar{display:none}.progress-circle.p1 .value-bar{transform:rotate(4deg)}.progress-circle.p2 .value-bar{transform:rotate(7deg)}.progress-circle.p3 .value-bar{transform:rotate(11deg)}.progress-circle.p4 .value-bar{transform:rotate(14deg)}.progress-circle.p5 .value-bar{transform:rotate(18deg)}.progress-circle.p6 .value-bar{transform:rotate(22deg)}.progress-circle.p7 .value-bar{transform:rotate(25deg)}.progress-circle.p8 .value-bar{transform:rotate(29deg)}.progress-circle.p9 .value-bar{transform:rotate(32deg)}.progress-circle.p10 .value-bar{transform:rotate(36deg)}.progress-circle.p11 .value-bar{transform:rotate(40deg)}.progress-circle.p12 .value-bar{transform:rotate(43deg)}.progress-circle.p13 .value-bar{transform:rotate(47deg)}.progress-circle.p14 .value-bar{transform:rotate(50deg)}.progress-circle.p15 .value-bar{transform:rotate(54deg)}.progress-circle.p16 .value-bar{transform:rotate(58deg)}.progress-circle.p17 .value-bar{transform:rotate(61deg)}.progress-circle.p18 .value-bar{transform:rotate(65deg)}.progress-circle.p19 .value-bar{transform:rotate(68deg)}.progress-circle.p20 .value-bar{transform:rotate(72deg)}.progress-circle.p21 .value-bar{transform:rotate(76deg)}.progress-circle.p22 .value-bar{transform:rotate(79deg)}.progress-circle.p23 .value-bar{transform:rotate(83deg)}.progress-circle.p24 .value-bar{transform:rotate(86deg)}.progress-circle.p25 .value-bar{transform:rotate(90deg)}.progress-circle.p26 .value-bar{transform:rotate(94deg)}.progress-circle.p27 .value-bar{transform:rotate(97deg)}.progress-circle.p28 .value-bar{transform:rotate(101deg)}.progress-circle.p29 .value-bar{transform:rotate(104deg)}.progress-circle.p30 .value-bar{transform:rotate(108deg)}.progress-circle.p31 .value-bar{transform:rotate(112deg)}.progress-circle.p32 .value-bar{transform:rotate(115deg)}.progress-circle.p33 .value-bar{transform:rotate(119deg)}.progress-circle.p34 .value-bar{transform:rotate(122deg)}.progress-circle.p35 .value-bar{transform:rotate(126deg)}.progress-circle.p36 .value-bar{transform:rotate(130deg)}.progress-circle.p37 .value-bar{transform:rotate(133deg)}.progress-circle.p38 .value-bar{transform:rotate(137deg)}.progress-circle.p39 .value-bar{transform:rotate(140deg)}.progress-circle.p40 .value-bar{transform:rotate(144deg)}.progress-circle.p41 .value-bar{transform:rotate(148deg)}.progress-circle.p42 .value-bar{transform:rotate(151deg)}.progress-circle.p43 .value-bar{transform:rotate(155deg)}.progress-circle.p44 .value-bar{transform:rotate(158deg)}.progress-circle.p45 .value-bar{transform:rotate(162deg)}.progress-circle.p46 .value-bar{transform:rotate(166deg)}.progress-circle.p47 .value-bar{transform:rotate(169deg)}.progress-circle.p48 .value-bar{transform:rotate(173deg)}.progress-circle.p49 .value-bar{transform:rotate(176deg)}.progress-circle.p50 .value-bar{transform:rotate(180deg)}.progress-circle.p51 .value-bar{transform:rotate(184deg)}.progress-circle.p52 .value-bar{transform:rotate(187deg)}.progress-circle.p53 .value-bar{transform:rotate(191deg)}.progress-circle.p54 .value-bar{transform:rotate(194deg)}.progress-circle.p55 .value-bar{transform:rotate(198deg)}.progress-circle.p56 .value-bar{transform:rotate(202deg)}.progress-circle.p57 .value-bar{transform:rotate(205deg)}.progress-circle.p58 .value-bar{transform:rotate(209deg)}.progress-circle.p59 .value-bar{transform:rotate(212deg)}.progress-circle.p60 .value-bar{transform:rotate(216deg)}.progress-circle.p61 .value-bar{transform:rotate(220deg)}.progress-circle.p62 .value-bar{transform:rotate(223deg)}.progress-circle.p63 .value-bar{transform:rotate(227deg)}.progress-circle.p64 .value-bar{transform:rotate(230deg)}.progress-circle.p65 .value-bar{transform:rotate(234deg)}.progress-circle.p66 .value-bar{transform:rotate(238deg)}.progress-circle.p67 .value-bar{transform:rotate(241deg)}.progress-circle.p68 .value-bar{transform:rotate(245deg)}.progress-circle.p69 .value-bar{transform:rotate(248deg)}.progress-circle.p70 .value-bar{transform:rotate(252deg)}.progress-circle.p71 .value-bar{transform:rotate(256deg)}.progress-circle.p72 .value-bar{transform:rotate(259deg)}.progress-circle.p73 .value-bar{transform:rotate(263deg)}.progress-circle.p74 .value-bar{transform:rotate(266deg)}.progress-circle.p75 .value-bar{transform:rotate(270deg)}.progress-circle.p76 .value-bar{transform:rotate(274deg)}.progress-circle.p77 .value-bar{transform:rotate(277deg)}.progress-circle.p78 .value-bar{transform:rotate(281deg)}.progress-circle.p79 .value-bar{transform:rotate(284deg)}.progress-circle.p80 .value-bar{transform:rotate(288deg)}.progress-circle.p81 .value-bar{transform:rotate(292deg)}.progress-circle.p82 .value-bar{transform:rotate(295deg)}.progress-circle.p83 .value-bar{transform:rotate(299deg)}.progress-circle.p84 .value-bar{transform:rotate(302deg)}.progress-circle.p85 .value-bar{transform:rotate(306deg)}.progress-circle.p86 .value-bar{transform:rotate(310deg)}.progress-circle.p87 .value-bar{transform:rotate(313deg)}.progress-circle.p88 .value-bar{transform:rotate(317deg)}.progress-circle.p89 .value-bar{transform:rotate(320deg)}.progress-circle.p90 .value-bar{transform:rotate(324deg)}.progress-circle.p91 .value-bar{transform:rotate(328deg)}.progress-circle.p92 .value-bar{transform:rotate(331deg)}.progress-circle.p93 .value-bar{transform:rotate(335deg)}.progress-circle.p94 .value-bar{transform:rotate(338deg)}.progress-circle.p95 .value-bar{transform:rotate(342deg)}.progress-circle.p96 .value-bar{transform:rotate(346deg)}.progress-circle.p97 .value-bar{transform:rotate(349deg)}.progress-circle.p98 .value-bar{transform:rotate(353deg)}.progress-circle.p99 .value-bar{transform:rotate(356deg)}.progress-circle.p100 .value-bar{transform:rotate(360deg)}@media screen and (max-width:414px){.pc-container{margin:1em 0 1em 0;padding:1em 0 1em 0;width:100%}}';
			const style = document.createElement("style");
			style.innerHTML = css;
			const head = document.head || document.getElementsByTagName('head')[0];
			if(head !== null){
				head.appendChild(style);
			}else{
				this.main.appendChild(style);
			}
		}
	}

	load(data) {
		
		if( Array.isArray(data) ) {

			for(let i = 0; i < data.length; i++){
				this.createContainer(this.validate(data[i]));
			}

		}else if(typeof(data) === "object"){
			this.createContainer(this.validate(data));		
		}

	}

	validate(data){
		const template = {textColor: "grey", text: "", color: "grey", percent: 0, click: null};
		const obj = Object.assign(template, data);

		return obj;
	}

	createContainer(obj) {

		const span = document.createElement("span");
		const mainText = document.createElement("div");
		mainText.setAttribute("class", obj.textColor);
		mainText.innerHTML = obj.text;
		span.appendChild(mainText);

		const first50Bar = document.createElement("div");
		first50Bar.setAttribute("class", "first50-bar");
		
		const valueBar = document.createElement("div");
		valueBar.setAttribute("class", "value-bar");
		
		const leftHalfClipper = document.createElement("div");
		leftHalfClipper.setAttribute("class", "left-half-clipper");
		leftHalfClipper.appendChild(first50Bar);
		leftHalfClipper.appendChild(valueBar);

		const progressCircle = document.createElement("div");
		progressCircle.setAttribute("class", "progress-circle");
		progressCircle.appendChild(span);
		progressCircle.appendChild(leftHalfClipper);
		
		if(obj.click !== null && typeof(obj.click) === "function") {
			
			progressCircle.addEventListener("click", function() {
				obj.click();
			});
		}
		
		let progressContainer = document.createElement("div");
		progressContainer.setAttribute("class", "pc-container");
		progressContainer.appendChild(progressCircle);

		let linesParent = {};
		let lines = [];

		if(obj.lines && obj.lines.length > 0) {

			let fragment = document.createDocumentFragment();

			linesParent = document.createElement("div");
			linesParent.setAttribute("class", "list-parent");

			for(let i = 0; i < obj.lines.length; i++) {

				let lineSpan = document.createElement("span");
				lineSpan.innerHTML = obj.lines[i].text;

				if(obj.lines[i].click !== null && typeof(obj.lines[i].click) === "function") {
					let line = obj.lines[i];
					lineSpan.addEventListener("click", function() {
						line.click();
					});
				}

				fragment.appendChild(lineSpan);
				lines.push(lineSpan);
			}

			linesParent.appendChild(fragment);

			progressContainer.appendChild(linesParent);
		}
		
		const temp = {
			container: progressContainer,
			progressCircle: {
				container : progressCircle,
				leftHalfClipper: {
					first50Bar: first50Bar,
					valueBar: valueBar
				}
			},
			linesParent: linesParent,
			lines: lines,
			percent: obj.percent,
			color: obj.color,
			text: obj.text,
			click: obj.click
		};

		this.containerCreateView(temp);

		this.app.containers.push(temp);
		this.app.mainContainer.appendChild(progressContainer);
	}

	containerCreateView(container) {
	
		const progressCircle = container.progressCircle.container;

		if(container.percent > 50){
			if(!progressCircle.classList.contains("over50")){
				progressCircle.classList.add("over50");
			}
		}else{
			progressCircle.classList.remove("over50");
		}

		progressCircle.classList.add("p" + parseInt(container.percent));

		const valueBar = container.progressCircle.leftHalfClipper.valueBar;

		if(!valueBar.classList.contains(container.color) && this.colors !== undefined){

			const first50Bar = container.progressCircle.leftHalfClipper.first50Bar;

			for(let i = 0; i < this.colors.length; i++){
				valueBar.classList.remove(this.colors[i]);
				first50Bar.classList.remove(this.colors[i]);
			}

			valueBar.classList.add(container.color);
			first50Bar.classList.add(container.color);
		}

	}

	update(data) {

		this.app.mainContainer.innerHTML = "";

		let obj = [];
		
		if( Array.isArray(data) && Array.isArray(this.app.data) ) {
			
			obj = Object.assign(this.app.data, data);

		}else if( Array.isArray(data) && !Array.isArray(this.app.data) ){
			
			obj = data;

		}else if( !Array.isArray(data) && Array.isArray(this.app.data) ){
			
			let index = Object.assign(this.app.data[0], data);
			this.app.data[0] = index;
			
			obj = this.app.data;

		}

		if(obj === null) {
			this.app.data = [];
			return;
		}
		
		this.app.data = obj;

		this.load(obj);

	}

	getApp(){
		return this.app;
	}

	getColors(){
		return this.colors;
	}

}