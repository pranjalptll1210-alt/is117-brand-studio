import { test, expect } from "@playwright/test";

for (const width of [1440, 375]) {
  test(`three concept views switch by keyboard without losing size or bag at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    await page.getByRole("radio", { name: "M", exact: true }).check();
    await page
      .getByRole("button", { name: "Add to demo bag", exact: true })
      .click();
    const image = page.locator("#gallery-image");
    for (const [view, key] of [
      ["Back", "Enter"],
      ["Angled", "Space"],
      ["Front", "Enter"],
    ]) {
      const choice = page.getByRole("button", { name: new RegExp(view) });
      await choice.focus();
      await page.keyboard.press(key);
      await expect(choice).toHaveAttribute("aria-pressed", "true");
      await expect(
        page.locator('.gallery-choice[aria-pressed="true"]'),
      ).toHaveCount(1);
      await expect(image).toHaveAttribute(
        "src",
        `assets/concepts/${view.toLowerCase()}.jpg`,
      );
      await expect(image).toHaveAttribute(
        "alt",
        new RegExp(`AI-generated ${view.toLowerCase()} concept`),
      );
      await expect(image).toHaveJSProperty("complete", true);
      expect(
        await image.evaluate((element) => element.naturalWidth),
      ).toBeGreaterThan(0);
      await expect(page.locator("#gallery-caption")).toContainText(
        `${view} / AI-generated concept mockup`,
      );
      await expect(page.locator("#bag-count")).toHaveText("1");
      await expect(
        page.getByRole("radio", { name: "M", exact: true }),
      ).toBeChecked();
    }
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBeTruthy();
  });
}

test("without JavaScript the front concept and page sections remain visible without inactive controls", async ({
  browser,
}) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  try {
    const page = await context.newPage();
    await page.goto("http://127.0.0.1:5174/");
    await expect(page.locator("#gallery-image")).toBeVisible();
    await expect(page.locator(".gallery-controls")).toBeHidden();
    await expect(page.locator("#gallery-caption")).toContainText(
      "AI-generated concept mockup",
    );
    await expect(page.locator("#story")).toBeVisible();
    await expect(page.locator(".editorial-section")).toBeVisible();
  } finally {
    await context.close();
  }
});

test("reduced motion keeps the approved story readable without a reveal animation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const story = page.locator("#story");
  await story.scrollIntoViewIfNeeded();
  await expect(story).toBeVisible();
  expect(
    await story.evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("none");
  await expect(story).toContainText(
    "OFFHOUR takes its cue from late nights and independent expression.",
  );
});
