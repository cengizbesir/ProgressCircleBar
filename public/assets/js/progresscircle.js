/*!
 * progresscircle.js
 * version : 1.0
 * author : Cengiz Beşir
 * license : MIT
 */
class ProgressCircle {

	constructor(_main, _css) {
		this.colors = ["red", "green", "blue", "orange", "yellow", "teal", "black", "brown", "olive", "purple", "pink", "grey"];
		this.main = document.querySelector(_main);
		this.css = _css;

		this.app = {
			view : {},
			containers : []
		};
		
		this.createApp();
	}
	
	createApp() {
		const app = this.app;
		app.view = document.createElement("div");
		app.view.setAttribute("class", "pc-app");
		this.main.appendChild(app.view);

		if(this.css === true){
			const css = '.pc-app{font-size:10px;--red:#d01919;--green:#50b23e;--blue:#1678c2;--orange:#f26202;--yellow:#eaae00;--teal:#009c95;--black:#27292a;--brown:#975b33;--olive:#a7bd0d;--violet:#6435c9;--purple:#a333c8;--pink:#e03997;--grey:#767676;--border:#bbb;--offwhite:#f2e9e1}.pc-container{margin:.3em;padding:.9em .2em .9em .2em;width:18em;border-radius:.5em;border:1px solid var(--border);display:inline-grid;cursor:pointer}.pc-container .list-parent{font-size:2em;padding:.6em .6em .2em .6em}.pc-container .list-parent span{padding:.2em;border-bottom:1px solid var(--border);text-align:center;display:block}.pc-container .list-parent span:nth-child(1){border-top:1px solid var(--border)}.progress-circle{font-size:3em;width:5em;height:5em;padding:0;margin:auto;border-radius:50%;background-color:var(--offwhite);position:relative}.progress-circle::after{top:.5em;left:.5em;width:4em;height:4em;border:none;border-radius:50%;text-align:center;content:" ";background-color:#fff;display:block;position:absolute}.progress-circle:hover:after{top:.6em;left:.6em;width:3.8em;height:3.8em}.progress-circle span{width:5em;text-align:center;z-index:2;position:absolute;display:block}.progress-circle span div{width:5em;height:5em;color:var(--grey);text-align:center;vertical-align:middle;display:table-cell}.progress-circle .value-bar.red{border:.6em solid var(--red)!important}.progress-circle .value-bar.green{border:.6em solid var(--green)!important}.progress-circle .value-bar.blue{border:.6em solid var(--blue)!important}.progress-circle .value-bar.orange{border:.6em solid var(--orange)!important}.progress-circle .value-bar.yellow{border:.6em solid var(--yellow)!important}.progress-circle .value-bar.teal{border:.6em solid var(--teal)!important}.progress-circle .value-bar.black{border:.6em solid var(--black)!important}.progress-circle .value-bar.brown{border:.6em solid var(--brown)!important}.progress-circle .value-bar.olive{border:.6em solid var(--olive)!important}.progress-circle .value-bar.purple{border:.6em solid var(--purple)!important}.progress-circle .value-bar.pink{border:.6em solid var(--pink)!important}.progress-circle .value-bar.grey{border:.6em solid var(--grey)!important}.progress-circle .first50-bar.red{background-color:var(--red)!important}.progress-circle .first50-bar.green{background-color:var(--green)!important}.progress-circle .first50-bar.blue{background-color:var(--blue)!important}.progress-circle .first50-bar.orange{background-color:var(--orange)!important}.progress-circle .first50-bar.yellow{background-color:var(--yellow)!important}.progress-circle .first50-bar.teal{background-color:var(--teal)!important}.progress-circle .first50-bar.black{background-color:var(--black)!important}.progress-circle .first50-bar.brown{background-color:var(--brown)!important}.progress-circle .first50-bar.olive{background-color:var(--olive)!important}.progress-circle .first50-bar.purple{background-color:var(--purple)!important}.progress-circle .first50-bar.pink{background-color:var(--pink)!important}.progress-circle .first50-bar.grey{background-color:var(--grey)!important}.progress-circle .red{color:var(--red)!important}.progress-circle .green{color:var(--green)!important}.progress-circle .blue{color:var(--blue)!important}.progress-circle .orange{color:var(--orange)!important}.progress-circle .yellow{color:var(--yellow)!important}.progress-circle .teal{color:var(--teal)!important}.progress-circle .black{color:var(--black)!important}.progress-circle .brown{color:var(--brown)!important}.progress-circle .olive{color:var(--olive)!important}.progress-circle .purple{color:var(--purple)!important}.progress-circle .pink{color:var(--pink)!important}.progress-circle .grey{color:var(--grey)!important}.progress-circle .left-half-clipper{width:5em;height:5em;border-radius:50%;clip:rect(0,5em,5em,2.5em);position:absolute}.progress-circle.over50 .left-half-clipper{clip:rect(auto,auto,auto,auto)}.progress-circle .value-bar{width:5em;height:5em;border-radius:50%;border:.6em solid var(--grey);box-sizing:border-box;clip:rect(0,2.5em,5em,0);position:absolute}.progress-circle.over50 .first50-bar{width:5em;height:5em;background-color:var(--grey);border-radius:50%;clip:rect(0,5em,5em,2.5em);position:absolute}.progress-circle:not(.over50) .first50-bar{display:none}.progress-circle.p0 .value-bar{display:none}.progress-circle.p1 .value-bar{transform:rotate(4deg)}.progress-circle.p2 .value-bar{transform:rotate(7deg)}.progress-circle.p3 .value-bar{transform:rotate(11deg)}.progress-circle.p4 .value-bar{transform:rotate(14deg)}.progress-circle.p5 .value-bar{transform:rotate(18deg)}.progress-circle.p6 .value-bar{transform:rotate(22deg)}.progress-circle.p7 .value-bar{transform:rotate(25deg)}.progress-circle.p8 .value-bar{transform:rotate(29deg)}.progress-circle.p9 .value-bar{transform:rotate(32deg)}.progress-circle.p10 .value-bar{transform:rotate(36deg)}.progress-circle.p11 .value-bar{transform:rotate(40deg)}.progress-circle.p12 .value-bar{transform:rotate(43deg)}.progress-circle.p13 .value-bar{transform:rotate(47deg)}.progress-circle.p14 .value-bar{transform:rotate(50deg)}.progress-circle.p15 .value-bar{transform:rotate(54deg)}.progress-circle.p16 .value-bar{transform:rotate(58deg)}.progress-circle.p17 .value-bar{transform:rotate(61deg)}.progress-circle.p18 .value-bar{transform:rotate(65deg)}.progress-circle.p19 .value-bar{transform:rotate(68deg)}.progress-circle.p20 .value-bar{transform:rotate(72deg)}.progress-circle.p21 .value-bar{transform:rotate(76deg)}.progress-circle.p22 .value-bar{transform:rotate(79deg)}.progress-circle.p23 .value-bar{transform:rotate(83deg)}.progress-circle.p24 .value-bar{transform:rotate(86deg)}.progress-circle.p25 .value-bar{transform:rotate(90deg)}.progress-circle.p26 .value-bar{transform:rotate(94deg)}.progress-circle.p27 .value-bar{transform:rotate(97deg)}.progress-circle.p28 .value-bar{transform:rotate(101deg)}.progress-circle.p29 .value-bar{transform:rotate(104deg)}.progress-circle.p30 .value-bar{transform:rotate(108deg)}.progress-circle.p31 .value-bar{transform:rotate(112deg)}.progress-circle.p32 .value-bar{transform:rotate(115deg)}.progress-circle.p33 .value-bar{transform:rotate(119deg)}.progress-circle.p34 .value-bar{transform:rotate(122deg)}.progress-circle.p35 .value-bar{transform:rotate(126deg)}.progress-circle.p36 .value-bar{transform:rotate(130deg)}.progress-circle.p37 .value-bar{transform:rotate(133deg)}.progress-circle.p38 .value-bar{transform:rotate(137deg)}.progress-circle.p39 .value-bar{transform:rotate(140deg)}.progress-circle.p40 .value-bar{transform:rotate(144deg)}.progress-circle.p41 .value-bar{transform:rotate(148deg)}.progress-circle.p42 .value-bar{transform:rotate(151deg)}.progress-circle.p43 .value-bar{transform:rotate(155deg)}.progress-circle.p44 .value-bar{transform:rotate(158deg)}.progress-circle.p45 .value-bar{transform:rotate(162deg)}.progress-circle.p46 .value-bar{transform:rotate(166deg)}.progress-circle.p47 .value-bar{transform:rotate(169deg)}.progress-circle.p48 .value-bar{transform:rotate(173deg)}.progress-circle.p49 .value-bar{transform:rotate(176deg)}.progress-circle.p50 .value-bar{transform:rotate(180deg)}.progress-circle.p51 .value-bar{transform:rotate(184deg)}.progress-circle.p52 .value-bar{transform:rotate(187deg)}.progress-circle.p53 .value-bar{transform:rotate(191deg)}.progress-circle.p54 .value-bar{transform:rotate(194deg)}.progress-circle.p55 .value-bar{transform:rotate(198deg)}.progress-circle.p56 .value-bar{transform:rotate(202deg)}.progress-circle.p57 .value-bar{transform:rotate(205deg)}.progress-circle.p58 .value-bar{transform:rotate(209deg)}.progress-circle.p59 .value-bar{transform:rotate(212deg)}.progress-circle.p60 .value-bar{transform:rotate(216deg)}.progress-circle.p61 .value-bar{transform:rotate(220deg)}.progress-circle.p62 .value-bar{transform:rotate(223deg)}.progress-circle.p63 .value-bar{transform:rotate(227deg)}.progress-circle.p64 .value-bar{transform:rotate(230deg)}.progress-circle.p65 .value-bar{transform:rotate(234deg)}.progress-circle.p66 .value-bar{transform:rotate(238deg)}.progress-circle.p67 .value-bar{transform:rotate(241deg)}.progress-circle.p68 .value-bar{transform:rotate(245deg)}.progress-circle.p69 .value-bar{transform:rotate(248deg)}.progress-circle.p70 .value-bar{transform:rotate(252deg)}.progress-circle.p71 .value-bar{transform:rotate(256deg)}.progress-circle.p72 .value-bar{transform:rotate(259deg)}.progress-circle.p73 .value-bar{transform:rotate(263deg)}.progress-circle.p74 .value-bar{transform:rotate(266deg)}.progress-circle.p75 .value-bar{transform:rotate(270deg)}.progress-circle.p76 .value-bar{transform:rotate(274deg)}.progress-circle.p77 .value-bar{transform:rotate(277deg)}.progress-circle.p78 .value-bar{transform:rotate(281deg)}.progress-circle.p79 .value-bar{transform:rotate(284deg)}.progress-circle.p80 .value-bar{transform:rotate(288deg)}.progress-circle.p81 .value-bar{transform:rotate(292deg)}.progress-circle.p82 .value-bar{transform:rotate(295deg)}.progress-circle.p83 .value-bar{transform:rotate(299deg)}.progress-circle.p84 .value-bar{transform:rotate(302deg)}.progress-circle.p85 .value-bar{transform:rotate(306deg)}.progress-circle.p86 .value-bar{transform:rotate(310deg)}.progress-circle.p87 .value-bar{transform:rotate(313deg)}.progress-circle.p88 .value-bar{transform:rotate(317deg)}.progress-circle.p89 .value-bar{transform:rotate(320deg)}.progress-circle.p90 .value-bar{transform:rotate(324deg)}.progress-circle.p91 .value-bar{transform:rotate(328deg)}.progress-circle.p92 .value-bar{transform:rotate(331deg)}.progress-circle.p93 .value-bar{transform:rotate(335deg)}.progress-circle.p94 .value-bar{transform:rotate(338deg)}.progress-circle.p95 .value-bar{transform:rotate(342deg)}.progress-circle.p96 .value-bar{transform:rotate(346deg)}.progress-circle.p97 .value-bar{transform:rotate(349deg)}.progress-circle.p98 .value-bar{transform:rotate(353deg)}.progress-circle.p99 .value-bar{transform:rotate(356deg)}.progress-circle.p100 .value-bar{transform:rotate(360deg)}@media screen and (max-width:414px){.pc-container{margin:1em 0 1em 0;padding:1em 0 1em 0;width:100%}}';
			const style = document.createElement("style");
			style.innerHTML = css;
			this.main.appendChild(style);
		}
	}
	
	getApp(){
		return this.app;
	}
	
	getColors(){
		return this.colors;
	}

	randomText(prefix){
		prefix === undefined ? prefix = "" : 0;
		return prefix + Math.random().toString(36).slice(2);
	}
	
	validate(obj){
		obj.textColor === undefined ? obj.textColor = "grey" : 0;
		obj.text === undefined ? obj.text = "" : 0;
		obj.color === undefined ? obj.color = "grey" : 0;
		obj.percent === undefined ? obj.percent = 0 : 0;

		return obj;
	}
	
	load(obj) {

		if(typeof(obj) == "object" && obj.length > 1){

			for(let i = 0; i < obj.length; i++){
				this.createContainer(this.validate(obj[i]));
			}
		
		}else if(typeof(obj) == "object"){
			this.createContainer(this.validate(obj));		
		}
		
		return this.app;
	}
	
	createContainer(obj, first) {

		// Span -> Div
		const span = document.createElement("span");
		const span_div = document.createElement("div");
		span_div.setAttribute("class", obj.textColor);
		span_div.innerHTML = obj.text;
		span.appendChild(span_div);

		// left_half_clipper
		const first50_bar = document.createElement("div");
		first50_bar.setAttribute("class", "first50-bar");
		
		const value_bar = document.createElement("div");
		value_bar.setAttribute("class", "value-bar");
		
		const left_half_clipper = document.createElement("div");
		left_half_clipper.setAttribute("class", "left-half-clipper");
		left_half_clipper.appendChild(first50_bar);
		left_half_clipper.appendChild(value_bar);
		
		// progress_circle
		const progress_circle = document.createElement("div");
		progress_circle.setAttribute("class", "progress-circle");
		progress_circle.appendChild(span);
		progress_circle.appendChild(left_half_clipper);
		
		// pc_container
		let _id = this.randomText("pc-");
		let pc_container = null;
		if(first !== undefined){
			pc_container = obj.view;
			pc_container.innerHTML = "";
			_id = obj._id;
		}else{
			pc_container = document.createElement("div");
			pc_container.setAttribute("class", "pc-container");
			pc_container.setAttribute("_id", _id);
		}
		
		pc_container.appendChild(progress_circle);

		// list-item
		let linesParent = null;
		let lines = [];
		if(obj.lines && obj.lines.length > 0){
			let fragment = document.createDocumentFragment();
			let lineSpan = null;
			
			linesParent = document.createElement("div");
			linesParent.setAttribute("class", "list-parent");
			
			for(var i = 0; i < obj.lines.length; i++){

				lineSpan = document.createElement("span");
				lineSpan.innerHTML = obj.lines[i].text;
				
				fragment.appendChild(lineSpan);
				lines.push(lineSpan);
			}
			linesParent.appendChild(fragment);
			
			pc_container.appendChild(linesParent);
		}
		
		const container = {
			_id : _id,
			view: pc_container,
			progress_circle: {
				view : progress_circle,
				span_div: span_div,
				left_half_clipper: {
					first50_bar: first50_bar,
					value_bar: value_bar
				}
			},
			linesParent: linesParent,
			lines: lines,
			percent: obj.percent,
			color: obj.color,
			text: obj.text
		};

		this.containerCreateView(container, true);

		const app = this.app;

		if(first !== undefined){
			const index = app.containers.findIndex(x => x._id == _id);
			if(index > -1){
				app.containers[index] = container;
				app.view.appendChild(pc_container);
			}
		}else{
			app.containers.push(container);
			app.view.appendChild(pc_container);
		}

	}

	containerCreateView(container, first) {
	
		const progress_circle = container.progress_circle.view;

		if(!first){
			for(var i = 0; i < 101; i++){
				progress_circle.classList.remove("p"+i);
			}
			container.progress_circle.span_div.innerHTML = container.text;
		}

		if(container.percent > 50){
			if(!progress_circle.classList.contains("over50")){
				progress_circle.classList.add("over50");
			}
		}else{
			progress_circle.classList.remove("over50");
		}

		progress_circle.classList.add("p" + parseInt(container.percent));

		const value_bar = container.progress_circle.left_half_clipper.value_bar;

		if(!value_bar.classList.contains(container.color)){

			const first50_bar = container.progress_circle.left_half_clipper.first50_bar;

			for(var i = 0; i < this.colors.length; i++){
				value_bar.classList.remove(this.colors[i]);
				first50_bar.classList.remove(this.colors[i]);
			}

			value_bar.classList.add(container.color);
			first50_bar.classList.add(container.color);
		}

	}
	
	change(obj) {

		if(obj === null || obj.index === undefined || obj.index === null){
			return;
		}
		
		const app = this.app;
		const index = obj.index;
		
		let container = app.containers[index];
		if(container === undefined || container === null){
			return;
		}

		obj.percent !== undefined ? container.percent = obj.percent : 0;
		obj.color !== undefined ? container.color = obj.color : 0;
		obj.text !== undefined ? container.text = obj.text : 0;

		this.containerCreateView(container, false);

		// Lines
		if(obj.lines && obj.lines.length > 0){

			let span_div = null;
			let linesParent = null;
			let lineSpan = [];
			let span = null;
			
			if(container.lines.length == 0 && obj.lines.length > 0){
				linesParent = document.createElement("div");
				linesParent.setAttribute("class", "list-parent");
				container.linesParent = linesParent;
				container.view.appendChild(linesParent);
			}else{
				linesParent = container.linesParent;
			}

			for(var i = 0; i < obj.lines.length; i++){

				if(obj.lines[i] !== undefined && obj.lines[i].text !== undefined){
					
					if(container.lines[i] !== undefined){
						span_div = container.lines[i];
						span_div.innerHTML = obj.lines[i].text;
					}else{
						lineSpan = document.createElement("span");
						lineSpan.innerHTML = obj.lines[i].text;
						container.lines.push(lineSpan);
						linesParent.appendChild(lineSpan);
					}
					
				}else{
					span = linesParent.querySelector("span:nth-child(" + (i+1) + ")");
					if(span !== undefined && span !== null){
						span.remove();
					}
				}
			}
			
		}else if(container.linesParent !== null){
			container.linesParent = null;
			container.lines = [];
			const pc_container = container.view;
			pc_container.querySelector(".list-parent").remove();
		}

	}


}