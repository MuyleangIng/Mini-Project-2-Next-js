import React from 'react';

function LoadingSubmit(props) {
    return (
        <div>

            <div role="status">
                <svg aria-hidden="true"
                     className="w-5 h-5 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-50   "
                     viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                </svg>
                <span className="sr-only">Loading...</span>
            </div>

        </div>
    );
}

export default LoadingSubmit;