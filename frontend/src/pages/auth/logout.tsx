"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { logoutApi } from "../../lib/store";

const Logout = () => {
    const dispatch = useDispatch();
    const router = useRouter();

    useEffect(() => {
        // @ts-ignore
        dispatch(logoutApi()).finally(() => {
            localStorage.removeItem("authToken");
            router.push("/");
        });
    }, [dispatch, router]);

    return null; // 不顯示任何畫面
};

export default Logout;
