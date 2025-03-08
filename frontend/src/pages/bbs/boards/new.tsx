import React, { useState, useEffect, FormEvent } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import axios, { AxiosResponse } from 'axios'; // Import AxiosResponse
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import i18nConfig from '../../../../next-i18next.config';
import { NextPage, GetStaticProps } from 'next'; // Import NextPage and GetStaticProps

interface NewBoardPageProps {
    // Define any props passed to the component from getStaticProps here if needed
}

interface CategoryOption {
    id: number;
    name: string;
    // ... other category properties as needed
}

interface CourseOption {
    id: number;
    name: string;
    // ... other course properties as needed
}

const NewBoardPage: NextPage<NewBoardPageProps> = () => { // Use NextPage and NewBoardPageProps
    const { t } = useTranslation('boards');
    const router = useRouter();

    // Form State
    const [name, setName] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [board_type, setBoardType] = useState<string>('forum'); // Default value
    const [category, setCategory] = useState<string>('');
    const [course_id, setCourseId] = useState<string>('');
    const [moderators, setModerators] = useState<string>(''); // Comma-separated user IDs
    const [is_private, setIsPrivate] = useState<boolean>(false);

    // Options Data
    const [categories, setCategories] = useState<CategoryOption[]>([]); // Type categories state
    const [courses, setCourses] = useState<CourseOption[]>([]); // Type courses state

    // Error State
    const [errors, setErrors] = useState<Record<string, string[]>>({}); // Type errors state to Record<string, string[]>
    const [apiError, setApiError] = useState<string | null>(null); // Type apiError state to string | null
    const [successMessage, setSuccessMessage] = useState<string | null>(null); // Type successMessage state to string | null


    useEffect(() => {
        const fetchOptions = async () => {
            try {
                // Fetch Categories
                const categoriesResponse: AxiosResponse<{ results: CategoryOption[] }> = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/bbs/categories/`); // Type categoriesResponse
                setCategories(categoriesResponse.data.results);

                // Fetch Courses (Replace with your actual course API endpoint)
                const coursesResponse: AxiosResponse<{ results: CourseOption[] }> = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/school_system/courses/`); // Adjust endpoint if necessary // Type coursesResponse
                setCourses(coursesResponse.data.results);

            } catch (error: any) { // Type error as any, consider AxiosError for more specific typing
                console.error("Error fetching categories or courses:", error);
                setApiError(t('errorFetchingOptions')); // Translate error message
            }
        };

        fetchOptions();
    }, [t]);

    const handleSubmit = async (event: FormEvent) => { // Type handleSubmit event
        event.preventDefault();
        setApiError(null);
        setSuccessMessage(null);
        setErrors({});

        const boardData: { [key: string]: any } = { // Type boardData as a flexible object
            name: name,
            description: description,
            board_type: board_type,
            category: category,
            course_id: course_id ? parseInt(course_id, 10) : null, // Convert course_id to integer
            is_private: is_private,
        };

        if (moderators) {
            boardData.moderators = moderators.split(',').map(id => parseInt(id.trim(), 10)).filter(id => !isNaN(id)); // Split and parse moderator IDs
        } else {
            boardData.moderators = []; // Send empty array if no moderators entered
        }


        try {
            const response: AxiosResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/bbs/boards/`, boardData); // Type axios.post response
            if (response.status === 201) {
                setSuccessMessage(t('boardCreatedSuccessfully'));
                // Redirect to board list after successful creation
                setTimeout(() => {
                    router.push('/bbs/Board');
                }, 1500); // Redirect after 1.5 seconds, adjust as needed
            }
        } catch (error: any) { // Type error as any, consider AxiosError for more specific typing
            console.error("Error creating board:", error.response);
            if (error.response && error.response.data) {
                setErrors(error.response.data); // Set API error details
                setApiError(t('boardCreationFailed'));
            } else {
                setApiError(t('boardCreationFailedGeneric')); // Generic error message
            }
        }
    };

    return (
        <div title={t('newBoardPageTitle')}>
            <div className="p-6">
                <h1 className="text-2xl font-bold mb-4">{t('newBoardPageTitle')}</h1>
                <p className="mb-8 text-gray-600">{t('newBoardPageDescription')}</p> {/* More margin below description */}

                {apiError && (
                    <div className="alert alert-error mb-4"> {/* DaisyUI alert for errors */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2v4m-2-4h4m10-10l-9-9m-4 0l9 9m7-7v18m-3-3h3" /></svg>
                        <span><b>{t('error')}!</b> {apiError}</span>
                        {errors && <ul className="list-disc ml-6 mt-2"> {/*  Display errors in a list */}
                            {Object.entries(errors).map(([key, value]) => (
                                <li key={key} className="text-sm">{t(key)}: {value.join(', ')}</li>))} {/* Translate field names if possible */}

                        </ul>}
                    </div>
                )}

                {successMessage && (
                    <div className="alert alert-success mb-4"> {/* DaisyUI alert for success */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span><b>{t('success')}!</b> {successMessage}</span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="max-w-lg">
                    <div className="mb-4 form-control w-full"> {/* DaisyUI form-control for better structure */}
                        <label htmlFor="name" className="label">
                            <span className="label-text">{t('boardName')} <span className="text-red-500">*</span></span> {/* DaisyUI label */}
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder={t('boardNamePlaceholder')}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="mb-4 form-control w-full">
                        <label htmlFor="description" className="label">
                            <span className="label-text">{t('description')}</span>
                        </label>
                        <textarea
                            id="description"
                            placeholder={t('descriptionPlaceholder')}
                            value={description}
                            onChange={e => setDescription(e.target.value)}
                            className="textarea textarea-bordered w-full"
                        />
                    </div>

                    <div className="mb-4 form-control w-full">
                        <label htmlFor="board_type" className="label">
                            <span className="label-text">{t('boardType')}</span>
                        </label>
                        <select
                            id="board_type"
                            value={board_type}
                            onChange={e => setBoardType(e.target.value)}
                            className="select select-bordered w-full"
                        >
                            <option value="forum">{t('forum')}</option>
                            <option value="qna">{t('qna')}</option>
                            <option value="announcement">{t('announcement')}</option>
                            <option value="study_group">{t('studyGroup')}</option>
                        </select>
                    </div>

                    <div className="mb-4 form-control w-full">
                        <label htmlFor="category" className="label">
                            <span className="label-text">{t('category')} <span className="text-red-500">*</span></span>
                        </label>
                        <select
                            id="category"
                            value={category}
                            onChange={e => setCategory(e.target.value)}
                            required
                            className="select select-bordered w-full"
                        >
                            <option value="">{t('selectCategory')}</option>
                            {categories.map(cat => (
                                <option key={cat.id} value={cat.id}>{cat.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4 form-control w-full">
                        <label htmlFor="course_id" className="label">
                            <span className="label-text">{t('course')}</span>
                        </label>
                        <select
                            id="course_id"
                            value={course_id}
                            onChange={e => setCourseId(e.target.value)}
                            className="select select-bordered w-full"
                        >
                            <option value="">{t('selectCourse')}</option>
                            {courses.map(course => (
                                <option key={course.id} value={course.id}>{course.name}</option>
                            ))}
                        </select>
                    </div>

                    <div className="mb-4 form-control">
                        <label htmlFor="moderators" className="label">
                            <span className="label-text">{t('moderators')}</span>
                        </label>
                        <input
                            type="text"
                            id="moderators"
                            placeholder={t('moderatorsPlaceholder')}
                            value={moderators}
                            onChange={e => setModerators(e.target.value)}
                            className="input input-bordered w-full"
                        />
                        <label className="label">
                            <span className="label-text-alt italic text-xs">{t('moderatorsHelpText')}</span> {/* DaisyUI label-text-alt for help text */}
                        </label>
                    </div>

                    <div className="mb-4 form-control"> {/* DaisyUI form-control for checkbox */}
                        <label className="cursor-pointer label"> {/* DaisyUI label for checkbox */}
                            <span className="label-text">{t('isPrivateBoard')}</span>
                            <input
                                type="checkbox"
                                id="is_private"
                                className="checkbox" // DaisyUI checkbox
                                checked={is_private}
                                onChange={e => setIsPrivate(e.target.checked)}
                            />
                        </label>
                    </div>


                    <div className="mt-8 flex justify-end space-x-4"> {/* Use space-x-4 for button spacing */}
                        <Link href="/bbs" className="btn"> {/* DaisyUI button - default style for cancel */}
                            {t('backToBoardList')}
                        </Link>
                        <button type="submit" className="btn btn-primary"> {/* DaisyUI button - primary style for submit */}
                            {t('createBoard')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        // @ts-ignore
        ...(await serverSideTranslations(locale, ['boards', 'header', 'common'], i18nConfig)),
    },
});

export default NewBoardPage;