import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import { NextPage } from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import i18nConfig from "../../../next-i18next.config";

interface Course {
    id: number;
    name: string;
    code: string | null;
    credits: number;
    department: string | null;
    location: string | null;
    type: string | null;
    time: string | null;
    quota: number | null;
    selectNumberPeople: number | null;
    link: string | null;
    teacher: string | null;
    description: string | null;
    students?: number[];
}

const CourseDetail: NextPage = () => {
    const router = useRouter();
    const { id: idString } = router.query;
    const id = Number(idString);

    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!id) return;
        setLoading(true);
        axios
            .create({ baseURL: process.env.NEXT_PUBLIC_API_URL })
            .get<Course>(`/school_system/courses/${id}/`)
            .then((res: AxiosResponse<Course>) => setCourse(res.data))
            .catch((err) => setError(err.message))
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <span className="loading loading-spinner loading-lg"></span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="alert alert-error mt-8 mx-auto max-w-md">
                <div>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="stroke-current shrink-0 h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728"
                        />
                    </svg>
                    <span>載入失敗：{error}</span>
                </div>
            </div>
        );
    }

    if (!course) {
        return <p className="text-center mt-8">找不到該課程。</p>;
    }

    return (
        <div className="container mx-auto p-4 space-y-6">
            {/* Hero */}
            <div className="hero bg-base-200 rounded-lg p-6">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="lg:w-3/4">
                        <h1 className="text-4xl font-bold">{course.name}</h1>
                        <p className="py-2 text-gray-600">
                            課程代碼：{course.id ?? "－"}
                        </p>
                        <div className="flex flex-wrap gap-4 mt-4">
              <span className="badge badge-outline">
                學分：{course.credits}
              </span>
                            <span className="badge badge-outline">
                系所：{course.department}
              </span>
                            <span className="badge badge-outline">
                類型：{course.type}
              </span>
                        </div>
                    </div>
                    <div className="lg:w-1/4 text-right">
                        <Link href={course.link || "#"} target="_blank" rel="noreferrer" className="btn btn-primary">
                            課程官網
                        </Link>
                    </div>
                </div>
            </div>

            {/* 基本資訊卡片 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    { title: "授課教師", value: course.teacher ?? "未指定" },
                    { title: "教室地點", value: course.location ?? "－" },
                    { title: "上課時間", value: course.time ?? "－" },
                    {
                        title: "人數限制",
                        value: `${course.selectNumberPeople}/${course.quota}`,
                    },
                ].map((item) => (
                    <div key={item.title} className="card shadow-md bg-base-100">
                        <div className="card-body">
                            <h2 className="card-title">{item.title}</h2>
                            <p className="text-lg">{item.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Tabs */}
            <div className="tabs tabs-boxed">
                <button className="tab tab-active">課程描述</button>
                <button className="tab">修課學生</button>
            </div>

            {/* Tab Panels */}
            <div className="tab-content">
                {/* 課程描述 */}
                <div className="mt-4">
                    <div className="prose max-w-none">
                        {course.description || "（暫無描述）"}
                    </div>
                </div>

                {/* 修課學生 */}
                <div className="mt-4 hidden">
                    {course.students && course.students.length > 0 ? (
                        <div className="space-y-2">
                            {course.students.map((stuId) => (
                                <div
                                    key={stuId}
                                    className="collapse collapse-arrow border rounded-box"
                                >
                                    <input type="checkbox" />
                                    <div className="collapse-title">學生 ID：{stuId}</div>
                                    <div className="collapse-content">
                                        <p>其他學生資料可以再接 API 拿取顯示</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>目前尚無學生修習此課程。</p>
                    )}
                </div>
            </div>

            {/* 回列表 */}
            <div className="text-right">
                <Link href="/courses" className="btn btn-outline">
                    ← 返回課程列表
                </Link>
            </div>
        </div>
    );
};


export default CourseDetail;
