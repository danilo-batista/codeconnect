import { CardPost } from "../../components/CardPost";
import { AppLayout } from "../../layouts/App";
import { posts } from "./data";
import styles from "./feed.module.css";

export const Feed = () => {
    return (
        <AppLayout>
            <main className={styles.grid}>
                {posts.map((post) => (
                    <CardPost key={post.slug} post={post} />
                ))}
            </main>
        </AppLayout>
    );
};
