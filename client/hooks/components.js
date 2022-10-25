import React from "react";
import Dimensiones from "../src/components/Dimensiones/Dimensiones";
import DoubleSticky from "../src/components/DoubleSticky";
import EsquemaC from "../src/components/EsquemaC/EsquemaC";
import FuerzaAstral from "../src/components/FuerzaAstral/FuerzaAstral";
import Jumbo from "../src/components/Jumbo/Jumbo";
import Makers from "../src/components/Makers/Makers";
import index from "../src/components/SectionsBar";
import News from "../src/components/UltimasNoticias/News";
import WowPlay from "../src/components/WowPlay/WowPlay";
import Horoscopo from "../src/components/Horoscopo";
import Widget from "../src/components/widget/Widget";
import Squad from "../src/components/Squad";
import BannerAdhesion from "../src/commons/BannerAdhesion";

const Components = {
  Jumbo: Jumbo,
  SectionBar: index,
  SchemaA: News,
  SchemaB: FuerzaAstral,
  SchemaC: EsquemaC,
  SchemaE: Dimensiones,
  SchemaF: Makers,
  WOWPlay: WowPlay,
  Horoscopo: Horoscopo,
  Widget: Widget,
  Squad: Squad,
  StickyBanner: DoubleSticky,
};

const renderer = (block, widget, banners, home) => {
  // component does exist
  if (typeof Components[block.esquema] !== "undefined") {
    return React.createElement(Components[block.esquema], {
      key: block.id,
      data: block,
      widget: widget,
      banners: banners[0].stickys,
      nextBlocks:
        block.count &&
        home.slice(
          home.indexOf(block) + 1,
          home.indexOf(block) + Number(block.count) + 1,
        ),
    });
  }
};

export default renderer;
