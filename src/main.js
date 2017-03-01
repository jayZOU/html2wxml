import {html2wxml} from './htmltowxml';
import { style_html } from '../libs/html';

const htmlText = document.getElementById('html');
const wxmlText = document.getElementById('wxml');
const cover = document.getElementById('cover');
// test('a');
// console.log(test(a));
// console.log(htmlText.value)

console.log(html2wxml('<div>I am<div>I am test</div><img src="/img/a.jpg"> test</div>'));
// console.log(html2wxml('<img src="/img/a.jpg">'));

cover.addEventListener('click', function(){
	const wxmlDom = html2wxml(htmlText.value);

	console.log(wxmlDom);

	let prettyData = style_html(wxmlDom, {
	    indent_size: 2
	});
	if(wxmlDom){

		// console.log(prettyData);

		wxmlText.innerHTML = html_encode(prettyData);
		// wxmlText.value = wxmlDom;
		// hljs.highlightBlock(wxmlDom);
		// $('pre code').each(function(i, block) {
		//     hljs.highlightBlock(block);
		// });
	}


},false);

function html_encode(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&/g, "&gt;");
    s = s.replace(/</g, "&lt;");
    s = s.replace(/>/g, "&gt;");
    s = s.replace(/ /g, "&nbsp;");
    s = s.replace(/\'/g, "&#39;");
    s = s.replace(/\"/g, "&quot;");
    s = s.replace(/\n/g, "<br>");
    return s;
}

// console.log();

// export default html2wxml;
// var html2wxml = require('../dist/main');
// module.exports = {
// 	html2wxml: html2wxml
// }
// console.log(html2wxml);
// console.log(html2wxml);
// html2wxml('./rocker.html');