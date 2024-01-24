import { basename, extname } from 'node:path';

describe('basename', () => {
  const filename = '/foo/bar/baz/asdf/quux.html';

  test('basename with suffix', () => {
    const b = basename(filename);
    expect(b).toBe('quux.html');
  });

  test('basename without suffix', () => {
    const b = basename(filename, '.html')
    expect(b).toBe('quux');
  });
});

describe('extension name', () => {
  test('should get .html', () => {
    const ext = extname('index.html');
    expect(ext).toEqual('.html');
  });

  test('should get .md', () => {
    const ext = extname('index.coffee.md');
    expect(ext).toEqual('.md');
  });

  test('should get .', () => {
    const ext = extname('index.');
    expect(ext).toEqual('.');
  });

  test('should return empty', () => {
    const ext = extname('index');
    expect(ext).toEqual('');
  })
});
