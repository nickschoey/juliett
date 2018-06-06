# juliett
Juliett is an open-source cryptocurrency POS system for small merchants



## Client

## Server


### Models

#### Item Model

#### Receipt Model

### Database
API end-points for the MongoDB database. Mongoose is used as an ORM.

#### Item Model

*addItem(item):* Adds individual items to the list of goods sold. *(name, ingredients, price)*

~~editItem(item):~~ *just fucking delete and add again for now.*

*deleteItem(item):* Deletes an item by name.

*viewItem(item):* Displays an individual good that's sold.

*viewItems:* Displays all goods sold



#### Receipt Model

*addReceipt(receipt):* Adds receipts for a transaction. *(item name, fiat used, cryptocurrency used, price in fiat, price in cryptocurrency, exchange rate, time of receipt, block of transaction, hash of transaction ID)

*viewReceipt(name):* Displays the receipt for an individual purchase *by name*

*viewReceipts:* Displays all the receipt logs

*deleteReceipt(name):* Deletes the receipt for an individual purchase *by name*

#### ~~*~~*~~~*~~*~*~*~~*~*~~*~~*~*~~*~~

**Notes, Conventions:**
<ul>
  <li> all items are added in lower-case. </li>
  <li> no spacing is used in names of items. </li>
  <li> items are found and deleted by name </li>
</ul>


**Todo:**

<ul>
  <li> [ ] build lowerCaseAll in saving/searching mode to get agnostic on search. </li>
  <li> [ ] search receipts by id, transactionID </li>
  <li> [ ] build multiple searching option (by hash or timestamp or transaction ID ) </li>
  <li> [ ] build multiple results in a single search (all in date: XX/YY/ZZ) </li>
  <li> [ ] build edit item </li>

</ul>




### Index.js

### Router
