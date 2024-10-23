import React from "react";
import { useNavigate } from "react-router-dom";

function RegistrationSelector() {
    const navigate = useNavigate();
    const handleSelection = (path) => {
        navigate(path); // 根據傳入的路徑跳轉
    };

    return (
        <div className="flex flex-row space-x-4">
            <h1 className="flex items-center">Who are you ?</h1>
            <button className="btn btn-info glass" onClick={() => handleSelection("/student/signup")}>
                Student
            </button>
            <button className="btn btn-info glass" onClick={() => handleSelection("/teacher/signup")}>
                Teacher
            </button>
            <button className="btn btn-info glass" onClick={() => handleSelection("/visitor/signup")}>
                visitor
            </button>
        </div>
    );
}

export default RegistrationSelector;
