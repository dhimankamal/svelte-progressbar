# progressbar-svelte

**Description:** A Svelte package for customizable progress bars.

## Installation

You can install this package via npm:

```bash
npm install progressbar-svelte
```


## Usage

To use the `ProgressBar` component, import it into your Svelte file:

```html
<script lang="ts">
  import { ProgressBar } from "progressbar-svelte";
</script>

<ProgressBar color="red" height="0.125em" exitDelay="500" startPosition="0"/>
<slot />
```

## Attributes

### `color`

- **Type:** String
- **Default:** `"red"`
- **Description:** Change the color of the progress bar by providing a valid CSS color value.

### `height`

- **Type:** String
- **Default:** `"0.125em"`
- **Description:** Change the height of the progress bar by providing a valid CSS height value.

### `exitDelay`

- **Type:** Number
- **Default:** `"500"`
- **Description:** To modify the exitDelay duration of the progress bar, provide a valid time duration in milliseconds.

### `startPosition`

- **Type:** Number
- **Default:** `"0"`
- **Description:** Set the initial position of the progress bar along the x-axis as a value between 0 and 1.

## Contributing

Contributions are welcome! Please follow the guidelines in [CONTRIBUTING.md](https://github.com/dhimankamal/svelte-progressbar/blob/main/CONTRIBUTING.md) before submitting pull requests.

## License

This package is licensed under the MIT License. See [LICENSE](https://github.com/dhimankamal/svelte-progressbar/blob/main/LICENSE) for more details.

## Issues

If you encounter any issues with this package, please report them [here](https://github.com/dhimankamal/svelte-progressbar/issues).
