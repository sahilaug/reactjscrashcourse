import { renderHook, act } from '@testing-library/react-hooks';
import useTheme from '../hooks/useTheme';

test('it should toggle theme state', () => {
    const { result } = renderHook(() => useTheme());
    const [theme, toggleTheme] = result.current;
    expect(theme).toBe('dark')
    act(() => {
        toggleTheme();
    });
    const [newTheme] = result.current;
    expect(newTheme).toBe('light');
})