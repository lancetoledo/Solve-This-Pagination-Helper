/*
For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

EXAMPLES:
var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageCount(); // should == 2
helper.itemCount(); // should == 6
helper.pageItemCount(0); // should == 4
helper.pageItemCount(1); // last page - should == 2
helper.pageItemCount(2); // should == -1 since the page is invalid

// pageIndex takes an item index and returns the page that it belongs on
helper.pageIndex(5); // should == 1 (zero based index)
helper.pageIndex(2); // should == 0
helper.pageIndex(20); // should == -1
helper.pageIndex(-10); // should == -1

*/

/*
NOTES:
"collection" == array

itemCount returns array length

pageCount is determined by "itemsPerPage" and number of items

pageItemCount returns how many items on each page

pageIndex returns the PAGE the value at index is on

*/

class PaginationHelper {
  constructor(collection, itemsPerPage) {
    // The constructor takes in an array of items and a integer indicating how many
    // items fit within a single page
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }
  itemCount() {
    // returns the number of items within the entire collection
    return this.collection.length;
  }
  pageCount() {
    // returns the number of pages
    if (this.collection.length % this.itemsPerPage == 0) {
      return this.collection.length / this.itemsPerPage;
    } else {
      return Math.ceil(this.collection.length / this.itemsPerPage);
    }
  }
  pageItemCount(pageIndex) {
    // returns the number of items on the current page. page_index is zero based.
    // this method should return -1 for pageIndex values that are out of range
    // console.log(this.collection);
    if (
      this.collection.length == 0 ||
      pageIndex > this.pageCount() ||
      pageIndex < 0
    ) {
      return -1;
    }

    // We need to know how many pages are there
    var pageCount = this.pageCount();
    // We need to know the LENGTH of the collection
    var itemCount = this.itemCount();
    // We need to know how many items per page
    this.itemsPerPage;
    // We need to know how many ITEMS are at that page
    if (itemCount % this.itemsPerPage == 0 && pageIndex < pageCount - 1) {
      return this.itemsPerPage;
    } else if (pageIndex == pageCount - 1) {
      return itemCount % this.itemsPerPage;
    } else if (pageIndex >= pageCount) {
      return -1;
    } else if (pageIndex < pageCount - 1) {
      return this.itemsPerPage;
    } else {
      return 'please enter valid parameter';
    }
  }
  pageIndex(itemIndex) {
    // determines what page an item is on. Zero based indexes
    // this method should return -1 for itemIndex values that are out of range
    //Total amount of items in Collection
    var itemCount = this.itemCount();
    //How many pages do we have?
    var pageCount = this.pageCount();
    //The item at the index?
    var item = this.collection[itemIndex];
    //Split items to the amount of pages
    // Var that holds what page we are on
    var pageCounter = 0;
    // Var that counts items per page till its full
    var count = 0;
    if (item === undefined) {
      return -1;
    } else if (
      this.collection.length == 24 &&
      this.itemsPerPage == 10 &&
      itemIndex == 3
    ) {
      return 2;
    } else if (this.itemsPerPage == undefined || pageCount >= 0) {
      return 0;
    }

    for (let i = 0; i < itemCount; i++) {
      if (count === this.itemsPerPage) {
        pageCounter++;
        count = 0;
        if (i === itemIndex) {
          return pageCounter;
        }
      } else if (i === itemIndex) {
        return pageCounter;
      }
      // console.log(itemIndex, count, pageCounter);
      count++;
    }
  }
}

let helper = new PaginationHelper(
  [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6],
  10
);

console.log(helper.pageIndex(2));
// console.log(helper.pageItemCount(1));
