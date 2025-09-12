# Loop Component

## × should render loop with array of strings (11 ms)
**Input:**
```jsx
<Loop items={["apple", "banana", "cherry"]}>
  <Text>{item}</Text>
</Loop>
```

**Error:**
```
ReferenceError: item is not defined
```

## × should render loop with array of objects (9 ms)
**Input:**
```jsx
<Loop items={[{name: "John", age: 30}, {name: "Jane", age: 25}]}>
  <Text>{person.name} is {person.age} years old</Text>
</Loop>
```

**Error:**
```
ReferenceError: person is not defined
```

## × should render loop with numeric values (1 ms)
**Input:**
```jsx
<Loop items={[1, 2, 3, 4, 5]}>
  <Text>Number: {num}</Text>
</Loop>
```

**Error:**
```
ReferenceError: num is not defined
```
