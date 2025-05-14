import { render, screen, within } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Skeleton from './Skeleton'; // 請根據你的檔案結構調整匯入路徑
import React from 'react';
import React from "react";
import classNames from "classnames";
// PropTypes is not needed if you are using TypeScript or just for runtime checks,
// but keeping it here as it was in your original code.
import PropTypes from 'prop-types';

function Skeleton({times, className}) {
    const outerClassName = classNames(
        "relative",
        "overflow-hidden",
        "bg-gray-200",
        "rounded",
        "mb-2.5",
        className
    );
    const innerClassName = classNames(
        "animate-shimmer",
        "absolute", "inset-0",
        "-translate-x-full",
        "bg-gradient-to-r",
        "from-gray-200",
        "via-white" ,
        "to-gray-200"
    );

    const boxes = Array(times).fill(0).map((_, index) => {
        return (
            // Added data-testid="skeleton-box" to the outer div
            <div key={index} className={outerClassName} data-testid="skeleton-box">
                {/* Added data-testid="shimmer-effect" to the inner div */}
                <div className={innerClassName} data-testid="shimmer-effect"/>
            </div>
        );
    });

    // The component returns an array of elements directly.
    // While functional, it might be better practice to wrap them in a fragment or a div
    // if you ever need to apply attributes to the container of the boxes.
    // For these tests, returning the array is fine.
    return boxes;
}

// Prop types definition (optional if using TypeScript)
Skeleton.propTypes = {
    times: PropTypes.number.isRequired,
    className: PropTypes.string, // className is optional
};

export default Skeleton;

describe('Skeleton', () => {
    // Test case 1: Renders correctly with the specified number of skeleton boxes
    it('renders the correct number of skeleton boxes', () => {
        const timesToRender = 5;
        render(<Skeleton times={timesToRender} />);

        // Use data-testid to find all outer skeleton boxes
        const skeletonBoxes = screen.getAllByTestId('skeleton-box');

        // Check if the number of found elements matches the times prop
        expect(skeletonBoxes).toHaveLength(timesToRender);
    });

    // Test case 2: Applies the provided className to the outer div
    it('applies the provided className to the outer div', () => {
        const customClassName = 'w-full h-10';
        render(<Skeleton times={1} className={customClassName} />);

        // Use data-testid to find the single outer skeleton box
        const skeletonBox = screen.getByTestId('skeleton-box');

        // Check if the element exists and has the custom classes
        expect(skeletonBox).toBeInTheDocument();
        expect(skeletonBox).toHaveClass('w-full');
        expect(skeletonBox).toHaveClass('h-10');
        // You can also check for other default classes if needed
        expect(skeletonBox).toHaveClass('relative', 'overflow-hidden', 'bg-gray-200');
    });

    // Test case 3: Renders the shimmering inner div inside each box
    it('renders the shimmering inner div inside each box', () => {
        const timesToRender = 3;
        render(<Skeleton times={timesToRender} />);

        // Find all outer skeleton boxes using data-testid
        const skeletonBoxes = screen.getAllByTestId('skeleton-box');

        // For each outer skeleton box, check if it contains the inner shimmering div
        skeletonBoxes.forEach(box => {
            // Use within to query within the specific box element
            const innerShimmerDiv = within(box).getByTestId('shimmer-effect');
            expect(innerShimmerDiv).toBeInTheDocument();

            // Optionally, check for some of the inner div's classes
            expect(innerShimmerDiv).toHaveClass('animate-shimmer', 'absolute', 'inset-0');
        });
    });
});
