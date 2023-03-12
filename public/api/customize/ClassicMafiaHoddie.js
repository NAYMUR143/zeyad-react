let rootLink = "https://exp-img.netlify.app";
let data = [
  {
    name_: "Classic Mafia Hoddie",
    price_: "$77.74",
    colors_: "white, black, yellow, gray, pink, beige, gold, purple, blue",
    sizes_: ["S", "X", " L"],
    color1_: "#eff1b7",
    color2_: "#9cf1ff",
    color3_: "#cfcfcf",
    dtImgArr: [
      {
        src: `${rootLink}/img/customize/ClassicMafiaHoddie/1.jpg`,
      },
      {
        src: `${rootLink}/img/customize/ClassicMafiaHoddie/2.jpg`,
      },
      {
        src: `${rootLink}/img/customize/ClassicMafiaHoddie/3.jpg`,
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
