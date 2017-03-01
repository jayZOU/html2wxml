import { html2json } from '../libs/html2json';


// console.log(style_html);

export function html2wxml(input = '') {
	// console.log(input);
	// input = input || '';
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

	// console.log(prettyData);

// console.log(node);
    // console.log(input);
 //    console.log(formatHtml);
	// 

 //    function parseChild(node) {
	//     if (node.child) {
	//         part += `<view class="${node.attr.class}">`;
	//         for (let i = 0, len = node.child.length; i < len; i++) {
	//             if (node.node == 'element') parseChild(node.child[i]);
	//         }
	//         part += `</view>`;
	//     } else {
	//         if (node.node == 'element') part += `<view class="${node.attr.class}"></view>`
	//         if (node.node == 'text') part += `<text>${node.text}</text>`;
	//     }
	//     return part
	// }

    // readFile(input)
    //     .then((value) => {
    //         return html2json(value).child;
    //     })
    //     .then((htmlToJson) => {
    //         for (let i = 0, len = htmlToJson.length; i < len; i++) {
    //             parse = parseChild(htmlToJson[i]);
    //         }

    //         let prettyData = formatHtml.prettyPrint(parse, {
    //             indent_size: 4
    //         });

    //         // fs.writeFileSync('./dist/index.wxml', prettyData, 'utf-8');
    //         console.log('conver success');
    //     })
    //     .catch((err) => {
    //         console.log(err);
    //     })
}



// function readFile(URL) {
// 	return new Promise((resolve, reject) => {
// 		fs.readFile(URL, 'utf8', (err, data) => {
// 			if(err) reject(err);
// 			resolve(data);
// 		})
// 	})
// }





// tidy(parse, (err, html) => {
// 	console.log(html);
// 	fs.writeFileSync('./index.wxml', html, 'utf-8');
// });


// console.log(parse);

// console.log(htmlToJson);