import Head from "next/head";
import styles from "@styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "@components/HomeNoAuth/HeaderNoAuth/page";
import PresentationSection from "@components/HomeNoAuth/presentationSection/page";

const HomeNoAuth = () => {
  return (
    <>
      <div className={styles.sectionBackground}>
        <main>
          <HeaderNoAuth />
          <PresentationSection />
        </main>
      </div>
    </>
  );
};

export default HomeNoAuth;
