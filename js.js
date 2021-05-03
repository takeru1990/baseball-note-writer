var out = ""; //出力の文字列
var offe_1, defe_1, offe_2, defe_2, point_1o, point_1d, result_1, point_2o, point_2d, result_2;
var content;
var lesson_1, lesson_2, lesson_3, lesson_4, lesson_5, lesson_6, lesson_7;
var date;
console.log("cleared!");

function test() {
	initialize(); //出力文字列の初期化

	offe_1 = $(':text[id="offe_1"]').val(); //1試合目の先攻
	defe_1 = $(':text[id="defe_1"]').val(); //1試合目の後攻
	offe_2 = $(':text[id="offe_2"]').val(); //2試合目の先攻
	defe_2 = $(':text[id="defe_2"]').val(); //2試合目の後攻

	point_1o = $(':text[id="point_1o"]').val(); //1試合目先攻の得点
	point_1d = $(':text[id="point_1d"]').val(); //1試合目後攻の得点
	result_1 = $(':text[id="result_1"]').val(); //1試合目の勝敗
	point_2o = $(':text[id="point_2o"]').val(); //2試合目先攻の得点
	point_2d = $(':text[id="point_2d"]').val(); //2試合目後攻の得点
	result_2 = $(':text[id="result_2"]').val(); //2試合目の勝敗

	content = $('[id=content]').val(); //試合内容

	lesson_1 = $(':text[id="lesson_1"]').val(); //学んだこと1
	lesson_2 = $(':text[id="lesson_2"]').val(); //学んだこと2
	lesson_3 = $(':text[id="lesson_3"]').val(); //学んだこと3
	lesson_4 = $(':text[id="lesson_4"]').val(); //学んだこと4
	lesson_5 = $(':text[id="lesson_5"]').val(); //学んだこと5
	lesson_6 = $(':text[id="lesson_6"]').val(); //学んだこと6
	lesson_7 = $(':text[id="lesson_7"]').val(); //学んだこと7

	date = document.getElementById("date").value; //日付

	addSeperator();
	addTeams();
	addResult();
	addContent();
	addLesson();
	addDate();

	document.getElementById("note").innerHTML = out;
}

function initialize() {
	offe_1 = "";
	defe_1 = "";
	offe_2 = "";
	defe_2 = "";

	point_1o = "";
	point_1o = "";
	result_1 = "";

	point_2o = "";
	point_2d = "";
	result_2 = "";

	content = "";

	lesson_1 = "";
	lesson_2 = "";
	lesson_3 = "";
	lesson_4 = "";
	lesson_5 = "";
	lesson_6 = "";
	lesson_7 = "";

	date = "";
	out = "";
}

function addSeperator() {
	out += "%%%%%%%%%%%%%%%%%%%%ここまでテンプレート，必要分繰り返す\n\\begin{center}\n{\\bfseries \\LARGE %team name \n  \\begin{tabular}[c]{ccc}\n";
}

function addTeams() {
	out += "    " + offe_1 + " &-& " + defe_1 + "\\\\\n";

	if (offe_2) {
		out += "    " + offe_2 + " &-& " + defe_2 + "\n";
		console.log("offe_2 is not UNDEFINED!")
	};

	out += "  \\end{tabular}\n}\\noindent \\rule{\\columnwidth}{0.1mm} \\\\\n  \\begin{tabular}{cccccc}\n";
}

function addResult() {
	//1試合だけの時
	if (!offe_2) {
		out += "  \\multirow{1}{*}{結果} & " + point_1o + " &-& " + point_1d + " &:& " + result_1 + " \\\\\n"
	} else if (offe_2) {
		var sp23 = "                        ";
		out += "  \\multirow{2}{*}{結果} & " + point_1o + " &-& " + point_1d + " &:& " + result_1 + " \\\n";
		out += sp23 + "& " + point_2o + " &-& " + point_2d + " &:& " + result_2 + "\n";
	}

	out += "  \\end{tabular}\n\\end{center}\n\n";
}

function addContent() {
	out += content + "\n\n";
}

function addLesson() {
	out += "\\medskip \\noindent \\fbox{学んだこと}\n\\begin{itemize}\n";

	if (lesson_1) {
		out += "\\item " + lesson_1 + "\n";
	}
	if (lesson_2) {
		out += "\\item " + lesson_2 + "\n";
	}
	if (lesson_3) {
		out += "\\item " + lesson_3 + "\n";
	}
	if (lesson_4) {
		out += "\\item " + lesson_4 + "\n";
	}
	if (lesson_5) {
		out += "\\item " + lesson_5 + "\n";
	}
	if (lesson_6) {
		out += "\\item " + lesson_6 + "\n";
	}
	if (lesson_7) {
		out += "\\item " + lesson_7 + "\n";
	}

	out += "\\end{itemize}\n";
}

function addDate() {
	var weekDayList = ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."];
	var year = new Date(date).getFullYear();
	var month = new Date(date).getMonth() + 1;
	var date_ = new Date(date).getDate();
	var day = new Date(date).getDay();
	if (month < 10) month = "0" + month;
	if (date_ < 10) date_ = "0" + date_;

	out += "\\begin{flushright}(" + year + "/" + month + "/" + date_ + " " + weekDayList[day] + ")\\end{flushright}\n\\newpage\n%%%%%%%%%%%%%%%%%%%%ここまでテンプレート，必要分繰り返す\n";
}

function aaa() {
	var lsn_1 = document.getElementById("lsn_1");
	var lsn_2 = document.getElementById("lsn_2");
	var lsn_3 = document.getElementById("lsn_3");
	var lsn_4 = document.getElementById("lsn_4");
	var lsn_5 = document.getElementById("lsn_5");
	var lsn_6 = document.getElementById("lsn_6");
	var lsn_7 = document.getElementById("lsn_7");

	lsn_1.innerHTML = '<input type="text" placeholder="学んだこと1" id="lesson_1"/>';
	lsn_2.innerHTML = '<input type="text" placeholder="学んだこと2" id="lesson_2"/>';
	lsn_3.innerHTML = '<input type="text" placeholder="学んだこと3" id="lesson_3"/>';
	lsn_4.innerHTML = '<input type="text" placeholder="学んだこと4" id="lesson_4"/>';
	lsn_5.innerHTML = '<input type="text" placeholder="学んだこと5" id="lesson_5"/>';
	lsn_6.innerHTML = '<input type="text" placeholder="学んだこと6" id="lesson_6"/>';
	lsn_7.innerHTML = '<input type="text" placeholder="学んだこと7" id="lesson_7"/>';

	console.log("aaa!");
}
