let data = {
  snippets: [
    {
      name: "Launchschool Basics",
      icon: "🍽️",
      description: "Basic Ruby Exercices",
      filePath: "./basic_data_types/launchschool_basics.rb",
      lang: "rb",
      showFileName: false,
      includeOnMenu: true,
      code: null,
    },
    {
      name: "Numbers Exercises",
      icon: "🟰",
      description: "Try the different Operations with numbers and floats",
      filePath: "./basic_data_types/exercises/numbers_exercises.rb",
      lang: "rb",
      showFileName: false,
      includeOnMenu: true,
      code: null,
    },
    {
      name: "String Exercises",
      icon: "⛓️",
      description: "Discover various useful string methods.",
      filePath: "./basic_data_types/exercises/string_exercises.rb",
      lang: "rb",
      showFileName: false,
      includeOnMenu: true,
      code: null,
    },
    // {
    //   name: "Launchschool Basics 2",
    //   icon: "",
    //   description: "Descrption",
    //   filePath: "./basic_data_types/launchschool_basics.rb",
    //   lang: "rb",
    //   showFileName: false,
    //   includeOnMenu: false,
    //   code: null,
    // },
  ]
};

async function updateSnipetCode(snippet) {
  const response = await fetch(snippet.filePath);
  snippet.code = await response.text();
}

const nav = document.querySelector("#nav");
function appendSnippetToMenu(snippet) {
  const link = document.createElement("a");
  link.href = "#".concat(snippet.name.split(" ").join("-"));
  
  const linkName = document.createElement("h3");
  linkName.textContent = snippet.icon.concat(" ", snippet.name);

  link.appendChild(linkName);
  nav.appendChild(link);
}

/**
 * function: appendSnippet()
 * 
 * <div class="snippet">
 *   <div class="md-container" id="exercise-1">
 *     <h1>NAME</h1>
 *     <h4>DESCRIPTION</h4>
 *     <hr>
 *   </div>
 * </div>
 * <pre class="lg-container">
 *   <code class="language-js">CODE</code>
 * </pre> 
 */
const snippetsDiv = document.querySelector("#snippets");
function appendSnippet(snippet) {
  if (snippet.code === null) {
    console.warn(`Failed to load "${snippet.name}"`);
    return ;
  }
  const snippetContainer = document.createElement("div");
  snippetContainer.classList.add("snippet");
  
  const container = document.createElement("div");
  container.classList.add("md-container");
  container.setAttribute("id", snippet.name.split(" ").join("-"));

  const title = document.createElement("h1");
  title.textContent = snippet.name;
  const description = document.createElement("h4");
  description.textContent = snippet.description;

  container.appendChild(title);
  container.appendChild(description);
  container.appendChild(document.createElement("hr"));

  const pre = document.createElement("pre");
  pre.classList.add("lg-container");
  if (snippet.showFileName) {
    const fileName = document.createElement("em");
    const arr = snippet.filePath.split("/");
    fileName.textContent = arr[arr.length - 1];
    pre.appendChild(fileName);
  }
  const code = document.createElement("code");
  code.classList.add("language".concat("-", snippet.lang));
  code.textContent = snippet.code;
  pre.appendChild(code);
  
  snippetContainer.appendChild(document.createElement("hr"));
  snippetContainer.appendChild(container);
  snippetContainer.appendChild(pre);

  snippetsDiv.appendChild(snippetContainer);

  if (snippet.includeOnMenu) appendSnippetToMenu(snippet);
}


async function init() {
  for (snippet of data.snippets) {
    await updateSnipetCode(snippet);
    appendSnippet(snippet)
  }

  hljs.highlightAll();
}

init();