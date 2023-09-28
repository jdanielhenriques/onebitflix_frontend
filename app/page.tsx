import { ReactNode } from "react";
import styles from "@styles/HomeNoAuth.module.scss";
import HeaderNoAuth from "@components/HomeNoAuth/HeaderNoAuth/page";
import CardSection from "@components/HomeNoAuth/CardSection/page";
import PresentationSection from "@components/HomeNoAuth/PresentationSection/page";
import { GetStaticProps } from "next";
import courseService, { CourseType } from "@services/courseService";
import SlideSection from "@components/HomeNoAuth/SlideSection/page";

interface IndexPageProps {
  children?: ReactNode;
  course: CourseType[];
}

async function GetData() {
  const res = await courseService.getNewestCourses();
  return res.data;
}

const HomeNoAuth = async () => {
  const course = await GetData();
  return (
    <>
      <main>
        <div className={styles.sectionBackground}>
          <HeaderNoAuth />
          <PresentationSection />
        </div>
        <CardSection />
        <SlideSection newestCourses={course} />
      </main>
    </>
  );
};

export default HomeNoAuth;
