const TeacherProfile = () => {
  return (
    <div className="w-64 flex flex-col items-center justify-center">
      <img
        src={'https://i.pravatar.cc/300'}
        alt={''}
        className="w-32 h-32 object-cover rounded-full"
      />
      <div className="mt-4 p-4">
        <h3 className="text-xl font-bold text-zinc-50">{'Teacher Name'}</h3>
        <p className="text-sm text-zinc-100">{'Teacher Description'}</p>
      </div>
    </div>
  );
}

export default TeacherProfile