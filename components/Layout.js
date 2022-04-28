import styles from '@/styles/Layout.module.css'
import {Modal, Pagination, Table} from "@/components";
export function Layout({children}) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>{children}</main>
            <Table/>
            <Pagination/>
            <Modal/>
        </div>
    );
}