import React, {useState, useEffect} from "react";
import axios from "axios";
import PropTypes from 'prop-types';
import {useRouter} from "next/router";
import Link from "next/link";

const Id = () => {
    const router = useRouter();
    const { id: idString } = router.query;
    const id = Number(idString);
    const [course, setCourse] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadCourse = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios
                    .create({baseURL: process.env.NEXT_PUBLIC_API_URL})
                    .get(`/courses/${id}/`); // 使用 courseId 拼接 API endpoint

                setCourse(response.data);
            } catch (err) {
                setError(err.message || "Failed to load course details");
            } finally {
                setLoading(false);
            }
        }
        loadCourse();
    }, [id]);

    if (loading) {
        return <p className="text-center">Loading course details...</p>;
    }

    if (error) {
        return <p className="text-center text-error">Error: {error}</p>;
    }

    if (!course) {
        return <p className="text-center">Course not found.</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="card bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold">{course.name}</h2>
                    <p className="text-sm text-gray-500">課程代碼: {course.code}</p>
                    <div className="divider"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <h3 className="font-semibold">學分</h3>
                            <p>{course.credits} 學分</p>
                        </div>
                        <div>
                            <h3 className="font-semibold">授課教師</h3>
                            <p>{course.teacher || "未指定"}</p> {/*  如果 teacher 為 null 顯示 "未指定" */}
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h3 className="font-semibold">課程描述</h3>
                        <p>{course.description || "（暫無描述）"}</p> {/* 如果 description 為 null 顯示 "（暫無描述）" */}
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h3 className="font-semibold">修課學生</h3>
                        {course.students && course.students.length > 0 ? ( // 檢查 students 是否存在且有資料
                            <ul className="list-disc list-inside">
                                {course.students.map((studentId, index) => (
                                    <li key={index}>學生 ID: {studentId}</li> //  這裡只顯示 studentId，你可以根據 API 調整顯示學生名稱或其他資訊
                                ))}
                            </ul>
                        ) : (
                            <p>目前尚無學生修習此課程</p>
                        )}
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-ghost"><Link href="/courses/Course">返回課程列表</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Id.propTypes = {
    courseId: PropTypes.number.isRequired, // 驗證 courseId prop 必須是數字且為必要
};

export default Id;