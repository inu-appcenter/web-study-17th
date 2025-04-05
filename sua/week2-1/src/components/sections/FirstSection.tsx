import backgroundImage from '../../assets/image2.png';

function FirstSection() {
  return (
    //img만 하는 것보다 div에서 하는 게 낫다.
    <div
      style={{
        width: '90%',
        aspectRatio: '5 / 2', // 가로 3 : 세로 1 비율 유지
        overflow: 'hidden',   // 넘치는 부분 자르기
        borderRadius: '16px',
        margin: 'auto'
      }}
    >
      <img
        src={backgroundImage}
        alt="배경 이미지"
        style={{
          width: '100%',
          height: 'auto',
          display: 'block',
          position: 'relative',
          top: '-200px',             // 위로 20px 이동
        }}
      />
    </div>
  );
}

export default FirstSection;
