import MainExport from '../src';
import ModuleContainer from '../src/components/GrandChild';

describe('index', () => {
  it('should export the top component', () => {
    expect(MainExport).toBe(ModuleContainer);
  });
});
