import { expect } from 'chai';
import {html2wxml} from '../dist/htmltowxml';


describe('html2wxml()', () => {
	describe('test tag', () => {
		it('cover div tag to wxml view', () => {
			expect(html2wxml('<div>I am test</div>')).to.equal('<view class="div"><text>I am test</text></view>')
		});
		it('cover img tag to wxml imgage', () => {
			expect(html2wxml('<img src="/img/a.jpg">')).to.equal('<image class="img" src="/img/a.jpg"></image>')
		});
		it('cover table&&tr&&td tag to wxml view', () => {
			expect(html2wxml('<table><tr><td>最后得分：</td></tr></table>')).to.equal('<view class="table"><view class="tr"><view class="td"><text>最后得分：</text></view></view></view>')
		});
		it('cover p tag to wxml view', () => {
			expect(html2wxml('<p class="test">I am test</p>')).to.equal('<view class="test p"><text>I am test</text></view>')
		});
		it('cover span tag to wxml text', () => {
			expect(html2wxml('<span class="test">I am test</span>')).to.equal('<view class="test span"><text>I am test</text></view>')
		});
	});

	describe('tag nesting', () => {

		it('cover div>div>div to wxml', () => {
			expect(html2wxml('<div>I am<div>I am<div>I am test</div> test</div> test</div>')).to.equal('<view class="div"><text>I am</text><view class="div"><text>I am</text><view class="div"><text>I am test</text></view><text> test</text></view><text> test</text></view>')
		});
		it('cover div>img=div to wxml', () => {
			expect(html2wxml('<div>I am<div>I am test</div><img src="/img/a.jpg"> test</div>')).to.equal('<view class="div"><text>I am</text><view class="div"><text>I am test</text></view><image class="img" src="/img/a.jpg"></image><text> test</text></view>')
		});
	});
});