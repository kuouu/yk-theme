import Jumbotron from "../components/home/Jumbotron";
import SectionTitle from "../components/home/SectionTitle";
import CourseCard from "../components/home/CourseCard";
import TeacherProfile from "../components/home/TeacherProfile";

import bg1 from "../assets/homepage-bg1.png";
import bg2 from "../assets/homepage-bg2.png";

const Home = () => {
  const courses = [
    {
      name: "土壤力學",
      img: "https://yourknowledge.online/wp-content/uploads/2022/07/ch1_220702_0.jpg",
      price: 8000,
      promotion: 4500,
      link: "https://yourknowledge.online/courses/soil-mechanics/",
      id: 25397
    },
    {
      name: "基礎工程",
      img: "https://yourknowledge.online/wp-content/uploads/2022/09/hqdefault.jpg",
      price: 8000,
      promotion: 6000,
      link: "https://yourknowledge.online/courses/foundation-engineering/",
      id: 25800
    },
  ]
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
      <div className="py-14 bg-right bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg1})`}}>
        <SectionTitle text="課程推薦"/>
        <div className="pt-14 flex flex-col justify-around gap-8 md:flex-row">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} isPromotion={true} />
          ))}
        </div>
      </div>
      <div className="py-14 bg-left bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg2})`}}>
        <SectionTitle text="熱門課程"/>
        <div className="pt-14 flex flex-col justify-around gap-8 md:flex-row">
          {courses.map((course, index) => (
            <CourseCard key={index} course={course} isPromotion={false} />
          ))}
        </div>
      </div>
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