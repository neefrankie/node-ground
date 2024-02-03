import { basename, extname, join, resolve } from 'node:path';

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


describe('revolve', () => {
  test('absolute path', () => {
    const a = '/static';
    const b = '/asserts/index.css';

    const result = resolve(a, b);

    console.log('path resolve: ', result);
  });
});

describe('join', () => {
  test('absolute path', () => {
    const a = '/static';
    const b = '/assets/index.css';

    const result = join(a, b);

    console.log('path joined: ', result);
  });

  test('join cwd()', () => {
    const result = join(process.cwd(), '/assets/index.css');

    console.log('path joined: ', result);
  })
});
