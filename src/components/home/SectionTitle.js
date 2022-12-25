import { useRef, useEffect, useState } from 'react';

const SectionTitle = ({ text }) => {
  const [width, setWidth] = useState(0);
  const sectionTitleRef = useRef(null);
  useEffect(() => {
    setWidth(sectionTitleRef.current.offsetWidth + 10);
  }, [sectionTitleRef]);
  return (
    <div className='my-5 h-6'>
      <div
        className="w-max bg-[#062398]"
        style={{ ...trapezium, height: '45px', width: `${width}px` }}
      />
      <div
        className="w-max bg-[#7a91ef] relative top-[-55px]"
        style={trapezium}
        ref={sectionTitleRef}
      >
        <h2 className="text-3xl font-bold text-slate-100 mx-10 mr-14">
          {text}
        </h2>
      </div>
    </div>
  );
}

const trapezium = {
  clipPath: 'polygon(0 0, 100% 0, 90% 100%, 0% 100%)'
};

export default SectionTitle;