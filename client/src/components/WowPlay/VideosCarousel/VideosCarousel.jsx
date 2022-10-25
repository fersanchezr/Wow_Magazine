import { Flex } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";

import Carousel from "react-elastic-carousel";
const data = [
  {
    type: "video",
    nid: "46909",
    uuid: "4bb97426-88a7-4a43-a395-abbd2c88b700",
    title: "Buñuelos de tomate por Xime Saenz",
    field_description:
      "En este capítulo de OHLALÁ chef, Toti Quesada visita a Xime Saenz en su nuevo restaurante: Casa Saenz.  Además, la cocinera nos comparte una receta súper especial para ella, los buñuelos de tomate. ",
    field_title_pre: "Visitamos la cocina de:",
    field_title: "Xime Saenz",
    field_category: "",
    field_category_color: "#E32B6C",
    field_categories: "",
    field_credits: "Romina Salusso",
    field_tags: [],
    field_published: "12.09.2022 00:00",
    url: "/actualidad/ohlala-play/bunuelos-de-tomate-por-xime-saez-nid12092022",
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_medium/public/2022-09/xime_eh.png.webp?itok=sHJfAnFo",
    field_img_secondary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_tv/public/2022-09/xime_eh.png.webp?itok=phmb0Q7f",
    timestamp: 1662951600,
  },
  {
    type: "video",
    nid: "46834",
    uuid: "748ffaa9-cd09-4eea-90ff-6635d7fa5178",
    title: "Micaela Vázquez: ¿cuál es su peor fobia? ",
    field_description:
      "Micaela Vázquez se animó al Confesionario de OHLALÁ! y nos contó algunos de sus secretos más Flexertidos.",
    field_title_pre: "Micaela Vázquez",
    field_title: "¿cuál es su peor fobia? ",
    field_category: "",
    field_category_color: "#CF02BB",
    field_categories: "",
    field_credits: "Romina Salusso",
    field_tags: [],
    field_published: "07.09.2022 00:00",
    url: "/actualidad/entretenimiento/micaela-vazquez-cual-es-su-peor-fobia-nid07092022",
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_medium/public/2022-09/MicaVazquez_EH.png.webp?itok=jJ8-fd8U",
    field_img_secondary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_tv/public/2022-09/MicaVazquez_EH.png.webp?itok=ZNpuQp2Q",
    timestamp: 1662519600,
  },
  {
    type: "video",
    nid: "46801",
    uuid: "b506539d-a2d0-40c8-b77f-b8482979358e",
    title:
      "Chula Gálvez: visitamos la cocina de una de las pasteleras más importantes del momento",
    field_description:
      "Si sos fan de la pastelería, seguro la conocés. Con más de 40.000 seguidores en Instagram, Chula Gálvez nos invitó a su cocina.",
    field_title_pre: "Visitamos la cocina de:",
    field_title: "Chula Gálvez",
    field_category: "",
    field_category_color: "#5CBC8E",
    field_categories: "",
    field_credits: "Toti Quesada",
    field_tags: [],
    field_published: "05.09.2022 11:59",
    url: "/homefullness/cocina/chula-galvez-visitamos-la-cocina-de-una-de-las-pasteleras-mas-importantes-del-momento-nid05092022",
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_medium/public/2022-09/chula_eh.png.webp?itok=zZJp_s5a",
    field_img_secondary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_tv/public/2022-09/chula_eh.png.webp?itok=PHJa3eqy",
    timestamp: 1662389993,
  },
  {
    type: "video",
    nid: "46750",
    uuid: "686f3fc3-c1be-468e-af08-137d7b1ea111",
    title:
      "Campanopolis: qué tenés que saber antes de visitar este pueblo de estilo medieval",
    field_description:
      "Muy cerquita de Buenos Aires, Campanopolis es un parque temático ideal para visitar en pareja, con amigos y hasta en familia. Te contamos qué tenés que saber antes de ir.",
    field_title_pre: "Campanopolis.",
    field_title: "Por qué tenés que visitar este pueblo de estilo medieval",
    field_category: "",
    field_category_color: "#6C9BCA",
    field_categories: "",
    field_credits: "Floxie",
    field_tags: ["Dónde queda Campanopolis"],
    field_published: "02.09.2022 00:00",
    url: "/guia-ohlala/recorridos/campanopolis-que-tenes-que-saber-antes-de-visitar-este-pueblo-de-estilo-medieval-nid02092022",
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_medium/public/2022-09/Campan%C3%B3polis_EH.png.webp?itok=zKUOcAGQ",
    field_img_secondary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_tv/public/2022-09/Campan%C3%B3polis_EH.png.webp?itok=3TZgjLg3",
    timestamp: 1662087600,
  },
];
const VideosCarousel = () => {
  const breakpoints = [
    { width: 300, itemsToShow: 2.2, itemsToScroll: 1, pagination: false },
    { width: 600, itemsToShow: 2.8, pagination: false },
    { width: 990, itemsToShow: 4.3, pagination: false },
    { width: 1200, itemsToShow: 4.3, pagination: false },
    { width: 1300, itemsToShow: 4.3, pagination: false },
  ];
  return (
    <Flex>
      <Carousel
        breakPoints={breakpoints}
        infiniteLoop
        showArrows={false}
        initialActiveIndex={0}
        itemPadding={[0, 10]}
      >
        {data.map((e, i) => (
          <Card item={e} index={i} key={i} />
        ))}
      </Carousel>
    </Flex>
  );
};

export default VideosCarousel;
