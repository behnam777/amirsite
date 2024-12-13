import styles from './style.module.css'
function SlideButton(params) {
  return (
    <div className={styles.circleContainer }>
    <svg className={styles.circle}   viewBox="0 0 100 100">
      <circle className={styles.circleBorder} cx="50" cy="50" r="45"></circle>
    </svg>
    <div className={styles.centerPoint }></div>
  </div>
  
  );
}

function SlideShow(params) {
  let photos = [1, 2, 3, 4, 5];
  return (
    <div className="absolute z-10 w-full bg-red-400">
      <div className="absolute  bottom-[4%] w-full h-[20px]  flex justify-center flex-shrink">
        {photos.map((photo, index) => {
          return <SlideButton index={index} key={index}></SlideButton>;
        })}
      </div>
    </div>
  );
}
export default SlideShow;
