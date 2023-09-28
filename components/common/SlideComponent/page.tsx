"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { CourseType } from "@services/courseService";
import SlideCard from "../SlideCard/page";
import { compile } from "sass";

interface props {
  course: CourseType[];
}
const SlideComponent = ({ course }: props) => {
  return (
    <>
      <div className="d-flex flex-column align-items-center py-4">
        <Splide
          options={{
            type: "loop",
            perPage: 4,
            perMove: 1,
            width: 1200,
            pagination: false,
          }}
        >
          {course?.map((course) => (
            <SplideSlide key={course.id}>
              <SlideCard course={course} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </>
  );
};

export default SlideComponent;
