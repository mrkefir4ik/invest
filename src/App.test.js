import { render, fireEvent, screen } from '@testing-library/react';
import QuestionList from './QuestionList';



let result = null;

beforeEach(() => {
  result = render(<QuestionList />);
});

test('input is disabled if company is not chosen', () => {
  const inputElement = result.container.querySelector('input');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toBeDisabled();
});

test('input is enabled if company is chosen', () => {
  const companyLogo = result.container.querySelector('img');

  fireEvent(
    companyLogo,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

  const inputElement = result.container.querySelector('input');
  expect(inputElement).toBeInTheDocument();
  expect(inputElement).toBeEnabled();
});


test('log after click on company logo', () => {

  console.log = jest.fn();

  const companyLogo = result.container.querySelector('img');

  fireEvent(
    companyLogo,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

  expect(console.log).toHaveBeenCalledWith('Selected Company')
});

test('log entered amount', () => {

  console.log = jest.fn();

  const inputElement = result.container.querySelector('input');

  fireEvent.change(inputElement, { target: { value: '1000' } })

  expect(console.log).toHaveBeenCalledWith('Entered Dollar Amount: $1000')
});

test('calculations are correct', async () => {

  const companyLogo = result.container.querySelector('img');

  fireEvent(
    companyLogo,
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    }))

  const inputElement = result.container.querySelector('input');

  fireEvent.change(inputElement, { target: { value: '1000' } })

  expect(screen.getByText('$5,560')).toBeInTheDocument()
});