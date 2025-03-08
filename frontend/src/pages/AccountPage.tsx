import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { authApi } from "../lib/store";
import Skeleton from "@components/ui/Skeleton";

function AccountPage() {
    const dispatch = useDispatch();
    // @ts-ignore
    const {isLoading, data, error} = useSelector((state) => state.users);
    useEffect(() => {
        // @ts-ignore
        dispatch(authApi());
    }, [dispatch]);

    const [email, setEmail] = useState(data?.email || "");
    const [firstName, setFirstName] = useState(data?.first_name || "");
    const [lastName, setLastName] = useState(data?.last_name || "");
    const [username, setUsername] = useState(data?.username || "");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // TODO: Implement update account API call here using username, email, firstName, lastName
        console.log("Form submitted with:", { username, email, firstName, lastName });
    }

    if(isLoading) return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">載入中</h1>
                    <p className="py-2">帳戶資訊載入中，請稍候...</p>
                    <Skeleton times={6} className="h-10 w-full my-2"/>
                </div>
            </div>
        </div>

    );

    if(data) return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:items-stretch">
                <div className="card flex-shrink-0 w-full max-w-lg min-w-[400px] shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center mb-4">帳戶資訊</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">使用者名稱</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="使用者名稱"
                                    className="input input-bordered"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    disabled
                                />
                                <label className="label">
                                    <span className="label-text-alt">使用者名稱無法修改</span>
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">電子郵件</span>
                                </label>
                                <input
                                    type="email"
                                    placeholder="電子郵件"
                                    className="input input-bordered"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">名字</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="名字"
                                    className="input input-bordered"
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">姓氏</span>
                                </label>
                                <input
                                    type="text"
                                    placeholder="姓氏"
                                    className="input input-bordered"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                />
                            </div>
                            <div className="form-control mt-6">
                                <button
                                    className="btn btn-primary"
                                    type="submit"
                                    disabled={isLoading}
                                >
                                    {isLoading ? <span className="loading loading-spinner">更新中</span> : '更新帳戶'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
    if (error) return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">錯誤</h1>
                    <p className="py-2">載入帳戶資訊時發生錯誤，請稍後再試。</p>
                    <p className="py-2 text-error">{error}</p>
                </div>
            </div>
        </div>
    );
    return null;
}

export default AccountPage;