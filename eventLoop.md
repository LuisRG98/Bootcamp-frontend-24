# Event Loop

```js
console.log(1);
setTimeout(() => console.log(2), 1000);
Promise.resolve().then(() => console.log(3));
Promise.resolve().then(() => {
    console.log(4);
    setTimeout(() => console.log(5), 500);
});
setTimeout(() => console.log(6), 500);
console.log(7);
```

1. console.log(1);
2. console.log(7);
3. Promise.resolve().then(() => console.log(3));
4. console.log(4);
5. setTimeout(() => console.log(6), 500);
6. setTimeout(() => console.log(5), 500);
7. setTimeout(() => console.log(2), 1000);

