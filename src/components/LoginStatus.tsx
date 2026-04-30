import { useState } from "react";

export default function LoginStatus({ initLogin }: { initLogin: boolean }) {
  const [isLogin, setIsLogin] = useState(initLogin);

  const handleLogin = (isLogin: boolean) => setIsLogin(!isLogin);

  if (isLogin) {
    return (
      <>
        <h1>환영합니다, 사용자!</h1>
        <button onClick={() => handleLogin(isLogin)}>로그아웃</button>
      </>
    );
  } else {
    return (
      <>
        <h1>로그인이 필요합니다.</h1>
        <button onClick={() => handleLogin(isLogin)}>로그인</button>
      </>
    );
  }
}
