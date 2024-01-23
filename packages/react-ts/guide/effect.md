# useEffect

## Effect dependency

https://www.benmvp.com/blog/object-array-dependencies-react-useEffect-hook/


• useState won't initialize on props change.
• Whenever props changes, we will set the state inside useEffect.

```
useEffect(() => {
setProfileState(props);
}, [props])
```

Must pass the props to the second parameter for change detection; otherwise it won't re-sync upon props change.
