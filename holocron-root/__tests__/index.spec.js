import MainExport from '../src';
import ModuleContainer from '../src/components/HolocronRoot';

describe('index', () => {
  it('should export the top component', () => {
    expect(MainExport).toBe(ModuleContainer);
  });
});
