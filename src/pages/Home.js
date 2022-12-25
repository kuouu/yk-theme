import Jumbotron from "../components/home/Jumbotron";
import SectionTitle from "../components/home/SectionTitle";
import CourseCard from "../components/home/CourseCard";
import TeacherProfile from "../components/home/TeacherProfile";

const Home = () => {
  return (
    <div className="bg-slate-100">
      <Jumbotron />
      <div className="py-14">
        <SectionTitle text="課程推薦" />
        <div className="pt-14 flex justify-center gap-8">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
      <div className="py-14">
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