import { quickData } from "../data/quick";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";

export function QuickArea(props) {

  const openMenu = () => {
    const [isOpen, setIsOpen] = useState(true);
    // 햄버거 버튼
    const quick = useRef();
    isOpen? quick.current.classList().add('on') : quick.current.classList().remove('on')
  };
  return (
    <>
      <aside id="quick_area" className="quick_area" ref={quick}>
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
            <a href="#">
              <img src="./images/common/ico_customer.png" />
              <span className="txt">고객센터</span>
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./images/common/ico_login.png" />
              <span>로그인</span>
            </a>
          </li>
        </ul>
        <button className="top_btn">
          <span className="sr-only">탑버튼</span>
        </button>
      </aside>
    </>
  );
} ////// QuickArea 컴포넌트 ////
