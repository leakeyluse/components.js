# components.js
Create and use React like components in ES5

## Installation
Download components.js and add it to your project using a script tag

## Usage
```JavaScript
  div(); //returns <div></div>
  
  div(
    {className:"container"},
    input({type: "text", className: "txtbox"}),
    input({type: "text", className: "txtbox"})
  ); //returns nested elements
  /*
    <div class="container">
      <input type="text" class="txtbox"/>
      <input type="text" class="txtbox"/>
    </div>
  */
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
