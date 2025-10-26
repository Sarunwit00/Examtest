// src/App.js
import React from "react";

function App() {
  // 1) สร้าง ref สำหรับ input ทั้งสองช่อง
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);

  // 2) ฟังก์ชันเวลาคลิกปุ่ม
  function handleSubmit() {
    const nameValue = nameRef.current.value;
    const emailValue = emailRef.current.value;

    // แสดงผลให้ผู้ใช้เห็น (อาจารย์จะชอบถ้าเรามี feedback)
    alert(`ชื่อ: ${nameValue}\nอีเมล: ${emailValue}`);

    // ในชีวิตจริงอาจจะส่งข้อมูลไป backend ต่อ (fetch/axios)
    // แต่ตอนนี้แค่อ่านค่าได้ถือว่าผ่านโจทย์
  }

  return (
    <div style={{ maxWidth: "400px", margin: "30px auto", fontFamily: "sans-serif" }}>
      <h1>แบบฟอร์มลงทะเบียน</h1>

      <div style={{ marginBottom: "10px" }}>
        <label>ชื่อผู้ใช้:</label><br />
        <input
          type="text"
          placeholder="พิมพ์ชื่อที่นี่..."
          style={{ width: "100%" }}
          ref={nameRef} // ผูก ref
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label>อีเมล:</label><br />
        <input
          type="email"
          placeholder="example@mail.com"
          style={{ width: "100%" }}
          ref={emailRef} // ผูก ref
        />
      </div>

      <button onClick={handleSubmit}>ส่งข้อมูล</button>
    </div>
  );
}

export default App;
