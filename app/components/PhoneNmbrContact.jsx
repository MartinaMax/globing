'use client';

import styles from '@/styles/styles.module.scss';

const PhoneNmbrContact = ({title}) => {
    return (
        <>
            <h2 className={styles.Title}>{title}</h2>
            <div className={styles.containerPhone}>
                <div>
                    <h2>Potrebujete vyhotoviť geometrický plán alebo vytýčiť hranicu pozemku?</h2>
                    <div><h2>Ing. Vladimír Kochan</h2><h2 className={styles.h2_blue}>0905273309</h2></div>
                    <div><h2>Ing. Juraj Kubičár</h2><h2 className={styles.h2_blue}>0905273310</h2></div>
                </div>
                <div>
                    <h2>Potrebujete vytýčiť stavbu, polohopisné a výškopisné zameranie či iné prace v oblasti inžinierskej geodézie? </h2>
                    <div><h2>Ing. Vlastimil Maxim</h2><h2 className={styles.h2_blue}>0905273312</h2></div>
                </div>
                <div>
                    <h2>Potrebujete vyhotoviť projekt pozemkových úprav?</h2>
                    <div><h2>Ing. Juraj Kubičár</h2><h2 className={styles.h2_blue}>0905273310</h2></div>
                </div>
            </div>
        </>
    );
};

export default PhoneNmbrContact;