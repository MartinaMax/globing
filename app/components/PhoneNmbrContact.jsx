'use client';

import styles from '@/styles/styles.module.scss';

const PhoneNmbrContact = ({title}) => {
    return (
        <>
            <h2>{title}</h2>
            <div className={styles.containerPhone}>
                <div className={styles.containerPhone_margin} >
                    <h2>Do you need to draw up a geometric plan or mark the boundary of the land?</h2>
                    <div><h2>Ing. Vladimír Kochan</h2><h2 className={styles.h2_blue}>0905273309</h2></div>
                    <div><h2>Ing. Juraj Kubičár</h2><h2 className={styles.h2_blue}>0905273310</h2></div>
                </div>
                <div className={styles.containerPhone_margin}>
                    <h2>Do you need to mark out a building, geodesic and altimetry, or other works in the field of engineering surveying?</h2>
                    <div><h2>Ing. Vlastimil Maxim</h2><h2 className={styles.h2_blue}>0905273312</h2></div>
                </div>
                <div className={styles.containerPhone_margin}>
                    <h2>Do you need a land improvement project?</h2>
                    <div><h2>Ing. Juraj Kubičár</h2><h2 className={styles.h2_blue}>0905273310</h2></div>
                </div>
            </div>
        </>
    );
};

export default PhoneNmbrContact;