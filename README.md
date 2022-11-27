# Fullstack 2022/3 – React module - starting 14.11.2022

To check out this repo:

1. clone repository
2. cd into `code/lesson02/exercise` and run `npm install`
3. run `npm start`

> (almost no effort was spent on the styling - all on the react magic)

### Examples of
- conditional rendering / short circuiting 
- input field as controlled component
- API call inside useEffect
- routing with [Wouter](https://github.com/molefrog/wouter)
- dynamic routing



### Notes from the Course

#### conditional rendering examples
```js
// short circuiting:
{ isActive && 'Hello!' }
```
```js
// conditional rendering with ternary operator:
{isActive ? (
  { text }
  ) : (
  <img //....
  >
)}
```
```js
// with the OR `||` operator
// (like giving it a default value)
`{ text || 'Hello!' }`
`{ count || 0 }`
```
```js
// different ways - controlling for 'empty' object 
// rendering only when object has received values (for example 'name'):
{randomPokemon.hasOwnProperty('name') && (
    // ...
)}
// with the `keys()` method
{Object.keys(randomPokemon).length > 0 && (
  //...
)}
// with the `values()` method
{Object.values(randomPokemon).length > 0 && (
  //...
)}
// with the `entries()` method
{Object.entries(randomPokemon).length > 0 && (
  //...
)}
```

#### 2 (slightly) different ways to handle change in **multiple input elements**:
Using input attribute 'name' and passing 'name' and 'value' inside the event object from the input field to the handler function, then destructuring it:
```js
const initialPersonData = {
  firstName: '',
  // ...
};

const [personData, setPersonData] = useState(initialPersonData);

const handelFormInputChange = (event) => {
  const { name, value } = event.target;
  setPersonData({ ...personData, [name]: value });
};

<input
  value={personData.firstName}
  name='firstName'
  onChange={handelFormInputChange(event)}
/>
```
Passing 'name' and 'value' (inside the event object) as separate parameters from the input field to the handler function, then destructuring only the 'value' from the event object:
```js
const initialPersonData = {
  firstName: '',
  // ...
};

const [personData, setPersonData] = useState(initialPersonData);

const handelFormInputChange = (name, event) => {
  const { value } = event.target;
  setPersonData({ ...personData, [name]: value });
};

<input
  value={personData.firstName}
  onChange={(event) => handelFormInputChange('firstName', event)}
/>
```

#### uses of `?` inside JS: 
  - as part of the **ternary operator**
  - for ['optional chaining'](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining):
  ```js
  // An empty person object with missing optional location information
  const person = {}

  // The following will equate to undefined instead of an error
  const currentAddress = person.location?.address
  ```
  - in **'nullish coalescing'**: The nullish coalescing ( ?? ) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined , and otherwise returns its left-hand side operand)
  ```js
  const foo = null ?? 'default string';
  console.log(foo);
  // expected output: "default string"

  const baz = 0 ?? 42;
  console.log(baz);
  // expected output: 0
  ```

#### wrapping a 'non pure' function inside useEffect
 calling an API or a document in react is considered a 'non pure' function because we can never know exactly what we'll get. Therefore we'll wrap the fetch function in a useEffect hook and either trigger it on first rendering with an empty dependency array or by adding a dependency and changing it. Like in the [CallApiExercise](https://github.com/Codemon72/React_Course_2022/blob/main/code/lesson02/exercise/src/components/CallApiExercise.js).
```js
  const [callAPI, setCallAPI] = useState(false)

  useEffect(() => {
  
    if (callAPI) {
      fetch(url)
        .then((response) => response.json())
        //...
    }
  }, [callAPI]);

  return (
      //...
      <button
        onClick={() => {
          setCallAPI(true);
        }} //...
  )
```