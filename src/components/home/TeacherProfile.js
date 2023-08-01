const TeacherProfile = ({ name, description, img }) => {
  return (
    <div className="w-72 flex flex-col items-center justify-center">
      <img
        src={img}
        alt={''}
        className="w-32 h-32 object-cover rounded-full shadow"
      />
      <div className="mt-4 p-4">
        <h3 className="text-xl font-bold text-zinc-50 text-center">{name}</h3>
        <p className="text-sm text-zinc-100 text-center">
          {description.split('\n').map((line, idx) =>
            <span key={idx}>{line}<br /></span>
          )}
        </p>
      </div>
    </div>
  );
}

export default TeacherProfile