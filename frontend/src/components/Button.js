import classNames from "classnames";
import {twMerge} from "tailwind-merge"

function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...props
                }) {
    const classes = twMerge(
        classNames(
            props.className,
            "item-center flex px-3 py-1.5 border",
            {
                'border-blue-500 bg-blue-500 text-white': primary,
                'border-gray-900 bg-gray-900 text-white': secondary,
                'border-green-500 bg-green-500 text-white': success,
                'border-yellow-400 bg-yellow-400 text-white': warning,
                'border-red-500 bg-red-500 text-white': danger,
                'rounded-full': rounded,
                'bg-white': outline,
                'text-blue-500': outline && primary,
                'text-gray-900': outline && secondary,
                'text-green-500': outline && success,
                'text-yellow-400': outline && warning,
                'text-red-500': outline && danger
            }
        )
    )

    return <button {...props} className={classes}>{children}</button>
}

// TODO: Figure out what this does
Button.prototype = {
    checkVariationValue : ({primary, secondary, success, warning, danger}) =>{
        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger);
        if (count>1){
            return new Error(
                `You can only have one of primary, secondary, success, warning, danger`
            );
        }
    },
}

export default Button;