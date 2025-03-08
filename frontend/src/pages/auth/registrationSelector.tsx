import React from "react";
import { useRouter } from "next/router";
import { FaUserGraduate, FaChalkboardTeacher, FaUserFriends } from 'react-icons/fa'; // 引入 React Icons

function RegistrationSelector() {
    const router = useRouter();

    const handleSelection = (path) => {
        router.push(path);
    };

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-bold mb-8">您是哪種身份？</h1>
                    <p className="mb-8 text-lg">請選擇您的身份，以便開始註冊流程。</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> {/* 使用 Grid 佈局，手機單欄，平板以上三欄 */}
                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"> {/* 卡片樣式，加入 hover 陰影效果 */}
                            <div className="card-body flex flex-col items-center">
                                <FaUserGraduate className="text-6xl text-primary mb-4" /> {/* 學生圖示 */}
                                <h2 className="card-title">學生</h2>
                                <p className="text-center text-gray-500 mb-4">我想選課、參與課程討論、並使用社群功能。</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-primary" onClick={() => handleSelection("/auth/StudentSignupPage")}>
                                        我是學生
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"> {/* 卡片樣式，加入 hover 陰影效果 */}
                            <div className="card-body flex flex-col items-center">
                                <FaChalkboardTeacher className="text-6xl text-secondary mb-4" /> {/* 教師圖示 */}
                                <h2 className="card-title">教師</h2>
                                <p className="text-center text-gray-500 mb-4">我希望開設課程、管理課程內容、並與學生互動。</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-secondary" onClick={() => handleSelection("/auth/TeacherSignupPage")}>
                                        我是教師
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"> {/* 卡片樣式，加入 hover 陰影效果 */}
                            <div className="card-body flex flex-col items-center">
                                <FaUserFriends className="text-6xl text-accent mb-4" /> {/* 訪客圖示 */}
                                <h2 className="card-title">訪客</h2>
                                <p className="text-center text-gray-500 mb-4">我想瀏覽課程資訊、參與公開討論區，但不需選課。</p>
                                <div className="card-actions justify-center">
                                    <button className="btn btn-accent" onClick={() => handleSelection("/auth/VisitorSignupPage")}>
                                        我是訪客
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegistrationSelector;