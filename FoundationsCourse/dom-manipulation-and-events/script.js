{
	// Exercise Setup
	const container = document.querySelector('#setup-container');

	const content = document.createElement('div');
	content.classList.add('content');
	content.textContent = 'This is the glorious text-content!';

	container.appendChild(content);
}
{
	// Exercise 1
	const container = document.querySelector('#container');

	const contentP = document.createElement('p');
	const contentH3 = document.createElement('h3');
	const contentDiv = document.createElement('div');

	contentP.textContent = 'Hey I’m red!';
	contentP.style.color = '#C70039';
	container.appendChild(contentP);

	contentH3.textContent = 'I’m a blue h3!';
	contentH3.style.color = '#1F51FF';
	container.appendChild(contentH3);
	
	contentDiv.style.border = '1px black solid';
	contentDiv.style.borderRadius = '0.25rem';
	{
		const contentDivChildH1 = document.createElement('h1');
		const contentDivChildP = document.createElement('p');

		contentDivChildH1.textContent = 'I’m in a div';
		contentDiv.appendChild(contentDivChildH1);

		contentDivChildP.textContent = 'ME TOO!';
		contentDiv.appendChild(contentDivChildP);
	}
	container.appendChild(contentDiv);
}
{
	// Alerts
	const btn2 = document.querySelector('#btn2');
	btn2.onclick = () => alert('Hello World');

	const btn3 = document.querySelector('#btn3');
	btn3.addEventListener('click', () => {
  	alert('Hello World');
	});
}
{
	// ShoppingList Exercise 
	// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#active_learning_a_dynamic_shopping_list
	const shoppingListButton = document.querySelector('#add-item-to-shopping-list-button');
	const shoppingList = document.querySelector('#shopping-list');
	const shoppingItem = document.querySelector('#item');
	const getItemName = () => shoppingItem ? shoppingItem.value : '';
	const resetInput = () => shoppingItem.value = '';
	const createListItem = (itemName) => {
		const listItem = document.createElement('li');
		const span = document.createElement('span');
		const button = document.createElement('button');

		span.textContent = itemName;
		button.textContent = 'Delete';
		button.addEventListener('click', function () {
			shoppingList.removeChild(listItem);
		}, false);
		listItem.appendChild(span);
		listItem.appendChild(button);
		return listItem;
	}
	function addCurrentItem() {
		const listItem = createListItem(getItemName());

		shoppingList.appendChild(listItem);
		resetInput();
		shoppingItem.focus();
	}
	shoppingListButton.addEventListener("click", addCurrentItem, false);
}