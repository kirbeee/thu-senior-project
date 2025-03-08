import '@testing-library/jest-dom/extend-expect';
import {vi} from 'vitest';
vi.mock('next-i18next', () => ({
    useTranslation: () => { /* ... */ },
    serverSideTranslations: vi.fn().mockResolvedValue({}), //  <-- Keep it as vi.fn()
    withTranslation: (namespace) => (WrappedComponent) => (props) => { /* ... */ },
}));