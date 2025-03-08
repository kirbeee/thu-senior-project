import React, { useState } from "react";
import { loginApi } from "../../lib/store";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Image from 'next/image'; // 引入 Image 组件
import Link from 'next/link';

function Login() {
    const dispatch = useDispatch();
    const { error } = useSelector((state) => state.users);
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await dispatch(loginApi({ username, email, password }));
        if (error === null) {
            router.replace("/");
        } else {
            console.error("Login failed:", error);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e);
        }
    };

    return (
        <div className="hero min-h-screen"> {/* 使用 hero 佈局，讓卡片垂直置中 */}
            <div className="hero-content flex-col lg:flex-row-reverse"> {/* lg:flex-row-reverse 在大螢幕上圖片在右，表單在左 */}
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">選課系統登入</h1>
                    <p className="py-6">歡迎使用 THU 選課社群系統，請輸入您的帳號密碼進行登入。</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm min-w-[400px] shadow-2xl bg-base-100"> {/* 卡片容器，限制寬度 */}
                    <figure className="px-10 pt-10">
                        <Image
                            src="/login-illustration.jpeg" // 替換成您的插圖路徑
                            alt="Login Illustration"
                            width={400} // 調整圖片寬度
                            height={300} // 調整圖片高度
                            className="rounded-xl" // 可選：圓角樣式
                        />
                    </figure>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} onKeyDown={handleKeyPress} className="space-y-4">
                            {error && <div className="alert alert-error">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                                </svg>
                                <span>{error}</span>
                            </div>}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">使用者名稱</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="請輸入使用者名稱"
                                    className="input input-bordered"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="請輸入 Email"
                                    className="input input-bordered"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">密碼</span>
                                </label>
                                <input
                                    type="password"
                                    placeholder="請輸入密碼"
                                    className="input input-bordered"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">忘記密碼?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">登入</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;