***
> `TheOdinProject`
***

# Assignments

	You will find bellow my solution to all the assignments I've done.

| Course | Assignment's Name | Link |
| ------ | ------------ | ---- |
| Foundations | HTML Foundations - Project: Recipes | [🥑🍜🍤](https://pulgamecanica.github.io/TheOdinProject/FoundationsCourse/odin-recipes/)
| Foundations | Intro to CSS - css methods | [📝🤵 css methods](https://pulgamecanica.github.io/TheOdinProject/FoundationsCourse/01-css-methods/)
| Foundations | Intro to CSS - css class id selectors | [📝🤵 css class id selectors](https://pulgamecanica.github.io/TheOdinProject/FoundationsCourse/02-class-id-selectors/)
| Foundations | Intro to CSS - css grouping selectors | [📝🤵 css grouping selectors](https://pulgamecanica.github.io/TheOdinProject/FoundationsCourse/03-grouping-selectors/)
| Foundations | Intro to CSS - css chaning selectors | [📝🤵 css chaning selectors](https://pulgamecanica.github.io/TheOdinProject/FoundationsCourse/04-chaining-selectors/)
| Foundations | Intro to CSS - css descendant combinator | [📝🤵 css descendant combinator](https://pulgamecanica.github.io/TheOdinProject/FoundationsCourse/05-descendant-combinator/)
| Foundations | The Cascade - css cascade fix | [🌊👨‍🔧🛠️ css cascade fix](https://pulgamecanica.github.io/TheOdinProject/FoundationsCourse/06-cascade-fix/)
| Foundations | The Cascade - Project: Recipes | [🥑🍜🍤](https://pulgamecanica.github.io/TheOdinProject/FoundationsCourse/odin-recipes/)
| Foundations | Block and Inline - margin and padding-1 | [🪡🔲🔳 margin & padding 1](https://pulgamecanica.github.io/TheOdinProjec/FoundationsCourse/02-margin-and-padding-1/index.html)|
| Foundations | Block and Inline - margin and padding-2 | [🪡🔲🔳 margin & padding 2](https://pulgamecanica.github.io/TheOdinProjec/FoundationsCourse/02-margin-and-padding-2/index.html)|

***

# Knowledge check.

	You will find bellow my solution to all the knowledge checks I've done.

***

# How Does the Web Work?

***

### What is a web server?

> It's a computer, which can send messages to a web browser.<br>
> A web server hosts one or multiple websites which then are sent to any client who requests them.

***
### What is a network?

> A network is a set of connected computers.<br>
> The computers connected to the network can access shared resources and communicate with each other.

***
### What is the internet?

> The internet is a wire. Which allows the World Wide Web to works, thus we can communicate between computers!

***
### What is an IP address?

> It's a type of ID which helps the Internet send packets, and track the packet destiny. It's the address of each computer connected to the Internet.

***
### What is a router?

> It's a piece of software that helps the internet packets arrive to their destination, by redirecting them to the destiny.<br>
> Routers will add an extra layer of it's own IP to the packet, so when the packet must go back to it's sender.<br>
> The routers, can easily identify who they need to send it to.<br>

***
### What is an ISP?

> It's an Internet Service Provider, it helps clients (humans at their home, or at work for example) connect to the internet.

***
### What are packets and how are they used to transfer data?

> Packets containe data which is sent over the internet, not necesarilly all the data is contained in one packer<br>
> Many times the data gets split in order to allow the internet to handle traffic in a better way.<br>

***
### What is a client?

> A client is a computer, which sends a request to the internet, which later will translate to packets.

***
### What is a server?

> A server is a computer which provides the data requested by a client, this data might be a video, a webpage, a file; etc.

***
### What is a web page?

> A Web Page is a set of documents which are organized to reproduce a page.<br>
> The page it written usually in HTML, styled with CSS and it may contain media which is used by the same web page, this can be, a picture, video; etc.<br>
> A web page might also use JS to create more interactive resources, and to allow effects so the client has a more pleasant experience:<br>
> Like being able to pause a video, or to make a video louder or mute the vide, to open a pop-up and to close it; etc.

***
### What is a web browser?

> It is an application (software) which allows you to make requests to the Internet, a web browser will display your web pages and allow you to use a search engine.

***
### What is a search engine?

> It is a special type of webpage which help you find web pages from various websites.

***
### What is a DNS request?

> Domain Name System, it's like a phone book but for IP addresses and servers.

***
### Which browser are you currently using?

> Arc with Chrome 117

***
### In your own words, explain what happens when you run a search on google.com.

> When you run a search on a search engine, such as google, your request will be sent to google.com server's IP address, which your web browser will try to find.<br>
> Sometimes web browsers know the IP address because they saved it on the computer memory.<br>
> If the DN (Domain Name) is not saved, the web browser will make a request to the DNS to get the website IP address.<br>
> Once it receives the IP address, it will negociate with google.com server to get a response, so the web browser will send your request.<br>
> The server receives your requests and sends back a response, which is composed of multiple packets, which get to you being routed around 10 - 15 times.<br>
> The search engine will return usually a web page containing results for your query, with links to the web pages corresponding to the query.

***

# Command Line Basics

***

### What is the command line?

> It's an application that allows me to run commands directly from a prompt. 

***
### How do you open the command line on your computer?

> Either click the icon, or [CMD] + [Space] + "terminal".

***
### How can you navigate to a particular directory?

> Using the "change directory" command [`cd`]

***
### Where will cd on its own navigate you to?

> To the HOME environmental variable, in my case: [`HOME=/Users/andrehernandez`]

***
### Where will cd .. navigate you to?

> To the parent directory [..]

***
### How do you display the name of the directory you are currently in?

> By running the command `pwd`.

***
### How do you display the contents of the directory you are currently in?

> By using the "list directory contents" command [ls]

***
### How do you create a new directory?

> With the "make directory" command + directory name [`mkdir`]

***
### How do you create a new file?

> Using the `touch` command + file name, or by using a redirection token on the cli [`>` simple] [`>>` append]
```
$ touch new_file.txt
$ echo > my_file.txt
$ head some_file.txt > head_of_some_file.txt
```

***
### How do you destroy a directory or file?

> By using the remove command [`rm`], for directories make sure to use the recursive flag [`-r`]

***
### How do you rename a directory or file?

> By using the move command [`mv`] 
```
$ mv old_file.txt new_file.txt
```

***

# Introduction to Git

***

### What kind of program is Git?

>It's a distributed version control system, or simply, the stupid content tracker.

*** 
### What are the differences between Git and a text editor in terms of what they save and their record keeping?

> A text editor saves nothing but the contents of a file, only one entry exists for each file that the text editors is currently editing.<br>
> Git on the other hand, will keep a snapshot of many versions for a certain directory, on it's .git directory.<br>
> Git will save snapshots of the staged files and also, allow branching features.<br>

*** 

### Does Git work at a local or remote level?

> Both!!! Git allows you to publish your version to a network, and work with other clients on the same repository.<br>
> Git also keeps a local version of the project on each client that downloaded it's source.

***

### Does GitHub work at a local or remote level?

> GitHub works at a remote level only, it is a website that allows you to share your repositories on the internet.<br>
> GitHub features, Wiki's, bug trackers, project management tools and more.

***

### Why is Git useful for developers?

> It's useful to keep track of the different versions of a project.<br>
> It will also safeguard the information of the project, making the project more reliable.

***
### Why are Git and GitHub useful for a team of developers?

> Working with a team is more effective by using tools like Git, because you can make branches, and merge the code.<br>
> Git allows you to keep a version locally of the repository, which ultimately can save the project in case the main server is ever corrupted, or deleted by mistake.<br>
> GitHub offers project management tools, useful for teams, and creating issues, which can evolve to Pull Requests which evntually can get merge into the main branch.

***


# Git Basics

***

### How do you create a new repository on GitHub?

> You navigate to the repositories section and click "New",  then you choose the repository name and create it by summiting the form.

***
### How do you copy a repository onto your local machine from GitHub?

> You use the clone command with the git cli [`git clone` + ssh or http]

***
### What is the default name of your remote connection?

> **origin**

***
### Explain what origin is in git push origin main.

> **origin** is the target of the remote server. When you push, the git repository will be uploaded to the origin url.

***
### Explain what main is in git push origin main.

> _main_ is the branch on the remote server. The changes would be uploaded to that same branch.

***
### Explain the two-stage system that Git uses to save files.

> The staging area and the committed files.<br>
> The staging area is like a waiting room, the files that are stages are waiting to be committed.<br>
> When you commit all the files in the staging area will be saved in the distributed version control system, they will be safe!

***
### How do you check the status of your current repository?

> `git status`

***
### How do you add files to the staging area in git?

> With the `git add` + filename command, you can use `"."` to stage all the files, or `-p` to patch all the modified files.

***
### How do you commit the files in the staging area and add a descriptive message?

> `git commit -m "Your Message goes here"`

***
### How do you push your changes to your repository on GitHub?

> `git push name_of_your_remote name_of_the_branch`

***
### How do you look at the history of your previous commits?

> `git log`

***

# Introduction to HTML and CSS

***

### What do HTML and CSS stand for?

> HTML = HyperText Markup Language, CSS =  Cascading Style Sheets

***
### Between HTML and CSS, which would you use for putting paragraphs of text on a webpage?

> HTML, using the `&#60;p&#62; &#60;/p &#62; tag.

***
### Between HTML and CSS, which would you use for changing the font and background color of a button?

> CSS, using the attribute `font-family: family-name font-style;` &  `background-color: color;`

***
### What is the difference between HTML, CSS and JavaScript?

> HTML is used to place data on a document organized by tags, following a nested markup logic model.<br>
> CSS is used to modify the style of the elements described on the HTML document, you can change the size, color, figure; etc.<br>
> JS is used to control the elements of the web page, making the page more interactive, with JS you can place condition and logic to your page.

***

# Elements and Tags

***

### What is an HTML tag?

> It's a piece of opening and closing labels which are used to create an element.<br>
> There are limited and defined HTML tags

***
### What are the three parts of an HTML element?

> The opening statement, the content of the tag, and the closing statement.<br>
> `&#60;tag&#62; content  &#60;/tag &#62;`

***

# HTML Boilerplate

***

### What is the purpose of the doctype declaration?

> To tell the browser which HTML version it should use to render our document.

***
### What is the HTML element?

> It's the root element of our document, all other elements will be descendants from this element.

***
### What is the purpose of the head element?

> To specify various meta data that will help the render the web page correctly.<br>
> The title, page scale, the special characters encoding standard; etc.

***
### What is the purpose of the body element?

> To hold the structure of our document data.

***

# Working with Text

***

### How do you create a paragraph in HTML?

>
`&#60;p&#62; &#60;/p&#62;`
or using a break
`&#60;br&#62;`

***
### How do you create a heading in HTML?

> Using the heading tags, there are 6 sizes, 1 the biggest 6 the smallest<br>

***
### How many different levels of headings are there and what is the difference between them?

> There are 6 levels.<br>
> `&#60;h1&#62;&#60;/h1&#62;` `&#60;h2&#62;&#60;/h2&#62;` `&#60;h3&#62;&#60;/h3&#62;` `&#60;h4&#62;&#60;/h4&#62;` `&#60;h5&#62;&#60;/h5&#62;` `&#60;h6&#62;&#60;/h6&#62;` <br>
> The difference is the size.

***
### What element should you use to make text bold and important?

> `&#60;strong&#62;`

***
### What element should you use to make text italicized to add emphasis to it?

> `&#60;em&#62;`

***
### What relationship does an element have with any nested elements within it?

> Parent-Child the nested elements are the child of the element surrounding them, they also inherit the parent style in some cases.

***
### What relationship do two elements have if they are at the same level of nesting?

> Siblings.

***
### How do you create HTML comments?

> `&#60;!-- YOUR COMMENTS GO HERE --&#62;`

***

# Lists

***

### What HTML element is used to create an unordered list?

> `&#60;ul&#62;`

***
### What HTML element is used to create an ordered list?

> `&#60;ol&#62;`

***
### What HTML element is used to create list items within both unordered and ordered lists?

> `&#60;li&#62;`

***

# Links and Images

***

### What element is used to create a link?

> `&#60;a&#62;` with the href attribute

***
### What is an attribute?

> It is an part of the tag that specifies a certain configuration of the element. Attributes might help you set up a reference, size, meta data; etc.

***
### What attribute tells links where to go to?

> The href attribute specifies the place where a link should go to, while the target attribute tells how to open that link.

***
### What security considerations must be taken if you wish to use the target attribute to open links in a new tab/window?

> Weather you want or not for the link to reference it's origin, and if you wish to give access to the page via the link.<br>
> It is recommended to not give access by setting up the attributes `rel="noopener noreferrer"`

***
### What is the difference between an absolute and relative link?

> An absolute link will not build the url with the current location. The url is exactly what the data on the document.<br>
> The relative link is a link that will be built on top of the current location where the link was opened.

***
### Which element is used to display an image?

> `&#60;img&#62;` with the *src* attribute

***
### What two attributes do images always need to have?

> The *src* and *alt*

***
### How do you access a parent directory in a filepath?

> `../`

***
### What are the four main image formats that you can use for images on the web?

> JPG, PNG, GIF & SVG<br>
- jpg : Great for photos with huge color palettes, although it doesn't allow transparency<br>
- png : Great for images, like logos, supports transparency but it's usually a bigger file<br>
- gif : Can be used for animations, it works for anything that a png could be used<br>
- svg: It's not a pixel-based image, it's vector based, which is great for scaling, since the image will never loose quality, using svg is usually better than using png<br>

***

# Commit Messages

***

### What are two benefits of having well-written commit messages and a good commit history?

> 1 - It's easier to navigate between versions, gives a better perspective to the project<br>
> 2 - It's more welcoming to fellow programmers, they can get a better sense of what is happening on the code and how it evolves<br>

***
### How many characters should the subject line of your commit message be?

> Limit to Maximum 50 characters

***


# Intro to CSS

***
### What is the syntax for class and ID selectors?

> \#id-case-sensitive-name

***
### How would you apply a single rule to two different selectors?

> Using a coma separated list<br>
```
div, p {
  rule: value;
}
```

***
### Given an element that has an id of title and a class of primary, how would you use both attributes for a single rule?

>
```
.primary#title {
}
```

***
### What does the descendant combinator do?

> It will cause the last selector to be selected, this, is a selector which has the ancestors which are in place.

***
### What are the names of the three ways to add CSS to HTML?

> - *External CSS* (Linking)<br>
> - *Internal CSS* (Embedded)<br>
> - *Inline CSS* In-Place

***
### What are the main differences between the three ways of adding CSS to HTML?

> The External is the most useful because you can modify all the css in a single file. Specially useful when you have multiple pages.
> Internal is good when the style is _ONLY_ going to be used in that web page.
> Inline is usually a bad practice because it will doom the element forever, you would need to change directly the element, which can be painful when you have a big web page.

***


# The Cascade

***
### Between a rule that uses one class selector and a rule that uses three type selectors, which rule has the higher specificity?

> The rule that uses the class selector will always beat a type selector rule.

***

# Inspecting HTML and CSS

***

### How do you select a specific element on your page with your browser’s developer tools?

> You can either hover the node on the Elements section, or choose the hover tool and hover the element on the webpage.

***

### What does a strikethrough in a CSS declaration mean in your browser’s developer tools?

> That the CSS rule was overwritten.

***
### How do you change CSS in real time on specific elements of a web page with your browser’s developer tools?

> In the styling section, you can add styles or edit them, without needing to reload the page.

***

# The Box Model

***

### From inside to outside, what is the order of box-model properties?

>  The element content, the padding, the border & the margin.

***
### What does the box-sizing CSS property do?

>  When we use box-sizing we can change how elements count the width and heigh properties, either taking into account also padding and border, on just the element size.

***
### What is the difference between the standard and alternative box model?

> The standard box model will respect the height and width properties given, and apply them to the content box.<br>
> This is not always the best solution, since the box is define beyond the content, including the border and padding.<br>
> So a box might be bigger than what you would expect. You can change this behavior by altering the box model.<br>
> Then the height and width attributes will define the box size, including the border and padding, and the content will grow in order to fill the values given.

***
### Would you use margin or padding to create more space between 2 elements?

> `margin`

***
### Would you use margin or padding to create more space between the contents of an element and its border?

> `padding`

***
### Would you use margin or padding if you wanted two elements to overlap each other?

> `margin, with a negative value`

***
### How do you set the alternative box model for all of your elements?

>  
```
* {
  box-sizing: border-box;`
}
```

***
### How do you center an element horizontally?

> By defining a width and using `margin: 0 auto;` or `margin-left: auto; margin-right: auto;` the element will center horizontally.

***

# Block and Inline

***
### What is the difference between a block element and an inline element?

> A block element will take all the inline space available of the parent when no width or height are defined and cause other elements to move away from it.<br>
> An inline element doesn't respect the width and height attributes, and will not cause elements to move away from it, it will take just the space it requires.

***
### What is the difference between an inline element and an inline-block element?

> An inline element doesn't respect the margin, or border attributes, nor the height or width, while inline-block will indeed respect this attributes.

***
### Is an h1 block or inline?

> `block`

***
### Is button block or inline?

> `inline`

***
### Is div block or inline?

> `block`

***
### Is span block or inline?

> `inline`

***