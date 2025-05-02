import {cn} from '@/lib/utils';

describe('cn utility function', () => {
  it('combines class names correctly', () => {
    expect(cn('class1', 'class2')).toBe('class1 class2');
  });

  it('handles conditional class names', () => {
    const condition = true;
    expect(cn('class1', condition && 'class2')).toBe('class1 class2');
    expect(cn('class1', !condition && 'class2')).toBe('class1');
  });

  it('handles array of class names', () => {
    expect(cn('class1', ['class2', 'class3'])).toBe('class1 class2 class3');
  });

  it('handles object of class names', () => {
    expect(cn('class1', {class2: true, class3: false})).toBe('class1 class2');
  });

  it('merges tailwind classes correctly', () => {
    expect(cn('p-4 bg-red-500', 'p-8')).toBe('bg-red-500 p-8');
  });

  it('handles undefined and null values', () => {
    expect(cn('class1', undefined, null, 'class2')).toBe('class1 class2');
  });

  it('handles empty strings', () => {
    expect(cn('class1', '', 'class2')).toBe('class1 class2');
  });
});