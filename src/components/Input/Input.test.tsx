import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Input } from "./Input";

describe("Input", () => {
  const user = userEvent.setup();

  it("renders correctly", () => {
    const { container } = render(<Input />);
    expect(container).toMatchSnapshot();
  });
  it("renders with input typing", async () => {
    render(<Input />);

    const inputElement = screen.getByRole("textbox");
    await user.type(inputElement, "user typing...");
    expect(inputElement).toHaveValue("user typing...");
  });
  it("renders with error", () => {
    const { container } = render(<Input error="error" />);

    const errorElement = screen.queryByText("error");
    expect(errorElement).toBeInTheDocument();

    expect(container).toMatchInlineSnapshot(`
      <div>
        <label
          class="sc-beySPh fVqJut"
        >
          <label
            class="sc-dmyCSP hbrvZO"
          >
            <input
              class="sc-guDLey hbBLAC error"
            />
          </label>
          <span
            class="sc-hLQSwg hVgQbk"
          >
            error
          </span>
        </label>
      </div>
    `);
  });
});
