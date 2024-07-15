const Wishlist = function (elementId) {
    this.items = [];
    this.element = document.getElementById(elementId);
  };
  
  //checking if an item already exists in the wishlist
  Wishlist.prototype.contains = function (itemId) {
    return this.items.some(item => item.id === itemId);
  };
  
  // adding an item to the wishlist
  Wishlist.prototype.add = function (item) {
    if (!this.contains(item.id)) {
      this.items.push(item);
      this.render();
    }
  };
  
  //removing an item from the wishlist
  Wishlist.prototype.remove = function (itemId) {
    this.items = this.items.filter(item => item.id !== itemId);
    this.render();
  };
  
  //rendering the wishlist items
  Wishlist.prototype.render = function () {
    // Clearing existing content
    this.element.innerHTML = '';
    // Iterate over each item in the items array
    this.items.forEach(item => {
      const listItem = document.createElement('li');
      // Create inner HTML for the <li> element with item details and remove button
      listItem.innerHTML = '<span>' + item.name + '</span>' +
        '<button class="remove-from-wishlist" data-id="' + item.id + '">Remove</button>';
      this.element.appendChild(listItem);
      // Attach event listener to the remove button within the <li> element
      listItem.querySelector('.remove-from-wishlist').addEventListener('click', () => {
        this.remove(item.id);
      });
    });
  };
  
  // Method to clear the wishlist
  Wishlist.prototype.clear = function () {
    // Clear the items array
    this.items = [];
    this.render();
  };
  
  // Event listener for the clear wishlist button
  document.getElementById('clear-wishlist').addEventListener('click', () => {
    wishlist.clear();
  });
  
  // Create a new instance of Wishlist and attach event listeners to 'Add to wishlist' buttons
  const wishlist = new Wishlist('wishlist');
  
  
  // Adds to wishlist
  document
    .querySelectorAll('.add-to-wishlist')
    .forEach((e) => {
      //Executed function ev
      e.addEventListener('click', (ev) => {
        //Retrieve Clicked Element
        const element = ev.target;
        wishlist.add({
          id: element.dataset.id,
          name: element.dataset.name
        });
      })
    });
  