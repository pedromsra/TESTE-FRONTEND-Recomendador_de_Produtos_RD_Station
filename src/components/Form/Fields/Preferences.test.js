import { fireEvent, render, screen } from "@testing-library/react";
import Preferences from "./Preferences";

describe('Preferences Field Component', () => {
  const preferencesMock = ['Preference A', 'Preference B', 'Preference C'];
  const onPreferenceChangeMock = jest.fn();

  beforeEach(() => {
    onPreferenceChangeMock.mockClear();
  });

  it('Mostrar placeholder quando loading for true', () => {
    render(<Preferences loading={true} preferences={preferencesMock} onPreferenceChange={onPreferenceChangeMock} />);

    expect(screen.getByTestId('options-list-placeholder')).toBeInTheDocument();
  })
  it('Renderizar lista de seleção quando loading for false', () => {
    render(<Preferences loading={false} preferences={preferencesMock} onPreferenceChange={onPreferenceChangeMock} />);

    expect(screen.getByTestId('preferences-list')).toBeInTheDocument();
  })
  it('Chamar onPreferenceChange ao selecionar/desmarcar uma funcionalidade', () => {
    render(<Preferences loading={false} preferences={preferencesMock} onPreferenceChange={onPreferenceChangeMock} />);

    const firstCheckbox = screen.getByLabelText('Preference A');

    fireEvent.click(firstCheckbox);

    expect(onPreferenceChangeMock).toHaveBeenCalledWith(['Preference A']);

    const secondCheckbox = screen.getByLabelText('Preference B');

    fireEvent.click(secondCheckbox);

    expect(onPreferenceChangeMock).toHaveBeenCalledWith(['Preference A', 'Preference B']);

    fireEvent.click(firstCheckbox);

    expect(onPreferenceChangeMock).toHaveBeenCalledWith(['Preference B']);
  })
})
