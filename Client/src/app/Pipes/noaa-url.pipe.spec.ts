import { NoaaUrlPipe } from './noaa-url.pipe';

describe('NoaaUrlPipe', () => {
  it('create an instance', () => {
    const pipe = new NoaaUrlPipe();
    expect(pipe).toBeTruthy();
  });
});
