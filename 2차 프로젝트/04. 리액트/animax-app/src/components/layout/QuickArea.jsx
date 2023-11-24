import { useState } from "react";
import { Link } from "react-router-dom";

export function QuickArea(props) {
  const [isOpen, setIsOpen] = useState(true);
  const openMenu = () => {
    setIsOpen(isOpen ? false : true);
  };
  return (
    <>
      <aside
        id="quick_area"
        className={isOpen ? "quick_area "+"on" : "quick_area"}
      >
        <button className="ham_btn" onClick={openMenu}>
          <span className="sr-only">닫기</span>
        </button>
        <h3 className="tit">
          <span>
            Quick <br /> Menu
          </span>
        </h3>
        <ul className="quick_list">
          <li>
            <Link to="/customer">
              <img src="./images/common/ico_customer.png" />
              <span className="txt">고객센터</span>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <img src="./images/common/ico_login.png" />
              <span className="txt">로그인</span>
            </Link>
          </li>
        </ul>
        <button className="top_btn">
          <span className="sr-only">탑버튼</span>
        </button>
      </aside>
    </>
  );
} ////// QuickArea 컴포넌트 ////
