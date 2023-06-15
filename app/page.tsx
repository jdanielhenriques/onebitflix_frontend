import Head from "next/head";
import styles from "@styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "@components/HomeNoAuth/HeaderNoAuth/page";
import CardSection from "@components/HomeNoAuth/CardSection/page";
import PresentationSection from "@components/HomeNoAuth/presentationSection/page";

const HomeNoAuth = () => {
  return (
    <>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardSection />
      </main>
    </>
  );
};

export default HomeNoAuth;
