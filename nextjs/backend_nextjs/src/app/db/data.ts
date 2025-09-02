export type Game = {
  id: string;
  title: string;
  image: string;
};

export const games: Game[] = [
  {
    id: "1",
    title: "Elden Ring",
    image:
    "https://assetsio.gnwcdn.com/elden-ring-walkthrough-8042-1647018411119.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
  },
  {
    id: "2",
    title: "God of War",
    image:
      "https://www.superjumpmagazine.com/content/images/size/w2000/2022/04/god-of-war-2018-featured-image.jpg",
    
  },
  {
    id: "3",
    title: "The Witcher 3: Wild Hunt",
    image:
      "https://sm.ign.com/t/ign_ap/preview/w/we-played-/we-played-the-witcher-3-wild-hunt-for-6-hours-ign_936e.1200.jpg",
  },
  {
    id: "4",
    title: "Cyberpunk 2077",
    image: "https://cdn.mos.cms.futurecdn.net/BeyhFdCM2ugLQjX8vX7fuQ.jpg",
    
  },
];