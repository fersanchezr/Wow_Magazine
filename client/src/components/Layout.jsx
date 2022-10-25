import Footer from "./Footer/index";
import Navbar from "./Navbar/index";
import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";

const Layout = ({ children, banners }) => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:1337/views/631f8c2bb8a932ba47c1f4f2")
      .then((res) => setCategories(res.data.categories));
  }, []);
  return (
    <div>
      <Head>
        <title>Revista WOW!</title>
        <meta
          name="description"
          content="¡Una revista por y para mujeres empoderadas!"
        />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Navbar banners={banners} menu={categories} />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
