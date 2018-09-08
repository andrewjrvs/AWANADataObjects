# AWANADataObjects

Ideas for a AWANA data objects

Toying with the layout an Awana cluber managment system might be layed out.

## Person

* Everyone could be stored in a person object. Clubbers / Leaders / Listeners / Parents and guardians.
* Each person be 'related' to others or groups / positions;
  * like clubbers to Parents, guardians, or Clubbers to the group they are with.
  * or leaders to a group, or a position they hold.

## Books

Each clubber could have a list of books they are working on / have completed.

```Note: Perhaps we need an active flag too, incase a clubber moves on, not 'finishing' the book they completed.```

* We would need a core book, with an identifier, and all the sections avaliable in the book.
* Each Clubber's book would use the same identifer as the 'core' book, but would only store their 'log' of what was completed
* The core book could label each section as 'required for completion' some how, they we could see if all the 'log' sections needed are there
  * in this case we would need to relate each log section to the core book section somehow

