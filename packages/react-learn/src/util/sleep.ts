export function sleep<T>(delay: number, ok?: T, error?: Error): Promise<T | undefined> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(error);
      } else {
        resolve(ok);
      }
    }, delay);
  });
}
