import React, { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nConfig from '../../../../../next-i18next.config';
import Link from 'next/link';

const NewPostPage = () => {
    const router = useRouter();
    const { id: boardId } = router.query; // 取得版塊 ID
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [postType, setPostType] = useState('text'); // 預設帖子類型，可以根據你的 enum 修改
    const [tags, setTags] = useState(''); // 假設 tags 是字串，逗號分隔
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const { t } = useTranslation('newPostPage');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);

        if (!title || !content || !postType || !boardId) {
            setError(t('allFieldsRequired'));
            return;
        }

        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_API_URL}/bbs/posts/`,
                {
                    title: title,
                    content: content,
                    post_type: postType,
                    user_id: 1, //  !!!  注意: 這裡需要動態取得 user_id，目前先寫死 1，請根據你的用戶驗證機制調整 !!!
                    board_id: Number(boardId),
                    tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '') // 將逗號分隔字串轉為數字陣列
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 201) {
                setSuccess(true);
                // 成功後可以跳轉回版塊頁面
                setTimeout(() => {
                    router.push(`/bbs/boards/`);
                }, 1500); // 延遲 1.5 秒跳轉，讓使用者看到成功訊息
            } else {
                setError(t('createPostFailed') + `: HTTP ${response.status}`);
            }
        } catch (err) {
            console.error("Post creation error:", err);
            setError(t('createPostError') + `: ${err.message}`);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <div className="mb-4">
                {/* TODO : check logic*/}
                <Link href={`/bbs/`} className="btn btn-ghost">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                    {t('backToBoard')}
                </Link>
            </div>
            <h1 className="text-3xl font-bold mb-6">{t('createNewPostIn')} {boardId}</h1>

            {error && <div className="alert alert-error mb-4">{error}</div>}
            {success && <div className="alert alert-success mb-4">{t('createPostSuccess')}! {t('redirecting')}</div>}

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">{t('postTitle')}</label>
                    <input
                        type="text"
                        id="title"
                        placeholder={t('enterPostTitle')}
                        className="input input-bordered w-full max-w-lg"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        maxLength="255"
                        minLength="1"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="content" className="block text-gray-700 text-sm font-bold mb-2">{t('postContent')}</label>
                    <textarea
                        id="content"
                        placeholder={t('enterPostContent')}
                        className="textarea textarea-bordered w-full max-w-lg h-48"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        minLength="1"
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="postType" className="block text-gray-700 text-sm font-bold mb-2">{t('postType')}</label>
                    <select
                        id="postType"
                        className="select select-bordered w-full max-w-lg"
                        value={postType}
                        onChange={(e) => setPostType(e.target.value)}
                    >
                        <option value="text">{t('text')}</option> {/* 假設有 text 類型 */}
                        {/* 根據你的 API enum post_type 加入更多選項，例如 image, link 等 */}
                    </select>
                </div>
                <div>
                    <label htmlFor="tags" className="block text-gray-700 text-sm font-bold mb-2">{t('tags')} ({t('optionalCommaSeparated')})</label>
                    <input
                        type="text"
                        id="tags"
                        placeholder={t('enterTags')}
                        className="input input-bordered w-full max-w-lg"
                        value={tags}
                        onChange={(e) => setTags(e.target.value)}
                    />
                </div>

                <button type="submit" className="btn btn-primary">{t('submitPost')}</button>
            </form>
        </div>
    );
};

export const getStaticProps = async ({ locale }) => ({
    props: {
        ...(await serverSideTranslations(locale, ['newPostPage', 'common'], i18nConfig)),
    },
});

export default NewPostPage;