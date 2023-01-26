import { useState, useEffect } from "react";

import { getProductByTagId } from "../utils/graphql";

import Jumbotron from "../components/home/Jumbotron";
import SectionTitle from "../components/home/SectionTitle";
import CourseCard from "../components/home/CourseCard";
import TeacherProfile from "../components/home/TeacherProfile";

import bg1 from "../assets/homepage-bg1.png";
import bg2 from "../assets/homepage-bg2.png";

const Home = () => {
  const [recommendCourses, setRecommendCourses] = useState([])
  const [trendingCourses, setTrendingCourses] = useState([])
  useEffect(() => {
    getProductByTagId(126, setRecommendCourses)
    getProductByTagId(127, setTrendingCourses)
  }, [])
  const teachers = [
    {
      name: "土木幸福教練",
      description: "86年土木技師高考，首試即上榜",
      img: 'https://yourknowledge.online/wp-content/uploads/2023/01/cehappiness-scaled.jpg',
    }
  ]
  return (
    <div>
      <Jumbotron />
      {recommendCourses.length !== 0 && <div className="py-14 bg-right bg-contain bg-no-repeat" style={{ backgroundImage: `url(${bg1})` }}>
        <SectionTitle text="課程推薦" />
        <div className="pt-14 flex flex-col justify-around gap-8 flex-wrap md:flex-row">
          {recommendCourses.map((course, index) => (
            <CourseCard key={index} course={course} isPromotion={true} />
          ))}
        </div>
      </div>}
      {trendingCourses.length !== 0 && <div className="py-14 bg-left bg-contain bg-no-repeat" style={{ backgroundImage: `url(${bg2})` }}>
        <SectionTitle text="熱門課程" />
        <div className="pt-14 flex flex-col justify-around gap-8 flex-wrap md:flex-row">
          {trendingCourses.map((course, index) => (
            <CourseCard key={index} course={course} isPromotion={false} />
          ))}
        </div>
      </div>}
      <div className="py-14 bg-right bg-contain bg-no-repeat" >
        <SectionTitle text="專業師資" />
        <div className="pt-14 flex justify-center">
          {teachers.map((teacher, index) => (
            <TeacherProfile key={index} {...teacher} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;