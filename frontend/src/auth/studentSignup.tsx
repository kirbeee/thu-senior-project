import React, {useState} from "react";
import { useRouter } from "next/router";
import {signupApi} from "../../lib/store";
import {useDispatch, useSelector} from "react-redux";

function StudentSignup(){
    const dispatch = useDispatch();
    // @ts-ignore
    const { loading, error} = useSelector((state) => state.users);
    const router = useRouter();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [studentID, setStudentID] = useState('');
    const [passwordError, setPasswordError] = useState(''); // 密碼驗證錯誤狀態

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

        try {
            // @ts-ignore
            await dispatch(signupApi({username, email, password1: password, password2: confirmPassword, studentID}));
            await router.push('/')
        } catch (apiError) {
            console.error("註冊錯誤:", apiError);
        }
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">學生註冊</h1>
                    <p className="py-6">歡迎學生加入！註冊您的帳號，開始學習新知。</p>
                </div>
                <div className="card shrink-0 w-full max-w-sm min-w-[400px] shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit} className="card-body">
                        {error && <div className="alert alert-error">{error}</div>}
                        {passwordError && <div className="alert alert-warning">{passwordError}</div>}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">學生證號碼</span>
                            </label>
                            <input
                                type="text"
                                placeholder="請輸入學生證號碼"
                                className="input input-bordered"
                                value={studentID}
                                onChange={(e) => setStudentID(e.target.value)}
                                required
                            />
                        </div>
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

export default StudentSignup;