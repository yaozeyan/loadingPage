//loading功能
var img_url = "/act/xtl/20190109/service/m/img/";
var sourceArr1 = [
	img_url + "music.mp3",
	img_url + "loading_back.jpg",
	img_url + "bg.jpg",
	img_url + "item1.png",
	img_url + "item2.png",
	img_url + "item3.png",
	img_url + "item4.png",
	img_url + "item5.png",
	img_url + "item6.png",
	img_url + "item7.png",
	img_url + "item8.png",
	img_url + "item9.png",
	img_url + "line_pic.png",
	img_url + "login_box.png",
	img_url + "pic1_1.png",
	img_url + "pic1.png",
	img_url + "pic2_1.png",
	img_url + "pic2.png",
	img_url + "pic3_1.png",
	img_url + "pic3.png",
	img_url + "pic4_1.png",
	img_url + "pic4.png",
	img_url + "pic5_1.png",
	img_url + "pic5.png",
	img_url + "pic6_1.png",
	img_url + "pic6.png",
	img_url + "pic7_1.png",
	img_url + "pic7.png",
	img_url + "pic8_1.png",
	img_url + "pic8.png",
	img_url + "pic9_1.png",
	img_url + "res_back.png",
	img_url + "rule_back.png",
	img_url + "spr.png",
	img_url + "tips.png",
	img_url + "wx.png",
	img_url + "zh.png",
	img_url + "A/0.png",
	img_url + "A/1.png",
	img_url + "A/2.png",
	img_url + "A/3.png",
	img_url + "A/1.png",
	img_url + "A/5.png",
	img_url + "A/6.png",
	img_url + "A/7.png",
	img_url + "A/8.png",
	img_url + "A/9.png",
	img_url + "A/10.png",
	img_url + "A/11.png",
	img_url + "A/12.png",
	img_url + "A/13.png",
	img_url + "A/14.png",
	img_url + "A/15.png",
	img_url + "A/16.png",
	img_url + "A/17.png",
	img_url + "A/18.png",
	img_url + "A/19.png",
	img_url + "A/20.png",
	img_url + "A/21.png",
	img_url + "A/22.png",
	img_url + "A/23.png",
	img_url + "B/p1.png",
	img_url + "B/p2.png",
	img_url + "B/p3.png",
	img_url + "B/p4.png",
	img_url + "B/p5.png",
	img_url + "B/p6.png",
	img_url + "B/p7.png",
	img_url + "B/p8.png",
	img_url + "B/p9.png",
	img_url + "B/p10.png",
	img_url + "B/p11.png",
	img_url + "B/p12.png",
	img_url + "B/p13.png",
	img_url + "B/p14.png",
	img_url + "B/p15.png",
	img_url + "B/p16.png",
	img_url + "B/p17.png",
	img_url + "B/p18.png",
	img_url + "B/p19.png",
	img_url + "B/p20.png",
	img_url + "B/p21.png",
	img_url + "B/p22.png",
	img_url + "B/p23.png",
	img_url + "B/p24.png",
	img_url + "B/p25.png",
	img_url + "B/p26.png",
	img_url + "B/p27.png",
	img_url + "B/p28.png",
	img_url + "B/p29.png",
	img_url + "B/p30.png",
	img_url + "B/p31.png",
	img_url + "B/p32.png",
	img_url + "B/p33.png",
	img_url + "B/p34.png",
	img_url + "B/p35.png",
	img_url + "B/p36.png",
	img_url + "B/p37.png",
	img_url + "B/p38.png",
	img_url + "B/p39.png",
	img_url + "B/p40.png",
	img_url + "B/p41.png",
	img_url + "B/p42.png",
	img_url + "B/p43.png",
	img_url + "B/p44.png",
	img_url + "B/p45.png",
	img_url + "B/p46.png",
	img_url + "B/p47.png",
	img_url + "B/p48.png",
	img_url + "B/p49.png",
	img_url + "B/p50.png",
	img_url + "B/p51.png",
	img_url + "B/p52.png",
	img_url + "B/p53.png",
	img_url + "B/p54.png",
	img_url + "B/p55.png",
	img_url + "B/p56.png",
	img_url + "B/p57.png",
	img_url + "B/p58.png",
	img_url + "B/p59.png",
	img_url + "B/p60.png",
	img_url + "C/1.png",
	img_url + "C/2.png",
	img_url + "C/3.png",
	img_url + "C/4.png",
	img_url + "C/5.png",
	img_url + "C/6.png",
	img_url + "C/7.png",
	img_url + "C/8.png",
	img_url + "C/9.png",
	img_url + "C/10.png",
	img_url + "C/11.png",
	img_url + "C/12.png",
	img_url + "C/13.png",
	img_url + "C/14.png",
	img_url + "C/15.png",
	img_url + "C/16.png",
	img_url + "C/17.png",
	img_url + "C/18.png",
	img_url + "C/19.png",
	img_url + "C/20.png",
	img_url + "C/21.png",
	img_url + "C/22.png",
	img_url + "C/23.png",
	img_url + "C/24.png",
	img_url + "C/25.png",
	img_url + "C/26.png",
	img_url + "C/27.png",
	img_url + "C/28.png",
	img_url + "C/29.png",
	img_url + "C/30.png",
	img_url + "C/31.png",
	img_url + "C/32.png",
	img_url + "C/33.png",
	img_url + "C/34.png",
	img_url + "C/35.png",
	img_url + "C/36.png",
	img_url + "C/37.png",
	img_url + "C/38.png",
	img_url + "C/39.png",
	img_url + "C/40.png",
]; //需要加载的资源列表
var text_ = $(".load_num");
var w = $(".line").width();
text_.html('0%');

new mo.Loader(sourceArr1, {
	onLoading: function(count, total) {
		fun.showImg2();
		text_.html(parseInt(count / total * 100) + '%');
		$(".line").width(3.4 * (count * 1.5 / total * 100) + "px")
//		console.log(parseInt(count / total * 100))
	},
	onComplete: function(time) {
		setTimeout(function() {
			$(".loading_box").hide()
			$(".bg").show();
			fun.showImg();
		}, 200)
	}
})
// 序列帧
var sourceArr = [];

function loading() {
	for(var i = 0; i <= 23; i++) {
		var arr = "/act/xtl/20190109/service/m/img/A/" + i + ".png";
		sourceArr.push(arr);
	}
	for(var i = 1; i <= 60; i++) {
		var arr = "/act/xtl/20190109/service/m/img/B/p" + i + ".png";
		sourceArr.push(arr);
	}
	for(var i = 1; i <= 40; i++) {
		var arr = "/act/xtl/20190109/service/m/img/C/" + i + ".png";
		sourceArr.push(arr);
	}
	var imgLoader = function(imgs, callback) {
		var len = imgs.length,
			i = 0;
		while(imgs.length) {
			loadImage(imgs.shift(), function(path) {
				callback(path, ++i, len);
			});
		}
	}
	var loadImage = function(path, callback) {
		var img = new Image();
		img.onload = function() {
			img.onload = null;
			callback(path);
		}
		img.src = path;
	}
	imgLoader(sourceArr, function(path, curNum, total) {
		var percent = curNum / total;
		if(percent == 1) {}
	});
	imgLoader(sourceArr);
}
loading();
var fun = {
	zhi: 1,
	zhi1: 1,
	_index: 0,
	showImg: function() {
		clearTimeout(fun.timer1);
		fun._index++;
		if(fun._index > 23) {
			//fun._index = 1;
			$("#one").show();
			$(".animate").hide();
			return;
		}
		$(".animate img").attr('src', "/act/xtl/20190109/service/m/img/A/" + fun._index + ".png");
		fun.timer1 = setTimeout(fun.showImg, 100);
	},
	showImg1: function() {
		$(".lot_animate").show();
		clearTimeout(fun.timer2);
		fun.zhi++;
		if(fun.zhi >= 60) {
			fun.zhi = 1;
			$(".lot_animate").hide()
			$("#dialog3").show()
			var ok = document.getElementById("music");
			ok.pause();
			ok.load();
			return;
		}
		$(".lot_animate img").attr('src', "/act/xtl/20190109/service/m/img/B/p" + fun.zhi + ".png");
		fun.timer2 = setTimeout(fun.showImg1, 100);
	},
	showImg2: function() {
		$(".loading_animate").show();
		clearTimeout(fun.timer3);
		fun.zhi1++;
		if(fun.zhi1 > 40) {
			fun.zhi1 = 1;
		}
		$(".loading_animate img").attr('src', "/act/xtl/20190109/service/m/img/C/" + fun.zhi1 + ".png");
		fun.timer3 = setTimeout(fun.showImg2, 100);
	}
}
window.onload = function() {
	//	fun.showImg2();
	//	fun.showImg1();
	$(".dia_close").click(function() {
		$(".dialog").hide();
	})
	$(".rule").click(function() {
		$("#dialog1").show();
	})
	$("#dialog2").click(function() {
		$(this).hide()
	})
	//canvas init
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");

	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;

	var mp = 25;
	var particles = [];
	for(var i = 0; i < mp; i++) {
		particles.push({
			x: Math.random() * W,
			y: Math.random() * H,
			r: Math.random() * 4 + 1,
			d: Math.random() * mp
		})
	}

	function draw() {
		ctx.clearRect(0, 0, W, H);

		ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
		ctx.beginPath();
		for(var i = 0; i < mp; i++) {
			var p = particles[i];
			ctx.moveTo(p.x, p.y);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
		}
		ctx.fill();
		update();
	}

	var angle = 0;

	function update() {
		angle += 0.01;
		for(var i = 0; i < mp; i++) {
			var p = particles[i];
			p.y += Math.cos(angle + p.d) + 1 + p.r / 2;
			p.x += Math.sin(angle) * 2;

			if(p.x > W + 5 || p.x < -5 || p.y > H) {
				if(i % 3 > 0) //66.67% of the flakes
				{
					particles[i] = {
						x: Math.random() * W,
						y: -10,
						r: p.r,
						d: p.d
					};
				} else {
					if(Math.sin(angle) > 0) {
						particles[i] = {
							x: -5,
							y: Math.random() * H,
							r: p.r,
							d: p.d
						};
					} else {
						particles[i] = {
							x: W + 5,
							y: Math.random() * H,
							r: p.r,
							d: p.d
						};
					}
				}
			}
		}
	}

	//animation loop
	setInterval(draw, 33);

	$(".dia_share").click(function() {
		$("#dialog2").show();
	})
}
$(function() {
	$('input:radio').click(function() {
		var domName = $(this).attr('name');

		var $radio = $(this);
		// if this was previously checked
		if($radio.data('waschecked') == true) {
			$radio.prop('checked', false);
			$("input:radio[name='" + domName + "']").data('waschecked', false);
			//$radio.data('waschecked', false);
		} else {
			$radio.prop('checked', true);
			$("input:radio[name='" + domName + "']").data('waschecked', false);
			$radio.data('waschecked', true);
		}
	});
});