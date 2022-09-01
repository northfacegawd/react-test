import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("counter test", () => {
  it("the counter starts at 0", () => {
    // App 컴포넌트를 렌더링
    render(<App />);
    // screen object를 이용해서 원하는 엘리먼트에 접근 (접근할 때 ID로 접근)
    const counterElement = screen.getByTestId("counter");
    // id가 counter인 엘리먼트의 텍스트가 0인지 테스트
    expect(counterElement).toHaveTextContent(0);
  });

  it("minus button has correct text", () => {
    render(<App />);
    const minusElement = screen.getByTestId("minus-button");
    expect(minusElement).toHaveTextContent("-");
  });

  it("plus button has correct text", () => {
    render(<App />);
    const plusElement = screen.getByTestId("plus-button");
    expect(plusElement).toHaveTextContent("+");
  });

  it("When the + button is pressed, the counter changes to 1", () => {
    render(<App />);
    const plusElement = screen.getByTestId("plus-button");
    fireEvent.click(plusElement);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(1);
  });

  it("When the - button is pressed, the counter changes to -1", () => {
    render(<App />);
    const minusElement = screen.getByTestId("minus-button");
    fireEvent.click(minusElement);
    const counterElement = screen.getByTestId("counter");
    expect(counterElement).toHaveTextContent(-1);
  });

  it("on/off button has blue color", () => {
    render(<App />);
    const buttonElement = screen.getByTestId("on/off-button");
    expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
  });

  it("Prevent the -,+ button from being pressed when the on/off button is clicked", () => {
    render(<App />);
    const onOffElement = screen.getByTestId("on/off-button");
    fireEvent.click(onOffElement);
    const plusElement = screen.getByTestId("plus-button");
    const minusElement = screen.getByTestId("minus-button");
    expect(plusElement).toBeDisabled();
    expect(minusElement).toBeDisabled();
  });
});
