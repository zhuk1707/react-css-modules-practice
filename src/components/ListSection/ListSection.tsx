import styles from './ListSection.module.css'

export const ListSection = () => {
  return (
    <section className={styles.listSectionWrapper}>
      <div className="container">
        <div className={styles.listSection}>

          <div className={styles.listSetting}>
            <button className="sortBtn">Sort</button>
            <button className="filterBtn">Filter</button>
          </div>

          <div className={styles.list}>

            <div className={styles.listItem}>

              <div className={styles.number}>42</div>

              <div className={styles.titleAndSubtitle}>
                <div className={styles.title}>
                  Lorem ipsum dolor sit amet.
                </div>
                <div className={styles.subtitle}>
                  Fiw corso del bola soprano
                </div>
              </div>

              <div className={styles.tags}>
                <div className={styles.tag}>
                  #a332fe
                </div>
                <div className={styles.tag}>
                  #f8814s
                </div>

              </div>

              <div className={styles.duration}>
                1:40:20
              </div>

              <div className={styles.optionBtns}>
                <button className={styles.btn}>Get</button>
                <button className={styles.btn}>Bring</button>
              </div>
            </div>

            <div className={styles.listItem}>

              <div className={styles.number}>52</div>

              <div className={styles.titleAndSubtitle}>
                <div className={styles.title}>
                  Lorem ipsum dolor sit amet.
                </div>
                <div className={styles.subtitle}>
                  Fiw corso del bola soprano
                </div>
              </div>

              <div className={styles.tags}>
                <div className={styles.tag}>
                  #a332fe
                </div>
                <div className={styles.tag}>
                  #f8814s
                </div>

              </div>

              <div className={styles.duration}>
                1:40:20
              </div>

              <div className={styles.optionBtns}>
                <button className={styles.btn}>Get</button>
                <button className={styles.btn}>Bring</button>
              </div>
            </div>

          </div>


        </div>
      </div>
    </section>
  )

};