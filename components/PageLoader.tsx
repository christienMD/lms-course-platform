const PageLoader = () => {
  return (
    <div className="w-full flex items-center justify-center h-[25vh]">
      {/* <span className="canvas-loader"></span> */}
      <div className="line-spinner">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default PageLoader;
