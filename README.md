[Highlighter Plugin for PencilBlue] (http://pencilblue.org)
=====

##### A PencilBlue plugin for source code syntax highlighting in articles.

About
-----
This is just a very basic initial implementation of a source code syntax highlighting plugin utilising the http://highlightjs.org library.
This version utilises the CND deployed basic library with more commonly used language syntax's available through the CDN distribution.
For more information visit: http://highlightjs.org

Installation and Setup
-----

1. Clone the highlighter repository into the plugins folder of your PencilBlue installation
```shell
cd [pencilblue_directory]/plugins
git clone https://github.com/daveauld/highlighter.git
```

2. Install the highlighter plugin through the manage plugins screen in the admin section (/admin/plugins).


Usage in Articles
-----
1. Create your article and set the template to the `Highlighter.js Plugin: Default`.

2. Wrap any code you wish formatting in mark up such as;
```
<pre><code class="<language>">
		//The code to syntax highlight
		int x = 1;
		void setup() {
			//blah blah blah
		}
</code></pre>
```
and replace `<language>` with the relevant language markup code e.g. html, c++, py, see http://highlightjs.org for more info.

Future Development
-----
Assistance required to develop further to 
1) potentially port to locally held libraries and style sheets rather than CDN increasing available language markup pool.
2) potentially utilise the highlight.js node.js npm package and build dependency directly into core.
3) potentially change markup requirements to use of directive rather than pre+code blocks.
