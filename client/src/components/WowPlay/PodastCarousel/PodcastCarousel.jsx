import { Flex } from "@chakra-ui/react";
import Card from "./Card";
import Carousel from "react-elastic-carousel";
const data = [
  {
    type: "podcast_episode",
    nid: "47000",
    uuid: "7eca4ca3-a32c-482c-9f67-a327df548c06",
    title: "Dormir bien: ¿cómo dejar de resistir y soltar el control?",
    field_description:
      "En este episodio de nuestro podcast ohlalero, Sole Simond nos da algunos hacks y ejercicios para entregarte y dejarte sostener, soltando todo control. ",
    field_title_pre: "Episodio #7.",
    field_title: "No resistir",
    field_category: "",
    field_category_color: "#E32B6C",
    field_categories: "",
    field_credits: "Soledad Simond",
    field_tags: [],
    field_published: "15.09.2022 00:00",
    url: "/actualidad/ohlala-play/dormir-bien-como-dejar-de-resistir-y-soltar-el-control-nid15092022",
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_medium/public/2022-07/dormir_bien_-_h.png.webp?itok=DxyMeZ0o",
    field_img_secondary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_podcast/public/2022-07/podcast_ohlala_dormir_bien.jpg.webp?itok=ixK5IKH7",
    timestamp: 1663210800,
  },
  {
    type: "podcast_episode",
    nid: "46976",
    uuid: "83b19e9f-ec12-4f2b-8ea4-153170550f02",
    title:
      "Teoría fractal: ¿qué es y cómo aplicarla para lograr lo que querés?",
    field_description:
      "¿Sabés de qué se trata la teoría fractal? Te lo explicamos en este episodio de Neurohacks, para que puedas aplicarlo en tu vida cotidiana y lograr lo que te propongas. ",
    field_title_pre: "Episodio #6.",
    field_title: "Aplicá la teoría fractal",
    field_category: "",
    field_category_color: "#E32B6C",
    field_categories: "",
    field_credits: "Euge Castagnino",
    field_tags: [],
    field_published: "13.09.2022 17:44",
    url: "/actualidad/ohlala-play/teoria-fractal-que-es-y-como-aplicarla-para-lograr-lo-que-queres-nid13092022",
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_medium/public/2022-07/neurohacks_-_h.png.webp?itok=Fbcg9j9k",
    field_img_secondary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_podcast/public/2022-07/podcast_ohlala_neurohacks_1.jpg.webp?itok=idTohn0n",
    timestamp: 1663101872,
  },
  {
    type: "podcast_episode",
    nid: "46414",
    uuid: "4ee5ed77-d7be-423d-8a23-77da3614cd77",
    title: "¿Cómo comer mejor? Claves para potenciar tu alimentación",
    field_description:
      "En este episodio, Sole Simond nos da las claves principales de una alimentación más saludable. ",
    field_title_pre: "Episodio #3. ",
    field_title: "¿Cómo comer mejor?",
    field_category: "",
    field_category_color: "#E32B6C",
    field_categories: "",
    field_credits: "Soledad Simond",
    field_tags: [],
    field_published: "11.08.2022 00:00",
    url: "/actualidad/ohlala-play/como-comer-mejor-claves-para-potenciar-tu-alimentacion-nid11082022",
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_medium/public/2022-07/vivir_mejor_-_h.png.webp?itok=nDtPJxJT",
    field_img_secondary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_podcast/public/2022-07/podcast_ohlala_vivir_mejor.jpg.webp?itok=CCXWWjgU",
    timestamp: 1660186800,
  },
  {
    type: "podcast_episode",
    nid: "45032",
    uuid: "980e6da8-2c7f-4ddd-9bf2-8055384794f4",
    title: "¿Cómo dormir bien?",
    field_description:
      "Dormir Bien es el primer podcast de OHLALÁ! en el que te invitamos a dejar de contar ovejitas y te acompañamos, de manera amorosa y empática, a descubrir y poner en práctica ciertos hábitos para descansar mejor",
    field_title_pre: "Episodio #0",
    field_title: "¿Cómo dormir bien?",
    field_category: "",
    field_category_color: "#E32B6C",
    field_categories: "",
    field_credits: "Soledad Simond",
    field_tags: [],
    field_published: "11.07.2022 18:01",
    url: "/actualidad/ohlala-play/como-dormir-bien-nid11072022",
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_medium/public/2022-07/dormir_bien_-_h.png.webp?itok=DxyMeZ0o",
    field_img_secondary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_podcast/public/2022-07/podcast_ohlala_dormir_bien.jpg.webp?itok=ixK5IKH7",
    timestamp: 1657573284,
  },
  {
    type: "podcast_episode",
    nid: "45033",
    uuid: "2e979eee-cbd3-496d-b0ab-a9fa8692802f",
    title: "¿De qué se trata Vivir Mejor?",
    field_description:
      "En este primer episodio de Vivir Mejor, te proponemos encontrar -en la duda- una oportunidad para barajar y dar de nuevo.",
    field_title_pre: "Episodio #0.",
    field_title: "¿De qué se trata Vivir Mejor?",
    field_category: "",
    field_category_color: "#E32B6C",
    field_categories: "",
    field_credits: "Soledad Simond",
    field_tags: [],
    field_published: "11.07.2022 18:07",
    url: "/actualidad/ohlala-play/de-que-se-trata-vivir-mejor-nid11072022",
    field_img_primary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_medium/public/2022-07/vivir_mejor_-_h.png.webp?itok=nDtPJxJT",
    field_img_secondary:
      "https://bucket.somosohlala.com.ar/s3fs-public/styles/story_podcast/public/2022-07/podcast_ohlala_vivir_mejor.jpg.webp?itok=CCXWWjgU",
    timestamp: 1657573649,
  },
];
const PodcastCarousel = () => {
  const breakpoints = [
    { width: 300, itemsToShow: 1.6, itemsToScroll: 1, pagination: false },
    { width: 500, itemsToShow: 2.5, pagination: false },
    { width: 700, itemsToShow: 3.5, pagination: false },
    { width: 990, itemsToShow: 4, pagination: false },
    { width: 1200, itemsToShow: 4, pagination: false },
    { width: 1300, itemsToShow: 4, pagination: false },
  ];
  return (
    <Flex>
      <Carousel
        breakPoints={breakpoints}
        infiniteLoop
        showArrows={false}
        focusOnSelect={true}
        itemPadding={[1, 5]}
        initialActiveIndex={0}
      >
        {data.map((e, i) => (
          <Card item={e} index={i} key={i} />
        ))}
      </Carousel>
    </Flex>
  );
};

export default PodcastCarousel;
