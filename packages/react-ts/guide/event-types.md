# React Event Types

https://felixgerschau.com/react-typescript-events/

```js
const handleInputChnage = (
	e: ChangeEvent<HTMLInputElement>
) => {
	setValue(e.target.value);
};

<input 
	value={value} 
	onChange={handleInputChange} 
/>
```

Do not use TypeScript's definitions for events.

Use React equivalent type definitions for all its synthetic events.

Apply a type to the handler itself:

```
const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {}
```

If there is no definition for the event handler, use React's SyntheticEvent type.

## Form Event

	• event: 
	FormEvent<HTMLFormElement>
	
	• FormEventHandler<HTMLFormElement> = (e) => {}
