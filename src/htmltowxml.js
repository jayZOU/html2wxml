import { html2json } from '../libs/html2json';


export function html2wxml(input = '') {
	let parse = ``;
	let part = ``;
    if (!input) {
    	console.log('please input html content!!!');
    	return 0 ;
    }


    const htmlToJson = html2json(input).child;

    for (let i = 0, len = htmlToJson.length; i < len; i++) {
        parse = parseChild(htmlToJson[i]);
    }

    function parseChild(node) {
	    if (node.child) {
	        part += `<view class="${node.attr.class}">`;
	        for (let i = 0, len = node.child.length; i < len; i++) {
	            if (node.node == 'element') parseChild(node.child[i]);
	        }
	        part += `</view>`;
	    } else {
	        if (node.node == 'element') {
	        	if(node.tag == 'img') {
	        		part += `<image class="${node.attr.class}" src="${node.attr.src}"></image>`
	        	}else{
	        		part += `<view class="${node.attr.class}"></view>`;

	        	}
	        }
	        if (node.node == 'text') part += `<text>${node.text}</text>`;
	    	// if ()
	    }
	    return part
	}

	

	return parse;

}