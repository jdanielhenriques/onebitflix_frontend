import Head from "next/head";
import styles from "@styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "@components/HomeNoAuth/HeaderNoAuth/page";

const HomeNoAuth = () => {
  return (
    <>
      <main>
        <HeaderNoAuth />
      </main>
    </>
  );
};

export default HomeNoAuth;
