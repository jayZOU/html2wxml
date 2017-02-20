import {html2json} from '../libs/html2json';
import fs from 'fs';
import formatHtml from 'html';

let parse = ``;
let part = ``;

export const html2wxml  = function(input, output = './index.wxml'){
	if(!!input) new TypeError('please input file path!!!')

	readFile(input)
		.then((value) => {
			return html2json(value).child;
		})
		.then((htmlToJson) => {
			for(let i = 0, len = htmlToJson.length; i < len; i++){
				parse = parseChild2(htmlToJson[i]);
			}

			let prettyData = formatHtml.prettyPrint(parse, {indent_size: 2});
			fs.writeFileSync('./dist/index.wxml', prettyData, 'utf-8');
			console.log('conver success');
		})
		.catch((err) => {
			console.log(err);
		}) 
}


function parseChild2(node){
	if(node.child){
		part += `<view class="${node.attr.class}">`;
		for(let i = 0, len = node.child.length; i < len; i++){
			if(node.node == 'element') parseChild2(node.child[i]);
		}
		part += `</view>`;
	}else{
		if(node.node == 'element') part += `<view class="${node.attr.class}"></view>`
		if(node.node == 'text') part += `<text>${node.text}</text>`;
	}
		return part
}

function readFile(URL) {
	return new Promise((resolve, reject) => {
		fs.readFile(URL, 'utf8', (err, data) => {
			if(err) reject(err);
			resolve(data);
		})
	})
}


// tidy(parse, (err, html) => {
// 	console.log(html);
// 	fs.writeFileSync('./index.wxml', html, 'utf-8');
// });


// console.log(parse);

// console.log(htmlToJson);