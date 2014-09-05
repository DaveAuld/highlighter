
Highlighter Plugin for PencilBlue (http://pencilblue.org)
=========================================================

This is just a very basic initial implementation of a source code syntax highlighting plugin utilising the (http://highlightjs.org) library.

This version utilises the basic library with more common language syntax available through the CDN distribution.

For more information visit: http://highlightjs.org


Basic use 
=========
After installing the plugin, create your article and set the template to the 'Highlight.js Plugin: Default'.

Any code you wish to markup should be placed as follows in your article;
<pre>
	<code class="<language>">

		//The code to syntax highlight
		int x = 1;
		void setup() {
			//blah blah blah
		}

	</code>
</pre>

and replace <language> with the relevant language markup code (list of codes on highlight.js website).

Future Development
==================
Assistance required to develop further to 
1) potentially port to locally held libraries and style sheets rather than CDN increasing available language markup pool.
2) potentially utilise the highlight.js node.js npm package and build dependency directly into core.
3) potentially change markup requirements to use of directive rather than pre+code blocks.
