import { render, screen } from '@testing-library/react';
import Button from './Button';
import "@testing-library/jest-dom";

// Helper function to check button classes
const checkButtonClasses = (button, expectedClasses) => {
    expectedClasses.forEach(className => {
        expect(button).toHaveClass(className);
    });
};

describe('Button Component', () => {

    test('renders correctly with primary variation', () => {
        render(<Button primary>Primary Button</Button>);
        const button = screen.getByText('Primary Button');
        expect(button).toBeInTheDocument();
        checkButtonClasses(button, ['border-blue-500', 'bg-blue-500', 'text-white']);
    });

    test('renders correctly with secondary variation', () => {
        render(<Button secondary>Secondary Button</Button>);
        const button = screen.getByText('Secondary Button');
        expect(button).toBeInTheDocument();
        checkButtonClasses(button, ['border-gray-900', 'bg-gray-900', 'text-white']);
    });

    test('renders correctly with success variation', () => {
        render(<Button success>Success Button</Button>);
        const button = screen.getByText('Success Button');
        expect(button).toBeInTheDocument();
        checkButtonClasses(button, ['border-green-500', 'bg-green-500', 'text-white']);
    });

    test('renders correctly with warning variation', () => {
        render(<Button warning>Warning Button</Button>);
        const button = screen.getByText('Warning Button');
        expect(button).toBeInTheDocument();
        checkButtonClasses(button, ['border-yellow-400', 'bg-yellow-400', 'text-white']);
    });

    test('renders correctly with danger variation', () => {
        render(<Button danger>Danger Button</Button>);
        const button = screen.getByText('Danger Button');
        expect(button).toBeInTheDocument();
        checkButtonClasses(button, ['border-red-500', 'bg-red-500', 'text-white']);
    });

    test('applies outline class correctly', () => {
        render(<Button primary outline>Primary Outline Button</Button>);
        const button = screen.getByText('Primary Outline Button');
        expect(button).toBeInTheDocument();
        checkButtonClasses(button, ['border-blue-500', 'bg-white', 'text-blue-500']);
    });

    test('renders correctly with rounded class', () => {
        render(<Button primary rounded>Rounded Primary Button</Button>);
        const button = screen.getByText('Rounded Primary Button');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('rounded-full');
    });

    test('throws error when multiple variations are passed', () => {
        // Mock console.error to suppress the expected error log during test
        const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        const buttonProps = { primary: true, success: true };
        const error = Button.prototype.checkVariationValue(buttonProps);

        expect(error).toEqual(
            new Error('You can only have one of primary, secondary, success, warning, danger')
        );

        consoleErrorSpy.mockRestore(); // Restore console.error after test
    });
});
