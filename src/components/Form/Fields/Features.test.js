import { fireEvent, render, screen } from "@testing-library/react";
import Features from "./Features";

describe('Features Field Component', () => {
  const featuresMock = ['Feature A', 'Feature B', 'Feature C'];
  const onFeatureChangeMock = jest.fn();

  beforeEach(() => {
    onFeatureChangeMock.mockClear();
  });

  it('Mostrar placeholder quando loading for true', () => {
    render(<Features loading={true} features={featuresMock} onFeatureChange={onFeatureChangeMock} />);

    expect(screen.getByTestId('options-list-placeholder')).toBeInTheDocument();
  })
  it('Renderizar lista de seleção quando loading for false', () => {
    render(<Features loading={false} features={featuresMock} onFeatureChange={onFeatureChangeMock} />);

    expect(screen.getByTestId('features-list')).toBeInTheDocument();
  })
  it('Chamar onFeatureChange ao selecionar/desmarcar uma funcionalidade', () => {
    render(<Features loading={false} features={featuresMock} onFeatureChange={onFeatureChangeMock} />);

    const firstCheckbox = screen.getByLabelText('Feature A');

    fireEvent.click(firstCheckbox);

    expect(onFeatureChangeMock).toHaveBeenCalledWith(['Feature A']);

    const secondCheckbox = screen.getByLabelText('Feature B');

    fireEvent.click(secondCheckbox);

    expect(onFeatureChangeMock).toHaveBeenCalledWith(['Feature A', 'Feature B']);

    fireEvent.click(firstCheckbox);

    expect(onFeatureChangeMock).toHaveBeenCalledWith(['Feature B']);
  })
})
