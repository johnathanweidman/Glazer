
import { test, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Page from '../routes/+page.svelte';

test('save and load state', async () => {
  const { getByText, component } = render(Page);

  const saveButton = getByText('Save');
  const loadButton = getByText('Load');

  // Mock the file download and upload
  const mockBlob = new Blob([JSON.stringify({
    base_color: ['#ffffff', 1, 0],
    colors: [],
    use_gray: false,
    lithoSettings: {
      litophaneWidth: 120,
      thickness: 3,
      minThickness: 0.5,
      lithophaneMode: true
    },
    layerHeight: 0.1,
    currentFile: 'test.png'
  })], { type: 'application/json' });

  const mockFile = new File([mockBlob], 'glazer-state.json', { type: 'application/json' });

  // Mock the createObjectURL and revokeObjectURL
  global.URL.createObjectURL = vi.fn(() => 'mock-url');
  global.URL.revokeObjectURL = vi.fn();

  // Mock the file input
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const state = JSON.parse(e.target.result);
      component.$set(state);
    };
    reader.readAsText(file);
  };

  // Spy on the click event
  const clickSpy = vi.spyOn(input, 'click');

  // Replace the original input with the mocked one
  const originalCreateElement = document.createElement;
  document.createElement = (tag) => {
    if (tag === 'input') {
      return input;
    }
    return originalCreateElement(tag);
  };

  await fireEvent.click(saveButton);

  // Check if the download link was created
  expect(global.URL.createObjectURL).toHaveBeenCalledWith(expect.any(Blob));

  // Simulate file selection
  Object.defineProperty(input, 'files', { value: [mockFile] });
  await fireEvent.change(input);

  // Check if the state is loaded
  expect(component.base_color).toEqual(['#ffffff', 1, 0]);
  expect(component.colors).toEqual([]);
  expect(component.use_gray).toBe(false);
  expect(component.lithoSettings).toEqual({
    litophaneWidth: 120,
    thickness: 3,
    minThickness: 0.5,
    lithophaneMode: true
  });
  expect(component.layerHeight).toBe(0.1);
  expect(component.currentFile).toBe('test.png');
});
