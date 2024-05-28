import TestButton from '@/shared/components/test-button';

export default function Home() {
  return (
    <main className="main-container">
      <h1>tdd-storybook-example</h1>
      <div className="button-wrap">
        <h2>button components</h2>
        <TestButton label="test button" intent="primary" />
        <TestButton label="test button" intent="secondary" />
        <TestButton label="test button" intent="destructive" />
        <TestButton label="test button" intent="secondary" disabled={true} />
      </div>
    </main>
  );
}
