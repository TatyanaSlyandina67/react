
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { restaurants } from './mock.js'

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <div>
  <div>Dishoom
    <h3>Меню</h3>
    <ul>
      <li>Chicken tikka masala</li>
      <li>Naan</li>
      <li>Samosa</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>Not bad</li>
      <li>No burgers</li>
    </ul>  
  </div>
  <div>Homeslice
  <h3>Меню</h3>
  <ul>
      <li>Margarita</li>
      <li>Chef pizza</li>
  </ul>
  <h3>Отзывы</h3>
    <ul>
      <li>Perfect Margarita</li>
      <li>No burgers again. But Chef Pizza is the best one</li>
      <li>Good for lunch</li>
    </ul>  
  </div>
  <div>Fabrique
  <h3>Меню</h3>
  <ul>
      <li>Cinnamon buns</li>
      <li>Semlor</li>
      <li>Saffron bun</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>Best bakery</li>
    </ul>  
  </div>
  <div>Flat Iron
  <h3>Меню</h3>
  <ul>
      <li>Flat Iron Steak</li>
      <li>Flat Iron Burger</li>
    </ul>
    <h3>Отзывы</h3>
    <ul>
      <li>Finally! This place is amazing place for breakfast, lunch, dinner and supper</li>
      <li>Meat here is extremely delicious</li>
    </ul>  
  </div>
</div>
);


/*let div = document.createElement('div');
div.id = 'root';
let ul;
function restaurantsList(arr) {
  ul = document.createElement('ul');
  restaurants.forEach(elems => {
      let li = document.createElement('li');
      let list =
          (li.textContent = `name: ${elems.name};`);
      //console.log(li);
      ul.append(li);
      console.log(ul);
  });
  return;
}

restaurantsList(restaurants);

document.getElementById('root').append(ul);

//document.body.innerHTML = restaurants;
/*root.render(createElement(
  "ul",{},
  restaurants.map((id) => createElement("li",{},id))
   )
);*/



