# Text size slider

**Day 02 - 04.12.2023**


## Description 🎄
Now you will need to create a way to change the text size of our page - a text size slider! Some of our users often complain that the texts are too small and they can't read our information. That's why we want to add a way for them to **increase** the size of the text on our page, but not specifically the rest of the sizes and spacing.

The design is based on `16px`, specifically by using rems for the `font-size`. The user should be able to increase this "base" which will increase the size of the text. The user should be able to change the size from min `16px` to `28px` max and with a step/increment of `2px`.

As an example we can take the hero heading (`h1`) - `font-size` is set to `3rem` which should look like `48px` with the default base size of `16px`. Changing the base to `28px` the heading should be way bigger at `84`px.

To test your component the easiest way would be to use the website from your last challenge [01-challenge](../01-challenge/Readme.md). Add your component in the header and display the current base size.

## Examples

**Min size (16px)**

![Min](./assets/min.png)


**max size (28px)**

![max](./assets/max.png)


## Hints 💡
- Think about using `em`
- Think about using a css variable to control specific sizes
- Think about scss features like `@function` or `@mixin`
