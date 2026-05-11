import sample from "./assets/images/sample.jpg";

export default function App() {
  return (
    <>
      {/* <div className="bg"></div> */}
      {/* <div className="bg-[url(https://media.istockphoto.com/id/2166282428/ko/%EC%82%AC%EC%A7%84/%EB%94%B0%EB%9C%BB%ED%95%9C-%ED%96%87%EC%82%B4%EC%9D%B4-%EB%B9%84%EC%B6%94%EB%8A%94-%EC%95%84%EB%A6%84%EB%8B%B5%EA%B3%A0-%EB%AC%B4%EC%84%B1%ED%95%9C-%EB%85%B9%EC%83%89-%EC%88%B2-%EC%BA%90%EB%85%B8%ED%94%BC.jpg?s=1024x1024&w=is&k=20&c=79yAlkjMrIsw3_BubG0AfTkHEsh0ca6BrKfFsoydKzg=)] w-100 h-100"></div> */}
      {/* <div className="bg-[url(/images/sample.jpg)] w-100 h-100"></div> */}
      <div
        className={`w-100 h-100`}
        style={{ backgroundImage: `url(${sample})` }}
      ></div>
    </>
  );
}
