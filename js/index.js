/******* GLOABL VARIABLES/DATA ********/
// Define all of your variables here, including Object and Array references

// let course0Name = `Usability Testing 1`;
// let course0Code = `INTR2014`;
// let course0Intstructor = `Nastaran Dadashi`;
// let course0Start = `Fall 2019`;
// let course0Weeks = 15;
// let course0Breaks = `Yes`;
// let course0Duration = 180;

const products = [
    {
      name: `The Wolf Shoes`,
      code: `P1`,
      price: `$100`,
      priceSale: 'N/A',
      description: '100 % cotton, waterproof',
      quantity: 20,
      discount: `Yes`,
      rating: '4/5',
      category: `Footwear`,
      img: `img/2.jpg`
    }, 

    {
        name: `The Wolf Gloves`,
        code: `P2`,
        price: `$200`,
        priceSale: 'N/A',
        description: '100 % cotton, waterproof',
        quantity: 20,
        discount: `Yes`,
        rating: '4/5',
        category: `Handwear`,
        img: `img/6.jpg`
      }, 

      {
        name: `The Cheetah Shoes`,
        code: `P3`,
        price: `$300`,
        priceSale: 'N/A',
        description: '100 % cotton, waterproof',
        quantity: 20,
        discount: `Yes`,
        rating: '4/5',
        category: `Footwear`,
        img: `img/3.jpg`
      }, 

      {
        name: `The Cheetah Gloves`,
        code: `P4`,
        price: `$400`,
        priceSale: 'N/A',
        description: '100 % cotton, waterproof',
        quantity: 20,
        discount: `Yes`,
        rating: '4/5',
        category: `Handwear`,
        img: `img/7.jpg`
      }, 

      {
        name: `The Bear Shoes`,
        code: `P5`,
        price: `$500`,
        priceSale: 'N/A',
        description: '100 % cotton, waterproof',
        quantity: 20,
        discount: `Yes`,
        rating: '4/5',
        category: `Footwear`,
        img: `img/4.jpg`
      }, 

      {
        name: `The Bear Gloves`,
        code: `P6`,
        price: `$600`,
        priceSale: 'N/A',
        description: '100 % cotton, waterproof',
        quantity: 20,
        discount: `Yes`,
        rating: '4/5',
        category: `Handwear`,
        img: `img/9.jpg`
      }, 

      {
        name: `The Tiger Shoes`,
        code: `P7`,
        price: `$700`,
        priceSale: 'N/A',
        description: '100 % cotton, waterproof',
        quantity: 20,
        discount: `Yes`,
        rating: '4/5',
        category: `Footwear`,
        img: `img/5.jpg`
      }, 

      {
        name: `The Tiger Gloves`,
        code: `P8`,
        price: `$800`,
        priceSale: 'N/A',
        description: '100 % cotton, waterproof',
        quantity: 20,
        discount: `Yes`,
        rating: '4/5',
        category: `Handwear`,
        img: `img/8.jpg`
      }, 

      {
        name: `The Lion Shoes`,
        code: `P9`,
        price: `$900`,
        priceSale: 'N/A',
        description: '100 % cotton, waterproof',
        quantity: 20,
        discount: `Yes`,
        rating: '4/5',
        category: `Footwear`,
        img: `img/2.jpg`
      }, 

      {
        name: `The Lion Gloves`,
        code: `P10`,
        price: `$1000`,
        priceSale: 'N/A',
        description: '100 % cotton, waterproof',
        quantity: 20,
        discount: `Yes`,
        rating: '4/5',
        category: `Handwear`,
        img: `img/10.jpg`
      }, 
      {
        name: `The Wolf Dumbbells`,
        code: `P11`,
        price: `$150`,
        priceSale: 'N/A',
        description: '100 % pure steel',
        quantity: 20,
        discount: `Yes`,
        rating: '4/5',
        category: `Gym Equipment`,
        img: `img/db.jpg`
      }, 
  
      {
          name: `The Wolf Barbell`,
          code: `P12`,
          price: `$250`,
          priceSale: 'N/A',
          description: '100 % pure steel',
          quantity: 20,
          discount: `Yes`,
          rating: '4/5',
          category: `Gym Equipment`,
          img: `img/bb.jpg`
        }, 
  
        {
          name: `The Cheetah Dumbbells`,
          code: `P13`,
          price: `$350`,
          priceSale: 'N/A',
          description: '100 % pure steel',
          quantity: 20,
          discount: `Yes`,
          rating: '4/5',
          category: `Gym Equipment`,
          img: `img/db.jpg`
        }, 
  
        {
          name: `The Cheetah Barbell`,
          code: `P14`,
          price: `$450`,
          priceSale: 'N/A',
          description: '100 % pure steel',
          quantity: 20,
          discount: `Yes`,
          rating: '4/5',
          category: `Gym Equipment`,
          img: `img/bb.jpg`
        }, 
  
        {
          name: `The Bear Dumbbells`,
          code: `P15`,
          price: `$550`,
          priceSale: 'N/A',
          description: '100 % pure steel',
          quantity: 20,
          discount: `Yes`,
          rating: '4/5',
          category: `Gym Equipment`,
          img: `img/db.jpg`
        }, 
  
        {
          name: `The Bear Barbell`,
          code: `P16`,
          price: `$650`,
          priceSale: 'N/A',
          description: '100 % pure steel',
          quantity: 20,
          discount: `Yes`,
          rating: '4/5',
          category: `Gym Equipment`,
          img: `img/bb.jpg`
        }, 
  
        {
          name: `The Tiger Dumbbells`,
          code: `P17`,
          price: `$750`,
          priceSale: 'N/A',
          description: '100 % pure steel',
          quantity: 20,
          discount: `Yes`,
          rating: '4/5',
          category: `Gym Equipment`,
          img: `img/db.jpg`
        }, 
  
        {
          name: `The Tiger Barbells`,
          code: `P18`,
          price: `$850`,
          priceSale: 'N/A',
          description: '100 % pure steel',
          quantity: 20,
          discount: `Yes`,
          rating: '4/5',
          category: `Gym Equipment`,
          img: `img/bb.jpg`
        }, 
  
        {
          name: `The Lion Dumbbells`,
          code: `P19`,
          price: `$950`,
          priceSale: 'N/A',
          description: '100 % pure steel',
          quantity: 20,
          discount: `Yes`,
          rating: '4/5',
          category: `Gym Equipment`,
          img: `img/db.jpg`
        }, 
  
        {
          name: `The Lion Barbells`,
          code: `P20`,
          price: `$1050`,
          priceSale: 'N/A',
          description: '100 % pure steel',
          quantity: 20,
          discount: `Yes`,
          rating: '4/5',
          category: `Gym Equipment`,
          img: `img/bb.jpg`
        },
    
  ];
  
  
  /************* FUNCTIONS *************/
  // Stored functions that will run as part of this application
  
 
  // Function: getCourseAsHtmlString
  // Parameters: course:Object
  // Return: String of HTML (<article>)
  function getProductsAsHtmlString(products) {
  
    return `<article class="course ${products.category}">
      <h3>${products.name}</h3>
      <img src="${products.img}" alt="Logo for ${products.name}" class="product-img">
      <ul>
        <li>Products Code: <strong>${products.code}</strong></li>
        <li>Price: <strong>${products.price}</strong></li>
        <li>Price Sale: <strong>${products.priceSale}</strong></li>
        <li>Description: <strong>${products.description}</strong></li>
        <li>Quantity: <strong>${products.quantity}</strong></li>
        <li>Discount: <strong>${products.discount}</strong></li>
        <li>Rating: <strong>${products.rating}</strong></li>
        <li>Category: <strong>${products.category}</strong></li>

      </ul>  
    </article>`;
  }
  
  // Add or remove ("toggle") the .column-view class on the layout
  // Function: switchLayout
  // Parameters: none
  // Return: none
   function switchLayout() {
     document.getElementById('products').classList.toggle('column-view');
   }


   // Only include products under 1300
// Function: filterByPrice
// Parameters: prod:Object
// Return: true if less than 1300, false otherwise
function filterByPrice(prod) {
  return prod.price < 1500;
}


// Event listener, will run with each keystroke
function checkInput(event) {
  const userIsLookingFor = event.target.value.toLowerCase();
 
  const onlyMatchingNames = products.filter(prod => prod.name.toLowerCase().includes(userIsLookingFor));
  renderProducts(onlyMatchingNames);
}
  
  // Put all items of a supplied Array into the document
  // Function: renderCourses
  // Parameters: arr:Array
  // Return: none
  function renderProducts(arr) {
    // 1. map() the Array through getCourseAsHtmlString into a new Array
    const arrOfHtml = arr.map(getProductsAsHtmlString)
  
    // 2. join() the new Array into a single String of HTML
    const strOfHtml = arrOfHtml.join('\n')
  
    // 3. Put the String into the innerHTML of the document's #courses
    document.getElementById('products').innerHTML = strOfHtml;
  }
  
  
  
  /************* EXECUTABLE *************/
  // Execute functions that will access data
  

  console.table(products);

// Render courses less than 1300
const affordableProducts = products.filter(filterByPrice);
renderProducts(affordableProducts);



function checkCategory(event) {
  const userIsLookingFor = event.target.value;

  const onlyMatchingCategories = products.filter(prod => prod.category == userIsLookingFor);
  renderProducts(onlyMatchingCategories);
}


  // Render the first 10 products
     renderProducts(products.slice(0, 20));
  
  // Find the layout <button>, add a "listener" to wait for a click, then call switchLayout()
document.getElementById('layout').addEventListener('click', event => switchLayout() )

// Find the <input> field, run checkInput when a user changes the 'input'
document.getElementById('productName').addEventListener('input', event => checkInput(event) )

// Find the <select> field, run checkCategory when there's a 'change' to the drop down value
document.getElementById('productCategory').addEventListener('change', event => checkCategory(event) )