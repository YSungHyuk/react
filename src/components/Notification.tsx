import { useState } from "react";

export default function Notification() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <>
      {showNotification && <p>📢 새로운 알림이 도착했습니다!</p>}
      <button
        onClick={() =>
          setShowNotification((showNotification) => !showNotification)
        }
      >
        {showNotification ? "알림 닫기" : "알림 보기"}
      </button>
    </>
  );
}
