const CourseCard = ({ course }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-64 bg-zinc-700 rounded-lg shadow-lg p-4">
        <img
          src={'https://picsum.photos/200/300'}
          alt={''}
          className="w-full h-32 object-cover rounded-lg"
        />
        <div className="mt-4">
          <h3 className="text-xl font-bold text-slate-900">{'Course Name'}</h3>
          <p className="text-sm text-slate-700">{'Course Description'}</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;