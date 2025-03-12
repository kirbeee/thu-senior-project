import React, {useState, useEffect} from "react";
import axios, { AxiosResponse } from "axios"; // 引入 AxiosResponse 类型
import {useRouter} from "next/router";
import Link from "next/link";
import { NextPage } from "next"; // 引入 NextPage 类型

// 定义 Course 接口，根据你的 API 返回的数据结构来定义
interface Course {
    id: number;
    name: string;
    code: string;
    credits: number;
    teacher: string | null; // teacher 可能是 null
    description: string | null; // description 可能是 null
    students?: number[]; // students 可能是数字数组或 undefined
    // 可以根据 API 响应添加其他字段
}

// 定义组件的 Props 接口 (虽然这个组件本身似乎没有 props 从父组件传入，但为了符合 NextPage 类型定义，可以定义一个空的接口)
interface IdProps {
    // courseId: number; //  propTypes 里面有定义 courseId，但组件本身是从 router query 中获取 id，看起来 propTypes 定义可能用处不大。这里先注释掉，如果需要 props 传入 courseId 可以取消注释
}


const Id: NextPage<IdProps> = () => { // 使用 NextPage 类型定义组件，并使用 IdProps 接口
    const router = useRouter();
    const { id: idString } = router.query;
    const id = Number(idString);
    const [course, setCourse] = useState<Course | null>(null); // 使用 Course 接口定义 course state 类型，初始值为 null
    const [loading, setLoading] = useState<boolean>(true); // 使用 boolean 类型定义 loading state
    const [error, setError] = useState<string | null>(null); // 使用 string | null 类型定义 error state，初始值为 null

    useEffect(() => {
        const loadCourse = async () => {
            setLoading(true);
            setError(null);
            try {
                const response: AxiosResponse<Course> = await axios // 使用 AxiosResponse<Course> 类型定义 response
                    .create({baseURL: process.env.NEXT_PUBLIC_API_URL})
                    .get<Course>(`/school_system/courses/${id}/`); // 使用泛型 <Course> 指定 axios.get 返回的数据类型

                setCourse(response.data);
            } catch (err: any) { // error 类型设置为 any 或者更精确的 AxiosError 类型
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
                            <p>{course.teacher || "未指定"}</p> {/*  如果 teacher 为 null 显示 "未指定" */}
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h3 className="font-semibold">課程描述</h3>
                        <p>{course.description || "（暫無描述）"}</p> {/* 如果 description 为 null 显示 "（暂无描述）" */}
                    </div>
                    <div className="divider"></div>
                    <div>
                        <h3 className="font-semibold">修課學生</h3>
                        {course.students && course.students.length > 0 ? ( // 检查 students 是否存在且有资料
                            <ul className="list-disc list-inside">
                                {course.students.map((studentId, index) => (
                                    <li key={index}>學生 ID: {studentId}</li> //  这里只显示 studentId，你可以根据 API 调整显示学生名称或其他资讯
                                ))}
                            </ul>
                        ) : (
                            <p>目前尚無學生修習此課程</p>
                        )}
                    </div>
                    <div className="card-actions justify-end mt-4">
                        <button className="btn btn-ghost"><Link href="/courses">返回課程列表</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Id;