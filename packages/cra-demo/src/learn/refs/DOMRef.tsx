import { RefObject, forwardRef, useRef } from 'react';

function Form() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <>
      <input ref={inputRef} />
      <button
        onClick={handleClick}
      >
        Focus the input
      </button>
    </>
  );
}

function CatFriends() {
  const firstCatRef = useRef<HTMLImageElement>(null);
  const secondCatRef = useRef<HTMLImageElement>(null);
  const thirdCatRef = useRef<HTMLImageElement>(null);

  function handleScrollToFirstCat() {
    firstCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToSecondCat() {
    secondCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  function handleScrollToThirdCat() {
    thirdCatRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <nav>
        <button
          onClick={handleScrollToFirstCat}
        >
          Tom
        </button>
        <button
          onClick={handleScrollToSecondCat}
        >
          Maru
        </button>
        <button
          onClick={handleScrollToThirdCat}
        >
          Jellylorum
        </button>
      </nav>
      <div>
        <ul>
          <li>
            <img 
              src="https://placekitten.com/g/200/200" 
              alt="Tom" 
              ref={firstCatRef}
            />
          </li>
          <li>
            <img 
              src="https://placekitten.com/g/300/200" 
              alt="Maru" 
              ref={secondCatRef}
            />
          </li>
          <li>
            <img 
              src="https://placekitten.com/g/250/200" 
              alt="Jellylorum" 
              ref={thirdCatRef}
            />
          </li>
        </ul>
      </div>
    </>
  );
}

function CatFriendsV2() {
  const itemsRef = useRef<Map<number, HTMLElement> | null>(null);

  function getMap() {
    if (!itemsRef.current) {
      itemsRef.current = new Map<number, HTMLElement>();
    }

    return itemsRef.current;
  }

  function scrollToId(itemId: number) {
    const map = getMap();
    const node = map.get(itemId);
    node?.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }

  return (
    <>
      <nav>
        <button onClick={() => scrollToId(0)}>
          Tom
        </button>
        <button onClick={() => scrollToId(5)}>
          Maru
        </button>
        <button onClick={() => scrollToId(9)}>
          Jellylorum
        </button>
      </nav>

      <div>
        <ul>
          {catList.map(cat => (
            <li
              key={cat.id}
              ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
              }}
            >
              <img
                src={cat.imageUrl}
                alt={'Cat #' + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

type Cat = {
  id: number;
  imageUrl: string;
};

const catList: Cat[] = [];
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: 'https://placekitten.com/250/200?image=' + i
  });
}

const MyInput = forwardRef<HTMLInputElement>((props, ref) => {
  return <input {...props} ref={ref} />;
});

function MyForm() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClick() {
    inputRef.current?.focus();
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button
        onClick={handleClick}
      >
        Focus the input
      </button>
    </>
  );
}
