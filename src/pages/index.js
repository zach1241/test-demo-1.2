import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';

import styles from 'styles/pages/Home.module.scss';

export default function Home() {
  const tasks = [
    {
      title: 'Finish website redesign',
      description: 'Complete the homepage layout and responsive styling.',
      status: 'In Progress',
    },
    {
      title: 'SEO audit',
      description: 'Review metadata, headings and internal links.',
      status: 'Completed',
    },
    {
      title: 'Fix contact form',
      description: 'Investigate the form submission issue.',
      status: 'In Progress',
    },
    {
      title: 'Create service pages',
      description: 'Build the remaining service page templates.',
      status: 'Pending',
    },
  ];

  return (
    <Layout>
      <main className={styles.home}>
        <div className={styles.dashboard}>

          <section className={styles.hero}>
            <div className={styles.heroContent}>
              <h1>Good morning 👋</h1>
              <p>Here&apos;s what&apos;s happening with your tasks.</p>
            </div>

            <button className={styles.primaryButton}>
              + New Task
            </button>
          </section>

          <section className={styles.stats}>
            <div className={styles.statCard}>
              <h3>Total Tasks</h3>
              <strong>24</strong>
            </div>

            <div className={styles.statCard}>
              <h3>In Progress</h3>
              <strong>8</strong>
            </div>

            <div className={styles.statCard}>
              <h3>Completed</h3>
              <strong>14</strong>
            </div>

            <div className={styles.statCard}>
              <h3>Pending</h3>
              <strong>2</strong>
            </div>
          </section>

          <section className={styles.content}>

            <div className={styles.card}>
              <h2>Recent Tasks</h2>

              {tasks.map((task) => (
                <div className={styles.task} key={task.title}>
                  <div className={styles.taskInfo}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                  </div>

                  <span className={styles.status}>
                    {task.status}
                  </span>
                </div>
              ))}
            </div>

            <div className={styles.card}>
              <h2>Today</h2>

              <p>
                You have 3 tasks scheduled for today.
              </p>

              <p>
                Keep going! You&apos;re 78% through your weekly goals.
              </p>
            </div>

          </section>

        </div>
      </main>
    </Layout>
  );
}
