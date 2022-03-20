//console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[5]);
// console.log(document.forms[0]);
// console.log(document.links);

// GETELEMENTBYID //
//console.log(document.getElementById('title'));
//var headerTitle = document.getElementById('title');
//console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
//headerTitle.innerHTML = '<h3>Hello</h3>';
// headerTitle.style.borderBottom = 'solid 3px #000';
// var addItem = document.getElementById('item');
// addItem.style.color = 'green' ;
// addItem.style.fontWeight = 'bold'; 

// GETELEMENTBYCLASSNAME //

// var items = document.getElementsByClassName('list-group');
// console.log(items[2]);
// items[2].style.backgroundColor = 'green';
// items[2].style.textContent = 'Hello 2';

// for(var i=0; i< items.length; i++){
//  items[i].style.fontWeight = 'bold';
// }

// GETELEMENTBYTAGNAME //

// var li = document.getElementsByTagName('li');
// console.log(li[2]);
// li[2].style.backgroundColor = 'green';
// li[2].style.textContent = 'Hello 2';

// for(var i=0; i< li.length; i++){
//  li[i].style.fontWeight = 'bold';
// }

// var li = document.getElementsByTagName('li');
// console.log(li[4]);
// li[4].style.backgroundColor = 'yellow';

// QUERYSELECTOR //

// var secondItem = document.querySelector('.list-group:nth-child(2)');
// secondItem.style.backgroundColor = 'green';

// var thirdItem = document.querySelector('.list-group:nth-child(3)');
// thirdItem.style.color = 'white';

// QUERYSELECTORALL //

// var Item = document.querySelectorAll('.list-group');
// Item[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for(var i=0; i < odd.length; i++){
//    odd[i].style.backgroundColor = 'green';
// }

// TRAVERSING THE DOM //
//var itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'pink';
// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = 'pink';
// console.log(itemList.parentNode.parentNode.parentNode);

// childNodes
// console.log(itemList.childNodes);

// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor = 'yellow';

// firstChild
   //console.log(itemList.firstChild);
// firstElementChild 
//    console.log(itemList.firstElementChild);
//    itemList.firstElementChild.textContent = 'Hello 1';  

// lastChild
// console.log(itemList.lastChild);
// lastElementChild 
//    console.log(itemList.lastElementChild);
//    itemList.lastElementChild.textContent = 'Hello 1';

// nextSibling
//   console.log(itemList.nextSibling);
// nextElementSibling
//   console.log(itemList.nextElementSibling);  

// previousSibling
//  console.log(itemList.previousSibling);
// previousElementSibling
//  console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

// createElement

// // Create a div
// var newDiv = document.createElement('div');

// // Add class
// newDiv.className = 'hello';

// // Add id
// newDiv.id = 'hello1';

// //Add attr
// newDiv.setAttribute('title','Hello Div');

// // Create text node
// var newDivText = document.createTextNode('Hello');

// // Add text o div

// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// console.log(newDiv);

// container.insertBefore(newDiv, h1);

////// Delete and Edit functional
 
//  var form = document.getElementById('addForm');
//  var itemList = document.getElementById('items');
//  var filter = document.getElementById('filter');

//  // Form submit event
//  form.addEventListener('submit', addItem);
//  // Delete item
//  itemList.addEventListener('click', removeItem);
//  // Filter item
//  filter.addEventListener('keyup', filterItems);

//  // Add item
//  function addItem(e){
//     e.preventDefault();
   
//  // get input value
//  var newItem = document.getElementById('item').value;
 
//  // Create new li element
//  var li = document.createElement('li');
//  // Add class
//  li.className = 'list-group-item';
//  // Add text node with input value
//  li.appendChild(document.createTextNode(newItem));

//  // Create del button element
//  var deleteBtn = document.createElement('button');

//  // Add classes to del button
//  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

//  // Append next node
//  deleteBtn.appendChild(document.createTextNode('X'));

//  li.appendChild(deleteBtn);

//  itemList.appendChild(li);
 
// }

// function removeItem(e){
//    if(e.target.classList.contains('delete')){
//    if(confirm('Are You Sure?')){
//    var li = e.target.parentElement; 
//       itemList.removeChild(li);
//    }
//    }
// }

// // Filter Items
// function filterItems(e){
//    // convert text to lowercase
//    var text = e.target.value.toLowerCase();
//    // Get lis
//    var items = itemList.getElementsByTagName('li');
//    // Convert to an array
//    Array.from(items).forEach(function(item){
//      var itemName = item.firstChild.textContent;
//      if(itemName.toLowerCase().indexOf(text) != -1){
//        item.style.display = 'block';
//      } else {
//        item.style.display = 'none';
//      }
//    });
//  }

//// callbacks


