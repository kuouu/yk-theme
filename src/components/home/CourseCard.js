const CourseCard = ({ course, isPromotion }) => {
  const handleClick = (link) => {
    window.location.href = link
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-80 bg-zinc-700 shadow-lg p-4">
        <div className="cursor-pointer" onClick={() => handleClick(course.link)}>
          <img
            src={course.image.mediaItemUrl}
            className="w-full h-40 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold text-slate-900">{course.name}</h3>
          </div>
          <div className="flex gap-2 items-center mt-4">
            {isPromotion && course.salePrice !== null && (<>
              <div className="text-xs bg-yellow-500 py-1 px-2 rounded">限時特價中</div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-900 line-through">{course.regularPrice}</span>
              </div>
            </>)}
            <div className="flex items-center gap-2">
              <span className={`text-md font-bold ${isPromotion ? 'text-red-700' : 'text-zinc-50'}`}>
                {course.salePrice !== null ? course.salePrice : course.regularPrice}
              </span>
            </div>
          </div>
        </div>
        <button
          style={buttonStyle}
          className="hover:bg-white hover:text-[#00788c]"
          onClick={() => handleClick(course.link)}
        >
          加入購物車
        </button>
      </div>
    </div>
  );
}

const buttonStyle = {
  width: '100%',
  fontWeight: 'bold',
  textAlign: 'center',
  padding: '0.5rem 1rem',
  borderRadius: '0.5rem',
  marginTop: '1rem',
  border: '1px solid #29d7ff',
}

export default CourseCard;