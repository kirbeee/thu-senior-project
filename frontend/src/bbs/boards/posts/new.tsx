import React, { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';
import axios, { AxiosResponse } from 'axios'; // Import AxiosResponse
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nConfig from '../../../../../next-i18next.config';
import Link from 'next/link';
import { NextPage, GetStaticProps } from 'next'; // Import NextPage and GetStaticProps

interface NewPostPageProps {
    // Define any props passed to the component from getStaticProps here if needed
}

const NewPostPage: NextPage<NewPostPageProps> = () => { // Use NextPage and NewPostPageProps
    const router = useRouter();
    const { id: boardId } = router.query; // 取得版塊 ID
    const [title, setTitle] = useState<string>(''); // Type useState for title
    const [content, setContent] = useState<string>(''); // Type useState for content
    const [postType, setPostType] = useState<string>('text'); // Type useState for postType
    const [tags, setTags] = useState<string>(''); // Type useState for tags
    const [error, setError] = useState<string | null>(null); // Type useState for error
    const [success, setSuccess] = useState<boolean>(false); // Type useState for success
    const { t } = useTranslation('newPostPage');

    const handleSubmit = async (e: FormEvent) => { // Type handleSubmit event
        e.preventDefault();
        setError(null);
        setSuccess(false);

        if (!title || !content || !postType || !boardId) {
            setError(t('allFieldsRequired'));
            return;
        }

        try {
            const response: AxiosResponse = await axios.post( // Type axios.post response with AxiosResponse
                `${process.env.NEXT_PUBLIC_API_URL}/bbs/posts/`,
                {
                    title: title,
                    content: content,
                    post_type: postType,
                    user_id: 1, //  !!!  注意: 這裡需要動態取得 user_id，目前先寫死 1，請根據你的用戶驗證機制調整 !!!
                    board_id: Number(boardId),
                    tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 201) {
                setSuccess(true);
                setTimeout(() => {
                    router.push(`/bbs/boards/`);
                }, 1500);
            } else {
                setError(t('createPostFailed') + `: HTTP ${response.status}`);
            }
        } catch (err: any) { // Consider more specific error type like AxiosError for better error handling in TS
            console.error("Post creation error:", err);
            setError(t('createPostError') + `: ${err.message}`);
        }
    };

    return (
        <div className="container mx-auto p-8">
            <div className="mb-4">
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
                        <option value="text">{t('text')}</option>
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

// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ locale }) => ({ // Type getStaticProps
    props: {
        // @ts-ignore
        ...(await serverSideTranslations(locale, ['newPostPage', 'common'], i18nConfig)),
    },
});

export default NewPostPage;