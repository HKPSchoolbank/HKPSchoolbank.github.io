// App.tsx
import React from "react";
import "./app.css"; // นำ CSS ออกมาใส่ในไฟล์แยก เช่น App.css

const App: React.FC = () => {
  return (
    <div className="app">
      <img src="imgs/WEB.gif" alt="HKPSB" className="logo" />
      <h1 className="title">ธนาคารโรงเรียนหันคาพิทยาคม</h1>
      <a
        href="https://sites.google.com/hunkhapit.ac.th/hkpsb/"
        target="_blank"
        rel="noopener noreferrer"
        className="button"
      >
        เข้าสู่เว็บไซต์
      </a>
      <footer className="footer">
        <h1>© 2024 ธนาคารโรงเรียนหันคาพิทยาคม All Rights Reserved.</h1>
      </footer>
    </div>
  );
};

export default App;