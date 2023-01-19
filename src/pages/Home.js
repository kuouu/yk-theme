import Jumbotron from "../components/home/Jumbotron";
import SectionTitle from "../components/home/SectionTitle";
import CourseCard from "../components/home/CourseCard";
import TeacherProfile from "../components/home/TeacherProfile";

import bg1 from "../assets/homepage-bg1.png";
import bg2 from "../assets/homepage-bg2.png";

const Home = () => {
  return (
    <div>
      <Jumbotron />
      <div className="py-14 bg-right bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg1})`}}>
        <SectionTitle text="課程推薦"/>
        <div className="pt-14 flex justify-center gap-8">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <div className="py-14 bg-left bg-contain bg-no-repeat" style={{backgroundImage: `url(${bg2})`}}>
        <SectionTitle text="專業師資" />
        <div className="pt-14 flex justify-center gap-8">
          <TeacherProfile />
          <TeacherProfile />
          <TeacherProfile />
        </div>
      </div>
    </div>
  );
}

export default Home;