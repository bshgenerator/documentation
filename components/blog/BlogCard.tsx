import React from 'react';
import styles from './BlogCard.module.css';

interface BlogCardProps {
    image: string;
    href: string;
    title: string;
    description?: string;
    date?: string;
    author?: React.ReactNode;
}

export const BlogCard: React.FC<BlogCardProps> = ({
    image,
    href,
    title,
    description,
    date,
    author
}) => {
    return (
        <a
            href={href}
            className={`nextra-card ${styles.blogCard}`}
        >
            <div className={styles.imageContainer}>
                <img
                    src={image}
                    alt={title}
                    loading="lazy"
                    className={styles.image}
                    decoding="async"
                />
                <div className={styles.imageOverlay} />
            </div>
            <div className={styles.content}>
                {(date || author) && (
                    <div className={styles.meta}>
                        {date && (
                            <span className={styles.date}>
                                {date}
                            </span>
                        )}
                        {author && (
                            <div className={styles.author}>
                                {author}
                            </div>
                        )}
                    </div>
                )}
                <h3 className={styles.title}>
                    {title}
                </h3>
                {description && (
                    <p className={styles.description}>
                        {description}
                    </p>
                )}
            </div>
        </a>
    )
}
