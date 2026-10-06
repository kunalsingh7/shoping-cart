import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Home from "./Home";
import { MemoryRouter } from "react-router-dom";

describe("Home", () => {
    it("shows the welcome message", () => {
        render(
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        );

        expect(
            screen.getByRole("heading", { name: "Welcome to My Shop" })
        ).toBeInTheDocument();
    });
});