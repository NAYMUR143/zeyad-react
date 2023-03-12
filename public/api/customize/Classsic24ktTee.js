let rootLink = "https://exp-img.netlify.app";
let data = [
  {
    name_: "Classic 24k Tee",
    price_: "$27.98",
    colors_: "white, black, yellow, gray, pink, beige, gold, purple, blue",
    sizes_: ["S", "X", " L"],
    color1_: "#eff1b7",
    color2_: "#9cf1ff",
    color3_: "#cfcfcf",
    dtImgArr: [
      {
        src: `${rootLink}/img/customize/Classsic24ktTee/1.jpg`,
      },
      {
        src: `${rootLink}/img/customize/Classsic24ktTee/2.jpg`,
      },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(data);
}
