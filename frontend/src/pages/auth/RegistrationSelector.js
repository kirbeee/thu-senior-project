import React from "react";
import { useRouter } from "next/router"; // 使用 Next.js 的 useRouter

function RegistrationSelector() {
    const router = useRouter(); // 使用 Next.js 的 useRouter 來實現導航

    const handleSelection = (path) => {
        router.push(path); // 使用 router.push 進行導航
    };

    return (
        <div className="flex flex-row space-x-4">
            <h1 className="flex items-center">Who are you ?</h1>
            <button className="btn btn-info glass" onClick={() => handleSelection("/auth/StudentSignupPage")}>
                Student
            </button>
            <button className="btn btn-info glass" onClick={() => handleSelection("/auth/TeacherSignupPage")}>
                Teacher
            </button>
            <button className="btn btn-info glass" onClick={() => handleSelection("/auth/VisitorSignupPage")}>
                Visitor
            </button>
        </div>
    );
}

export default RegistrationSelector;
