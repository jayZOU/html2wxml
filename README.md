#html2wxml

![enter image description here](https://api.travis-ci.org/jayZOU/html2wxml.svg?branch=master)


**convert html to wxml**  

html转换成wxml适配微信小程序

##install

>npm install htmltowxml --save

##Usage
```javascript
import {html2wxml} from 'htmltowxml';
const wxml = html2wxml('<div>I am<div>I am<div>I am test</div> test</div> test</div>');
console.log(wxml);
/*<view class="div">
  <text>I am</text>
  <view class="div">
    <text>I am</text>
    <view class="div">
      <text>I am test</text>
    </view>
    <text>test</text>
  </view>
  <text>test</text>
</view>
*/
```

##test

>npm i  
>npm test

##License

MIT

