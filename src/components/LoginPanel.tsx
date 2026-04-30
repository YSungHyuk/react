export default function LoginPanel({
  handleLogin,
  isLoggedIn,
}: {
  handleLogin: () => void;
  isLoggedIn: boolean;
}) {
  return (
    <>
      <h1>{isLoggedIn ? "환영합니다!🎉" : "로그인이 필요합니다. 🔐"}</h1>
      <button onClick={handleLogin}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
    </>
  );
}
