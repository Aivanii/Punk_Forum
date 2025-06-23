// jest-setup.ts
import '@testing-library/jest-dom';

// Мокаем глобальный fetch
global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  json: () => Promise.resolve({}),
} as Response));