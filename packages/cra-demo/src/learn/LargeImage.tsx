import { useState } from 'react';

export function LargeImageApp() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;

  return (
    <>
      <label>
        <input
          type='checkbox'
          checked={isLarge}
          onChange={e => {
            setIsLarge(e.target.checked);
          }}
        />
        Use large images
      </label>

      <hr />
      
      <List imageSize={imageSize} />
    </>
  )
}

type IPlace = {
  id: number;
  name: string;
  description: string;
  imageId: string;
};

const places: IPlace[] = [{
  id: 0,
  name: 'Bo-Kaap in Cape Town, South Africa',
  description: 'The tradition of choosing bright colors for houses began in the late 20th century.',
  imageId: 'K9HVAGH'
}, {
  id: 1, 
  name: 'Rainbow Village in Taichung, Taiwan',
  description: 'To save the houses from demolition, Huang Yung-Fu, a local resident, painted all 1,200 of them in 1924.',
  imageId: '9EAYZrt'
}, {
  id: 2, 
  name: 'Macromural de Pachuca, Mexico',
  description: 'One of the largest murals in the world covering homes in a hillside neighborhood.',
  imageId: 'DgXHVwu'
}, {
  id: 3, 
  name: 'Selarón Staircase in Rio de Janeiro, Brazil',
  description: 'This landmark was created by Jorge Selarón, a Chilean-born artist, as a "tribute to the Brazilian people."',
  imageId: 'aeO3rpI'
}, {
  id: 4, 
  name: 'Burano, Italy',
  description: 'The houses are painted following a specific color system dating back to 16th century.',
  imageId: 'kxsph5C'
}, {
  id: 5, 
  name: 'Chefchaouen, Marocco',
  description: 'There are a few theories on why the houses are painted blue, including that the color repells mosquitos or that it symbolizes sky and heaven.',
  imageId: 'rTqKo46'
}, {
  id: 6,
  name: 'Gamcheon Culture Village in Busan, South Korea',
  description: 'In 2009, the village was converted into a cultural hub by painting the houses and featuring exhibitions and art installations.',
  imageId: 'ZfQOOzf'
}];

function List(
  props: {
    imageSize: number
  }
) {
  const listItems = places.map(place =>
    <li key={place.id}>
      <Place
        place={place}
        imageSize={props.imageSize}
      />
    </li>
  );

  return <ul>{listItems}</ul>;
}

function Place(
  props: {
    place: IPlace;
    imageSize: number;
  }
) {
  return (
    <>
      <PlaceImage
        place={props.place}
        imageSize={props.imageSize}
      />
      <p>
        <b>{props.place.name}</b>
        {': ' + props.place.description}
      </p>
    </>
  )
}

function PlaceImage(
  props: {
    place: IPlace;
    imageSize: number;
  }
) {
  return (
    <img 
      src={getImageUrl(props.place)} 
      alt={props.place.name}
      width={props.imageSize}
      height={props.imageSize} 
    />
  );
}

function getImageUrl(place: IPlace) {
  return (
    'https://i.imgur.com/' +
    place.imageId +
    'l.jpg'
  );
}
