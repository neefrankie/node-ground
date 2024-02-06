import { useState } from 'react';

// Sharing state between components
export function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <div className='accordion'>
        <AccordionItem
          title='About'
          isActive={activeIndex === 0}
          onShow={() => setActiveIndex(0)}
        >
          <>With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.</>
        </AccordionItem>
        <AccordionItem
          title='Etymology'
          isActive={activeIndex === 1}
          onShow={() => setActiveIndex(1)}
        >
          <>
          The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
          </>
        </AccordionItem>
      </div>
    </>
  );
}

function AccordionItem(
  props: {
    title: string;
    children: JSX.Element;
    isActive: boolean;
    onShow: () => void;
  }
) {
  let btnClass = 'accordion-button';
  if (!props.isActive) {
    btnClass = `${btnClass} collapsed`;
  }

  return (
    <div className='accordion-item'>
      <h2 className='accordion-header'>
        <button 
          className={btnClass}
          type='button'
          onClick={props.onShow}
        >
          {props.title}
        </button>
      </h2>
      {
        props.isActive ?
        <div className='accordion-collapse collapse show'>
          <div className='accordion-body'>
            {props.children}
          </div>
        </div> :
        null
      }
    </div>
  );
}
