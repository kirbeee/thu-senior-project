import React, {useState} from "react";
import { useRouter } from "next/router";
import {signupApi} from "../../lib/store";
import {useDispatch, useSelector} from "react-redux";

function TeacherSignupPage(){
    const dispatch = useDispatch();
    const { loading, error} = useSelector((state) => state.users); // 保留 error 以顯示註冊錯誤訊息
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const validatePassword = (passwordToCheck) => {
        if (passwordToCheck.length < 6) {
            return '密碼長度至少需要 6 個字元';
        }
        return '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const passwordValidationResult = validatePassword(password);
        if (passwordValidationResult) {
            setPasswordError(passwordValidationResult);
            return;
        } else {
            setPasswordError('');
        }

        if (password !== confirmPassword) {
            setPasswordError('兩次輸入的密碼不一致');
            return;
        } else {
            setPasswordError('');
        }

        // 註冊成功後導向首頁，並處理可能的錯誤
        try {
            await dispatch(signupApi({username, email, password1: password, password2: confirmPassword}));
            await router.push('/') // 註冊成功後導向首頁
        } catch (apiError) {
            //  如果 signupApi 拋出錯誤，Redux store 中的 error 會被更新，這裡可以選擇性地處理額外的錯誤邏輯
            console.error("註冊錯誤:", apiError); // 記錄錯誤以便於 debugging
            // error 已經由 Redux store 管理，這裡的 error 狀態會自動觸發 alert-error 的顯示
        }
    };

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">教師註冊</h1>
                    <p className="py-6">加入我們，成為我們平台上的教師，分享您的知識與熱情。</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm min-w-[400px] shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        {error && <div className="alert alert-error">{error}</div>} {/* 顯示 Redux store 中的錯誤訊息 */}
                        {passwordError && <div className="alert alert-warning">{passwordError}</div>} {/* 顯示密碼驗證錯誤 */}
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
                                <span className="label-text">電子郵件</span>
                            </label>
                            <input
                                type="email"
                                placeholder="請輸入電子郵件"
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
                            {passwordError && <label className="label">
                                <span className="label-text-alt text-warning">{passwordError}</span>
                            </label>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">確認密碼</span>
                            </label>
                            <input
                                type="password"
                                placeholder="再次輸入密碼"
                                className="input input-bordered"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit" disabled={loading}>
                                {loading?  <span className="loading loading-spinner">註冊中</span> : '註冊'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TeacherSignupPage;