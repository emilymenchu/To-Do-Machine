import React from "react";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './TaskLoading.css'
;

function TaskLoading ({cards}) {
    return (
        Array(cards).fill(0).map(() => (

            <div className="task-container skeleton-container">
                <SkeletonTheme>
                    <li className='li-task-container'>
                        <div className='skeleton-title'>
                            <Skeleton />
                        </div>
                        <div className='skeleton-info'>
                                <section className="last-row-skeleton">
                                    <span className="span-skeleton">
                                        <Skeleton />
                                    </span>
                                    <span className="span-skeleton">
                                        <Skeleton />
                                    </span>
                                    <span className="span-skeleton">
                                        <Skeleton />
                                    </span>
                                </section>
                        
                                <section className="skeleton-1">
                                    <Skeleton />
                                </section>
                                <section className="skeleton-2">
                                    <Skeleton />
                                </section>
                        </div>
                    </li>
                </SkeletonTheme>
            </div>
        ))

    );
}

export { TaskLoading };