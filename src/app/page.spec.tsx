import Page from './page';
import { afterEach, describe } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';

interface Test {
  test: any;
}

afterEach(() => {
  cleanup();
});

describe('page.tsx', () => {
  it('tdd-storybook-example main page 비기능 테스트 ', () => {
    render(<Page />);

    expect(screen.getByText('tdd-storybook-example')).toBeInTheDocument();
  });
});
