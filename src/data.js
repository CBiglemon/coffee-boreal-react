import coffeeShops from 'src/assets/images/block-home-1.jpg';
import coffeeShopsHover from 'src/assets/images/block-home-1-hover.jpg';
import torrefaction from 'src/assets/images/block-home-2.jpg';
import torrefactionHover from 'src/assets/images/block-home-2-hover.jpg';

export default [
  {
    id: 1,
    slug: '/',
    cards: [
      {
        id: 1,
        image: coffeeShops,
        imageHover: coffeeShopsHover,
        subtitle: 'L\'histoire de nos',
        title: 'Coffee Shops',
        text: `D'un espace de stockage complètement à l'abandon à un lieu de rencontre convivial au cœur de Genève, notre premier café a ouvert ses portes en avril 2009 à la Rue du Stand 60.
        Avec désormais 3 coffee shops à Genève et 2 coffee shops à Zürich, les clients de Boréal Coffee peuvent s'attendre à une expérience de l'arbre à la tasse incroyable. Nous nous engageons à sélectionner pour vous les meilleurs grains de café provenant du monde entier. Pour cela, nous allons le chercher directement auprès des producteurs. Et nous le torréfions avec passion chaque semaine dans notre propre atelier de torréfaction situé à Carouge.
        
        Retrouvez les illustrations et photos de l'artiste Léonard Fisch dans nos boutiques.`,
        link: 'Découvrez nos coffee shops',
      },
      {
        id: 2,
        image: torrefaction,
        imageHover: torrefactionHover,
        subtitle: 'Du grain à la tasse',
        title: 'La torréfaction boréal',
        text: `Nous avons ouvert un atelier de torréfaction artisanal à Carouge. Notre petite équipe de torréfacteurs travaille sur les profils de torréfaction des grains de café vert afin d'en faire ressortir les meilleures caractéristiques.

        Partout où cela est possible, nous travaillons en direct avec les agriculteurs afin de leur assurer de meilleures conditions de vie tout en respectant l'environnement. Vous pouvez être fiers de votre boisson!`,
        link: 'En savoir plus sur la torréfaction',
      },
    ],
  },
];
