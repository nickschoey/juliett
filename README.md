# juliett
Juliett is an open-source cryptocurrency POS system for small merchants



### Client

### Server


#### Models

##### Item Model

##### Receipt Model

#### Database
API end-points for the MongoDB database. Mongoose is used as an ORM.

##### Item Model

*addItem(item):* Adds individual items to the list of goods sold. *(name, ingredients, price)*


**Notes & Conventions:**
<ul>
  <li> * all items are added in lower-case. </li>
  <li> * no spacing is used in names of items. </li>
</ul>

~~editItem(item):~~ *just fucking delete and add again for now.*
*deleteItem(item):* Deletes an item by name.
*viewItem(item):* Displays an individual good that's sold.

**Notes & Conventions:**
<ul>
  <li> * items are found by name. </li>

</ul>

*viewItems:* Displays all goods sold

##### Receipt Model

*addReceipt(receipt):*
*viewReceipt(receipt):*
*viewAccounts:*
*deleteReceipt(receipt):*




#### Index.js

#### Router
