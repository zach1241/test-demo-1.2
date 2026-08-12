import Layout from 'components/Layout';
import Header from 'components/Header';
import Section from 'components/Section';
import Container from 'components/Container';

import styles from 'styles/pages/Home.module.scss';

const tasks = [
  {
    title: 'Build homepage',
    status: 'In Progress',
    priority: 'High',
  },
  {
    title: 'Connect WordPress GraphQL',
    status: 'In Progress',
    priority: 'High',
  },
  {
    title: 'Create task cards',
    status: 'Completed',
    priority: 'Medium',
  },
  {
    title: 'Configure WordPress',
    status: 'To Do',
    priority: 'Low',
  },
];

export default function Home() {
  return (
    <Layout>
      <Header>
        <h1>Manage your work.</h1>

        <p className={styles.description}>
          Organize your tasks, track your progress, and keep your projects
          moving forward.
        </p>
      </Header>

      <Section>
        <Container>
          <div className={styles.dashboard}>
            <div className={styles.stats}>
              <div className={styles.statCard}>
                <span>Total Tasks</span>
                <strong>12</strong>
              </div>

              <div className={styles.statCard}>
                <span>In Progress</span>
                <strong>5</strong>
              </div>

              <div className={styles.statCard}>
                <span>Completed</span>
                <strong>7</strong>
              </div>
            </div>

            <div className={styles.tasksHeader}>
              <h2>Recent Tasks</h2>

              <button type="button">+ Add Task</button>
            </div>

            <div className={styles.tasks}>
              {tasks.map((task) => (
                <div className={styles.task} key={task.title}>
                  <div>
                    <h3>{task.title}</h3>
                    <span>{task.priority} Priority</span>
                  </div>

                  <span className={styles.status}>{task.status}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </Layout>
  );
}
