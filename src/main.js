import {html2wxml} from './htmltowxml';
import { style_html } from '../libs/html';

const htmlText = document.getElementById('html');
const wxmlText = document.getElementById('wxml');
const cover = document.getElementById('cover');

cover.addEventListener('click', function(){
	const wxmlDom = html2wxml(htmlText.value);

	let prettyData = style_html(wxmlDom, {
	    indent_size: 2
	});
	if(wxmlDom){

		wxmlText.innerHTML = html_encode(prettyData);
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