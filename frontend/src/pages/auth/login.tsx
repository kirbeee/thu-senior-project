import React, { useState, useEffect } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations"; // 若頁面有 SSR
import { useDispatch, useSelector } from "react-redux";
import {loginApi, RootState} from "@lib/store";
import { clearError } from "@lib/slices/usersSlice";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import i18nConfig from "../../../next-i18next.config";

function Login() {
    const { t } = useTranslation("common");
    const dispatch = useDispatch();
    const router = useRouter();

    const { error } = useSelector((state: RootState) => state.users);
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        dispatch(clearError());
    }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // @ts-ignore
            await dispatch(loginApi({ username, password })).unwrap();
            router.replace("/");
        } catch (err) {
            console.error(t("loginFailed"), err);
        }
    };

    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">{t("loginTitle")}</h1>
                    <p className="py-6">{t("loginSubtitle")}</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm min-w-[400px] shadow-2xl bg-base-100">
                    <figure className="px-10 pt-10">
                        <Image
                            src="/login-illustration.jpeg"
                            alt="Login Illustration"
                            width={400}
                            height={300}
                            className="rounded-xl"
                        />
                    </figure>
                    <div className="card-body">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="alert alert-error">
                                    <span>{typeof error === "string"
                                        ? error
                                        : Object.entries(error).map(([field, messages], idx) => (
                                            <p key={idx}>
                                                {Array.isArray(messages)
                                                    ? messages.join(" / ")
                                                    : `${field}: ${messages}`}
                                            </p>
                                        ))}</span>
                                </div>
                            )}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">{t("username")}</span>
                                </label>
                                <input
                                    type="text"
                                    className="input input-bordered"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">{t("email")}</span>
                                </label>
                                <input
                                    type="email"
                                    className="input input-bordered"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">{t("password")}</span>
                                </label>
                                <input
                                    type="password"
                                    className="input input-bordered"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <label className="label">
                                    <Link href="#" className="label-text-alt link link-hover">
                                        {t("forgotPassword")}
                                    </Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">
                                    {t("login")}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, [ 'header','common'], i18nConfig)),
    },
});
export default Login;
