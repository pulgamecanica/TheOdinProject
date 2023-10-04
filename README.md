***
> `TheOdinProject`
***

# Assignments

	You will find bellow my solution to all the assignments I've done.


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
###How do you create a new file?

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

> with the `git add` + filename command, you can use `"."` to stage all the files, or `-p` to patch all the modified files.

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
